import { ChevronRight } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250717183702im_/https://walschutz.org/wp-content/uploads/';

interface Partner {
  name: string;
  logo: string;
  description: string;
  logoClass?: string;
}

const partners: Partner[] = [
  {
    name: 'Round Baltic Sea 2019 – Segeln für den Schweinswalschutz',
    logo: `${IMG}2019/05/Wal-Logo-150x150.png`,
    description: 'Mit der Kampagne „Round Baltic Sea" von Steffen Rothhardt wird erneut auf die Bedrohungssituation der Schweinswale in der Ostsee aufmerksam gemacht. Von Ende Mai bis ca. Mitte August 2019 segelte Steffen Rothhardt die kleine Ostsee-Runde entgegen dem Uhrzeiger.',
  },
  {
    name: 'Deutsche Umwelthilfe e.V.',
    logo: `${IMG}2017/10/logo_duh-300x37.png`,
    description: 'Seit über 40 Jahren setzt sich die Deutsche Umwelthilfe (DUH) für den Erhalt unserer natürlichen Lebensgrundlagen ein. Wie keine andere Organisation in Deutschland verbindet sie dabei den Schutz von Umwelt und Verbraucher. Die Deutsche Umwelthilfe e.V. wurde 1975 gegründet.',
    logoClass: 'h-12 w-auto',
  },
  {
    name: 'HAND IN HAND-Fonds',
    logo: `${IMG}2017/08/HAND_IN_HAND_FONDS_neu2009_BK-300x232.jpg`,
    description: 'Der HAND IN HAND-Fonds besteht seit 1998 als Gemeinschaftsinitiative von Rapunzel Naturkost und der Deutschen Umwelthilfe e.V. Rapunzel unterstützt mit jährlichen Spenden den Fonds.',
  },
  {
    name: 'Bürger schaffen Wissen',
    logo: `${IMG}2017/10/logoBuergerSchaffenWissen.png`,
    description: 'Die Online-Plattform Bürger schaffen Wissen ist ein Gemeinschaftsprojekt von Wissenschaft im Dialog und dem Museum für Naturkunde Berlin. Bürger schaffen Wissen ist die zentrale Plattform für Citizen Science in Deutschland.',
    logoClass: 'h-16 w-auto',
  },
  {
    name: 'Wissenschaftsjahr Meere und Ozeane',
    logo: `${IMG}2017/10/wissenschaftsjahr_meere_und_ozeane.jpg`,
    description: 'Wissenschaftsjahr Meere und Ozeane – eine Initiative des Bundesministeriums für Bildung und Forschung.',
  },
  {
    name: 'Gesellschaft zur Rettung der Delphine e.V.',
    logo: `${IMG}2018/12/170619_GRD-Datein-nach-export-41-300x300.png`,
    description: 'Das Delfin- und Meeresschutzprojekt in Peru-Paracas wird gefördert durch Delfin-Patenschaften der Gesellschaft zur Rettung der Delphine e.V.',
  },
  {
    name: 'Sphenisco e.V.',
    logo: `${IMG}2017/10/logo_sphenisco-300x125.png`,
    description: 'Sphenisco – Schutz des Humboldt-Pinguins e.V. möchte in Zusammenarbeit mit chilenischen Naturschützern und Wissenschaftlern dazu beitragen, den Humboldt-Pinguin vor der Ausrottung zu bewahren.',
    logoClass: 'h-14 w-auto',
  },
  {
    name: 'Protect Nature e.V.',
    logo: `${IMG}2017/10/Logo_ProtectNature-146x300.png`,
    description: 'Der Verein Protect Nature mit Sitz in Flensburg will einzigartige Naturlandschaften mit ihren Tieren und Pflanzen erhalten, schützen und wiederherstellen. Weitere Ziele sind Bildung für nachhaltige Entwicklung (BNE), Umweltschutz und Entwicklungszusammenarbeit.',
    logoClass: 'h-20 w-auto',
  },
  {
    name: 'Petra Fürst – Fürst Media',
    logo: `${IMG}2017/03/Petra-Fürst_2Web-150x150.jpg`,
    description: 'Petra Fürst unterstützt Schweinswale e.V. durch graphische Arbeiten und Verkauf von Delfin-Artikeln in ihrem Shop.',
  },
];

export default function Sponsoren() {
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
          src={`${IMG}2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
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
          <a href="#verein" className="hover:text-[#00c2b2] transition-colors">Verein</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Sponsoren und Kooperationspartner</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Sponsoren und Kooperationspartner
        </h1>
        <div className="w-24 h-3 mb-12" style={wavyLine}></div>

        {/* Partner Grid */}
        <div className="space-y-8 mb-16">
          {partners.map((partner, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 flex flex-col md:flex-row items-center gap-6 hover:shadow-xl transition-shadow">
              <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-slate-50 rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={partner.logoClass || 'w-full h-full object-contain'}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const placeholder = document.createElement('div');
                    placeholder.className = 'w-full h-full flex items-center justify-center bg-[#00c2b2]/10 rounded-lg';
                    placeholder.innerHTML = `<span class="text-3xl font-black text-[#00c2b2]">${partner.name.split(' ').map(w => w[0]).slice(0, 2).join('')}</span>`;
                    target.parentElement?.appendChild(placeholder);
                  }}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{partner.name}</h3>
                <p className="text-slate-600 leading-relaxed">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Partner werden</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Möchten Sie Schweinswale e.V. als Sponsor oder Kooperationspartner unterstützen? Kontaktieren Sie uns!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Jetzt Spenden
            </a>
            <a href="#kontakt" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
