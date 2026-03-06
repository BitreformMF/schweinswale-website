import { useState } from 'react';
import { ChevronRight, Calendar, Tag, ArrowLeft } from 'lucide-react';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://walschutz.org/wp-content/uploads/';

interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
  content: string[];
}

const articles: Article[] = [
  {
    id: 'top-5-patendelfine',
    title: 'Die Top 5 – Paracas-Patendelfine',
    date: '15. Februar 2022',
    category: 'Aktuelle Meldungen',
    excerpt: '22 Jahre Zusammenarbeit und Delfine in der Bucht. Seit meinem ersten Besuch bei der peruanischen Meeresschutzorganisation ACOREMA vor über 20 Jahren haben wir viel erreicht.',
    image: `${IMG}2022/02/Delfine-Paracas-Bucht.png`,
    content: [
      'Von Denise Wenger',
      '22 Jahre Zusammenarbeit und Delfine in der Bucht',
      'Seit meinem ersten Besuch bei der peruanischen Meeresschutzorganisation ACOREMA vor über 20 Jahren im Jahr 1999 in Pisco und der malerischen Paracas-Bucht mit ihren Delfinen ist die Zusammenarbeit mit Julio Reyes und ACOREMA sehr gut und erfolgreich zum Schutz der Delfine.',
      'Damals war noch nicht bekannt, dass immer dieselben Delfine in die Bucht schwimmen. Die von mir mitgebrachte Kamera und das Spektiv halfen, festzustellen, dass viele der Großen Tümmler ortstreu sind und immer wieder in die Bucht zurückkehren, wie ich vermutet und gehofft hatte. Seit damals identifizieren der Biologe und seine Kollegen anhand einzigartiger Merkmale wie Form und Zeichnungen der Rückenfinne oder Narben die Großen Tümmler individuell und dokumentieren ihren Aufenthalt in der Bucht.',
      'Ein sicherer Ort für Delfinmütter',
      'Seit diesen etwa 22 Jahren Zusammenarbeit ist viel passiert und hat sich viel verändert, aber noch immer kommen viele Individuen dieser Großen Tümmler-Gruppe regelmäßig in die Paracas-Bucht, vor allem Weibchen, um dort ihre Kälber geschützt vor den Launen und Strömungen des Pazifiks zur Welt zu bringen. Projekte zu ihrem Schutz sind erfolgreich.',
      'Heute möchten wir Ihnen die fünf am häufigsten über einen sehr langen Zeitraum hinweg von Julio Reyes in der Bucht beobachteten Großen Tümmler vorstellen. Für diese Delfine kann eine Patenschaft übernommen werden und so zu Schutzprojekten vor Ort beigetragen werden.',
      'Longscar – seit 17 Jahren in der Bucht gesichtet: Wie der Name schon sagt, trägt dieser weibliche Delfin eine gebogene, lineare Narbe entlang der Vorderkante auf der rechten Seite der Rückenflosse. Longscar wurde zum ersten Mal im Juni 2004 gesichtet und ohne Unterbrechung in der Paracas-Bucht bis zuletzt im November 2021 beobachtet.',
      'Sharpy – liebt es, zu springen: Sharpy wurde erstmals Mitte 2005 gesichtet und ist unverkennbar an einem spitzen Vorsprung an der Hinterkante der Rückenflosse zu erkennen. Sharpy ist eine Art „extrovertierter Delfin" und derjenige unter den Delfinen der Paracas-Bucht, bei dem die meisten Aufzeichnungen über Sprungverhalten vorliegen.',
      'Shalom – Schüler gaben ihm diesen Namen: Die erste Sichtung dieses Delfins erfolgte im Dezember 2007. Im Jahr 2015 beschlossen die Schüler der Jean-Piaget-Schule in San Andrés, Pisco, diesen Delfin zu adoptieren und gaben ihm den Namen Shalom.',
      'Breeze – hatte eine Harpunenverletzung: Breeze ist ein Weibchen, das seit Juni 2004 jedes Jahr in der Paracas-Bucht gesichtet wird. Es ist an den zahlreichen Kerben in der Hinterkante seiner Rückenflosse und einer alten Harpunenwunde in der linken Flanke zu erkennen.',
      'Trinity – ist vierfache Delfinmutter: Trinity ist eines der ersten Weibchen, die bei den ersten regelmäßigen Sichtungen in der Paracas-Bucht im August 2004 beobachtet wurden. Trinity brachte im März 2005 ein Kalb zur Welt und wurde seitdem in drei weiteren Fällen mit einem neuen Kalb gesehen.',
      'Sie können die Delfinschutzarbeit durch die Übernahme einer Patenschaft oder eine Spende unterstützen. Bitte helfen Sie!',
    ],
  },
  {
    id: 'bundeswehr-schweinswalschutz',
    title: 'Bundeswehr torpediert Schweinswalschutz',
    date: '16. Dezember 2021',
    category: 'Aktuelle Meldungen',
    excerpt: 'Gemeinsame Pressemitteilung deutscher Umweltverbände. Unter dem Druck der EU haben Fischerei-Vertreter*innen der EU-Mitgliedstaaten über Jahre verhandelt, wie die letzten Schweinswale in der zentralen Ostsee noch vor dem Aussterben gerettet werden können.',
    image: `${IMG}2019/11/Totfund-Nordküste-DänemarkNetzmarke_Hoppmann-HornbergMai18Schweinswale-e.V-225x300.png`,
    content: [
      'Gemeinsame Pressemitteilung deutscher Umweltverbände*',
      'Berlin/München 16.12.2021. Unter dem Druck der EU haben Fischerei-Vertreter*innen der EU-Mitgliedstaaten über Jahre verhandelt, wie die letzten Schweinswale in der zentralen Ostsee noch vor dem Aussterben gerettet werden können. Insbesondere die Fischereiaktivitäten müssten dafür begrenzt werden und akustische Vergrämungsmethoden (sogenannte „Pinger") sollten zur Abschreckung der Schweinswale vor Stellnetzen zum Einsatz kommen. Letzteres wird nun jedoch von der Deutschen Marine blockiert.',
      'Die Bundeswehr begründet dies mit einer Frage der nationalen Sicherheit. Die Pinger an Stellnetzen stören nach Angaben der Marine mit ihren Frequenzen die militärischen Sonarsysteme sowie die Unterwasserkommunikation und -navigation. Diese Bedenken kamen aus heiterem Himmel: Pinger werden weltweit bereits seit Jahrzehnten in Kanada, den USA, Norwegen oder dem Vereinigten Königreich eingesetzt – bislang ohne jegliche Kritik von Seiten der dortigen Marinen.',
      '„Es könnte sein, dass sich dies als der letzte Sargnagel für die bedrohte Schweinswal-Population in der zentralen Ostsee erweist, die nur noch ca. 500 Individuen umfasst", so die Umweltschutzverbände. „Die EU war kurz davor, nach Jahren und Jahrzehnten des Zuschauens endlich Schutzmaßnahmen auch außerhalb von Meeresschutzgebieten zu erlassen."',
      'Der Beifang von Schweinswalen in Stellnetzen ist ein direkter wesentlicher Treiber des Artensterbens. Seit Jahren bestehen spezielle Aktionspläne, um die einzigen in deutschen Gewässern heimischen Wale zu schützen. Die Umsetzung scheiterte bisher jedoch immer wieder am mangelnden politischen Willen.',
      'Die Forderung der Umweltschützer*innen ist klar: Sollten Pinger keine Option mehr darstellen, muss die Stellnetzfischerei als Todesursache Nummer eins der bedrohten Wale großflächiger aus weiteren Gebieten verbannt werden. Gleichzeitig müssen alternative Fangmethoden gefördert werden und verpflichtend zum Einsatz kommen.',
      'Hintergrundinformationen: Die Bundeswehr ist wiederholt in die Negativschlagzeilen geraten, weil sie Schießübungen in sensiblen Schutzgebieten veranstaltet hat. Im Jahr 2019 war sie für den Tod Dutzender Schweinswale verantwortlich, weil im Schweinswal-Schutzgebiet „Fehmarnbelt" Sprengungen während der Sommermonate durchgeführt wurden. Anschließend waren 30 Schweinswal-Kadaver an den Stränden angespült worden.',
      '* WDC, Greenpeace, WWF, BUND, NABU, DUH, GRD, ifaw, DSM, Pro Wildlife, M.E.E.R. e.V., Schweinswale e.V., Schutzstation Wattenmeer e.V., Deepwave und World Future Council',
    ],
  },
  {
    id: 'delfinschutz-peru',
    title: 'Wichtig: Delfinschutz in Peru',
    date: '12. Oktober 2021',
    category: 'Aktuelle Meldungen',
    excerpt: 'Warum wir die ortstreuen Delfine in Paracas im Auge behalten müssen. Eine der Hauptaufgaben der Arbeit unserer peruanischen Partnerorganisation ACOREMA ist, den Schutz der beiden kleinen Populationen von Großen Tümmlern zu fördern.',
    image: `${IMG}2021/09/Grosse-Tuemmler-in-der-Paracas-Bucht-IMG_7898-Copyright-ACOREMA-1024x678.jpg`,
    content: [
      'Warum wir die ortstreuen Delfine in Paracas im Auge behalten müssen',
      'Eine der Hauptaufgaben der Arbeit unserer peruanischen Partnerorganisation ACOREMA mit den ortsansässigen Delfinen in Pisco (Peru) ist, den Schutz der beiden kleinen Populationen von Großen Tümmlern zu fördern und zu gewährleisten. Die Ergebnisse der mehr als 20-jährigen Studien, die ACOREMA vor Ort durchführt, tragen dazu bei, dass in der örtlichen Gemeinschaft das Wissen über Delfine und Themen wie Meeresverschmutzung, Plastikmüll und die zerstörerische Wirkung von Dynamitfischerei stetig steigt.',
      'Sie sind noch da – Ein gutes Zeichen ist, dass die Delfine über viele Jahre und auch jetzt, als endlich nach den verschiedenen Corona-Lockdown-Phasen wieder Ausfahrten mit dem Boot möglich waren, in der Paracas-Bucht beobachtet werden können. Das ist ein Erfolg unserer Delfinschutzarbeit. Wurden früher die Delfine harpuniert, tummeln sie sich heute gefahrlos zumindest neben den ortsansässigen Fischerbooten in Paracas.',
      'Jedes Individuum der Großen Tümmler wird bei den Patrouillenfahrten fotografiert, seine Rückenflosse katalogisiert und mit früheren Aufnahmen verglichen, um bekannte Individuen zu identifizieren und neue Individuen zu erkennen.',
      'Delfine in Gefahr – In der ersten Hälfte des Jahres 2021, als eine zweite Welle der Covid-19-Pandemie Aktivitäten einschränkte, erlebte die Wirtschaft der Bevölkerung einen dramatischen Einbruch. Dies könnte nun ein erhöhtes Risiko für die Delfinpopulationen darstellen, da die Notwendigkeit, den Touristen mehr Bootsausflüge anzubieten, gleichzeitig die Begegnungen mit Delfingruppen erhöhen könnte.',
      'Zudem hat die Suche nach Ressourcen mehrere Fischereiflotten aus verschiedenen Häfen nach Paracas geführt, wo das Gedränge der Fischerboote in der Bucht die Verschmutzung erhöht, die Meeresumwelt verschlechtert und die Delfine in Gefahr bringt.',
      'Die Delfinschutz-Arbeit vor Ort ist wichtig! Nur die stetige Beobachtung der beiden in diesem Gebiet ansässigen Delfingruppen ermöglicht es ACOREMA, aufkommende Probleme sofort zu erkennen und die Behörden über etwaige negative Auswirkungen zu informieren.',
      'Bitte helfen Sie mit einer Delfin-Patenschaft oder Spende für den Schutz der Delfine und Wale in Peru!',
      '© Julio Reyes (ACOREMA) und Denise Wenger (Schweinswale e.V.), September 2021',
    ],
  },
  {
    id: 'tote-schweinswale-watteninseln',
    title: 'Dutzende tote Schweinswale zeitgleich an niederländischen Watteninseln angeschwemmt',
    date: '30. August 2021',
    category: 'Aktuelle Meldungen',
    excerpt: 'Internationale Militärübung mit Altmunitionssprengungen als Ursache in Verdacht. Auf der Nordseite der niederländischen Watteninseln werden seit einigen Tagen Dutzende tote Schweinswale angeschwemmt.',
    image: `${IMG}2021/08/Toter-Schweinswal-Ameland-Copyright-A.-Reuland-Schweinswale-e.V.-20210828-1-768x1024.jpg`,
    content: [
      'Internationale Militärübung mit Altmunitionssprengungen als Ursache in Verdacht',
      'München, 30.08.2021',
      'Auf der Nordseite der niederländischen Watteninseln, insbesondere auf Vlieland, Ameland, Terschelling und Schiermonnikoog, werden seit einigen Tagen Dutzende tote Schweinswale angeschwemmt.',
      'Auf Ameland war der Strand mit toten Schweinswalen übersäht. Andreas und Mirjam Reuland waren als eine der ersten vor Ort und haben die grausamen Funde fotografiert und dokumentiert und sich mit der Biologin Denise Wenger von Schweinswale e.V. in Verbindung gesetzt. Es sind furchtbare Fotos von mindestens 26 toten Schweinswalen allein auf Ameland.',
      '„Etliche Wale auf den Fotos wiesen Hämatome und untypische Löcher auf und eine solche enorme Anzahl gestrandeter Schweinswale innerhalb eines so kurzen Zeitraums ist außergewöhnlich. So war mein erster Gedanke, dass das eine Folge von Altmunitionssprengung sein könnte", sagt Denise Wenger.',
      'Seit 23. August findet eine großangelegte internationale Minenräumübung vor Ameland statt. Sechshundert Soldaten üben nördlich der Watteninseln. Wurden überhaupt irgendwelche Sicherheitsmaßnahmen wie Blasenschleier oder ähnliche Vorkehrungen getroffen?',
      '„Dass Militärübungen und ungesicherte Altmunitionssprengungen jährlich tausende tote Schweinswale verursachen, wird schon lange vermutet und eine wissenschaftliche Arbeit bereits aus dem Jahr 2015 geht von bis zu über 5000 toten Schweinswalen allein in niederländischen Gewässern aus. Auch in deutschen Gewässern finden solche Übungen und ungesicherte Sprengungen statt. Das ist unverantwortlich und grausam!", kommentiert Denise Wenger.',
      'Schweinswale sind sich akustisch orientierende und mit Echoortung jagende Meeressäuger. Selbst wenn sie nicht direkt durch die Sprengung getötet werden, können sie Gehör und die Fähigkeit zur Echoortung verlieren und verhungern dann über Tage hinweg.',
      'Copyright: Schweinswale e.V., Denise Wenger. Alle Rechte vorbehalten.',
    ],
  },
  {
    id: 'experimente-norwegen',
    title: 'Vorerst Experimente in Norwegen abgebrochen, da Wal entfliehen konnte',
    date: '14. Juli 2021',
    category: 'Aktuelle Meldungen',
    excerpt: 'Das umstrittene Forschungsvorhaben wurde für dieses Jahr abgebrochen, nachdem ein Wal zum Glück entkommen konnte. Eine mit US-Geldern finanzierte, fragliche Studie über das Gehör von Walen wurde gestoppt.',
    content: [
      'Das umstrittene Forschungsvorhaben, über das wir berichteten, wurde für dieses Jahr abgebrochen, nachdem ein Wal zum Glück entkommen konnte.',
      'Eine mit von den USA finanzierte, fragliche Studie über das Gehör von Walen und wie sie auf Lärm reagieren, wurde gestoppt, nachdem die Forscher Schwierigkeiten hatten, kooperative „Probanden" für ihre Tests zu finden. Die umstrittene Studie wurde beendet, ohne Ergebnisse zu liefern.',
      'Mit Unterstützung der US-Regierung wollte ein internationales Forscherteam in Norwegen messen, was Wale hören und wie empfindlich sie auf Geräusche reagieren. Das Experiment sollte Aufschluss darüber geben, wie vom Menschen verursachter Lärm – von Marinemanövern bis hin zu Offshore-Bohrungen – den natürlichen Lebensraum der Meeressäuger beeinflussen könnte.',
      'Die Wissenschaftler wollten mehrere junge Zwergwale einfangen und sie dann zu einer modifizierten Fischfarm in einem abgelegenen Dorf in Nordnorwegen bringen. Die Tiere würden dann in ein hängemattenartiges Netz gelegt, wo sie einer bis zu sechsstündigen Höranalyse unterzogen würden.',
      'Aber die Dinge liefen nicht ganz nach Plan. Den Forschern gelang es, drei Wale zu fangen, aber zwei von ihnen wurden als zu groß für die Testgeräte erachtet, während der dritte ein Loch im Gehege fand und entkam. Nach nur drei Wochen wurde das 1,8 Millionen Dollar teure Forschungsprojekt auf Eis gelegt.',
      'Astrid Fuchs, eine Vertreterin von Whale & Dolphin Conservation, sagte, sie hoffe, dass das Experiment dauerhaft abgebrochen werde. „Dass ein Wal entkommen ist, ist ein weiterer Beweis für den schlechten Aufbau dieser Experimente. Hoffentlich hat er sich nicht selbst verletzt."',
      'Das Experiment war international auf Kritik gestoßen. Eine Petition, die die norwegische Regierung aufforderte, die Tests zu stoppen, erhielt mehr als 60.000 Unterschriften.',
      'Der erste Versuch ist gescheitert, aber man wird ihn leider wohl wiederholen. Ob die Wale dabei verletzt oder traumatisiert wurden, ist nicht bekannt. Wir bleiben dran.',
      'Schweinswale e.V.',
    ],
  },
  {
    id: 'laermexperimente-norwegen',
    title: 'Unnötige und grausame Lärmexperimente an jungen Zwergwalen bei den Lofoten (Norwegen)',
    date: '28. Juni 2021',
    category: 'Aktuelle Meldungen',
    excerpt: 'In Norwegen sind unserer Meinung nach unnötige, unwissenschaftliche und unverantwortliche Experimente mit Zwergwalen geplant. Es geht vermutlich darum, die absoluten Belastungsgrenzen auszutesten.',
    content: [
      'Lesen Sie, welche unserer Meinung nach unnötigen, unwissenschaftlichen und unverantwortlichen Experimente geplant sind.',
      'Hier geht es sicher nicht um Tierschutz, sondern vermutlich darum, die absoluten Belastungsgrenzen auszutesten, um beim Ausbau der Windenergie, der seismischen Prospektion oder dem militärischen Sonar-Einsatz möglichst wenig durch die Naturschutzauflagen eingeschränkt zu werden. Die Projektteilnehmer und Finanzierung aus Ölindustrie und Marine lassen dies vermuten.',
      'Bestürzend ist die geringe Nähe der Forscher zu ihrem Thema: wenn davon gesprochen wird, die eingefangenen, wild lebenden Wale notfalls zu betäuben, obwohl eigentlich jeder weiß, wie wenig darüber bekannt ist und Versuche meist tödlich endeten, dass Wale aktiv atmen, keinen Atemreflex haben; wenn man ihnen das Bewusstsein nimmt, hören sie auf zu atmen, eine Betäubung wäre lebensbedrohlich.',
      'Der Versuchsaufbau bedeutet Stress pur: wild lebende junge Zwergwale werden mit großen Netzen eingefangen, in kleineren Gehege bzw. Käfige aus der Aquakultur getrieben und an der Wasseroberfläche festgehalten, mit Elektroden versehen und unter diesem für sie schon extremem Stress dem experimentellen Lärm ausgesetzt und ihre Gehirnströme gemessen.',
      'Wer hat in unserer Zeit so ein Konzept aufgestellt? Mit welchem wirklichen Ziel? Eine Alibiforschung, deren Daten zur Legitimation von Schallemissionen in Walgebieten dienen soll? Amerikanische Partner sind angeblich beteiligt, doch: In den USA selbst wäre diese Forschung verboten! Dafür plädieren wir auch hier in Europa und weltweit.',
      'Schweinswale e.V. schloss sich der Forderung unzähliger Forscher und Tierschutzorganisationen an, diese Versuche abzusagen!',
      'Dr. Günther Eichweber',
    ],
  },
  {
    id: 'schweinswale-hamburg',
    title: 'Wieder Schweinswale in Hamburg zu sehen',
    date: '30. April 2021',
    category: 'Aktuelle Meldungen',
    excerpt: 'Seit drei Wochen werden wieder regelmäßig Schweinswale im Hamburger Hafengebiet gesichtet. Von Wedel bis Köhlbrand und Norderelbe meldeten engagierte Bürger ihre Sichtungen.',
    image: `${IMG}2021/05/Schweinswale-Hamburger-Hafen-April-21-Copyright-D.-Braun-Schweinswale-e.V.-1024x684.jpg`,
    content: [
      'Schweinswale im Hamburger Hafen Mitte April 21',
      '30.04.21 Seit drei Wochen werden wieder regelmäßig Schweinswale im Hamburger Hafengebiet gesichtet. Von Wedel bis Köhlbrand und Norderelbe meldeten engagierte Bürger im Rahmen des langjährigen Citizen Science-Programms ihre Sichtungen.',
      'Vor allem im Frühjahr 2013 und 2016 wurden die kleinen Wale in größerer Zahl in den Unterläufen der Weser und der Elbe angetroffen und beim Jagen beobachtet. Sie folgen im Frühjahr anadromen Fischarten, die zum Ablaichen aus der Nordsee in die Flüsse hoch bis ins Süßwasser ziehen.',
      '„Wir bitten nun alle Motorbootfahrer besonders vorsichtig zu fahren!", so die Biologin Denise Wenger. „Die kleinen Wale schwimmen oft zwischen Fahrrinne und Ufer, jagen oder ruhen dort. Wir haben Aufnahmen von Schweinswalen mit Schiffsschraubenverletzungen am Rücken."',
      'Schweinswalsichtungen und Todfunde bitte melden! Schweinswale e.V. bittet nun wieder alle Anwohner, Fährfahrer, Segler, Kajak- und Motorbootfahrer die Augen offen zu halten und Sichtungen von Schweinswalen und Robben zu melden.',
      'Erfolge des Sichtungsprogramms sind u.a. der Nachweis, dass Schweinswale v.a. im Frühjahr die Flüsse Weser und Elbe bis Bremen und Hamburg frequentieren. Baumaßnahmen wurden zeitlich verschoben und Schweinswale sind jetzt als Schutzgut für Weser und Elbe gelistet.',
      'Das Auftauchen der Schweinswale in der Elbe zeigte auch etwas auf: die bislang unbeachtete Fischart „Stint" wurde nun als ökologische Schlüsselart identifiziert.',
      'Copyright: Denise Wenger',
    ],
  },
  {
    id: 'massenanstrandung-fische',
    title: 'Massenanstrandung von hunderten toten Fischen an der Nordseeküste',
    date: '15. Juni 2020',
    category: 'Aktuelle Meldungen',
    excerpt: 'An der Nordseeküste von Cuxhaven bis St. Peter-Ording sind hunderte tote Fische angeschwemmt worden, meist Heringe, aber auch Aale, Störe, Stinte und Finten waren unter den gefundenen Arten und sogar Schweinswale.',
    content: [
      'An der Nordseeküste von Cuxhaven bis St. Peter-Ording sind hunderte tote Fische angeschwemmt worden, meist Heringe, aber auch Aale, Störe, Stinte und Finten waren unter den gefundenen Arten und sogar Schweinswale.',
    ],
  },
  {
    id: 'beltretter-broschuere',
    title: 'Beltretter Broschüre online',
    date: '18. Mai 2020',
    category: 'Aktuelle Meldungen',
    excerpt: 'Es gibt eine aktualisierte Broschüre der Beltretter derzeit an Tankstellen und Shops im Norden zum Abholen oder jetzt auch online und zum Download.',
    content: [
      'Liebe Ostseefreunde, Beltretter, Schweinswalfreunde, Unterzeichner und Unterstützer,',
      'es gibt eine aktualisierte Broschüre der Beltretter derzeit an Tankstellen und Shops im Norden zum Abholen oder jetzt auch online und zum Download.',
      'Liebe Grüße, Das BELTRETTER Team',
    ],
  },
  {
    id: 'supay-delfine-wohlauf',
    title: '20 Jahre Delfinschutz: Supay Delfine in Peru-Paracas wohlauf',
    date: '10. März 2020',
    category: 'Aktuelle Meldungen',
    excerpt: 'Julio Reyes, Biologe und Vorsitzender unserer peruanischen Partnerorganisation ACOREMA, hat in wunderschönen und herzlichen Worten geschildert, dass es der Gruppe Großer Tümmler, die isoliert in der Supay Bucht lebt, gut geht.',
    image: `${IMG}2020/03/Sun-showing-face-1024x439.jpg`,
    content: [
      'Julio Reyes, Biologe und Vorsitzender unserer peruanischen Partnerorganisation ACOREMA, hat in wunderschönen und herzlichen Worten geschildert, dass es der Gruppe Großer Tümmler, die isoliert in der Supay Bucht lebt, gut geht und besonders über den Patendelfin Sun berichtet.',
      'Sun war mit einer der ersten individuell identifizierten Patendelfine und wird bis heute in der Supay Bucht gesehen. Bis heute trägt er die bereits 1999 dokumentierten individuellen natürlichen Marken auf Haut und Finne und kann daran eindeutig erkannt werden. Mit der Übernahme einer Patenschaft kann man sich für den Schutz der Delfine in Paracas einsetzen.',
      'Sein Lebensraum befindet sich in einer der schönsten Gegenden Perus, im Paracas Naturreservat im Süden des Landes.',
      'Glücklicherweise und trotz Beeinträchtigungen seines Lebensraums seitens menschlicher Nutzung oder sogar Naturkatastrophen wie das schwere Erdbeben von 2007 hat der Delfin und seine Gruppe überlebt, ja es sind sogar noch Delfinbabies hinzugekommen. Dank der Arbeit von ACOREMA konnte dieses Gebiet unter Schutz gestellt werden und Ranger werden ausgebildet, um hier zu kontrollieren.',
      'Die Delfingruppe kann von den die Bucht umgebenden Klippen aus beobachtet werden. Wenn das Wetter es zulässt und Mittel vorhanden sind, werden manchmal auch Ausfahrten zu den Delfinen gemacht, um sie von Nahem sehen und fotografieren und ihre Identität bestätigen zu können.',
      'Julio Reyes dankt allen Delfinpaten ganz herzlich, die mit der Übernahme einer Patenschaft die wichtige Delfinschutzarbeit von ACOREMA unterstützen und sich für die Delfine in Peru-Paracas einsetzen!',
    ],
  },
];

