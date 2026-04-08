import React from 'react';

export function Impressum() {
  return (
    <div className="bg-ivory-50 pt-12 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-forest-900">Impressum</h1>
        <div className="prose prose-forest max-w-none text-forest-800/80">
          <p>Angaben gemäß § 5 TMG</p>
          <p>
            <strong>Müller Finanzberatung</strong><br />
            Max Müller<br />
            Musterstraße 123<br />
            10115 Berlin
          </p>
          <p>
            <strong>Kontakt</strong><br />
            Telefon: 0800 123 456<br />
            E-Mail: hallo@mueller-finanz.de
          </p>
          <p>
            <strong>Aufsichtsbehörde</strong><br />
            IHK Berlin<br />
            Fasanenstraße 85<br />
            10623 Berlin
          </p>
          <p>
            <strong>Berufsbezeichnung und berufsrechtliche Regelungen</strong><br />
            Finanzanlagenvermittler nach § 34f Abs. 1 GewO<br />
            Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 GewO<br />
            Zuständige Kammer: IHK Berlin<br />
            Verliehen in: Bundesrepublik Deutschland
          </p>
          <p>
            <em>Hinweis: Dies ist ein Platzhalter-Impressum für die Demo-Website.</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Datenschutz() {
  return (
    <div className="bg-ivory-50 pt-12 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-forest-900">Datenschutz</h1>
        <div className="prose prose-forest max-w-none text-forest-800/80">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          
          <h2>2. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          
          <p>
            <em>Hinweis: Dies ist eine Platzhalter-Datenschutzerklärung für die Demo-Website.</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export function Erstinformation() {
  return (
    <div className="bg-ivory-50 pt-12 pb-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-forest-900">Erstinformation</h1>
        <div className="prose prose-forest max-w-none text-forest-800/80">
          <p>Kundeninformation gemäß § 15 VersVermV und § 12 FinVermV</p>
          
          <h3>1. Name und Anschrift</h3>
          <p>
            Max Müller<br />
            Musterstraße 123<br />
            10115 Berlin<br />
            Telefon: 0800 123 456<br />
            E-Mail: hallo@mueller-finanz.de
          </p>

          <h3>2. Status</h3>
          <p>Gemeldet bei der IHK Berlin als Versicherungsmakler mit Erlaubnis nach § 34d Abs. 1 der Gewerbeordnung (GewO) und als Finanzanlagenvermittler nach § 34f Abs. 1 GewO.</p>

          <h3>3. Gemeinsame Registerstelle</h3>
          <p>
            Deutscher Industrie- und Handelskammertag (DIHK) e.V.<br />
            Breite Straße 29, 10178 Berlin<br />
            Telefon: 0180 600 58 50 (Festnetzpreis 0,20 €/Anruf; Mobilfunkpreise maximal 0,60 €/Anruf)<br />
            Registerabruf: www.vermittlerregister.info
          </p>

          <p>
            <em>Hinweis: Dies ist eine Platzhalter-Erstinformation für die Demo-Website.</em>
          </p>
        </div>
      </div>
    </div>
  );
}
