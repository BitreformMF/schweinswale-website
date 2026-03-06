import { ChevronRight } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function Impressum() {
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
        <img
          src="https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg"
          alt="Schweinswal"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Impressum</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Impressum
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        <div className="prose prose-slate max-w-none">
          {/* Angaben */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8 border-l-4 border-[#00c2b2]">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Angaben gemäß § 5 DDG:</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Schweinswale e.V.<br />
              Daiserstraße 6<br />
              81371 München
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Vertreten durch:</h3>
            <p className="text-slate-600 mb-4">Dipl.-Biol. Denise Wenger</p>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Kontakt:</h3>
            <p className="text-slate-600 mb-1">Telefon: 0176-22208271</p>
            <p className="text-slate-600 mb-4">
              E-Mail: <a href="mailto:info@walschutz.org" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium">info@walschutz.org</a>
            </p>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Registereintrag:</h3>
            <p className="text-slate-600">
              Eingetragener Verein<br />
              Registergericht: Amtsgericht München VR 206937
            </p>
          </div>

          {/* Gemeinnützigkeit */}
          <div className="mb-8">
            <p className="text-slate-600 leading-relaxed mb-4">
              Schweinswale e.V. ist wegen Förderung von Wissenschaft und Forschung sowie Förderung des Tierschutzes nach dem Freistellungsbescheid bzw. nach der Anlage zum Körperschaftsteuerbescheid des Finanzamtes München, StNr. 143/221/40763 vom 02.01.2019 für den letzten Veranlagungszeitraum 2016 und 2017 nach § 5 Abs. 1 Nr. 9 des Körperschaftsteuergesetzes von der Körperschaftsteuer und nach § 3 Nr. 6 des Gewerbesteuergesetzes von der Gewerbesteuer befreit.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Einhaltung der satzungsmäßigen Voraussetzungen nach den §§ 51, 59, 60 und 61 AO wurde vom Finanzamt München, StNr. 143/221/40763 mit Bescheid vom 03. März 2017 nach § 60a AO gesondert festgestellt. Wir fördern nach unserer Satzung folgende gemeinnützige Zwecke: Wissenschaft und Forschung (§ 52 Abs. 2 Satz 1 Nr.(n) 1 AO), und Tierschutz (§ 52 Abs. 2 Satz 1 Nr.(n) 14 AO).
            </p>
          </div>

          {/* Verantwortlich */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
            <p className="text-slate-600 leading-relaxed">
              Denise Wenger<br />
              Daiserstraße 6<br />
              81371 München
            </p>
          </div>

          {/* EU-Streitschlichtung */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Hinweis auf EU-Streitschlichtung</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>
          <p className="text-slate-600 leading-relaxed mb-8">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium break-all">
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum – Kontakt.
          </p>

          {/* Haftungsausschluss */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Haftungsausschluss (Disclaimer)</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Haftung für Inhalte</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Haftung für Links</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Urheberrecht</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          {/* Datenschutz */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Datenschutzerklärung</h2>
          <div className="w-16 h-2 mb-6" style={wavyLine}></div>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Datenschutz</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Auskunft, Löschung, Sperrung</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Newsletterdaten</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            Wenn Sie den auf der Webseite angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen"-Link im Newsletter.
          </p>

          <h3 className="text-xl font-bold text-slate-800 mb-3">Widerspruch Werbe-Mails</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>

          <p className="text-slate-400 text-sm mt-8 italic">
            Quelle: e-recht24.de
          </p>
        </div>
      </main>
    </>
  );
}
