import { ChevronRight, Award } from 'lucide-react';
import HeroImage from "../components/HeroImage";

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250803033817im_/https://walschutz.org/wp-content/uploads/';

export default function Team() {
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
          src={`${IMG}2020/03/STS_20140312_Schweinswal123-200x300.jpg`}
          alt="Denise Wenger bei der Schweinswal-Forschung"
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
          <span className="text-slate-800 font-semibold">Team</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Team
        </h1>
        <div className="w-24 h-3 mb-12" style={wavyLine}></div>

        {/* Denise Wenger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <img
              src={`${IMG}2017/03/DenisePortraitWebSW-150x150.jpg`}
              alt="Diplom-Biologin Denise Wenger"
              className="w-48 h-48 rounded-full object-cover shadow-xl mx-auto lg:mx-0"
              referrerPolicy="no-referrer"
            />
            <div className="text-center lg:text-left mt-4">
              <h2 className="text-2xl font-bold text-slate-800">Denise Wenger</h2>
              <p className="text-[#00c2b2] font-semibold">Diplom-Biologin</p>
              <p className="text-slate-500 text-sm mt-1">Gründerin und Vorsitzende von Schweinswale e.V.</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Denise Wenger, Diplom-Biologin. Seit mehr als 25 Jahren im Tier- und Artenschutz tätig. Ausbildung an der Ludwig-Maximilians-Universität München, Diplom mit 1,1 im Jahr 1991, Diplomarbeit und wissenschaftliche Mitarbeit am Max-Planck-Institut für Verhaltensforschung Seewiesen/Andechs (ehem. Konrad Lorenz).
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Danach in der Redaktion des Landesamtes für Umweltschutz tätig, Mitwirkung an der Roten Liste bedrohter Tiere. Im internationalen Tierschutz gegen Elfenbeinhandel und Bärengalleproduktion tätig 1993-1994.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Ab 1994 bis 2016 (22 Jahre) als Biologin, Projektleiterin und Pressesprecherin bei der Gesellschaft zur Rettung der Delphine e.V. (GRD) beschäftigt, wesentlich am Aufbau des Vereins und Einführung der Projekte beteiligt. Gründerin, Projektleiterin und Pressesprecherin von Schweinswale e.V., ehrenamtlich tätig.
            </p>
          </div>
        </div>

        {/* Feldarbeit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <figure>
            <img
              src={`${IMG}2020/03/STS_20140312_Schweinswal123-200x300.jpg`}
              alt="Schweinswal-Forschung in der Weser"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Schweinswal-Forschung in der Weser: Biologin Denise Wenger beim Ausbringen von CPODs in der Weser bei Brake
            </figcaption>
          </figure>
          <figure>
            <img
              src={`${IMG}2020/03/Denise-La-Rochelle3-200x300.jpg`}
              alt="Denise Wenger an der Französischen Atlantikküste"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Französische Atlantikküste 1997: Über 500 Delfine und Schweinswale wurden nach einem Sturm tot an die Küste geschwemmt – zusammen mit unzähligen Fischernetzresten. Ein Ende der Treibnetzfischerei wurde gefordert und hatte Erfolg: Treibnetze wurden in der EU verboten.
            </figcaption>
          </figure>
        </div>

        {/* Umweltpreis */}
        <div className="bg-amber-50 rounded-xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Umweltpreisverleihung „Trophée de femmes" 2014</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Denise Wenger ist im Februar 2014 mit dem „Trophée de femmes", einem Umweltpreis für Frauen, der von der Umweltstiftung Yves Rocher vergeben wird, für ihr Projekt zu Vorkommen und Schutz von Schweinswalen in Elbe, Weser und an der Nordseeküste ausgezeichnet worden.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Die Umweltstiftung „Yves Rocher" ehrt Frauen mit dem Umweltpreis „Trophée de femmes" für ihre besonderen Verdienste im Natur- und Umweltschutz.
              </p>
            </div>
          </div>
          <figure className="mt-6 max-w-lg mx-auto">
            <img
              src={`${IMG}2021/07/Trophee-de-femmes-2014-Stuttgart024-683x1024.jpg`}
              alt="Trophée de femmes 2014 Verleihung"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic text-center">
              Trophée de femmes 2014, Stuttgart – Umweltstiftung Yves Rocher. V.l.n.r.: Silvia Hämmerle, Denise Wenger, Christine von Weizsäcker
            </figcaption>
          </figure>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Unterstützen Sie unsere Arbeit</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie die Forschungs- und Schutzarbeit von Schweinswale e.V.
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
