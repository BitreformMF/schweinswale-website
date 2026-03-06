import { ChevronRight } from 'lucide-react';
import HeroImage from "../components/HeroImage";

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250808011115im_/https://walschutz.org/wp-content/uploads/';

export default function SchweinswaleWeltweit() {
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
          src={`${IMG}2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
          alt="Schweinswal"
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
          <span className="text-slate-800 font-semibold">Schweinswale weltweit</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Schweinswale weltweit
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Weltweit gibt es sechs verschiedene Schweinswalarten, die wir Ihnen im Folgenden vorstellen möchten. Sie unterscheiden sich deutlich im Aussehen und ihre Lebensräume überlappen fast nicht. Gemeinsam ist ihnen aber die küstennahe Lebensweise, die sie vielfältigen Bedrohungsfaktoren aussetzt. Gemeinsame körperliche Merkmale sind die Form ihrer Zähne, die im Gegensatz zu den konischen Zähnen der Delfine spatenförmig abgeflacht und rundlich sind, zudem eine abgeflachte Schnauze sowie ein eher kleiner, gedrungener Körper.
        </p>

        {/* Artenliste */}
        <div className="bg-slate-50 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Die Schweinswalarten weltweit:</h3>
          <ul className="space-y-2">
            {[
              { name: 'Schweinswal', latin: 'Phocoena phocoena' },
              { name: 'Burmeister-Schweinswal', latin: 'Phocoena spinipinnis' },
              { name: 'Hafenschweinswal (Vaquita)', latin: 'Phocoena sinus' },
              { name: 'Brillenschweinswal', latin: 'Phocoena dioptrica' },
              { name: 'Dall-Hafenschweinswal', latin: 'Phocoenoides dalli' },
              { name: 'Indischer Schweinswal', latin: 'Neophocaena phocaenoides' },
            ].map((species, i) => (
              <li key={i} className="flex items-center text-slate-600">
                <span className="w-2 h-2 rounded-full bg-[#00c2b2] mr-3 flex-shrink-0"></span>
                <span className="font-semibold">{species.name}</span>
                <span className="mx-2">–</span>
                <span className="italic text-slate-500">{species.latin}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Schweinswal */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Schweinswal – <span className="italic font-normal text-slate-500">Phocoena phocoena</span></h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Der Gewöhnliche Schweinswal ist die bei uns heimische Art. Ausführliche Informationen finden Sie auf unserer Seite <a href="#der-schweinswal" className="text-[#00c2b2] hover:text-[#00a89a] font-semibold transition-colors">„Unser Schweinswal"</a>.
        </p>

        {/* Burmeister */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Burmeister-Schweinswal – <span className="italic font-normal text-slate-500">Phocoena spinipinnis</span></h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Der Burmeister-Schweinswal zeichnet sich durch seinen robusten Körper und einem schmalen, gedrungenen Kopf mit vergleichsweise relativ großen Flossen aus. Das größte Exemplar, das gesichtet wurde, erreichte eine Länge von 200 cm und ein Gewicht von 105 kg, wobei eine Größe zwischen 100 und 170 cm und ein Gewicht zwischen 40 und 70 kg die Regel ist. Die dreiecksförmige Finne ist etwas hinter die Mittellinie versetzt. Die Körperfarbe variiert von dunklem bis zu bräunlichem Grau auf der Oberseite, während die Unterseite hell grau ist. Oftmals sind die Augen von einem dunklen Fleck umgeben.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Beheimatet sind die Burmeister-Schweinswale im südwestlichen Pazifik und südöstlichen Atlantik bei Argentinien, Chile, Peru, Uruguay und im Süden Brasiliens. Sie halten sich in seichten, meist küstennahen, 100–1000 m entfernten Gewässern auf, wobei es auch Sichtungen in Kanälen und Buchten sowie in den Fjorden von Tierra del Fuego gab. Die Wassertemperaturen ihrer Lebensräume schwanken von 3°C in den südlichen Regionen bis zu 19,5°C.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Aufgrund ihrer unauffälligen Verhaltensweisen und den relativ ausgedehnten Tauchgängen von 1-3 Minuten gibt es wenige Daten über die Populationsgröße dieser Art. Es ist bekannt, dass es Schulen mit 2-8 sowie andere mit bis zu 150 Individuen gibt.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Gefährdet sind diese Säugetiere vornehmlich durch den Menschen. Vor allem in Peru wurde der Burmeister-Schweinswal Konsumopfer der Einheimischen und es kam zu Fängen von mehr als 450 Tieren pro Jahr. Auch zu ungewollten Beifängen kommt es jedes Jahr wieder. Die küstennahe Fischerei sorgt in Argentinien jährlich für mehr als 12 Beifänge.
        </p>

        {/* Hafenschweinswal / Vaquita */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Hafenschweinswal (Vaquita) – <span className="italic font-normal text-slate-500">Phocoena sinus</span></h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Der Hafenschweinswal, auch Vaquita oder „Kleine Kuh" genannt, ist die am stärksten vom Aussterben bedrohte Meeressäugerart der Welt. Er kommt ausschließlich im nördlichen Golf von Kalifornien vor. Ausführliche Informationen finden Sie auf unserer Vaquita-Projektseite.
        </p>

        {/* Brillenschweinswal */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Brillenschweinswal – <span className="italic font-normal text-slate-500">Phocoena dioptrica</span></h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Unter den Schweinswalen gehört der Brillenschweinswal zu den Größten seiner Art mit bis zu 224 cm Länge und einem Gewicht von 60 bis 84 kg. Ein besonderes Merkmal stellt die rundgeformte Rückenflosse dar, wobei die des Weibchens eher eckig und kleiner ist. Der Körper ist massig und hat eine blauschwarze Oberseite, während der Bauch leuchtend weiß strahlt. Den Namen erhält der Brillenschweinswal durch seine brillenartige Augenumrandung in Form eines schwarzen Flecks, der von einer hellen Linie umkreist wird.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Die meisten Sichtungen und Strandungen dieser Art fanden an der Atlantikküste Südamerikas statt. Jedoch gab es auch Meldungen vor Tasmanien und rund um verschiedene ozeanische Inseln, weshalb vermutet wird, dass die Verbreitungsgebiete weit ins offene Meer hineinreichen und sich zirkumpolar um die Südhalbkugel erstrecken. Er gilt als scheu, schnell, aber wenig akrobatisch. Man geht davon aus, dass sie in kleinen Gruppen, bis zu 5 Tieren, oder auch alleine leben. Bestandsschätzungen liegen nicht vor.
        </p>

        {/* Dall-Hafenschweinswal */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Dall-Hafenschweinswal – <span className="italic font-normal text-slate-500">Phocoenoides dalli</span></h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Es gibt zwei Typen des Dall-Hafenschweinswals: den Dalli-Typ und den Truei-Typ. Sie unterscheiden sich anhand ihrer weißen Bauch- und Seitenfärbung. Abgesehen von der kontrastreichen Färbung stellt die Finne ein markantes Merkmal dar. Sie ist spitz, oben grauweiß und unten schwarz. Mit einer Höchstlänge von 2,40 m (Männchen) bzw. 2,20 m (Weibchen) stellt der Dall-Hafenschweinswal die größte Art der Schweinswale dar. Das Höchstgewicht liegt bei 200 kg.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Trotz ihres stämmigen Körpers sind die Dall-Hafenschweinswale sehr aktiv und erreichen eine Schwimmgeschwindigkeit bis zu 55 km/h. Er ist der einzige Schweinswal, der auf Bugwellen reitet. Ein blitzartiges Auftauchen ist typisch für ihn, wodurch er eine unverkennbare Gischt, die nach ihrer Form „Hahnenschwanz" genannt wird, erzeugt.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Beheimatet sind die Dall-Hafenschweinswale in den kalten Gewässern des nördlichen Pazifiks, im Japanischen und Ochotskischen Meer sowie im Beringmeer. Meist lebt er im offenen Meer.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Die größte Gefahr stellt zweifelslos die Jagd der japanischen Fischer dar: bis zu 40.000 Tiere werden pro Jahr getötet. Des Weiteren erschweren Beifang und die Verschmutzung der Meere den Fortbestand der Art, wobei die Rote Liste der IUCN die Art als nicht gefährdet klassifiziert. Der geschätzte Weltbestand liegt bei 1.200.000 Tieren.
        </p>

        {/* Indischer Schweinswal */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Indischer Schweinswal – <span className="italic font-normal text-slate-500">Neophocaena phocaenoides</span></h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Der Indische Schweinswal, auch Glattschweinswal genannt, ist die einzige Schweinswalart ohne Rückenfinne. Stattdessen besitzt er einen niedrigen Rückenkamm mit kleinen Tuberkeln. Er kommt in den Küstengewässern des Indischen und westlichen Pazifischen Ozeans vor, von Japan und China über Südostasien bis nach Indien und den Persischen Golf. Er lebt in flachen Küstengewässern, Flussmündungen und sogar in Flüssen.
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Schützen Sie die Schweinswale weltweit</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie den Schutz der Schweinswale und ihrer Lebensräume weltweit.
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
