import { ChevronRight } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250430064518im_/https://walschutz.org/wp-content/uploads/2016/11/';

export default function Dynamitfischerei() {
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
          src={`${IMG}Dynamitfischer_in_der_Supay_Bucht.jpg`}
          alt="Dynamitfischerei in der Supay-Bucht"
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
          <a href="#projektbeschreibung" className="hover:text-[#00c2b2] transition-colors">Delfine in Peru</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Dynamitfischerei in der Paracas National Reserve</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Dynamitfischerei in der Paracas National Reserve
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Die gefährlichste Bedrohung, denen die Großen Tümmler der Supay-Gruppe, die in einem begrenzten Gebiet innerhalb des Paracas National Reserve leben, ausgesetzt sind, ist sicherlich die Dynamitfischerei – eine illegale Methode, Fisch mit geringem Aufwand zu fangen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Fischer werfen kleine Dynamitstangen vom Land oder von Booten aus und können die toten oder betäubten Fische am Ufer oder der Wasseroberfläche aufsammeln. Diese Fischereipraktik wird durchgeführt ohne Rücksicht um die Auswirkungen, die dies auf die Fischpopulationen, das Ökosystem und die gesamte marine Biodiversität hat.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src={`${IMG}Dynamitfischer_in_der_Supay_Bucht.jpg`}
              alt="Dynamitfischer in der Supay-Bucht"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Dynamitfischer in der Supay-Bucht
            </figcaption>
          </figure>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Die Explosion verursacht ein Massensterben unter allen Fischarten und verursacht im Grunde einen wirtschaftlichen Verlust. Zudem kann die Sprengung größere Meerestiere wie Seevögel, Meeresschildkröten, Seelöwen und sogar die Delfine beeinträchtigen, dies reicht von der Störung ihrer Ruhe- oder Aufzuchtsgebiete bis hin zum Tod.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Mit einer offensichtlichen Schutzreaktion suchen die Supay-Delfine Zuflucht in kleinen, von Klippen umgebenen Buchten, die auf Grund der Strömungsverhältnisse von Booten nicht erreicht werden können. Die „geschützten" Gewässer liegen etwas entfernt von ihrem ursprünglichen Verbreitungsgebiet, in dem zur Zeit noch Dynamitfischerei stattfindet. Langfristig bedroht diese das Überleben der gesamten Gruppe.
        </p>

        {/* Kampagne */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Kampagne gegen die Dynamitfischerei</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-slate-600 leading-relaxed mb-6">
              Deshalb führt ACOREMA mit Unterstützung der GRD eine Kampagne gegen die Dynamitfischerei durch. Ziel ist, der Dynamitfischerei ein Ende zu bereiten, indem dieses Problem in die lokale Umweltagenda mit aufgenommen wird und von den Behörden höhere Strafen für die Wilderer gefordert werden.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Im Lagunilla-Fischerhafen, der im Verbreitungsgebiet der Supay-Delfine liegt, wird eine große Tafel aufgestellt, die über die verheerenden Auswirkungen der Dynamitfischerei auf die Fischbestände, ihre potenzielle Bedrohung für andere Meerestiere und speziell für die Supay-Delfine sowie die Gesetze in Hinblick auf die illegale Fischereipraktik informiert.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Wir erwarten, dass die Kampagne dazu beiträgt, Fischer, Behörden, Wissenschaftler und die Öffentlichkeit zur Verteidigung des Lebensraumes aller Meerestiere und speziell der Supay-Delfine zusammenzubringen.
            </p>
          </div>
          <figure>
            <img
              src={`${IMG}ACOREMA-Kampagne_gegen_Dynamitfischererei.jpg`}
              alt="ACOREMA Kampagne gegen Dynamitfischerei"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              ACOREMA Kampagne gegen Dynamitfischerei
            </figcaption>
          </figure>
        </div>

        <figure className="mb-12 max-w-md">
          <img
            src={`${IMG}ACOREMA_Infobroschuere_Dynamitfischerei.jpg`}
            alt="ACOREMA Informationsbroschüre gegen Dynamitfischerei"
            className="w-full h-auto rounded-lg shadow-xl"
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-sm text-slate-500 mt-3 italic">
            Informationsbroschüre von ACOREMA gegen Dynamitfischerei
          </figcaption>
        </figure>

        <p className="text-slate-600 leading-relaxed italic mb-12">
          Denise Wenger
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Helfen Sie, die Dynamitfischerei zu stoppen</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie die Kampagnen von ACOREMA gegen illegale Dynamitfischerei und schützen die Supay-Delfine und ihren Lebensraum.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Jetzt Spenden
            </a>
            <a href="#patenschaftsformular" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Patenschaft übernehmen
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
