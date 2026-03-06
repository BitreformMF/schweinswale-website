import { ChevronRight } from 'lucide-react';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function Datenschutz() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[55vh] bg-blue-900">
        <div
          className="hidden md:block absolute top-0 left-0 w-full h-[48px] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,50 Q250,100 500,50 T1000,50 L1000,0 Z' fill='%23ffffff' opacity='0.3'/%3E%3Cpath d='M0,0 L0,60 Q250,20 500,60 T1000,60 L1000,0 Z' fill='%23ffffff' opacity='0.6'/%3E%3Cpath d='M0,0 L0,30 Q250,70 500,30 T1000,30 L1000,0 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '800px 100%',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <HeroImage
          src={`https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
          alt="Schweinswal"
          />
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Datenschutzerklärung</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Datenschutzerklärung
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 rounded-xl p-6 mb-8 border-l-4 border-[#00c2b2]">
            <p className="text-slate-700 leading-relaxed font-semibold">
              Datenschutzerklärung gemäß EU-DSGVO, gilt für den Internetauftritt und die Daten-Verwaltung von Schweinswale e.V.
            </p>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            Der Schutz Ihrer persönlichen Daten ist für Schweinswale e.V. von größter Bedeutung und die gesetzlichen Bestimmungen werden gemäß den geltenden Richtlinien eingehalten. Bei der Übermittlung Ihrer Daten bei der Eingabe auf den Spenden- und Patenschaftsformularen wird die Datensicherheit durch das SSL-Verfahren (Secure Socket Layer) nach dem üblichen Stand der Technik gewährleistet und Ihre Daten werden verschlüsselt.
          </p>

          {/* Allgemeine Datenverarbeitung */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Allgemeine Datenverarbeitungsinformationen</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <ul className="list-disc list-inside text-slate-600 leading-relaxed mb-6 space-y-2">
            <li>Wir erheben personenbezogene Daten nur, wenn Sie uns diese von sich aus mitteilen. Darüber hinaus erfolgt keine Erfassung von personenbezogenen Daten.</li>
            <li>Wir verwenden die von Ihnen in unseren Online-Formularen angegebenen Daten ausschließlich für Vereinszwecke, für den von Ihnen beauftragten Spendeneinzug, die Abwicklung von Fördermitgliedschafts- und Patenschaftsvereinbarungen, für Spendenanfragen und um Ihnen weitere Informationen über Schweinswale e.V., die Arbeit des Vereins und über Projekte zukommen zu lassen.</li>
            <li>Der Verwendung Ihrer Daten können Sie jederzeit formlos widersprechen, Sie können sie jederzeit kostenlos abfragen und abändern oder löschen lassen, wenden Sie sich am besten schriftlich per E-Mail an <a href="mailto:info@walschutz.org" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium">info@walschutz.org</a>.</li>
            <li>Eine über die Reichweite der gesetzlichen Erlaubnistatbestände hinausgehende Verarbeitung Ihrer personenbezogenen Daten erfolgt nicht.</li>
            <li>Die Dauer der Datenspeicherung richtet sich nach den festgelegten Lösch- und Sperrfristen und den gesetzlichen Aufbewahrungsfristen.</li>
          </ul>

          {/* Hosting */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Hosting</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Domain-Registrar: IONOS (1&1 IONOS SE)</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unsere Domain wird über IONOS (1&1 IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland) registriert und verwaltet. IONOS verarbeitet dabei DNS-Anfragen und ggf. Domain-bezogene Daten. Weitere Informationen finden Sie in der Datenschutzerklärung von IONOS unter{' '}
            <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://www.ionos.de/terms-gtc/datenschutzerklaerung/
            </a>.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Webhosting: Vercel Inc.</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unsere Website wird über Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Besuch unserer Website werden automatisch Informationen an die Server von Vercel übermittelt. Vercel kann dabei folgende Daten erheben:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mb-4 space-y-1">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Übertragene Datenmenge</li>
            <li>Referrer-URL</li>
            <li>Browser-Typ und -Version</li>
            <li>Betriebssystem</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer zuverlässigen und schnellen Bereitstellung unserer Website. Vercel ist unter dem EU-U.S. Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel unter{' '}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://vercel.com/legal/privacy-policy
            </a>.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Backend-Dienst: Supabase Inc.</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Für die Backend-Infrastruktur (Datenbank, Authentifizierung, Dateispeicherung) nutzen wir Supabase Inc. (970 Toa Payoh North #07-04, Singapore 318992). Supabase verarbeitet Daten, die über unsere Formulare und Funktionen übermittelt werden, einschließlich:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mb-4 space-y-1">
            <li>Formulardaten (z.B. Kontakt-, Sichtungs- und Spendenformulare)</li>
            <li>Hochgeladene Dateien (z.B. Bilder bei Sichtungsmeldungen)</li>
            <li>Technische Daten zur Authentifizierung</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-8">
            Die Nutzung von Supabase erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b und f DSGVO. Die Daten werden auf Servern in der EU gespeichert (sofern verfügbar) bzw. unter Einhaltung angemessener Garantien gemäß Art. 46 DSGVO übertragen. Weitere Informationen finden Sie in der Datenschutzerklärung von Supabase unter{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://supabase.com/privacy
            </a>.
          </p>

          {/* Spenden */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Spenden</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Auf unserer Internetseite bieten wir Nutzern die Möglichkeit, Online-Spenden vorzunehmen. Nimmt ein Nutzer diese Möglichkeit wahr, werden die in das zugehörige Formular eingegebenen Daten an uns übermittelt und gespeichert. Folgende Daten werden dabei erhoben:
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Vollständiger Name (Nachname, Vorname) mit Anrede; Anschrift (Straße, Hausnummer, Ort, Postleitzahl, Land); E-Mail-Adresse; Bankdaten (IBAN); Spendendaten (Spendenempfänger, Betrag, Spenden-/Verwendungszweck, Spendenquittung gewünscht).
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Wird eine Spendenquittung gewünscht, verarbeiten wir die Daten, um eine entsprechende Spendenquittung auszustellen und zuzusenden. Die erhobenen Daten sind zur Aus- und Durchführung des Spendenauftrags erforderlich. Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. b DSGVO.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Ihre E-Mail-Adresse, die wir im Zusammenhang mit einer Spende, Patenschaft oder Fördermitgliedschaft erhalten, nutzen wir, um Sie in Zukunft über die Arbeit des Vereins in Form eines Newsletters zu informieren. Sie können der Verwendung Ihrer E-Mail-Adresse jederzeit widersprechen oder sich über den entsprechenden Link im Newsletter abmelden. Der Widerspruch kann durch eine kurze formlose Mitteilung an{' '}
            <a href="mailto:info@walschutz.org" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium">info@walschutz.org</a> erfolgen.
          </p>

          {/* Kontaktformulare */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Kontaktformulare</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Angaben, die Sie im Kontaktformular angeben, werden für die Bearbeitung gespeichert. Name, Vorname und E-Mail-Adresse sowie das Anliegen werden bis zur vollständigen Bearbeitung gespeichert. Die bei Übermittlung eines Kontaktformulars aufgezeichneten Daten werden nicht für Marketing-Zwecke verwendet.
          </p>

          {/* Medien */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Medien</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Insbesondere Bilder, die im Rahmen einer Sichtungsmeldung hochgeladen werden können, sind freiwillig und werden ohne weitere Prüfung dargestellt. Meta-Angaben wie Positionsangaben werden nicht weiter beachtet, da eine automatische Verknüpfung den Sinn der Sichtungsmeldung darstellt. Auf alle hochgeladenen Dateien kann in der Regel öffentlich zugegriffen werden.
          </p>

          {/* WhatsApp */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">WhatsApp</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Wenn Sie uns mit Ihrer Mobilfunknummer über WhatsApp kontaktieren oder Daten im Rahmen des Schweinswal-Sichtungsprogramms übermitteln, werden die sachbezogenen Daten (Schweinswalsichtungen) auf unserer Online-Karte dargestellt, bei Ihrer Erlaubnis mit Ihrem Nachnamen. Ihre personenbezogenen Daten und Ihre Telefonnummer werden ausschließlich intern gespeichert, um Ihnen zu antworten und Sie gegebenenfalls über Sachthemen zu informieren.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Sie können der Verwendung Ihrer Mobilnummer über WhatsApp für den Erhalt von Antworten oder Informationen jederzeit widersprechen per WhatsApp oder durch eine Mitteilung an{' '}
            <a href="mailto:info@walschutz.org" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium">info@walschutz.org</a>.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8 font-semibold">
            Wir geben Ihre persönlichen Daten nicht an Dritte weiter.
          </p>

          {/* Cookies */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Verwendung von Cookies</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Unsere Webseite verwendet Cookies, um die Benutzerfreundlichkeit zu erhöhen. Cookies sind Textdateien, die über einen Internetbrowser auf einem Computersystem abgelegt und gespeichert werden. In unseren Cookies werden keinerlei personenbezogene Daten gespeichert. Sie können die Verwendung von Cookies dauerhaft verhindern, wenn Sie – wie in der Bedienungsanleitung Ihres Browsers beschrieben – die Speicherung von Cookies deaktivieren. Ferner können bereits gesetzte Cookies jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Ist die Setzung von Cookies in dem genutzten Internetbrowser deaktiviert, sind unter Umständen nicht alle Funktionen unserer Internetseite vollumfänglich nutzbar.
          </p>

          {/* Server-Log-Files */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Server-Log-Files</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Der Provider der Seiten (Vercel) erhebt und speichert automatisch Informationen in so genannten Server-Log-Files, die Ihr Browser automatisch übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-slate-600 leading-relaxed mb-4 space-y-1">
            <li>Browsertyp / Browserversion</li>
            <li>Verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-8">
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
          </p>

          {/* YouTube */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Datenschutzerklärung für die Nutzung von YouTube</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Unsere Webseite nutzt ggf. Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen. Weitere Informationen zum Umgang von Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter{' '}
            <a href="https://www.google.de/intl/de/policies/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://www.google.de/intl/de/policies/privacy
            </a>.
          </p>

          {/* OpenStreetMap */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Kartendienst: OpenStreetMap / Leaflet</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Für die Darstellung der Karte im Schweinswal-Sichtungsformular verwenden wir die Open-Source-JavaScript-Bibliothek Leaflet in Kombination mit Kartenkacheln von OpenStreetMap. Bei der Nutzung der Karte werden Kartenkacheln von den Tile-Servern der OpenStreetMap Foundation (OSMF), St John's Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom, geladen. Dabei wird Ihre IP-Adresse an die Server von OpenStreetMap übermittelt.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Die Nutzung von OpenStreetMap erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der Darstellung einer Karte, um die Erfassung von Schweinswal-Sichtungsorten zu ermöglichen. Die von Ihnen auf der Karte markierten Standortdaten werden zusammen mit Ihrer Sichtungsmeldung übermittelt und gespeichert.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Weitere Informationen finden Sie in der Datenschutzerklärung von OpenStreetMap unter{' '}
            <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://wiki.osmfoundation.org/wiki/Privacy_Policy
            </a>.
          </p>

          {/* EmailJS */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">E-Mail-Versand: EmailJS</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-4">
            Für den Versand von Formulardaten (Kontakt-, Sichtungs-, Fördermitgliedschafts- und Patenschaftsformulare) nutzen wir den Dienst EmailJS (EmailJS LLP, UK). Beim Absenden eines Formulars werden Ihre eingegebenen Daten über die Server von EmailJS an unser E-Mail-Postfach (info@walschutz.org) übermittelt. EmailJS verarbeitet dabei die Formulardaten ausschließlich zum Zweck der E-Mail-Zustellung.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Die Nutzung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer zuverlässigen Kontaktaufnahme). Weitere Informationen finden Sie in der Datenschutzerklärung von EmailJS unter{' '}
            <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://www.emailjs.com/legal/privacy-policy/
            </a>.
          </p>

          {/* Externe Bilder */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Externe Bildinhalte</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Auf unserer Website werden teilweise Bilder von externen Servern eingebunden (u.a. web.archive.org, Supabase Storage). Beim Laden dieser Bilder wird Ihre IP-Adresse an den jeweiligen Server übermittelt. Die Einbindung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer ansprechenden Darstellung unserer Inhalte.
          </p>

          {/* Spendenbank */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Spendenplattform: Spendenbank</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Für Online-Spenden leiten wir Sie auf die externe Spendenplattform Spendenbank (secure.spendenbank.de) weiter. Dort gelten die Datenschutzbestimmungen der Spendenbank. Die auf der Spendenbank eingegebenen Daten (Name, Adresse, Bankdaten, Spendenbetrag) werden direkt von der Spendenbank verarbeitet und an uns zur Spendenabwicklung weitergeleitet. Weitere Informationen finden Sie in der Datenschutzerklärung der Spendenbank auf der jeweiligen Spendenformularseite.
          </p>

          {/* Haftung für Links */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Haftung für Links</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Schweinswale e.V. erklärt hiermit ausdrücklich, dass bei Verlinkungen zum Zeitpunkt der Verlinkung keine illegalen Inhalte auf den verlinkten Seiten zu erkennen waren. Auf die zukünftigen Inhalte, die Gestaltung oder Urheberschaften der verlinkten Seiten hat Schweinswale e.V. keinen Einfluss. Deshalb distanziert sich Schweinswale e.V. ausdrücklich von allen Inhalten aller verknüpften Seiten, die nach der Linksetzung verändert wurden. Für illegale, fehlerhafte oder unvollständige Inhalte oder für Schäden haftet allein der Anbieter der Seite, auf die verlinkt wurde.
          </p>

          {/* Sicherungsmaßnahmen */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Sicherungsmaßnahmen</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Schweinswale e.V. setzt technische und organisatorische Sicherungsmaßnahmen ein, um Ihre Daten zu schützen. Wir möchten Sie jedoch ausdrücklich darauf hinweisen, dass der Schutz Ihrer Daten in offenen Netzen wie dem Internet nach dem derzeitigen Stand der Technik nicht vollständig gewährleistet werden kann.
          </p>

          {/* Betroffenenrechte */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ihre Rechte als betroffene Person</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <p className="text-slate-600 leading-relaxed mb-8">
            Sie können jederzeit Ihre Rechte auf Berichtigung oder Löschung oder auf Einschränkung der Verarbeitung Ihrer Daten oder die Wahrnehmung Ihres Widerspruchsrechts gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit geltend machen. Sie haben ferner das Recht, sich bei Beschwerden an die Datenschutz-Aufsichtsbehörde zu wenden.
          </p>

          <p className="text-slate-600 leading-relaxed mb-8">
            Für Fragen und Anregungen stehen wir Ihnen gerne zur Verfügung!
          </p>

          {/* Angaben zum Verein */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Angaben zum Verein</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Schweinswale e.V.<br />
              Daiserstraße 6<br />
              81371 München<br />
              Tel. 089-7257575<br />
              Mobil: 0176-22208271<br />
              E-Mail: <a href="mailto:info@walschutz.org" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium">info@walschutz.org</a>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Vorstand</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Denise Wenger, Vorsitzende<br />
              Dr. Günther Eichweber, Schriftführer<br />
              Wolf Reuke, Schatzmeister
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Registergericht</h3>
            <p className="text-slate-600">Amtsgericht München VR 206937</p>

            <div className="mt-4">
              <a href="#impressum" className="text-[#00c2b2] hover:text-[#00a89a] font-bold text-sm uppercase tracking-wide flex items-center transition-colors">
                Zum Impressum <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
