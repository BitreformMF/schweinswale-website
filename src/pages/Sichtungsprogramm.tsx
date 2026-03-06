import { ChevronRight, ExternalLink } from 'lucide-react';
import HeroImage from "../components/HeroImage";

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250519235438im_/https://walschutz.org/wp-content/uploads/2016/11/';

export default function Sichtungsprogramm() {
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
          src={`${IMG}Zwei_Scheinswale_am_Elbufer_bei_Finkenwerder_by_Sophia_Wenger-300x169.jpg`}
          alt="Schweinswale am Elbufer bei Finkenwerder"
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
          <span className="text-slate-800 font-semibold">Sichtungsprogramm</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Bedrohte Sympathieträger: Schweinswale in den großen norddeutschen Flüssen
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Die Meeres-Biologin Denise Wenger ist seit Beginn ihres Schweinswal­sichtungsprogramms 2007 einem Phänomen auf der Spur: Schweinswale kommen nach etwa 100 Jahren wieder regelmäßig in den großen norddeutschen Flüssen Ems, Jade, Weser und Elbe vor.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Diese Schweinswale haben sich nicht in den Flusslauf verirrt, sondern sie verfolgen ein Ziel: Nahrung.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aufgrund der Datenlage müssen Schweinswale nun als fester Bestandteil der Biozönose der Flüsse betrachtet werden. Dabei muss der Zeitraum von etwa Mitte Februar bis Mitte Juni als besonders wichtig gelten, da zu dieser Zeit die Wanderungen in die Flüsse stattfinden und es Hinweise gibt, dass sich die Tiere bereits im Mai/Juni reproduzieren.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src={`${IMG}Zwei_Scheinswale_am_Elbufer_bei_Finkenwerder_by_Sophia_Wenger-300x169.jpg`}
              alt="Schweinswale am Elbufer"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Schweinswale am Elbufer. © Sophia Wenger
            </figcaption>
          </figure>
        </div>

        {/* Links */}
        <div className="bg-slate-50 rounded-xl p-6 mb-12 space-y-3">
          <a href="#" className="flex items-center text-[#00c2b2] hover:text-[#00a89a] font-semibold transition-colors">
            <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
            Rekord: So viele Schweinswale gab es noch nie in der Elbe – Hamburger Abendblatt
          </a>
          <a href="#" className="flex items-center text-[#00c2b2] hover:text-[#00a89a] font-semibold transition-colors">
            <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
            Schweinswal-Rekord in der Elbe – GEO.de
          </a>
          <a href="#" className="flex items-center text-[#00c2b2] hover:text-[#00a89a] font-semibold transition-colors">
            <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
            Hier können Sie Ihre Schweinswal-Sichtung Online melden
          </a>
          <a href="#" className="flex items-center text-[#00c2b2] hover:text-[#00a89a] font-semibold transition-colors">
            <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
            Hier können Sie alle Schweinswal-Sichtungen interaktiv ansehen
          </a>
          <a href="#" className="flex items-center text-[#00c2b2] hover:text-[#00a89a] font-semibold transition-colors">
            <ExternalLink className="w-4 h-4 mr-2 flex-shrink-0" />
            Hier sehen Sie, wo überall Schweinswale in diesem und in den vergangenen Jahren in Elbe, Weser, Ems und Jade gesichtet wurden
          </a>
        </div>

        {/* Beachtung der Sichtungsdaten */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Beachtung der Sichtungsdaten</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Mit den kleinen Tümmlern in Jade, Weser und Elbe ist auch in den nächsten Jahren zu rechnen. Bestimmte Eingriffe in dieses Verbreitungsgebiet wie Rammarbeiten oder Baggerungen könnten sie allerdings fernhalten oder gefährden. Der Schweinswal ist nach der europäischen Fauna-Flora-Habitatrichtlinie eine geschützte Art und bei Vorhaben, die in seinen Lebensraum eingreifen, muss eine Verträglichkeitsprüfung stattfinden und er in entsprechenden Umweltgutachten berücksichtigt werden.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              In der Weser können wir bereits erste Erfolge verbuchen. Unsere Daten wurden bei Planungsfeststellungsverfahren mit einbezogen und bereits bei drei Vorhaben eine Verschiebung von Rammarbeiten zeitlich auf weniger sensible Monate erreicht.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Die Daten aus der Elbe stellten wir dem NABU Schleswig-Holstein zur Verfügung, der ein Gutachten über das Schweinswalvorkommen in der Elbe im Hinblick auf die Elbvertiefung in Auftrag gab, und zusammen mit anderen Naturschutzorganisationen gegen die geplante, umstrittene Elbvertiefung klagt.
            </p>
          </div>
          <figure>
            <img
              src={`${IMG}Schweinswal_Entenwerder_Mrz_2016_Foto_Uwe_Wichmann_03-300x169.jpg`}
              alt="Schweinswal bei Entenwerder (Elbe)"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Schweinswal bei Entenwerder (Elbe). © Uwe Wichmann
            </figcaption>
          </figure>
        </div>

        {/* Risiko im Fluss */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Risiko im Fluss</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <figure>
            <img
              src={`${IMG}dead-porpoise-brake1-300x200.jpg`}
              alt="Toter Schweinswal"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Toter Schweinswal. © G. Mühlener
            </figcaption>
          </figure>
          <div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Dass die vielbefahrenen Wasserstraßen Weser und Elbe keine besonders guten Lebensräume für Schweinswale darstellen, liegt auf der Hand. In den zum Teil sehr engen Flussläufen stellen anscheinend vor allem schnelle Motorboote eine Gefahr dar.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Es gibt mehrere Hinweise darauf, dass Schweinswale Verletzungen durch Schiffsschrauben aufweisen, die nicht erst nach ihrem Tod entstanden sind, sondern als Todesursache in Betracht kommen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Durch Schiffsverkehr oder Baggerungen werden Sedimente aufgewirbelt und Giftstoffe ebenso wie krankheitserregende, anaerobe Bakterien können ins Wasser gelangen und eventuell mit Feinstoffteilchen mit der Nahrung aufgenommen werden.
            </p>
          </div>
        </div>

        {/* Langfristige Ziele */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Langfristige Ziele unseres „Schweinswal-Fluss-Projekts"</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <ul className="space-y-4 mb-12">
          {[
            'Förderung der Bekanntheit der Schweinswale und ihres Vorkommens in Ems, Jade, Weser und Elbe',
            'Verbesserter Schutz der Schweinswale mit konkreten praktischen Schutzmaßnahmen',
            'Ausweisung von bevorzugten Schweinswalgebieten',
            'Verbesserte Rettungsmaßnahmen für gestrandete Schweinswale',
            'Positive Beeinflussung der öffentlichen Meinung und der zuständigen Behörden',
            'Förderung ökologischer/nachhaltiger Fischereimethoden und damit Reduktion des Beifangs',
            'Förderung der Sympathie für die Kleinen Tümmler, auch bei Fischern',
            'Weitere Reduktion der Gewässerverschmutzung und Maßnahmen zur Aufwertung der Habitate',
          ].map((goal, i) => (
            <li key={i} className="flex items-start text-lg text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2.5 mr-4 flex-shrink-0"></span>
              {goal}
            </li>
          ))}
        </ul>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Zusätzlich setzen wir uns für einen besseren Schutz der Meeressäuger in der Nordsee ein, z.B. durch Zusammentragen der Informationen über Beifangzahlen, Recherchen über Auswirkungen der Fischerei auf die Fischvorkommen sowie Analyse der gewonnenen Erkenntnisse in Hinblick auf gebietsbezogene Bedeutung der deutschen Nordseeküste und der großen Flüsse für die Meeressäuger. Damit einher geht die Erarbeitung und Durchsetzung adäquater Schutzmaßnahmen für die Schweinswale durch Lobbyarbeit.
        </p>

        <p className="text-slate-600 leading-relaxed italic mb-12">
          Denise Wenger 2011
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Helfen Sie den Schweinswalen</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit Ihrer Spende unterstützen Sie unser Schweinswal-Sichtungsprogramm und den Schutz der Schweinswale in den norddeutschen Flüssen.
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
