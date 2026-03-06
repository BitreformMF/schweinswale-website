import { ChevronRight, Target, Search, Shield, Users } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250906004139im_/https://walschutz.org/wp-content/uploads/';

export default function Verein() {
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
          <span className="text-slate-800 font-semibold">Ziele</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Verein
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Mission Statement */}
        <div className="bg-slate-50 rounded-xl p-8 mb-12 border-l-4 border-[#00c2b2]">
          <p className="text-xl text-slate-700 leading-relaxed font-semibold">
            Schweinswale e.V. ist eine Organisation, die sich weltweit für den Schutz von Schweinswalen und küstennah lebenden Delfinpopulationen einsetzt.
          </p>
        </div>

        {/* Präambel */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Präambel</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Der Schweinswal (Phocoena phocoena) ist die einzige in Deutschland heimische Walart. Sie kommen ganzjährig in den deutschen Gewässern in Nord- und Ostsee vor und bringen hier auch ihre Jungen zur Welt.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Als küstennah lebende Art sind sie durch viele menschliche Aktivitäten wie Stellnetzfischerei, Überfischung, Sprengung von Munitionsaltlasten, Ölförderung, Bau von Offshore-Windkraftanlagen und zunehmenden Schiffsverkehr in ihren Lebensräumen bedroht.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Eine Subpopulation in der zentralen Ostsee ist mit etwa 350 Individuen vom Aussterben bedroht.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Durch das neuerliche, verstärkte Vorkommen der Schweinswale an der Nordseeküste und in den daran angrenzenden großen Flüssen kommt es wegen der damit verbundenen speziellen Bedrohungsfaktoren zu vermehrten Todesfällen von Schweinswalen.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src={`${IMG}2017/02/Schweinswale-LOGO_blau-mit-Schein_500x500-300x300.jpg`}
              alt="Schweinswale e.V. Logo"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
          </figure>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Schweinswale e.V. führt eigene Forschungen und ein Sichtungsprogramm und erfolgreiches Citizen-Science-Projekt zum Vorkommen und Verhalten der Schweinswale in Weser und Elbe durch. Zudem wird die Bergung von toten Schweinswalen und deren Untersuchung forciert, um mehr über die Todesursachen und Erkrankungen zu erfahren und Empfehlungen für Schutzmaßnahmen geben zu können.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Weltweit gibt es sechs verschiedene Schweinswalarten, die sich deutlich im Aussehen unterscheiden und deren Lebensräume nicht überlappen. Gemeinsam ist ihnen aber die küstennahe Lebensweise, die sie vielfältigen Bedrohungsfaktoren aussetzt.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Zu den Schweinswalen zählt auch der im Golf von Mexiko lebende „Vaquita", die vermutlich kleinste Cetaceen-Art (Phocoena sinus). Diese Art, auch Kalifornischer Hafenschweinswal genannt, steht unmittelbar vor dem Aussterben. Der Vaquita könnte nach dem Chinesischen Flussdelfin die nächste Cetaceen-Art sein, die in unserer Zeit ausstirbt.
        </p>

        {/* Ziele */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Ziele des Vereins</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-[#00c2b2]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Schutzmaßnahmen & Projekte</h3>
              <p className="text-slate-600">Initiierung, Durchführung und Förderung von Schutzmaßnahmen und Projekten weltweit</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
              <Search className="w-6 h-6 text-[#00c2b2]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Forschung</h3>
              <p className="text-slate-600">Erforschung von Bedrohungsfaktoren und Erarbeitung von Schutzmaßnahmen</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[#00c2b2]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Schutzgebiete</h3>
              <p className="text-slate-600">Durchsetzung der Einrichtung von Schutzgebieten</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-[#00c2b2]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Öffentlichkeitsarbeit</h3>
              <p className="text-slate-600">Bereitstellung von Informationen für die Öffentlichkeit</p>
            </div>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed italic mb-12">
          © Schweinswale e.V. / Denise Wenger
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Unterstützen Sie unsere Arbeit</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie die Schutzprojekte von Schweinswale e.V. für Schweinswale und Delfine weltweit.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Jetzt Spenden
            </a>
            <a href="#foerdermitgliedschaft" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Mitglied werden
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
