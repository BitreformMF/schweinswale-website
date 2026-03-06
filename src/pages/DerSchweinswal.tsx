import { ChevronRight } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250906010646im_/https://walschutz.org/wp-content/uploads/2016/11/';
const IMG2 = 'https://web.archive.org/web/20250906010646im_/https://walschutz.org/wp-content/uploads/2017/02/';

export default function DerSchweinswal() {
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
          src={`${IMG2}cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
          alt="Schweinswal"
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
          <a href="#der-schweinswal" className="hover:text-[#00c2b2] transition-colors">Schweinswale</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Unser Schweinswal</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Der Schweinswal
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Der Schweinswal ist unser einziger heimischer Wal, das heißt die einzige Walart, die in den deutschen Gewässern in der Nord- und Ostsee ganzjährig vorkommt und hier auch ihre Jungen zur Welt bringt. Vor der Nordseeinsel Sylt befindet sich ein für die Geburt und Kälberaufzucht wichtiges Gebiet, das deshalb seit 1999 zum ersten Walschutzgebiet Deutschlands erklärt wurde.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src={`${IMG}SWKerte-IMG_1840-300x200.jpg`}
              alt="Schweinswal"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              © Foto: S. Koschinski | FjordBaelt, DK
            </figcaption>
          </figure>
        </div>

        {/* Aussehen */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Aussehen</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schweinswale gehören zu den Zahnwalen. Im Gegensatz zu Delfinen haben sie keine konischen, spitzen Zähne, sondern spatenförmig, abgeflachte Zähne. Ebenso charakteristisch für die Schweinswale sind: ein rundlicher Kopf mit flacher Schnauze (kein langer Schnabel wie bei Delfinen), eine kleine dreieckige Rückenfinne, kleine Flipper und eine Einkerbung in der Mitte der Fluke.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schweinswale haben einen kleinen gedrungenen Körper, damit sie durch eine geringere Oberfläche möglichst wenig Wärme in den kalten Gewässern verlieren. Der Schweinswal an unserer Küste kann bis zu 1,90 Meter groß werden und 55-65 Kilogramm schwer, dabei sind die Weibchen die größeren Exemplare. Allerdings werden so große Tiere nur noch selten gefunden. Meist messen die erwachsenen Wale etwa 1,40-1,50 Meter.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Der Rücken der Tiere ist dunkel bis schwarz und mit einem von der Rückenflosse ausgehenden grauen Feld versehen, der Bauch ist heller, oft fast weiß. Vom Mundwinkel führt eine schwarze Zeichnung bis zum vorderen Ansatz der Flipper (Brustflossen).
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Von vorne gesehen haben die kleinen Wale einen zugespitzten (Kuss-)Mund und scheinen zu lächeln, da die Mundlinie nach oben gezogen ist, sie haben aber keine Mimik und können dies nicht verändern.
        </p>

        {/* Nachwuchs und Verhalten */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Nachwuchs und Verhalten</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <figure>
            <img
              src={`${IMG}SWKerte-IMG_1671-300x200.jpg`}
              alt="Schweinswal"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              © Foto: S. Koschinski | FjordBaelt, DK
            </figcaption>
          </figure>
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Die kleinen Wale kommen zum Atmen mit einem hörbaren Blas nur kurz an die Wasseroberfläche und tauchen mit einer rollenden Bewegung wieder unter, bei der nur der Rücken mit der dreieckigen Finne zu sehen ist, die Fluke (Schwanzflosse) hebt sich nicht aus dem Wasser (wie dies bei den großen Walen der Fall ist). Sie springen nur ganz selten aus dem Wasser.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Schweinswale können nur etwa 7 Minuten lang tauchen und bis zu 22 Stundenkilometer schnell schwimmen. Heutzutage erreichen sie meist nur ein Alter von 9 Jahren, könnten aber bis zu 20 Jahre alt werden.
            </p>
          </div>
        </div>

        {/* Vorkommen und Nahrung */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Vorkommen und Nahrung</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Das Verbreitungsgebiet des Gewöhnlichen Schweinswals (Phocoena phocoena) erstreckt sich in den kalten, aber eisfreien Küstengewässern des Nordatlantiks vor Europa, Nordwestafrika, dem Osten Nordamerikas sowie den amerikanischen und asiatischen Küstengewässern des Nordpazifiks. Im Schwarzen Meer gibt es eine eigene Unterart (Phocoena phocoena relicta), die sich durch Isolation genetisch unterschiedlich entwickelt hat.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schweinswale ernähren sich hauptsächlich von Fischen, daneben auch von Borstenwürmern, Schnecken, Krebstieren und Tintenfischen. Die Zusammensetzung der Nahrung variiert dabei je nach den geografischen Gebieten. Die gefressenen Fische sind meistens kleiner als 25 Zentimeter, da die Schweinswale größere Fische nicht schlucken können.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Natürliche Feinde der Schweinswale sind vor allem größere Haie und Schwertwale.
        </p>

        {/* Echoortung */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Echoortung</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Licht dringt nicht sehr weit ins Meer, in der Tiefe ist es dunkel, aber Schall breitet sich im Wasser sehr gut aus. Wie alle Zahnwale nutzen Schweinswale zur Orientierung und Jagd die Schallortung. Sie erzeugen dafür kurze Schallimpulse vor allem im Ultraschallbereich (für den Menschen nicht hörbar), so genannte Klicks, die wiederholt ausgestoßen werden.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Durch die von der Umgebung oder Fischen zurückgeworfenen Schallwellen (Echo), die über den Unterkiefer an das Innenohr geleitet werden, können sich die Schweinswale ein „akustisches Bild" machen. Sie können sogar verschiedene Metalle und Materialien damit unterscheiden.
            </p>
          </div>
          <figure>
            <img
              src={`${IMG}kosch-1.jpg`}
              alt="Schweinswal im trüben Wasser"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Ein Schweinswal im trüben Wasser. © Foto: S. Koschinski
            </figcaption>
          </figure>
        </div>

        {/* Bestand und Bedrohung */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Bestand und Bedrohung</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Die Anzahlen der Schweinswale sind im Vergleich zu früheren Vorkommen rückläufig. Ursachen sind die früher massiven Umweltgifteinleitungen in die Meere, von denen sich bestimmte Stoffe wie Quecksilber in den Walen anreichern und ihr Immunsystem schwächen, und der Erstickungstod als ungewollter Beifang in Fischernetzen.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Durch Überfischung wird ihnen vielerorts ihrer Nahrungsgrundlage entzogen. Zudem macht Delfinen und Walen heutzutage die Verlärmung der Meere zu schaffen.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schweinswale wurden in früheren Jahrhunderten sogar bejagt und gegessen. Dadurch und wegen der starken Verschmutzung der Flüsse und Küstengewässer mit Abwässern aus der Industrie und Landwirtschaft und dem Rückgang von Fischarten sind die Wale ab den 1950er Jahren fast gänzlich von der deutschen Nordseeküste verschwunden.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <figure>
            <img
              src={`${IMG}Schweinswale-Sophia-Wenger6-300x200.jpg`}
              alt="Zwei Schweinswale dicht am Elbufer"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Zwei Schweinswale dicht am Elbufer. © Foto: Sophia Wenger
            </figcaption>
          </figure>
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Seit etwa 10 Jahren wird aber eine Art Rückkehr und Verlagerung des Bestandes aus dem Norden in den Süden festgestellt: Es werden wieder vermehrt Schweinswale in der südlichen Nordsee und an der deutschen Küste gesehen. Der Bestand wird in der deutschen Nordsee jahreszeitabhängig auf etwa 15.000 bis 54.000 Tiere im Frühjahr geschätzt.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              In der westlichen Ostsee wurde das Vorkommen jüngst auf nur mehr etwa 11.000 Tiere geschätzt (davon 800-2000 in deutschen Gewässern), innerhalb der letzten 10 Jahre hat sich der Bestand damit halbiert! Vor allem die Population in der östlichen Ostsee, die sich genetisch etwas von den anderen unterscheidet, ist mit nur noch etwa 300 Individuen vom Aussterben bedroht!
            </p>
          </div>
        </div>

        {/* Schutzabkommen */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Schutzabkommen</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Der Schweinswal steht als geschützte Art auf den Listen verschiedener internationaler Schutzabkommen, die auf nationaler Ebene umgesetzt werden müssen:
        </p>

        <ul className="space-y-4 mb-12">
          <li className="flex items-start text-lg text-slate-600">
            <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2.5 mr-4 flex-shrink-0"></span>
            <span><strong>Rote Liste bedrohter Arten der IUCN:</strong> Status: „Gefährdet"</span>
          </li>
          <li className="flex items-start text-lg text-slate-600">
            <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2.5 mr-4 flex-shrink-0"></span>
            <span><strong>Rote Liste Deutschland:</strong> Status: „Stark gefährdet"</span>
          </li>
          <li className="flex items-start text-lg text-slate-600">
            <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2.5 mr-4 flex-shrink-0"></span>
            <span><strong>Europäische Fauna-und-Flora-Habitatrichtlinie (Natura 2000):</strong> Der Schweinswal ist auf den Listen II und IV aufgeführt, mehrere FFH-Gebiete sind zu seinem Schutz ausgewiesen worden, für die allerdings noch Schutzrichtlinien erlassen werden müssen.</span>
          </li>
          <li className="flex items-start text-lg text-slate-600">
            <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2.5 mr-4 flex-shrink-0"></span>
            <span><strong>ASCOBANS:</strong> Abkommen zur Erhaltung der Kleinwale in der Nord- und Ostsee, des Nordostatlantiks und der Irischen See; regionales Artenschutzabkommen, das im September 1991 im Rahmen der Bonner Konvention abgeschlossen wurde und im März 1994 in Kraft trat.</span>
          </li>
        </ul>

        {/* Wale auf Wanderschaft */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Wale auf Wanderschaft und Whale Watching</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Schweinswale gehen jahreszeitlich auf Wanderungen, über die man noch nichts Genaueres weiß. Wintergebiete liegen wohl eher küstenfern im Norden oder Westen, im Frühjahr dann tauchen die ersten Wale an der Küste Niedersachsens auf.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Seit 2007 konnte durch ein Sichtungsprogramm und Untersuchungen der GRD-Biologin Denise Wenger nachgewiesen werden, dass nach fast 100 Jahren wieder Schweinswale in die Flüsse schwimmen, in der Weser bis Bremen, in der Elbe bis Hamburg – über 90 Kilometer von der Küste entfernt. Die Biologin ging der Sache auf die Spur: vor allem von März bis Mai wurden die Kleinen Tümmler in den Flüssen gesichtet, dann, wenn wandernde Fischschwärme wie die Stinte zum Ablaichen aus der Nordsee in die Flüsse hochziehen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              2013 konnten im Hamburger Hafen viele Schweinswale aus nächster Nähe vom Ufer von Spaziergängern oder von Strandcafés aus gesehen werden. Kajakfahrer und Motorbootfahrer berichteten zudem, dass die Wale neugierig nahe herangeschwommen seien.
            </p>
          </div>
          <figure>
            <img
              src={`${IMG}Schweinswalsuche-Elbe-300x200.jpg`}
              alt="Schweinswalsuche auf der Elbe"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Schweinswalsuche auf der Elbe. © Foto: C. Schrader
            </figcaption>
          </figure>
        </div>

        {/* Verwandtschaft */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Verwandtschaft: Familie der Schweinswale</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Weltweit gibt es sechs Schweinswalarten, die alle relativ küstennah vorkommen, aber geographisch voneinander getrennt sind. Sie haben alle die Schweinswal-typischen anatomischen Merkmale, unterscheiden sich jedoch in Färbung und Größe. Unter ihnen findet man die kleinsten Wale.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Mit zu den unmittelbar vom Aussterben bedrohten Arten zählt dabei der Hafenschweinswal, der nur in einem Gebiet im Norden des Golfs von Kalifornien vorkommt. In Mexiko nennt man ihn auch Vaquita, kleine Kuh, er wird nur bis zu 1,5 Meter groß. Von dieser Schweinswalart gibt es schätzungsweise nur noch etwa 100 Individuen, darunter weniger als 30 fortpflanzungsfähige Weibchen. Beifang in oft illegalen Fischernetzen ist die Haupttodesursache für diese Wale.
        </p>

        <p className="text-slate-600 leading-relaxed italic mb-12">
          Denise Wenger, April 2015
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Schützen Sie unseren Schweinswal</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie den Schutz der Schweinswale in der Nord- und Ostsee und unsere Arbeit für ihren Lebensraum.
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
