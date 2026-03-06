import { ChevronRight, ExternalLink, FileText } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250906004546im_/https://walschutz.org/wp-content/uploads/';

interface MediaEntry {
  date: string;
  source: string;
  title: string;
  author?: string;
  pdf?: boolean;
}

const mediaEntries: MediaEntry[] = [
  { date: '28.04.2016', source: 'Hamburger Abendblatt', title: 'Rekord: So viele Schweinswale gab es noch nie in der Elbe' },
  { date: '27.04.2016', source: 'GEO.de', title: 'Schweinswal-Rekord in der Elbe' },
  { date: '15.04.2016', source: 'Bremerhaven.de', title: 'Schweinswal-Watching auf der Weser: Augen auf beim Spaziergang am Deich' },
  { date: '12.04.2016', source: 'NDR-Fernsehen – Hamburg Journal', title: 'Erneut Schweinswale in der Elbe gesichtet' },
  { date: '11.04.2016', source: 'NDR', title: 'Schweinswale schwimmen in Weser, Elbe und Jade' },
  { date: '11.04.2016', source: 'Radio Bremen', title: 'Wieder Schweinswale in Weser gesichtet' },
  { date: '02.04.2016', source: 'Hamburger Abendblatt', title: '„Schweinswale lieben die Süderelbe"', author: 'Angelika Hillmer' },
  { date: 'Mai/Juni 2014', source: 'Aquanaut, Ausgabe 5/6', title: 'Persönlichkeit des Monats, Interview mit Denise Wenger', author: 'Sabine Hill', pdf: true },
  { date: '12.06.2013', source: 'Wedel-Schulauer-Tageblatt', title: 'Schweinswal tot an Wedels Strand', pdf: true },
  { date: '17.05.2013', source: 'RTL-Regional', title: 'Schweinswale – Jetzt sind die Tümmler auch in der Elbe zuhause', author: 'Lotta Polter' },
  { date: '02.05.2013', source: 'Die Welt', title: 'Elbe-Rückeroberung: Die Schweinswale jagen im Hamburger Hafen', author: 'Wolfgang Runge' },
  { date: '03.05.2013', source: 'shz.de', title: 'Zurück in der Elbe: Schweinswale schwimmen bis nach Hamburg', author: 'Hendrik Mulert' },
  { date: '16.04.2013', source: 'ga-online', title: 'Schweinswale schwammen in der Leda', author: 'Edgar Behrend' },
  { date: '18.03.2013', source: 'NWZ-Online', title: 'INTERVIEW: Jede Meldung kann Schutz der Schweinswale verbessern', author: 'Christin Horrmann' },
  { date: '17.03.2013', source: 'Welt am Sonntag', title: 'Schweinswale am Elbtunnel' },
  { date: '13.03.2013', source: 'Hamburg 1', title: 'Schweinswale in der Elbe gesichtet' },
  { date: '22.02.2013', source: 'Westfälische Rundschau', title: 'Iserlohnerin untersucht Schweinswale in der Elbe', author: 'Volker Dörken' },
  { date: '20.02.2013', source: 'Weser Kurier', title: 'Augen auf: Im Frühjahr könnten Schweinswale auftauchen' },
  { date: '16.02.2013', source: 'Die Welt', title: 'Schweinswal-Rekord in Elbe und Weser', author: 'Edgar S. Hasse' },
  { date: '12.05.2012', source: 'Lust auf Meer', title: 'Schweinswale tummeln sich bei Hamburg-Övelgönne und -Teufelsbrück', author: 'Andreas Holler' },
  { date: '02.05.2011', source: 'hier-luebeck.de', title: '„Papa, schau, ein Delphin!", Whale Watching am Weserstrand' },
  { date: '21.04.2011', source: 'Welt Online', title: 'Whale-Watching am Weserstrand' },
  { date: '11.04.2011', source: 'Hannoversche Allgemeine', title: 'Schweinswale tummeln sich in Weser, Ems und Elbe', author: 'Sophie Hilgenstock' },
  { date: '05.04.2011', source: 'Osnabrücker Zeitung', title: 'Beute lockt Schweinswale auch in die Ems' },
  { date: '04.04.2011', source: 'Hit-Radio Antenne Niedersachsen', title: 'Echte Delphine in der Weser!' },
  { date: '05.05.2008', source: 'Die Welt', title: 'Schweinswale entern Elbe, Weser und Ems' },
  { date: '26.07.2007', source: 'Focus Online', title: 'Schweinswale: Meeressäuger wieder verstärkt in der Weser', author: 'Stefan Robert Weißenborn' },
];

interface ScientificEntry {
  title: string;
  description?: string;
}

