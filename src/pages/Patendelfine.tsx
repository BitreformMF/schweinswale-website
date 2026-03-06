import { useState } from 'react';
import { ChevronRight, Heart } from 'lucide-react';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250430062229im_/https://walschutz.org/wp-content/uploads/2016/11/';

interface Dolphin {
  name: string;
  img: string;
  description: string;
  group: 'paracas' | 'supay';
}

const dolphins: Dolphin[] = [
  { name: 'Nama', img: `${IMG}Nama-300x158.jpg`, description: 'Nama wurde 2006 erstmals identifiziert. Nama hat mehrere Kerben und zwei auffällige Narben in der Finne. Nama hält sich von Booten fern.', group: 'paracas' },
  { name: 'Ghost', img: `${IMG}Ghost-300x158.jpg`, description: 'Ghost wurde im Juni 2004 identifiziert. Eine schwache, aber charakteristische Markierung an der linken Seite seiner spitzen Rückenfinne gab Ghost seinen Namen.', group: 'paracas' },
  { name: 'Andrea', img: `${IMG}Andrea_mit_ihrem_Baby-300x158.jpg`, description: 'Andrea ist ein Weibchen. Sie wurde im Juni 2011 identifiziert, damals hatte sie gerade ein Baby. Ihren Namen erhielt sie 2015 von Schülern der „22489 Paracas School".', group: 'paracas' },
  { name: 'Argentine', img: `${IMG}Argentine-300x158.jpg`, description: 'Argentine ist wahrscheinlich ein Weibchen. Sie wurde im Juli 2013 identifiziert. Ihren Namen erhielt sie 2015 von den Schülern der „República Argentina School" in Pisco.', group: 'paracas' },
  { name: 'Trinity', img: `${IMG}Trinity-300x158.jpg`, description: 'Trinity hat bereits drei mal Nachwuchs bekommen und gehört zu den am längsten im Rahmen unseres Projekts beobachteten Delfinweibchen. Ihr drittes Baby bekam sie im Juli 2012.', group: 'paracas' },
  { name: 'Juna', img: `${IMG}Juna-300x158.jpg`, description: 'Juna ist ein Weibchen. Sie wurde 2007 identifiziert und ist ständiger „Gast" in der Paracas-Bucht. Im Oktober 2015 bekam sie ihr erstes Baby.', group: 'paracas' },
  { name: 'Queen', img: `${IMG}Queen-300x158.jpg`, description: 'Queen hat an der Spitze ihrer Rückenfinne drei Knötchen, die wie ein Krönchen aussehen. 2005 wurde Queen Mutter und wurde nie ohne ihr Junges „Hope" gesehen.', group: 'paracas' },
  { name: 'Bodo', img: `${IMG}Bodo-jump-Trinity-300x158.jpg`, description: 'Bodo ist mit großer Wahrscheinlichkeit ein Männchen. Er liebt es, zu springen und die Aufmerksamkeit auf sich zu ziehen.', group: 'paracas' },
  { name: 'Isabel', img: `${IMG}Isabel-300x158.jpg`, description: 'Isabel ist ein Weibchen. Sie wurde im September 2006 identifiziert. Ihren Namen erhielt sie 2015 von den Schülern der María Montessori Schule des San Andrés-Distrikts.', group: 'paracas' },
  { name: 'Corky II', img: `${IMG}Corky2-300x158.jpg`, description: 'Corky II hat einen enormen Buckel (Missbildung). Diesen Delfin kann man schon aus größerer Entfernung gut erkennen.', group: 'paracas' },
  { name: 'Vitali-Pal', img: `${IMG}Vitali-Pal-300x158.jpg`, description: 'Vitali-Pal ist ein sehr kräftiger, männlicher Delfin, der gerne große Sprünge macht. Er wurde jedoch länger nicht mehr in der Paracas-Bucht gesichtet.', group: 'paracas' },
  { name: 'Maja', img: `${IMG}Maja-calf-300x158.jpg`, description: 'Maja ist ein großes Weibchen, das 2006 erstmals mit einem Baby gesehen wurde. Sie verschwand 2007 und tauchte erst 2011 mit einem neuen Jungtier wieder auf.', group: 'paracas' },
  { name: 'Longscar', img: `${IMG}Longscar-300x158.jpg`, description: 'Longscar ist ein Weibchen und an einer langen weißlichen Narbe entlang der Finne zu erkennen. Sie wurde im Juni 2004 identifiziert. Ende 2010 bekam sie ihr zweites Junges.', group: 'paracas' },
  { name: 'Silver', img: `${IMG}Silver-300x158.jpg`, description: 'Silver ist dreifache Mutter. Sie wird seit 2004 in der Paracas-Bucht beobachtet. Ihren Namen bekam sie aufgrund ihrer silbrig glänzenden Rückenfinne.', group: 'paracas' },
  { name: 'Vitali', img: `${IMG}Vitali-300x158.jpg`, description: 'Vitali steckt voller Lebenskraft. Er hat keine Schwanzfluke, kommt aber dennoch zurecht – nicht zuletzt dank seines Freundes Vitali-Pal.', group: 'paracas' },
  { name: 'Pisco', img: `${IMG}Pisco-300x158.jpg`, description: 'Wir erkennen Pisco an der tiefen Kerbe an der Spitze seiner Rückenfinne, der Krümmung im hinteren Teil und den zahlreichen Kratzern an beiden Seiten der Finne.', group: 'paracas' },
  { name: 'Nixo', img: `${IMG}Nixo-300x158.jpg`, description: 'Nixo ist ein Weibchen. Sie wurde im Oktober 2005 identifiziert. Dann verschwand sie für drei Jahre und kehrte 2011 mit einem Kalb zurück.', group: 'paracas' },
  { name: 'Tatooine', img: `${IMG}Tatooine-300x158.jpg`, description: 'Tatooine ist mit hoher Wahrscheinlichkeit ein junges Weibchen. Ihre glänzende Rückenfinne ist noch nahezu unversehrt.', group: 'paracas' },
  { name: 'Little Tree', img: `${IMG}Little-tree-300x158.jpg`, description: 'Little Tree wurde am 26.04.1999 erstmals identifiziert. Auf der rechten Seite seiner Finne ist eine Markierung, die an einen Baum erinnert.', group: 'supay' },
  { name: 'Bold', img: `${IMG}Bold-300x158.jpg`, description: 'Bold bedeutet kühn, dreist, und genauso benahm er sich bei den ersten Beobachtungen. Bold war ein unerschrockenes Junges, das dem Rest der Gruppe voraus schwamm. Heute ist Bold erwachsen.', group: 'supay' },
  { name: 'Sun', img: `${IMG}Sun-300x158.jpg`, description: 'Die Rückenfinne von Sun hat eine weiße Narbe auf der linken Seite, von der wie Sonnenstrahlen mehrere kleine Kerben ausgehen.', group: 'supay' },
  { name: 'Scratchy', img: `${IMG}Scratchy-300x158.jpg`, description: 'Scratchy ist ein Weibchen. Ihr Körper ist mit Kratzern übersät.', group: 'supay' },
  { name: 'Shine', img: `${IMG}Shine-Ten-300x158.jpg`, description: 'Shine wurde 2002 geboren. Das Baby leuchtete hell aus der Gruppe hervor. Die Geburt war ein Lichtblick für die Delfinschutzarbeit – Shine war das erste Baby seit über drei Jahren!', group: 'supay' },
];

