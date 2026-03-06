import { ChevronRight } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function OrtsstreueDelfine() {
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
          src="https://web.archive.org/web/20250430074251im_/https://walschutz.org/wp-content/uploads/2016/11/Seeloewen_liegen_auf_felsiger_Kueste-300x200.jpg"
          alt="Seelöwen an der Küste von Paracas"
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
          <a href="#sichtungsprogramm" className="hover:text-[#00c2b2] transition-colors">Projekte</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#projektbeschreibung" className="hover:text-[#00c2b2] transition-colors">Delfine in Peru</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Ortstreue Delfine in der Paracas-Bucht</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Ortstreue Delfine in der Paracas-Bucht
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Die meisten Menschen, die das Gebiet Pisco-Paracas im Süden Perus besuchen, machen einen Ausflug zu den Ballestas-Inseln, einem besonderen Beispiel für die vom kalten Humboldtstrom hervorgerufene, reichhaltige Biodiversität.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Die Inseln, die etwa 20 Meilen vor der Küste liegen, zeigen eine Fülle an Leben, mit Hunderten von Seelöwen und Tausenden Seevögeln, die die meiste Zeit ihres Lebens auf oder bei den Inseln verbringen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aber eine der aufregendsten Erfahrungen kann man kurz nach der Abfahrt von El Chaco, dem Starthafen der Boote, in der Paracas-Bucht machen: das Zusammentreffen mit einer Gruppe Delfine. Große Tümmler (Tursiops truncatus) leben in der Bucht und ziehen die Aufmerksamkeit der Besucher auf sich.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src="https://web.archive.org/web/20250430074251im_/https://walschutz.org/wp-content/uploads/2016/11/Seeloewen_liegen_auf_felsiger_Kueste-300x200.jpg"
              alt="Seelöwen. Foto: Denise Wenger"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Seelöwen. Foto: Denise Wenger
            </figcaption>
          </figure>
        </div>

        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Aber sie sind nicht einfach nur Große Tümmler. Diese Delfine gehören zu einer ortstreuen Gruppe, die mit Unterstützung der GRD seit 2004 regelmäßig von uns beobachtet wird. Wir nennen sie die A-Gruppe oder die Paracas-Delfine.
        </p>

        {/* Woher wissen wir */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Woher wissen wir, dass sie ortstreu sind?</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Anhand ihrer Rückenfinne können wir die Delfine voneinander unterscheiden. Natürliche Markierungen wie Einkerbungen, Narben oder Entfärbungen dienen uns zur Erkennung jedes Individuums und erlauben uns einen Einblick in verschiedene Aspekte ihrer Biologie.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Zum Beispiel konnte ihr Verbreitungsgebiet nachgewiesen werden, das sich etwa 55 Kilometer entlang der Küste zwischen der Paracas-Bucht und der Provinz Chincha erstreckt, denn wir haben bestimmte Delfine an beiden Orten während unserer kontinuierlichen Beobachtungen wiedererkannt.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Auch ein anderer Teil ihrer Lebensgeschichte ist uns bekannt: Sie bekommen ihre Jungen im hiesigen Sommer, während dieser Zeit konnten wir ihre Neugeborenen und ganz junge Kälber beobachten. Ihre Ortstreue kann durch wiederholte Beobachtungen bestimmter Individuen nachgewiesen werden – und genau das tun wir.
        </p>
        <p className="text-slate-600 leading-relaxed mb-8">
          Wir fahren mit einem kleinen Boot zu der Gruppe, sammeln Informationen über sie, machen Fotos und erstellen einen Katalog mit Daten über jedes Individuum. Wir geben ihnen Namen, keine Nummern, und erleichtern uns somit die Arbeit, weil wir umso vertrauter mit ihnen und ihrer Geschichte werden.
        </p>

        {/* Bekannte Delfine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-slate-600 leading-relaxed mb-6">
              So hat Queen drei kleine Knöpfe in der Spitze ihrer Finne, was wie eine Krone aussieht. Wir wissen, dass sie ein Weibchen ist, denn im vergangenen Februar wurde sie mit einem sehr kleinen Jungtier gesehen.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Corky II hat einen großen Buckel im vorderen Teil des Rückens. Vitali fehlt ein großer Teil seiner Fluke, aber er macht große Anstrengungen, um mit der Gruppe mitzuhalten, wobei er meist von anderen Delfinen unterstützt wird. Silver ist ein Delfin mit leuchtenden Streifen an beiden Seiten seiner Rückenfinne.
            </p>
          </div>
          <figure>
            <img
              src="https://web.archive.org/web/20250430074251im_/https://walschutz.org/wp-content/uploads/2016/11/Vitali-300x158.jpg"
              alt="Peru Patendelfin Vitali"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Peru Patendelfin Vitali. Foto: ACOREMA
            </figcaption>
          </figure>
        </div>

        {/* Bedrohungen */}
        <p className="text-slate-600 leading-relaxed mb-6">
          Da wir viel über diese Delfine wissen, sind uns auch die Faktoren bekannt, die ihr Überleben bedrohen, denn das Gebiet, in dem sie leben, ist stark von menschlichen Einflüssen geprägt: der Fischerei mit ihren Gefahren wie Beifang, aber auch direkter Jagd, Dynamitfischerei und letztendlich eine Verringerung der Fischbestände, der Hauptnahrung der Delfine. Die industrielle Entwicklung der Gegend umfasst mehrere Fischmehlfabriken entlang des Strandes, Öl- und Gasförderung und damit zunehmende Meeresverschmutzung.
        </p>
        <p className="text-slate-600 leading-relaxed mb-12">
          All diese Probleme sind für einen Rückgang der Anzahl der Delfine dieser Gruppe verantwortlich, die noch Anfang der 90er Jahre 100 bis 130 Individuen zählte, heute jedoch nur mehr etwa 70 bis 80 Mitglieder aufweist.
        </p>

        {/* Veränderung des Verhaltens */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Veränderung des Verhaltens</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Die durchschnittliche Gruppengröße ist mit einem Wert von 12,2 vergleichsweise hoch. Wir vermuten, dies ist auf eine neue, besondere Verhaltensweise der Delfine zurückzuführen, die sich hier nun etabliert hat: Da die Fischer keine Jagd mehr auf die Delfine machen, aber Fischabfälle in der Bucht über Bord werfen, haben sich die Meeressäuger angewöhnt, diese einfache Nahrungsquelle auszunutzen, sich um die Fischerboote schon bei deren Einfahren in die Bucht zu gruppieren und die Fischreste, die über Bord gehen, beim Absinken zu schnappen oder vom Grund aufzusammeln.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Ähnliches kennen wir auch von anderen Projekten und Gelegenheiten, z.B. Fischzuchtanlagen, die von Großen Tümmlern aufgesucht werden, da immer ein paar kleinere Fische den Umzäunungen entkommen und so einen schnellen Happen darstellen, oder aber von Berichten, wo Delfine direkt gefangene Fische aus dem Netz klauben (aus Sicht der Fischer: „klauen"; aus Sicht der „unwissenden" Delfine: „zappelnde Fische als leichte Beute schnappen").
        </p>
        <p className="text-slate-600 leading-relaxed mb-12">
          Oft aber verfangen sich die Delfine dabei im Netz und ertrinken oder schlucken Netzreste mit, an denen sie ebenfalls verenden können. In Paracas nun finden sich die Großen Tümmler meist innerhalb eines Kilometers und oft nicht weiter als Hundert Meter entfernt vom Strand zwischen den ankernden Booten und der Anlandungsstelle für den Fischmarkt ein.
        </p>

        {/* Neue Nahrungsstrategie */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Neue Nahrungsstrategie</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Aus biologischer Sicht wird durch das Überbordwerfen der Fischabfälle, dem sich die Großen Tümmler durch das Aufsammeln der Fischreste von der Wasseroberfläche angepasst haben, bereits das natürliche Verhalten der Delfine geändert. Der Mensch greift, wenn auch unabsichtlich, ein. Wir wissen nicht, ob sich ansonsten so viele Delfine ständig in der Bucht aufhalten würden und ob ein Delfin wie Vitali ohne Schwanzfluke überleben könnte.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Viele verschiedene Verhaltensweisen konnten bei den Paracas-Delfinen beobachtet werden, wie z.B.: an der Wasseroberfläche kreisen, aktives Beutejagen, Fressen, im seichten Wasser fast senkrecht stehend vom Meeresboden fressend, Springen, Umhertragen von Objekten wie beispielsweise einen leeren Fischmehlsack, Ausruhen und den Fischerbooten folgen.
        </p>
        <p className="text-slate-600 leading-relaxed mb-12">
          Als im Dezember 2008 ein Fisch-Massensterben auftrat, war die einzige beobachtete Fischfangmethode der Delfine das „bottom feeding", also vom Meeresgrund aufsammeln.
        </p>

        {/* Hautkrankheiten */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Hautkrankheiten durch Meeresverschmutzung</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <p className="text-slate-600 leading-relaxed mb-6">
              Eine neue wissenschaftliche Entdeckung war das Auftreten von Hautkrankheiten bei den Paracas-Delfinen, die vermutlich im Zusammenhang mit der Meeresverschmutzung in der Bucht stehen. Hier werden die ungeklärten Abwässer von Pisco und giftige Chemikalien, die zur Reinigung der Fischerboote und Fischmehlfabriken verwendet werden, eingeleitet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Kontamination scheint Infektionen zu begünstigen, so auch Erkrankungen der Haut durch Pilz-, Viren und Bakterienbefall. Die Großen Tümmler haben offene rote Wunden, die sich im weiteren Verlauf der Erkrankung verfärben. Manchmal lösen sich dabei Hautteile und bei einem Delfin fiel sogar die ganze Spitze der Finne ab. Eine Publikation darüber wurde beim Wissenschaftsausschuss der IWC (Internationale Walfangkommission) eingereicht.
            </p>
          </div>
          <figure className="lg:col-span-1">
            <img
              src="https://web.archive.org/web/20250430074251im_/https://walschutz.org/wp-content/uploads/2016/11/Pisco-300x158.jpg"
              alt="Peru Patendelfin Pisco"
              className="w-full h-auto rounded-lg shadow-xl"
              referrerPolicy="no-referrer"
            />
            <figcaption className="text-sm text-slate-500 mt-3 italic">
              Peru Patendelfin Pisco. Foto: ACOREMA
            </figcaption>
          </figure>
        </div>

        <p className="text-slate-600 leading-relaxed mb-6">
          2008 fiel besonders Tatoo auf. 2004 wies dieser Große Tümmler eine frische, rötliche Infektion an der Finnenspitze auf, die aber im Januar 2005 verheilt war. Im Juli 2007 trat an der gleichen Stelle erneut eine Infektion sichtbar auf, die im Juli 2008 bereits wieder abgeheilt war.
        </p>
        <p className="text-slate-600 leading-relaxed mb-12">
          Vitali Pal, unser – von vielen schönen Fotos, die ihn springend über der Wasseroberfläche zeigen – am besten bekannter Patendelfin, wurde 2008 erst nicht wiedererkannt, so sehr hatte sich seine Rückenfinne geändert durch Zahnspuren und ein paar kleine fehlende Stücke am hinteren Rand seiner Rückenfinne. Doch durch ein Computerprogramm konnte die richtige Identifizierung gelingen.
        </p>

        {/* Interaktionen mit Booten */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Interaktionen mit Booten</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Seit Bekanntwerden der Paracas-Delfine durch unser Schutzprojekt haben die Tour-Guides, die Touristen zu den nahegelegenen Ballestas-Inseln mit Seelöwen und Humboldtpinguinen als Hauptattraktionen fahren, auch die Großen Tümmler in der Paracas-Bucht in ihr Programm aufgenommen.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          ACOREMA und GRD haben allen Guides Verhaltensregeln zum „sanften" Beobachten der Delfine zusammengestellt und ausgehändigt. Im Durchschnitt verweilen die Boote etwa 4 bis 5 Minuten bei den Delfinen, indem sie nicht zu nah heranfahren und ihr Boot so anhalten und stellen, dass die Delfine sich annähern können. Beobachtungen 2008 ergaben, dass die Delfine ihr Verhalten wenig änderten, sich gegenüber den Touristenbooten indifferent und nur wenig Störverhalten zeigten.
        </p>
        <p className="text-slate-600 leading-relaxed mb-12">
          In einem Fall konnte 2008 allerdings beobachtet werden, dass ein Tourenboot mit (zu) hoher Geschwindigkeit an die Delfingruppe heranbrauste und erst wenige Meter vor den Tieren stoppte. Die Delfine gruppierten sich schnell und schwammen davon.
        </p>

        {/* Schutzmaßnahmen */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Schutzmaßnahmen</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-slate-600 leading-relaxed mb-6">
          Die bisher gesammelten Erfahrungen zeigen, wie wichtig es ist, die ansässige Bevölkerung über die Biologie der Delfine in der Bucht, über Bedrohungsfaktoren wie Meeresverschmutzung (die letztendlich auch die Menschen selbst betrifft), über die sinnvolle Regulierung des „Dolphin Watching" zu informieren und nötige Schutzmaßnahmen vorzustellen.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Durch große Poster, die an zentralen Plätzen wie z.B. dem Ticketverkaufsschalter für die Ausflüge zu den Ballestas-Inseln oder dem Haupteingang des Nationalreservats aufgehängt wurden, durch das Verteilen kostenloser Broschüren über die Paracas-Delfine, durch Informationsabende und Schulprojekte, Zusammenarbeit mit dem Nationalreservat und den örtlichen Behörden versuchen ACOREMA und GRD, einen besseren Schutz der Delfine durchzusetzen.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          Angesichts der Bedrohungen, denen diese Delfine ausgesetzt sind, sind sofort verstärkte Maßnahmen nötig, um sie und ihren Lebensraum zu schützen. Wir müssen jetzt alle helfen und immer mehr Menschen in die Schutzbemühungen einbinden, damit die Begegnung mit den „Paracas-Delfinen" weiterhin ein wundervolles Erlebnis bleibt.
        </p>
        <p className="text-slate-600 leading-relaxed italic mb-12">
          Denise Wenger
        </p>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Unterstützen Sie die Paracas-Delfine</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Mit einer Delfin-Patenschaft oder Spende helfen Sie uns, die ortstreuen Delfine in der Paracas-Bucht langfristig zu schützen.
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