const scientificEntries: ScientificEntry[] = [
  { title: 'Harbour porpoise (Phocoena phocoena Linnaeus, 1758) entering the Weser river after decades of absence', description: 'Marine Biology Research, Volume 8, Issue 8, 2012' },
  { title: 'The Return of Phocoena phocoena to North Germany\'s Rivers – A case study from the Weser River (2007–2009)', description: 'Poster zur ECS-Tagung 2010 in Stralsund' },
  { title: 'Strategien zur Vermeidung von Beifang von Seevögeln und Meeressäugetieren in der Ostseefischerei', description: 'Hintergrundinformationen zur Kampagne der GRD, NABU Schleswig-Holstein, und GSM' },
  { title: 'Qualvoller Tod: Stellnetze gefährden Meeressäugetiere und Seevögel', description: 'Artikel von Sven Koschinski aus Betrifft:NATUR 2/08' },
  { title: 'Behavioral reactions of free-ranging harbor porpoises (Phocoena phocoena) encountering standard nylon and BaSO mesh gillnets and warning sound', description: 'Marine Ecology Progress; Vol. 313: 285-294; vom 11. Mai 2006' },
  { title: 'Vorkommen und Schutz von Schweinswalen in den Territorialgewässern Mecklenburg-Vorpommerns', description: 'C. Herrmann, LUNG MV' },
];

export default function Medienbeitraege() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[55vh] bg-blue-900">
        <div
          className="absolute top-0 left-0 w-full h-[24px] md:h-[48px] z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,50 Q250,100 500,50 T1000,50 L1000,0 Z' fill='%23ffffff' opacity='0.3'/%3E%3Cpath d='M0,0 L0,60 Q250,20 500,60 T1000,60 L1000,0 Z' fill='%23ffffff' opacity='0.6'/%3E%3Cpath d='M0,0 L0,30 Q250,70 500,30 T1000,30 L1000,0 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '800px 100%',
            backgroundRepeat: 'repeat-x',
          }}
        ></div>
        <img
          src={`${IMG}2016/11/Schweinswale-Sophia-Wenger6-300x200.jpg`}
          alt="Schweinswale"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#sichtungsprogramm" className="hover:text-[#00c2b2] transition-colors">Projekte</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#sichtungsprogramm" className="hover:text-[#00c2b2] transition-colors">Unsere Wale</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Medienbeiträge</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Medienbeiträge
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Anbei sind sämtliche – jedoch nicht vollständig – Medienbeiträge gelistet, zu einzelnen Projekten wie z.B. Schweinswale in Elbe, Weser, Jade und Nordsee, oder Delfinen in Peru.
        </p>

        {/* Projektarbeit in den Medien */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Projektarbeit in den Medien</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="space-y-0 mb-16">
          {mediaEntries.map((entry, i) => (
            <a
              key={i}
              href="#"
              className="flex items-start gap-4 py-4 border-b border-slate-100 hover:bg-slate-50 px-4 -mx-4 rounded-lg transition-colors group"
            >
              <div className="flex-shrink-0 mt-0.5">
                {entry.pdf ? (
                  <FileText className="w-5 h-5 text-[#00c2b2]" />
                ) : (
                  <ExternalLink className="w-5 h-5 text-[#00c2b2]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-sm text-slate-400 font-medium whitespace-nowrap">{entry.date}</span>
                  <span className="text-sm text-slate-500">|</span>
                  <span className="text-sm font-semibold text-slate-500">{entry.source}</span>
                </div>
                <p className="text-slate-700 font-semibold group-hover:text-[#00c2b2] transition-colors mt-1">
                  {entry.title}
                  {entry.author && <span className="font-normal text-slate-500"> von {entry.author}</span>}
                  {entry.pdf && <span className="text-xs text-slate-400 ml-2">(PDF)</span>}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Wissenschaftliches */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Wissenschaftliches</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="space-y-0 mb-12">
          {scientificEntries.map((entry, i) => (
            <a
              key={i}
              href="#"
              className="flex items-start gap-4 py-4 border-b border-slate-100 hover:bg-slate-50 px-4 -mx-4 rounded-lg transition-colors group"
            >
              <div className="flex-shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-[#00c2b2]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-700 font-semibold group-hover:text-[#00c2b2] transition-colors">
                  {entry.title}
                </p>
                {entry.description && (
                  <p className="text-sm text-slate-500 mt-1">{entry.description}</p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Helfen Sie den Schweinswalen</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie unsere Arbeit für den Schutz der Schweinswale und Delfine.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Jetzt Spenden
            </a>
            <a href="#sichtung-melden" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Sichtung Melden
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