function DolphinCard({ dolphin }: { dolphin: Dolphin }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
      <div className="overflow-hidden">
        {imgError ? (
          <div className="w-full h-48 bg-slate-100 flex flex-col items-center justify-center">
            <img
              src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/schweinswale-ev/schweinswale_ev_logo_1.png"
              alt="Schweinswale e.V."
              className="w-20 h-20 object-contain opacity-20 grayscale"
            />
            <span className="text-sm font-bold text-slate-400 mt-1">{dolphin.name}</span>
          </div>
        ) : (
          <img
            src={dolphin.img}
            alt={`Patendelfin ${dolphin.name}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#00c2b2] transition-colors">{dolphin.name}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">{dolphin.description}</p>
        <a href="#patenschaftsformular" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-2 px-5 rounded-full transition-colors inline-flex items-center">
          <Heart className="w-4 h-4 mr-2" />
          Patenschaft übernehmen
        </a>
      </div>
    </div>
  );
}

export default function Patendelfine() {
  const paracasDolphins = dolphins.filter(d => d.group === 'paracas');
  const supayDolphins = dolphins.filter(d => d.group === 'supay');

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
          src={`https://web.archive.org/web/20250430062229im_/https://walschutz.org/wp-content/uploads/2016/11/Nama-300x158.jpg`}
          alt="Paracas-Patendelfine"
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
          <span className="text-slate-800 font-semibold">Wir sind die Paracas-Patendelfine</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Wir sind die Paracas-Patendelfine
        </h1>
        <div className="w-24 h-3 mb-12" style={wavyLine}></div>

        {/* Paracas Dolphins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {paracasDolphins.map(dolphin => (
            <DolphinCard key={dolphin.name} dolphin={dolphin} />
          ))}
        </div>

        {/* Supay Section */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Wir sind die Supay-Patendelfine</h2>
        <div className="w-16 h-2 mb-12" style={wavyLine}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {supayDolphins.map(dolphin => (
            <DolphinCard key={dolphin.name} dolphin={dolphin} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Werden Sie Delfin-Pate!</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit einer Patenschaft unterstützen Sie die Beobachtung und den Schutz der ortstreuen Delfine in Peru direkt und nachhaltig.
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
