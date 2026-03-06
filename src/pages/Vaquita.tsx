import { ChevronRight } from 'lucide-react';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const VAQUITA_IMG = 'https://web.archive.org/web/20250808010330im_/https://walschutz.org/wp-content/uploads/2017/02/VaquitaWeb.jpg';

export default function Vaquita() {
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
          src={`VAQUITA_IMG`}
          alt="Vaquita – Hafenschweinswal"
          />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#der-schweinswal" className="hover:text-[#00c2b2] transition-colors">Schweinswale</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Vaquita – vom Aussterben bedroht</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Vaquita – vom Aussterben bedroht
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-red-800 mb-3">Vaquita – der kleinste Wal – ist vom Aussterben bedroht!</h2>
          <p className="text-lg text-red-700 leading-relaxed mb-4">
            Können wir das Aussterben des kleinsten Schweinswals noch verhindern?
          </p>
          <p className="text-red-700 leading-relaxed">
            Schweinswale e.V. setzt sich für das Überleben der Vaquitas in Mexiko ein. Wir müssen schnell und effektiv handeln – sonst kann das Aussterben dieser Art nicht mehr verhindert werden – bitte helfen Sie den kleinen Walen mit Ihrer Spende!
          </p>
        </div>

        {/* Der Hafenschweinswal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Der Hafenschweinswal (Phocoena sinus) – Vaquita</h2>
            <div className="w-16 h-2 mb-8" style={wavyLine}></div>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Erst vor 50 Jahren wurde der kleine Schweinswal als endemische Art im mexikanischen Golf von Kalifornien entdeckt. Er ist erwachsen nur etwa bis zu 1,50 m groß, grau gefärbt mit feinen schwarzen Streifen, die von den Flippern bis zum Mundwinkel ziehen. Sein Auge ist von einem dunklen Ring umgeben, das ihm einen Harry-Potter-Look gibt, die Lippen sind dunkel. Er hat eine fast sichelförmige Fluke, die an den Enden spitz ausläuft.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Noch vor 20 Jahren schwammen annähernd 600 der kleinen Schweinswale im Golf – 2016 sind nur noch etwa 100 von ihnen übrig geblieben. Die Haupttodesursache, die so verheerend die wenigen noch verbliebenen Wale vernichtet, ist ihr Beifang in Fischernetzen, vor allem Stellnetzen. Zudem macht ihnen die Wasserverschmutzung mit Pestiziden u.a. im Golf zu schaffen.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src={VAQUITA_IMG}
              alt="Vaquita"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              © William Shepard and Unidos para la Conservación, A.C.
            </figcaption>
          </figure>
        </div>

        {/* Ein Fisch wird ihm zum Verhängnis */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Ein Fisch wird ihm zum Verhängnis</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Das Schicksal des Vaquita ist eng mit dem einer anderen bedrohten Art verwoben, dem mexikanischen Totoaba, einem Umberfisch. Dieser Barschverwandte kann bis zu 100 Kilogramm schwer werden und lebt ebenfalls nur im nördlichen Teil des Golfs von Kalifornien, auch Cortés-See genannt. In der Cortés-See, die in ihrer Größe mit der Adria vergleichbar ist, sind auch die Vaquitas bzw. Hafenschweinswale beheimatet. Wie die Wale, verlässt auch der Totoaba den Golf nie.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Der Totoaba wurde jahrzehntelang stark befischt und schließlich so selten, dass er 1975 unter Schutz gestellt wurde. Mit seiner Befischung einher ging ein hoher Beifang an Vaquitas. Trotz des Fangverbots für den Totoaba endete dies nicht, denn andere Fischereien, z.B. nach Garnelen, entwickelten sich dann im Gebiet und die kleinen Wale verendeten weiterhin in großer Stückzahl in Netzen als Beifang.
        </p>

        {/* Bisherige Schutzbemühungen */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Bisherige Schutzbemühungen greifen nicht!</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schließlich wurde 1993 der Obere Golf von Kalifornien von Mexikos Präsident Carlos Salinas zum Biosphärenreservat erklärt. Jegliche Nutzung um die Mündung des Colorado-Flusses wurde verboten. Auch ein Verbot der Offshore-Garnelenfischerei in einem größeren Gebiet war im Biosphärenplan vorgesehen, und eine Beschränkung der Küstenfischerei der sogenannten „Pangas", das sind kleine Fischerboote mit Netzen, deren geringere Maschengröße ein Verwickeln der Schweinswale verhindern sollte.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Doch alle diese Vorschriften wurden in der Praxis nicht umgesetzt oder umgangen und das Sterben der Vaquitas ging und geht weiter. Das Biosphärenreservat umschloss auch nicht das gesamte Verbreitungsgebiet der Schweinswale und zahlreiche Beifänge ereigneten sich außerhalb.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Deshalb handelte Mexiko 2005 mit der Einrichtung einer Vaquita-Schutzzone und einem Programm zum Schutz des Vaquitas. Mehr als 1 Million US-Dollar vergab die mexikanische Regierung für die Umsetzung von Schutzmaßnahmen und Projekte mit Fischern, um „Vaquita-freundliche", sprich nicht tödliche Fischereigeräte, zu erproben und zur Fischerei alternative Einnahmequellen zu erschließen. Doch nach Informationen von Wissenschaftlern hatte sich die Pangas-Fischerei innerhalb des Schutzgebiets sogar verdoppelt.
        </p>

        {/* Schwimmblase als Aphrodisiakum */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Schwimmblase als Aphrodisiakum</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Unglücklicherweise ist ein weiteres Problem aufgetaucht: es hat sich ein blühender Schwarzmarkt für die Schwimmblase des Totoaba entwickelt und die illegale Fischerei angeheizt, denn bis zu 8.000 US$ pro Kilogramm werden in den USA dafür erzielt und in China sogar bis zu 10.000 US$ geboten! Der hohe Collagenanteil der Schwimmblase soll eine Verjüngung der Haut bewirken und ebenso sind die Schwimmblasen als Aphrodisiakum genutzt.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Alle Schutzmaßnahmen greifen nicht, wenn illegaler Handel und Schmuggel stetig wachsen. 2013 haben mexikanische Behörden Schwimmblasen im Wert von 2,25 Millionen US$ beschlagnahmt. Und im Zuge des illegalen Fangs des Fisches sterben Vaquitas als Beifang qualvoll in den Fischernetzen. Doch auch wenn das Schutzgebiet erweitert wurde und Militär-Kontrollen im Gebiet durchgeführt werden, kosten die illegalen Machenschaften weiterhin Opfer unter den kleinen Walen.
        </p>

        {/* Bedrohliche Situation */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-6 mb-12">
          <h3 className="text-xl font-bold text-amber-800 mb-3">Wie bedrohlich ist die Situation?</h3>
          <p className="text-amber-700 leading-relaxed mb-4">
            Die Experten des CIRVA (Comité Internacional para la Recuperación de la Vaquita) schätzten 2014, dass es nur noch 97 Individuen gibt, davon nur 25 Weibchen im fortpflanzungsfähigen Alter. Im Mai 2016 teilte die mexikanische Regierung sogar mit, dass der Bestand auf nur noch etwa 60 Individuen gesunken ist.
          </p>
          <p className="text-amber-700 leading-relaxed font-semibold">
            Wenn nicht alle Netze sofort aus dem Lebensraum der Vaquitas verschwinden und der Lebensraum unter strengstem Schutz gestellt und bewacht wird, droht das Aussterben dieser Art!
          </p>
        </div>

        {/* Globale Unterstützung */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Globale Unterstützung nötig!</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Internationale Aufrufe, einschließlich die der Internationalen Walfangkommission, fordern verstärkte Bemühungen, um das Aussterben zu verhindern. Die Welt ist aufgerufen, sich auch finanziell am Schutz zu beteiligen und Mittel und Fachwissen einzubringen. Hoffentlich ist es nicht schon zu spät für den Vaquita! Sein Aussterben wäre ein weiteres Armutszeugnis für den internationalen Artenschutz.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schweinswale e.V. möchte zu schnellen Schutzmaßnahmen beitragen! Bitte helfen Sie dem Vaquita mit Ihrer Spende, um Schutzmaßnahmen vor Ort zu unterstützen. Das natürliche Verbreitungsgebiet der Vaquitas muss unter strengsten Schutz gestellt und überwacht werden. In geschützter Freiheit ist unserer Meinung nach die Überlebenschance höher – doch es muss jetzt gehandelt werden!
        </p>

        <p className="text-slate-600 leading-relaxed italic mb-12">
          Denise Wenger / Schweinswale e.V., 2016
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Helfen Sie dem Vaquita zu überleben!</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie konkrete Schutzmaßnahmen vor Ort im Golf von Kalifornien – für das Überleben des kleinsten Wals der Welt.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Jetzt Spenden
            </a>
            <a href="#kontakt" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Zur Petition
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
