#!/usr/bin/env python3
"""Extract chapters from the DOCX XML into individual Markdown files."""

import xml.etree.ElementTree as ET
import os
import json
import re

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

DOCX_XML = r'C:\Users\Patrick\Haushaltsbuch\tmp_guide_unpacked\word\document.xml'
OUTPUT_DIR = r'C:\Users\Patrick\Documents\Claude\Projects\S-SM-G-AI-Guide\safescreen\content\chapters'


def get_text(para):
    texts = []
    for t in para.findall('.//w:t', ns):
        if t.text:
            texts.append(t.text)
    return ''.join(texts)


def get_style(para):
    pPr = para.find('w:pPr', ns)
    if pPr is not None:
        pStyle = pPr.find('w:pStyle', ns)
        if pStyle is not None:
            return pStyle.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val', '')
    return ''


def get_rich_text(para):
    """Get text with inline bold/italic formatting."""
    result = []
    for r in para.findall('.//w:r', ns):
        rPr = r.find('w:rPr', ns)
        text_el = r.find('w:t', ns)
        if text_el is None or not text_el.text:
            continue
        text = text_el.text

        is_bold = False
        is_italic = False
        if rPr is not None:
            if rPr.find('w:b', ns) is not None:
                is_bold = True
            if rPr.find('w:i', ns) is not None:
                is_italic = True

        if is_bold and is_italic:
            result.append(f'***{text}***')
        elif is_bold:
            result.append(f'**{text}**')
        elif is_italic:
            result.append(f'*{text}*')
        else:
            result.append(text)
    return ''.join(result)


def parse_document():
    tree = ET.parse(DOCX_XML)
    root = tree.getroot()
    body = root.find('.//w:body', ns)

    parsed = []
    for para in body.findall('.//w:p', ns):
        style = get_style(para)
        text = get_text(para).strip()
        rich = get_rich_text(para)
        if not text:
            parsed.append({'style': style, 'text': '', 'rich': '', 'type': 'empty'})
            continue

        if style == 'Heading1':
            parsed.append({'style': style, 'text': text, 'rich': rich, 'type': 'h1'})
        elif style == 'Heading2':
            parsed.append({'style': style, 'text': text, 'rich': rich, 'type': 'h2'})
        elif style == 'Heading3':
            parsed.append({'style': style, 'text': text, 'rich': rich, 'type': 'h3'})
        elif style == 'ListBullet':
            parsed.append({'style': style, 'text': text, 'rich': rich, 'type': 'bullet'})
        elif style == 'ListNumber':
            parsed.append({'style': style, 'text': text, 'rich': rich, 'type': 'number'})
        else:
            parsed.append({'style': style, 'text': text, 'rich': rich, 'type': 'para'})

    return parsed