export default function News() {
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const article = selectedArticle ? articles.find(a => a.id === selectedArticle) : null;

  if (article) {
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
          {article.image ? (
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            <img src={`${IMG}2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`} alt="Schweinswal" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          )}
        </div>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Back */}
          <button
            onClick={() => { setSelectedArticle(null); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 text-[#00c2b2] hover:text-[#00a89a] font-bold text-sm uppercase tracking-wide mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </button>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-[#00c2b2]/10 text-[#00c2b2] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="text-slate-400 text-sm flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight mb-4">
            {article.title}
          </h1>
          <div className="w-24 h-3 mb-10" style={wavyLine}></div>

          {/* Article Body */}
          <div className="space-y-6">
            {article.content.map((paragraph, i) => {
              if (i === 0 || (paragraph.length < 80 && !paragraph.includes('.'))) {
                return <h3 key={i} className="text-xl font-bold text-slate-800">{paragraph}</h3>;
              }
              return <p key={i} className="text-lg text-slate-600 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Unterstützen Sie unsere Arbeit</h3>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Mit Ihrer Spende unterstützen Sie die Schutzprojekte von Schweinswale e.V.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
                Jetzt Spenden
              </a>
              <a href="#sichtung-melden" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
                Sichtung melden
              </a>
            </div>
          </div>
        </main>
      </>
    );
  }

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
          <span className="text-slate-800 font-semibold">News</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Aktuelle Meldungen
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Featured Article */}
        <button
          onClick={() => { setSelectedArticle(articles[0].id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="w-full text-left bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-10 hover:shadow-2xl transition-shadow group"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {articles[0].image ? (
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-64 md:h-full bg-gradient-to-br from-[#00c2b2] to-blue-900" />
            )}
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#00c2b2]/10 text-[#00c2b2] text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {articles[0].category}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {articles[0].date}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-[#00c2b2] transition-colors">{articles[0].title}</h2>
              <p className="text-slate-600 leading-relaxed mb-4">{articles[0].excerpt}</p>
              <span className="text-[#00c2b2] font-bold text-sm uppercase tracking-wide flex items-center">
                Weiterlesen <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </button>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((a) => (
            <button
              key={a.id}
              onClick={() => { setSelectedArticle(a.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-left bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {a.image ? (
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <img
                    src={`${IMG}2017/02/Schweinswale-LOGO_blau-mit-Schein_500x500-300x300.jpg`}
                    alt="Schweinswale e.V."
                    className="w-20 h-20 object-contain opacity-30"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[#00c2b2]/10 text-[#00c2b2] text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                    {a.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-[#00c2b2] transition-colors">{a.title}</h3>
                <p className="text-slate-400 text-sm mb-3 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {a.date}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">{a.excerpt}</p>
                <span className="text-[#00c2b2] font-bold text-sm uppercase tracking-wide flex items-center">
                  Weiterlesen <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Sichtungen bitte melden!</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Die kleinen Wale brauchen Hilfe! Bitte helfen Sie den Schweinswalen und Delfinen an der Küste und unterstützen Sie unsere Arbeit und Projekte mit Ihrer Spende.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#sichtung-melden" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Sichtung melden
            </a>
            <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors">
              Jetzt Spenden
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
