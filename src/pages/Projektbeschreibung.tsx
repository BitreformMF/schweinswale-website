import { ChevronRight } from 'lucide-react';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function Projektbeschreibung() {
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
          src={`https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2020/03/Peru-Dolphin-Project-2016-p.jpg`}
          alt="Delfin- und Meeresschutzprojekt Peru"
          />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#sichtungsprogramm" className="hover:text-[#00c2b2] transition-colors">Projekte</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#projektbeschreibung" className="hover:text-[#00c2b2] transition-colors">Delfine in Peru</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Projektbeschreibung</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Delfin- und Meeresschutzprojekt Paracas-Halbinsel in Peru
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Etwa 30 Wal- und Delfinarten sind im Pazifik vor Peru anzutreffen. Sogar eine eigene Art, der Peruanische Schnabelwal (Mesoplodon peruvianus), wurde hier entdeckt und von Julio Reyes erstmals beschrieben. Doch so vielfältig die Arten, so vielfältig sind auch die Gefahren, denen vor allem die Kleinwale in den Gewässern des Andenstaates ausgesetzt sind.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Aufgrund der Bedrohungssituation für die Delfine in Peru ist die Zusammenarbeit 1999 mit der peruanischen Meeresschutzorganisation ACOREMA begonnen worden. Damals wurden die Delfine in Paracas noch harpuniert, ihr Fleisch auf den Fischmärkten als <em>chancho marino</em> verkauft. Durch Delfin-Patenschaften für die vor Ort lebenden Delfine konnte die Projektarbeit getragen werden und so ein großes und erfolgreiches Projekt ins Leben gerufen und aufgebaut werden. Heute genießen die Delfine in Paracas einen guten Schutz durch ihre Bekanntheit und Beliebtheit bei der Bevölkerung.
        </p>

        {/* ACOREMA Team Photo */}
        <figure className="mb-10">
          <img
            src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2017/02/At-ACOREMA-Centre-21JAN2005-OK-1024x683.jpg"
            alt="Julio Reyes, Denise Wenger und Monica Echegaray im ACOREMA-Meeresschutzzentrum"
            className="w-full h-auto rounded-lg shadow-xl"
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-sm text-slate-500 mt-3 italic">
            Julio Reyes, Denise Wenger und Monica Echegaray im ACOREMA-Meeresschutzzentrum in Pisco (Paracas) 2005
          </figcaption>
        </figure>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Dank der Unterstützung von Delfinpaten, Förderern und Sponsoren wie Rapunzel Naturkost und Deutsche Umwelthilfe mit Mitteln aus dem HAND-IN-HAND-Fonds konnten bis heute zahllose Teilprojekte gegen die direkte Jagd auf Delfine, gegen Dynamitfischerei und Meeresverschmutzung erfolgreich durchgeführt werden sowie Projekte mit Schulen und intensive Öffentlichkeitsarbeit.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Die Integrierung vieler Bevölkerungsgruppen in die Delfinschutzarbeit führte zu einer großen Akzeptanz unseres Projekts und Beliebtheit der Meeressäugetiere.
        </p>

        {/* Situation Section */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Situation zu Beginn unseres Projekts</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-1">
            <figure>
              <img
                src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2016/11/dolphin_for_sale_at_fishmarket-300x180.jpg"
                alt="Toter Delfin auf einem Fischmarkt in Peru"
                className="w-full h-auto rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">
                Toter Delfin auf einem Fischmarkt in Peru. Foto: ACOREMA
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-4">
              Delfinfleisch stand vielerorts noch auf dem Speiseplan und wurde trotz bestehender Verbote auf Fischmärkten verkauft, wie eine von der GRD finanzierte Studie von ACOREMA ergab.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Die Delfine waren teilweise als Beifang verendet, wurden aber auch gezielt mit Harpunen gejagt. Zerstückelt dienten sie auch als billiger Köder zum Fang von Haien.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Studie wurde an die zuständigen Behörden geleitet, mit der Forderung um stärkere Kontrollen und Umsetzung des Gesetzes zum Schutz der Kleinwale.
            </p>
          </div>
        </div>

        {/* Supay & Paracas Delfine */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4 mt-16">
          Schutz der Supay-Delfine und der Paracas-Delfine
        </h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-8">
          Um die Popularität der Delfine zu erhöhen und Informationen über ihre Biologie, Bedrohungssituation und ihren Schutzstatus zu verbreiten, werden seit 1999 Delfinbeobachtungen entlang der Küste durchgeführt.
        </p>

        {/* Supay Delfine */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Die Supay-Delfine</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <figure>
            <img
              src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2016/11/Karte_Delfine_vor_der_Paracas-Halbinsel-278x300.jpg"
              alt="Karte: Lebensraum zweier ortstreuer Delfingruppen vor der Paracas-Halbinsel"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Karte: Lebensraum zweier ortstreuer Delfingruppen vor der Paracas-Halbinsel. Foto: ACOREMA
            </figcaption>
          </figure>
          <div>
            <p className="text-slate-600 leading-relaxed mb-4">
              Im Süden der Paracas-Halbinsel wird ab 1999 eine kleine, isolierte Gruppe Großer Tümmler, die Supay-Delfine, beobachtet, die im Paracas Nationalreservat lebt und anscheinend keinen Austausch mit anderen Delfingruppen hat. Sie ist durch mehrere Faktoren, wie z.B. illegale Dynamitfischerei, gefährdet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Supay-Delfine werden die ersten Paten-Delfine der GRD. Sie werden regelmäßig beobachtet und individuell identifiziert.
            </p>
          </div>
        </div>

        <figure className="mb-8">
          <img
            src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2016/11/Bold-300x158.jpg"
            alt="Bold - ein unerschrockenes Junges"
            className="w-full max-w-md h-auto rounded-lg shadow-xl"
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-sm text-slate-500 mt-3 italic">
            Bold war ein unerschrockenes Junges, das dem Rest der Gruppe voraus schwamm und in die Gruppe der größeren Tiere drängte, um zu fressen. Foto: ACOREMA
          </figcaption>
        </figure>

        <p className="text-slate-600 leading-relaxed mb-12">
          Die Schutzmaßnahmen greifen: glücklicherweise konnte in den letzten Jahren endlich wieder mehrfach Nachwuchs verzeichnet werden und die Gruppe ist mit mehreren Jungtieren mittlerweile auf 22 Mitglieder angewachsen.
        </p>

        {/* Paracas Delfine */}
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Die Paracas-Delfine</h3>

        <p className="text-slate-600 leading-relaxed mb-6">
          Nördlich der Paracas-Halbinsel in der gleichnamigen Bucht wurde eine größere Gruppe ortstreuer Großer Tümmler entdeckt.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Über 110 Tiere wurden mittlerweile von ACOREMA anhand ihrer Finne individuell identifiziert. Viele davon frequentieren die Bucht regelmäßig oder leben dort ständig und wir wissen einiges über ihr Leben. Auch für diese Delfine können Patenschaften übernommen werden.
        </p>

        <figure className="mb-8">
          <img
            src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2016/11/Andrea_mit_ihrem_Baby-300x158.jpg"
            alt="Patendelfinin Andrea mit Baby"
            className="w-full max-w-md h-auto rounded-lg shadow-xl"
            referrerPolicy="no-referrer"
          />
          <figcaption className="text-sm text-slate-500 mt-3 italic">
            Patendelfinin Andrea mit Baby
          </figcaption>
        </figure>

        <p className="text-slate-600 leading-relaxed mb-6">
          Die Paracas-Delfine sind negativen menschlichen Eingriffen am stärksten ausgesetzt wie beispielsweise Meeresverschmutzung durch Chemikalien, Abwässer oder Plastikmüll. Die direkte Jagd auf diese Delfine wurde dank des Schutzprojekts und Aufklärung der Bevölkerung und Fischer in Paracas eingestellt.
        </p>
        <p className="text-slate-600 leading-relaxed italic mb-12">
          Denise Wenger – Projektleitung | Fotos: ACOREMA
        </p>

        {/* Schulprojekte */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4 mt-16">Bildung und Aufklärung</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-8">
          ACOREMA führt viele Aktionen, Wettbewerbe und Vorlesungen an Schulen durch, damit die Kinder über die ortstreuen Delfine, die direkt an ihrem Strand leben, informiert sind und in umweltschutzrelevante Themen wie Plastikmüllvermeidung, Ökosystemschutz, Recycling oder Klimawandel eingeführt werden können.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <figure>
            <img
              src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2020/03/Monica-Echegaray-lectures-1-1-1024x576.jpg"
              alt="Monica Echegaray informiert Schulkinder über Delfine in Paracas"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Monica Echegaray informiert Schulkinder über ihre Nachbarn am Strand: die Delfine in Paracas
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2020/03/JulioPeruRecycPhoto-08.jpg"
              alt="Julio Reyes bei einer Aktion gegen Plastikmüll"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Julio Reyes, ACOREMA, bei Durchführung einer Aktion gegen Plastikmüll und für Recycling
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <figure>
            <img
              src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2020/03/h-Ferienkurs-für-Fischerkinder-San-Andres-Paracas-Feb.-2012-588-1024x768.jpg"
              alt="Sommerferienkurs für Fischerkinder in San Andres"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Biologin Denise Wenger zu Besuch bei ACOREMAs Sommerferienkurs für Fischerkinder in San Andres
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://web.archive.org/web/20250209021024im_/https://walschutz.org/wp-content/uploads/2020/03/Students-of-the-Las-Antillas-School-Paracas-with-marine-mammal-booklet-576x1024.jpg"
              alt="ACOREMA Poster mit Schülern der Schule Las Antillas"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              ACOREMA Poster mit Schülern der Schule Las Antillas: Alle Wale Perus
            </figcaption>
          </figure>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Unterstützen Sie unsere Arbeit in Peru</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit einer Delfin-Patenschaft oder Spende helfen Sie uns, die Delfine vor der Küste Perus langfristig zu schützen und die Aufklärungsarbeit vor Ort fortzusetzen.
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