def split_into_chapters(parsed):
    # Map chapter heading prefixes to slugs
    chapter_map = [
        ('1. Grundlagen', 'grundlagen', 1),
        ('2. Familien-Regeln', 'familien-regeln', 2),
        ('3. Altersstufe 6', 'alter-6-9', 3),
        ('4. Altersstufe 10', 'alter-10-12', 4),
        ('5. Altersstufe 13', 'alter-13-15', 5),
        ('6. Altersstufe 16', 'alter-16-17', 6),
        ('7. Technischer Teil', 'geraete', 7),
        ('8. Social Media', 'plattformen', 8),
        ('9. Konflikte', 'krisen', 9),
        ('10. Bausteine', 'vorlagen', 10),
        ('11. KI', 'ki', 11),
        ('12. Aktualisierung', 'aktualisierung', 12),
    ]

    chapters = {}
    current_slug = '_preamble'
    current_title = 'Preamble'
    current_num = 0
    current_content = []
    skip_toc = False

    for item in parsed:
        text = item['text']

        # Skip TOC section
        if item['type'] in ('h1', 'h2') and text == 'Inhaltsverzeichnis':
            if current_content:
                chapters[current_slug] = {
                    'title': current_title,
                    'number': current_num,
                    'content': current_content[:]
                }
            current_slug = '_toc'
            current_title = 'TOC'
            current_num = 0
            current_content = []
            skip_toc = True
            continue

        # Check if this heading starts a numbered chapter
        is_chapter_start = False
        if item['type'] in ('h1', 'h2') and text:
            for prefix, slug, num in chapter_map:
                if text.startswith(prefix):
                    if skip_toc:
                        skip_toc = False
                    if current_content or current_slug != '_preamble':
                        chapters[current_slug] = {
                            'title': current_title,
                            'number': current_num,
                            'content': current_content[:]
                        }
                    current_slug = slug
                    current_title = text
                    current_num = num
                    current_content = []
                    is_chapter_start = True
                    break

            if not is_chapter_start:
                # Check for special non-numbered sections
                special = {
                    'Vorwort': ('vorwort', 0),
                    'Schlusswort': ('schlusswort', 13),
                    'Anhang': ('anhang', 14),
                    'Impressum': ('impressum', 15),
                }
                for prefix, (slug, num) in special.items():
                    if text.startswith(prefix):
                        chapters[current_slug] = {
                            'title': current_title,
                            'number': current_num,
                            'content': current_content[:]
                        }
                        current_slug = slug
                        current_title = text
                        current_num = num
                        current_content = []
                        is_chapter_start = True
                        break

            if not is_chapter_start and item['type'] == 'h2':
                # Sub-sections like 9.6, 9.7, 11.3 or "Rechtlicher Kompass" within a chapter
                m = re.match(r'^(\d+)\.(\d+)', text)
                if m:
                    # Sub-section of current chapter - treat as h3
                    current_content.append({**item, 'type': 'h3'})
                    continue
                # Rechtlicher Kompass sections - keep in current chapter or start new
                if 'Rechtlicher Kompass' in text:
                    # Start a new special section
                    chapters[current_slug] = {
                        'title': current_title,
                        'number': current_num,
                        'content': current_content[:]
                    }
                    current_slug = 'rechtlicher-kompass'
                    current_title = text
                    current_num = 14
                    current_content = []
                    is_chapter_start = True

        if skip_toc:
            continue

        if not is_chapter_start:
            current_content.append(item)

    # Save last chapter
    if current_content:
        chapters[current_slug] = {
            'title': current_title,
            'number': current_num,
            'content': current_content[:]
        }

    return chapters


def to_markdown(items):
    lines = []
    prev_type = None
    number_idx = 0

    for item in items:
        t = item['type']
        rich = item.get('rich', item['text'])
        text = item['text']

        if t == 'empty':
            if prev_type not in ('empty', None):
                lines.append('')
            prev_type = t
            continue

        if t == 'h1':
            lines.append(f'# {text}')
            lines.append('')
        elif t == 'h2':
            lines.append(f'## {text}')
            lines.append('')
        elif t == 'h3':
            lines.append(f'### {text}')
            lines.append('')
        elif t == 'bullet':
            lines.append(f'- {rich}')
        elif t == 'number':
            number_idx += 1
            lines.append(f'{number_idx}. {rich}')
        elif t == 'para':
            lines.append(rich)
            lines.append('')

        if t != 'number':
            number_idx = 0

        prev_type = t

    result = '\n'.join(lines)
    result = re.sub(r'\n{3,}', '\n\n', result)
    return result.strip()


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    parsed = parse_document()
    chapters = split_into_chapters(parsed)

    summary = {}
    for slug, data in chapters.items():
        if slug.startswith('_'):
            continue

        md = to_markdown(data['content'])
        filepath = os.path.join(OUTPUT_DIR, f'{slug}.md')
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(md)

        summary[slug] = {
            'title': data['title'],
            'number': data['number'],
            'lines': len(md.split('\n')),
            'chars': len(md)
        }
        print(f"  {slug}.md - {data['title']} ({len(md)} chars)")

    print(f"\n{len(summary)} Kapitel exportiert nach {OUTPUT_DIR}")

    # Write metadata JSON for seed script
    meta_path = os.path.join(OUTPUT_DIR, '_meta.json')
    with open(meta_path, 'w', encoding='utf-8') as f:
        json.dump(summary, f, indent=2, ensure_ascii=False)
    print(f"Metadaten: {meta_path}")


if __name__ == '__main__':
    main()
