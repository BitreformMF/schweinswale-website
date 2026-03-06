import { ChevronRight, Heart, Users, Binoculars, Gift, Building2 } from 'lucide-react';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function Spenden() {
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
          src={`https://web.archive.org/web/20250906010646im_/https://walschutz.org/wp-content/uploads/2016/11/Schweinswale-Sophia-Wenger6-300x200.jpg`}
          alt="Schweinswale"
          />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Helfen Sie</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Helfen Sie den Schweinswalen und Delfinen
        </h1>
        <div className="w-24 h-3 mb-6" style={wavyLine}></div>

        <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-3xl">
          Es gibt viele Wege, wie Sie unsere Arbeit unterstützen können. Jeder Beitrag – ob groß oder klein – hilft dabei, den Schutz der Schweinswale und Delfine voranzutreiben.
        </p>

        {/* Spenden */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-[#00c2b2] to-[#009e90] rounded-2xl p-8 text-white flex flex-col">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Spenden</h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Ihre Spende kommt direkt unseren Schutzprojekten zugute – ob für die Schweinswal-Forschung in Elbe und Weser, den Delfinschutz in Peru oder den Kampf gegen das Aussterben der Vaquitas. Jeder Euro zählt!
            </p>
            <p className="text-white/90 leading-relaxed mb-6">
              Spenden an Schweinswale e.V. sind steuerlich absetzbar. Im Online-Spendenformular können Sie Betrag, Spendenrhythmus und Zahlungsart selbst wählen.
            </p>

            <div className="bg-white/10 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-2">Online-Spendenformular</h3>
              <p className="text-white/80 text-sm">
                Wählen Sie auf der folgenden Seite Ihren Spendenbetrag, ob Sie einmalig oder regelmäßig spenden möchten, und Ihre bevorzugte Zahlungsart (SEPA-Lastschrift, Kreditkarte oder PayPal).
              </p>
            </div>

            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors w-full text-center block mt-auto">
              Jetzt online Spenden
            </a>
          </div>

          {/* Bankverbindung */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-slate-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Bankverbindung</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Sie möchten lieber per Überweisung spenden? Nutzen Sie bitte folgende Bankverbindung:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Kontoinhaber</span>
                <span className="text-slate-800 font-semibold">Schweinswale e.V.</span>
              </div>
              <div className="border-t border-slate-200"></div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Bank</span>
                <span className="text-slate-800 font-semibold">GLS Bank</span>
              </div>
              <div className="border-t border-slate-200"></div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">IBAN</span>
                <span className="text-slate-800 font-semibold text-sm">DE42 4306 0967 1203 2552 00</span>
              </div>
              <div className="border-t border-slate-200"></div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">BIC</span>
                <span className="text-slate-800 font-semibold">GENODEM1GLS</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic mt-auto">
              Bitte geben Sie Ihren Namen und Ihre Adresse im Verwendungszweck an, damit wir Ihnen eine Spendenbescheinigung ausstellen können.
            </p>
          </div>
        </div>

        {/* Fördermitgliedschaft */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Fördermitgliedschaft</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#00c2b2]/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#00c2b2]" />
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Als Fördermitglied unterstützen Sie unsere Arbeit nachhaltig und langfristig. Mit einem regelmäßigen Beitrag geben Sie uns die Planungssicherheit, die wir für unsere Projekte brauchen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Regelmäßige Informationen über unsere Projekte',
                  'Einladung zu Vereinsveranstaltungen und Exkursionen',
                  'Mitspracherecht bei der Mitgliederversammlung',
                  'Steuerlich absetzbar',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2 mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4">So werden Sie Fördermitglied</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fördermitglied können Sie bereits mit einem Jahresbeitrag von 25,- € werden, ermäßigt bereits ab 13,50 €! Füllen Sie unser Antragsformular aus und wählen Sie Ihren Beitrag und Ihre bevorzugte Zahlweise. Wir senden Ihnen anschließend den Aufnahmeantrag zu.
              </p>
              <div className="flex gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 border border-slate-200 flex-1 text-center">
                  <p className="text-sm text-slate-500 mb-1">Regulär</p>
                  <p className="text-2xl font-bold text-[#00c2b2]">25 € <span className="text-xs text-slate-500 font-normal">/ Jahr</span></p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200 flex-1 text-center">
                  <p className="text-sm text-slate-500 mb-1">Ermäßigt</p>
                  <p className="text-2xl font-bold text-[#00c2b2]">13,50 € <span className="text-xs text-slate-500 font-normal">/ Jahr</span></p>
                </div>
              </div>
              <a href="#foerdermitgliedschaft" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors w-full block text-center">
                Fördermitglied werden
              </a>
            </div>
          </div>
        </div>

        {/* Patenschaft */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Patenschaft übernehmen</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-[#00c2b2]/10 flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-[#00c2b2]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Delfin-Patenschaft</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Übernehmen Sie eine Patenschaft für einen der Paracas-Delfine in Peru! Im Formular wählen Sie Ihren Patendelfin, die Dauer der Patenschaft und Ihre Zahlweise.
            </p>
            <ul className="space-y-2 mb-8 text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2 mr-3 flex-shrink-0"></span>
                Persönliche Patenurkunde
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2 mr-3 flex-shrink-0"></span>
                Steckbrief Ihres Patendelfins
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2 mr-3 flex-shrink-0"></span>
                Regelmäßige Updates und Neuigkeiten
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#00c2b2] mt-2 mr-3 flex-shrink-0"></span>
                Wählen Sie aus 23 Patendelfinen
              </li>
            </ul>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-[#00c2b2]">50 €</span>
              <span className="text-slate-500">/ Jahr</span>
            </div>
            <a href="#patenschaftsformular" className="block bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors text-center mt-auto">
              Patenschaft beantragen
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-[#fbd334]/20 flex items-center justify-center mb-6">
              <Gift className="w-7 h-7 text-[#d4a800]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Patenschaft verschenken</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Eine Delfin-Patenschaft ist ein wundervolles Geschenk für Tier- und Naturliebhaber! Überraschen Sie Familie oder Freunde mit einer ganz besonderen Geschenkidee, die gleichzeitig den Artenschutz unterstützt.
            </p>
            <ul className="space-y-2 mb-8 text-slate-600">
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#fbd334] mt-2 mr-3 flex-shrink-0"></span>
                Personalisierte Geschenkurkunde
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#fbd334] mt-2 mr-3 flex-shrink-0"></span>
                Steckbrief des Patendelfins
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-[#fbd334] mt-2 mr-3 flex-shrink-0"></span>
                Perfekt für Geburtstage, Weihnachten oder andere Anlässe
              </li>
            </ul>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-black text-[#d4a800]">50 €</span>
              <span className="text-slate-500">/ Jahr</span>
            </div>
            <a href="#patenschaftsformular" className="block w-full bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors text-center mt-auto">
              Patenschaft verschenken
            </a>
          </div>
        </div>

        {/* Aktive Mithilfe */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Aktive Mithilfe</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-[#00c2b2]/10 flex items-center justify-center mb-6">
              <Binoculars className="w-7 h-7 text-[#00c2b2]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Sichtungen melden</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
              Sie haben einen Schweinswal in Elbe, Weser, Ems oder an der Nordseeküste gesichtet? Melden Sie Ihre Beobachtung! Jede Sichtung hilft uns, das Vorkommen und Verhalten der Schweinswale besser zu verstehen und Schutzmaßnahmen zu entwickeln. Unser Citizen-Science-Programm lebt von aktiven Beobachtern wie Ihnen.
            </p>
            <a href="#sichtung-melden" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors w-full mt-auto block text-center">
              Sichtung online melden
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 rounded-full bg-[#00c2b2]/10 flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-[#00c2b2]" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Weitersagen & teilen</h3>
            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
              Erzählen Sie Freunden und Bekannten von unserer Arbeit! Teilen Sie unsere Beiträge in den sozialen Medien und machen Sie auf die Bedrohung der Schweinswale aufmerksam. Je mehr Menschen Bescheid wissen, desto besser können wir die kleinen Wale schützen.
            </p>
            <a href="#kontakt" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors w-full mt-auto block text-center">
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Danke */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Vielen Dank für Ihre Unterstützung!</h3>
          <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-lg">
            Jede Hilfe zählt – ob Spende, Mitgliedschaft, Patenschaft oder aktive Mithilfe. Gemeinsam können wir den Schweinswalen und Delfinen eine Zukunft geben.
          </p>
        </div>
      </main>
    </>
  );
}
