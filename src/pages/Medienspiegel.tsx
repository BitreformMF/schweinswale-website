import { ChevronRight, Newspaper, Radio, Tv, FileText } from 'lucide-react';
import HeroImage from "../components/HeroImage";

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

interface MediaEntry {
  title: string;
  source: string;
  date: string;
  type: 'tv' | 'radio' | 'print' | 'online';
  url?: string;
}

const mediaEntries: MediaEntry[] = [
  {
    title: 'Beitrag über Schweinswale',
    source: 'Radio Bremen 4',
    date: 'April 2018',
    type: 'radio',
  },
  {
    title: 'Bericht über Schweinswale an der Nordseeküste',
    source: 'Nordseezeitung',
    date: 'April 2018',
    type: 'print',
  },
  {
    title: 'Beitrag zum Schweinswalschutz',
    source: 'Greenpeace Magazin',
    date: 'März 2018',
    type: 'print',
  },
  {
    title: 'NaturNah – Sendung über Schweinswale',
    source: 'NDR',
    date: '9. Mai 2017',
    type: 'tv',
  },
  {
    title: 'Artenschutz – Bericht über Schweinswale',
    source: 'Greenpeace Magazin online',
    date: '4. Mai 2017',
    type: 'online',
  },
  {
    title: 'Beitrag Schweinswale, Ausgabe 3/17, S. 19',
    source: 'Greenpeace Magazin',
    date: 'März 2017',
    type: 'print',
  },
  {
    title: 'Schweinswale in deutschen Gewässern, Nr. 1',
    source: 'Der Ingenieur',
    date: 'März 2017',
    type: 'print',
  },
  {
    title: 'Buten un Binnen – Videobeitrag über Schweinswale',
    source: 'Radio Bremen TV',
    date: 'März 2017',
    type: 'tv',
  },
  {
    title: 'Nachgeforscht: Bei Denise Wenger vom Schweinswalmonitoring',
    source: 'Bürger schaffen Wissen',
    date: 'März 2017',
    type: 'online',
  },
  {
    title: 'Erste Schweinswale in Hamburg angekommen – Pressemitteilung',
    source: 'lifePR.de',
    date: '6. März 2017',
    type: 'online',
  },
  {
    title: 'Schweinswale in Hamburg – Beitrag von Ursel Kikker',
    source: 'Nordseezeitung',
    date: '27. Februar 2017',
    type: 'print',
  },
  {
    title: 'Schweinswale in Hamburg – Online-Beitrag mit Video von Denise Wenger',
    source: 'Nord24.de',
    date: '27. Februar 2017',
    type: 'online',
  },
  {
    title: 'Exkursionen für Tierfreunde: Wale orten – Pinnwand Magazin Nr. 88',
    source: 'Pinnwand Magazin für Pinneberg und Hamburger Umland',
    date: 'Februar 2017',
    type: 'print',
  },
  {
    title: 'Färöer – Inseln im Blutrausch, Aquanaut S. 17',
    source: 'Aquanaut',
    date: '4/2016',
    type: 'print',
  },
];

function TypeIcon({ type }: { type: MediaEntry['type'] }) {
  switch (type) {
    case 'tv': return <Tv className="w-5 h-5 text-[#00c2b2]" />;
    case 'radio': return <Radio className="w-5 h-5 text-[#00c2b2]" />;
    case 'print': return <Newspaper className="w-5 h-5 text-[#00c2b2]" />;
    case 'online': return <FileText className="w-5 h-5 text-[#00c2b2]" />;
  }
}

function typeLabel(type: MediaEntry['type']) {
  switch (type) {
    case 'tv': return 'TV';
    case 'radio': return 'Radio';
    case 'print': return 'Print';
    case 'online': return 'Online';
  }
}

const IMG = 'https://web.archive.org/web/20250906000917im_/https://walschutz.org/wp-content/uploads/';

export default function Medienspiegel() {
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
          src={`${IMG}2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
          alt="Schweinswal"
          />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#news" className="hover:text-[#00c2b2] transition-colors">News</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Medienspiegel</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Medienspiegel
        </h1>
        <div className="w-24 h-3 mb-6" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-3xl">
          Berichte in Zeitungen, Magazinen, Online-Medien, Radio und TV über die Arbeit von Schweinswale e.V. und den Schutz der Schweinswale.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-10">
          {(['tv', 'radio', 'print', 'online'] as const).map(type => (
            <div key={type} className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full">
              <TypeIcon type={type} />
              <span className="text-sm font-semibold text-slate-600">{typeLabel(type)}</span>
            </div>
          ))}
        </div>

        {/* Media List */}
        <div className="space-y-4 mb-16">
          {mediaEntries.map((entry, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg border border-slate-100 p-5 flex items-center gap-4 hover:shadow-xl transition-shadow">
              <div className="w-11 h-11 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
                <TypeIcon type={entry.type} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-800 truncate">{entry.title}</h3>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-sm font-semibold text-[#00c2b2]">{entry.source}</span>
                  <span className="text-sm text-slate-400">{entry.date}</span>
                  <span className="bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">{typeLabel(entry.type)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Presseanfragen</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Für Presseanfragen und Interviewwünsche kontaktieren Sie uns bitte direkt.
          </p>
          <a href="#kontakt" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors inline-block">
            Kontakt aufnehmen
          </a>
        </div>
      </main>
    </>
  );
}
