import { ChevronRight, Heart } from 'lucide-react';
import HeroImage from "../components/HeroImage";

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

const IMG = 'https://web.archive.org/web/20250430072058im_/https://walschutz.org/wp-content/uploads/2018/05/';

export default function Delfinmuetter() {
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
          src={`${IMG}Breeze-calf-300x200.jpg`}
          alt="Delfinmütter in Paracas"
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
          <span className="text-slate-800 font-semibold">Delfinmütter in Paracas</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Delfinmütter in Paracas
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        {/* Intro */}
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Die Delfine leben bei der Paracas-Bucht im Süden Perus und sind bekannt – und das auf vielerlei Weise. Seit 1999 werden sie beobachtet und mehr als 120 der residenten Großen Tümmler wurden mittlerweile anhand ihrer Rückenfinne, die einzigartig ist wie ein Fingerabdruck, individuell identifiziert. So konnte durch langjährige Beobachtungen viel über die Eigenheiten und Besonderheiten dieser Delfingruppe und einzelner Individuen in Erfahrung gebracht werden.
        </p>

        <h2 className="text-3xl font-bold text-slate-800 mb-4 mt-12">Eine sichere Bucht für Mutter und Kind</h2>
        <div className="w-16 h-2 mb-8" style={wavyLine}></div>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Bald hat sich herausgestellt, dass die ruhige malerische Paracas-Bucht, umgeben von Wüstenlandschaft, vor allem von Delfinmüttern mit ihren Neugeborenen aufgesucht wird oder diese sogar hier im flachen Wasser geboren wurden, geschützt vor den sonst tosenden Wellen des Pazifiks, die an die Küste brechen.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Viele der weiblichen Delfine kehren immer wieder in die Bucht zurück und einige werden schon mit ihrem dritten oder vierten Jungen gesichtet.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-12">
          Für diese Delfinmütter in der Paracas-Bucht können Sie eine Patenschaft übernehmen oder mit einer Geschenkpatenschaft einem geliebten Menschen eine besondere Freude machen. Paten erhalten eine Urkunde und nähere Informationen zu ihrem Patendelfin.
        </p>

        {/* Dolphin Mothers */}
        <div className="space-y-16">

          {/* Breeze */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={`${IMG}Breeze-calf-300x200.jpg`}
                alt="Breeze mit ihrem Jungen in der Paracas-Bucht"
                className="w-full h-auto rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">Breeze mit ihrem Jungen in der Paracas-Bucht. © ACOREMA</figcaption>
            </figure>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Breeze</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Breeze hatte eine schlimme Wunde, die offensichtlich durch eine Harpune verursacht worden war, und kämpfte um ihr Leben. Glücklicherweise heilte es und sie hat 2010 dann ein Junges geboren und erfolgreich großgezogen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Wir haben die beiden noch 2013 zusammen gesichtet, als das Junge mehr und mehr unabhängig wurde. Erst 2017 hat Breeze dann erneut ein Baby bekommen und beide, Mutter und Kind, sind im Moment in der Paracas-Bucht zu sehen.
              </p>
              <a href="#patenschaftsformular" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-2 px-5 rounded-full transition-colors inline-flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Patenschaft für Breeze
              </a>
            </div>
          </div>

          {/* Sharpy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Sharpy</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Sharpy kennen wir bereits seit 2005. Von ihr wurde ein ID-Foto gemacht und sie war leicht an ihrer markanten Finne zu erkennen, weil sie eher an einen Hai erinnerte. Aber erst 2010 wurde sie mit einem Kalb gesehen.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Sie ist eine von den regelmäßig und am häufigsten in der Bucht gesichteten Großen Tümmlern und 2016 schließlich konnten wir sie mit ihrem zweiten Jungen sehen.
              </p>
              <a href="#patenschaftsformular" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-2 px-5 rounded-full transition-colors inline-flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Patenschaft für Sharpy
              </a>
            </div>
            <figure className="order-1 lg:order-2">
              <img
                src={`${IMG}Sharpy-and-calf-01-300x210.jpg`}
                alt="Delfinmutter Sharpy mit ihrem Jungen"
                className="w-full h-auto rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">Delfinmutter Sharpy mit ihrem Jungen in der Paracas-Bucht. © ACOREMA</figcaption>
            </figure>
          </div>

          {/* Silver */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={`${IMG}e2-IMG_9081-Silver-calf-21may2009-300x199.jpg`}
                alt="Delfindame Silver mit Baby"
                className="w-full h-auto rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">Delfindame Silver mit Baby in der Paracas-Bucht. © ACOREMA</figcaption>
            </figure>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Silver</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Silver ist einer der am längsten identifizierten und bekannten Großen Tümmler der Paracas-Bucht. Die Delfindame wurde in all den Jahren mehrfach mit Kälbern gesichtet und ist eine fürsorgliche Mutter.
              </p>
              <a href="#patenschaftsformular" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-2 px-5 rounded-full transition-colors inline-flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Patenschaft für Silver
              </a>
            </div>
          </div>

          {/* Denise */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Denise</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Denise wurde 2011 identifiziert und in den Katalog der Paracas-Bucht-Delfine aufgenommen. Bis 2018 wurde kein Kalb an ihrer Seite gesehen. Nun können wir glücklich berichten, dass sie Anfang 2018 ein Neugeborenes an ihrer Seite führte.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Das Junge ist ungefähr 1/3 so groß wie die Mutter und trinkt die ersten sechs Monate ausschließlich Milch.
              </p>
              <a href="#patenschaftsformular" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-2 px-5 rounded-full transition-colors inline-flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Patenschaft für Denise
              </a>
            </div>
            <figure className="order-1 lg:order-2">
              <img
                src={`${IMG}Denise-and-calf-300x198.jpg`}
                alt="Patendelfinmutter Denise mit ihrem Neugeborenen"
                className="w-full h-auto rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">Patendelfinmutter Denise mit ihrem Neugeborenen in der Paracas-Bucht. © ACOREMA</figcaption>
            </figure>
          </div>

          {/* Trinity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <figure>
              <img
                src={`${IMG}Trinity-2017-IMG_0884-300x200.jpg`}
                alt="Delfinmutter Trinity"
                className="w-full h-auto rounded-lg shadow-xl"
                referrerPolicy="no-referrer"
              />
              <figcaption className="text-sm text-slate-500 mt-3 italic">Delfinmutter Trinity in der Paracas-Bucht. © ACOREMA</figcaption>
            </figure>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Trinity</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Trinity ist eine der ältesten Delfinmütter. 2004 wurde sie identifiziert und bekam ihren Namen. In den vergangenen 14 Jahren wurde sie mit vier Kälbern gesehen. Alle ihre Jungen wurden im ruhigen Wasser der Paracas-Bucht geboren und versorgt.
              </p>
              <a href="#patenschaftsformular" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-2 px-5 rounded-full transition-colors inline-flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                Patenschaft für Trinity
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Schützen Sie die Delfinmütter</h3>
          <p className="text-slate-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Bitte setzen Sie sich zum Schutz der Delfinmütter ein und helfen Sie, damit die Bucht ein sicherer Ort für die Mütter und ihre Kälber bleibt! Mit einer Patenschaft tragen Sie direkt zu den Schutzprojekten in Paracas bei. Unser herzlicher Dank gilt allen Delfinpaten und Unterstützern dieses Projekts!
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
