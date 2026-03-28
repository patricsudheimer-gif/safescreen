export default function ImpressumPage() {
  return (
    <div className="max-w-4xl mx-auto section-padding">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

      <div className="card prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900">Angaben gemäß § 5 DDG</h2>
          <p className="text-gray-700">
            [Ihr vollständiger Name]<br />
            [Straße und Hausnummer]<br />
            [PLZ und Ort]<br />
            Deutschland
          </p>
          <p className="text-gray-700">
            <strong>E-Mail:</strong> [ihre@email.de]<br />
            <strong>Telefon:</strong> [Ihre Telefonnummer]
          </p>
          <p className="text-sm text-gray-500">
            Hinweis: Bitte ergänzen Sie hier Ihre vollständigen Kontaktdaten.
            Ein Impressum ist nach deutschem Recht Pflicht.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900">Haftungsausschluss</h2>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">Haftung für Inhalte</h3>
          <p className="text-gray-700">
            Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Haftung für Links</h3>
          <p className="text-gray-700">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
            oder Betreiber verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section id="datenschutz">
          <h2 className="text-xl font-bold text-gray-900">Datenschutzerklärung</h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">1. Verantwortlicher</h3>
          <p className="text-gray-700">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist der im Impressum
            genannte Betreiber.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">2. Erhebung und Speicherung personenbezogener Daten</h3>
          <p className="text-gray-700">
            Bei der Registrierung erheben wir folgende Daten: Name, E-Mail-Adresse.
            Diese Daten werden ausschließlich zur Bereitstellung unseres Dienstes verwendet.
            Die Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">3. Zahlungsabwicklung</h3>
          <p className="text-gray-700">
            Die Zahlungsabwicklung erfolgt über Stripe und/oder PayPal.
            Bei der Bezahlung werden Ihre Zahlungsdaten direkt an den jeweiligen
            Zahlungsdienstleister übermittelt. Wir speichern keine Kreditkartendaten.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">4. Cookies</h3>
          <p className="text-gray-700">
            Wir verwenden nur technisch notwendige Cookies für die Anmeldefunktion.
            Es werden keine Tracking-Cookies oder Marketing-Cookies eingesetzt.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">5. Ihre Rechte</h3>
          <p className="text-gray-700">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierfür an die im
            Impressum genannte E-Mail-Adresse.
          </p>
        </section>

        <section id="agb">
          <h2 className="text-xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen</h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">1. Geltungsbereich</h3>
          <p className="text-gray-700">
            Diese AGB gelten für alle über SafeScreen abgeschlossenen Verträge zwischen
            dem Betreiber und dem Kunden.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">2. Vertragsgegenstand</h3>
          <p className="text-gray-700">
            SafeScreen bietet digitale Inhalte zum Thema Kinderschutz im Internet an.
            Der Zugang erfolgt online und/oder als PDF-Download, je nach gewähltem Tarif.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">3. Preise und Zahlung</h3>
          <p className="text-gray-700">
            Alle Preise sind Endpreise und verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
            Die Zahlung erfolgt über die angebotenen Zahlungsmittel (Stripe, PayPal).
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">4. Abonnement und Kündigung</h3>
          <p className="text-gray-700">
            Das Update-Abo verlängert sich automatisch um ein Jahr, sofern es nicht bis
            spätestens 30 Tage vor Ablauf gekündigt wird. Die Kündigung kann per E-Mail erfolgen.
          </p>
        </section>

        <section id="widerruf">
          <h2 className="text-xl font-bold text-gray-900">Widerrufsbelehrung</h2>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Widerrufsrecht</h3>
          <p className="text-gray-700">
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen
            Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag
            des Vertragsschlusses.
          </p>
          <p className="text-gray-700">
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen
            Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren
            Entschluss, diesen Vertrag zu widerrufen, informieren.
          </p>
          <p className="text-gray-700">
            Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über
            die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Folgen des Widerrufs</h3>
          <p className="text-gray-700">
            Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir
            von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen
            ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses
            Vertrags bei uns eingegangen ist.
          </p>
        </section>
      </div>
    </div>
  )
}
