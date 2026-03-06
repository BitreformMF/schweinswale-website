import React, { useState, useEffect } from 'react';
import { ChevronRight, Binoculars, HeartHandshake, ChevronDown, Menu, X } from 'lucide-react';
import Projektbeschreibung from './pages/Projektbeschreibung';
import OrtsstreueDelfine from './pages/OrtsstreueDelfine';
import Patendelfine from './pages/Patendelfine';
import Delfinmuetter from './pages/Delfinmuetter';
import Dynamitfischerei from './pages/Dynamitfischerei';
import Sichtungsprogramm from './pages/Sichtungsprogramm';
import Medienbeitraege from './pages/Medienbeitraege';
import DerSchweinswal from './pages/DerSchweinswal';
import SchweinswaleWeltweit from './pages/SchweinswaleWeltweit';
import Vaquita from './pages/Vaquita';
import Verein from './pages/Verein';
import Team from './pages/Team';
import Sponsoren from './pages/Sponsoren';
import Spenden from './pages/Spenden';
import SichtungMelden from './pages/SichtungMelden';
import Kontakt from './pages/Kontakt';
import News from './pages/News';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Medienspiegel from './pages/Medienspiegel';
import Foerdermitgliedschaft from './pages/Foerdermitgliedschaft';
import Patenschaftsformular from './pages/Patenschaftsformular';
import CookieBanner from './components/CookieBanner';
import HeroImage from './components/HeroImage';

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || '#');
  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash || '#');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
  }, [route]);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
    setMobileSubExpanded(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-0">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 sm:space-x-4 pb-3 pt-3 sm:pb-4 sm:pt-4" onClick={() => { window.scrollTo(0, 0); closeMobile(); }}>
              <div className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center">
                <img src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/schweinswale-ev/schweinswale_ev_logo_1.png" alt="Schweinswale e.V. Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-lg sm:text-2xl font-black text-[#1e293b] tracking-tighter uppercase leading-none">Schweinswale</h1>
                <span className="text-xs sm:text-sm font-bold text-[#64748b] tracking-widest uppercase mt-0.5 sm:mt-1">e.V.</span>
              </div>
            </a>

            {/* Mobile: Hamburger Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>

            {/* Desktop Navigation Right Side */}
            <div className="hidden md:flex flex-col items-end">
              {/* Top Nav */}
              <div className="flex items-center space-x-4 text-sm font-medium text-slate-600 mb-2 pt-2">
                <a href="#datenschutz" className="hover:text-[#00c2b2] transition-colors">Datenschutzerklärung</a>
                <a href="#impressum" className="hover:text-[#00c2b2] transition-colors">Impressum</a>
              </div>

              {/* Main Nav & Buttons */}
              <div className="flex items-center pb-4">
                <nav className="flex items-center space-x-6 mr-8">
                  <div className="relative group">
                    <a href="#" className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#00c2b2] uppercase tracking-wide py-4 transition-colors">
                      Projekte
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </a>

                    {/* First Level Dropdown */}
                    <div className="absolute top-full left-0 w-64 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 flex flex-col">

                        {/* Sub-menu trigger: Unsere Wale */}
                        <div className="relative group/sub">
                          <a href="#" className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors w-full">
                            Unsere Wale
                            <ChevronRight className="w-4 h-4" />
                          </a>

                          {/* Second Level Dropdown */}
                          <div className="absolute top-0 left-full ml-1 w-64 bg-white opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-x-2 group-hover/sub:translate-x-0">
                            <div className="p-2 flex flex-col">
                              <a href="#sichtungsprogramm" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Sichtungsprogramm</a>
                              <a href="#medienbeitraege" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Medienbeiträge</a>
                            </div>
                          </div>
                        </div>

                        {/* Sub-menu trigger: Delfine in Peru */}
                        <div className="relative group/peru">
                          <a href="#" className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors w-full">
                            Delfine in Peru
                            <ChevronRight className="w-4 h-4" />
                          </a>

                          {/* Second Level Dropdown */}
                          <div className="absolute top-0 left-full ml-1 w-72 bg-white opacity-0 invisible group-hover/peru:opacity-100 group-hover/peru:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-x-2 group-hover/peru:translate-x-0">
                            <div className="p-2 flex flex-col">
                              <a href="#projektbeschreibung" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Projektbeschreibung</a>
                              <a href="#ortstreue-delfine" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Ortstreue Delfine in der Paracas-Bucht</a>
                              <a href="#patendelfine" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Wir sind die Paracas-Patendelfine</a>
                              <a href="#delfinmuetter" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Delfinmütter in Paracas</a>
                              <a href="#dynamitfischerei" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Dynamitfischerei in der Paracas National Reserve</a>
                            </div>
                          </div>
                        </div>

                        {/* Sub-menu trigger: Viva Vaquita */}
                        <div className="relative group/vaquita">
                          <a href="#" className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors w-full">
                            Viva Vaquita
                            <ChevronRight className="w-4 h-4" />
                          </a>

                          {/* Second Level Dropdown */}
                          <div className="absolute top-0 left-full ml-1 w-64 bg-white opacity-0 invisible group-hover/vaquita:opacity-100 group-hover/vaquita:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-x-2 group-hover/vaquita:translate-x-0">
                            <div className="p-2 flex flex-col">
                              <a href="#vaquita" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Vaquita – vom Aussterben bedroht</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a href="#" className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#00c2b2] uppercase tracking-wide py-4 transition-colors">
                      Schweinswale
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </a>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 w-72 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 flex flex-col">
                        <a href="#der-schweinswal" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Unser Schweinswal</a>
                        <a href="#schweinswale-weltweit" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Schweinswale weltweit</a>
                        <a href="#vaquita" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Vaquita – vom Aussterben bedroht</a>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a href="#verein" className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#00c2b2] uppercase tracking-wide py-4 transition-colors">
                      Verein
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </a>

                    {/* Dropdown */}
                    <div className="absolute top-full left-0 w-72 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 flex flex-col">
                        <a href="#verein" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Ziele</a>
                        <a href="#team" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Team</a>
                        <a href="#sponsoren" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Sponsoren und Kooperationspartner</a>
                        <a href="#spenden" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Helfen Sie</a>
                      </div>
                    </div>
                  </div>
                  <div className="relative group">
                    <a href="#news" className="flex items-center gap-1 text-sm font-bold text-slate-800 hover:text-[#00c2b2] uppercase tracking-wide py-4 transition-colors">
                      News
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </a>
                    <div className="absolute top-full left-0 w-72 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 shadow-2xl rounded-2xl border border-slate-100 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-2 flex flex-col">
                        <a href="#news" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Aktuelle Meldungen</a>
                        <a href="#medienspiegel" className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#00c2b2] transition-colors">Medienspiegel</a>
                      </div>
                    </div>
                  </div>
                  <a href="#kontakt" className="text-sm font-bold text-slate-800 hover:text-[#00c2b2] uppercase tracking-wide py-4 transition-colors">Kontakt</a>
                </nav>
                <div className="flex h-full gap-2">
                  <a href="#spenden" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-3 px-6 rounded-md transition-colors">
                    Spenden
                  </a>
                  <a href="#sichtung-melden" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 text-sm font-bold uppercase tracking-wide py-3 px-6 rounded-md transition-colors">
                    Sichtung Melden
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[60px] z-40">
            <div className="absolute inset-0 bg-black/40" onClick={closeMobile} />
            <nav className="relative bg-white border-t border-slate-200 overflow-y-auto max-h-[calc(100vh-60px)] shadow-xl">
              <div className="px-4 py-4 space-y-1">
                {/* CTA Buttons */}
                <div className="flex gap-2 mb-4">
                  <a href="#spenden" onClick={closeMobile} className="flex-1 bg-[#00c2b2] hover:bg-[#00a89a] text-white text-sm font-bold uppercase tracking-wide py-3 px-4 rounded-lg transition-colors text-center">
                    Spenden
                  </a>
                  <a href="#sichtung-melden" onClick={closeMobile} className="flex-1 bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 text-sm font-bold uppercase tracking-wide py-3 px-4 rounded-lg transition-colors text-center">
                    Sichtung Melden
                  </a>
                </div>

                {/* Projekte Accordion */}
                <div>
                  <button
                    onClick={() => { setMobileExpanded(mobileExpanded === 'projekte' ? null : 'projekte'); setMobileSubExpanded(null); }}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-slate-800 uppercase tracking-wide rounded-lg hover:bg-slate-50"
                  >
                    Projekte
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'projekte' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === 'projekte' && (
                    <div className="ml-3 border-l-2 border-[#00c2b2]/20 pl-3 space-y-1">
                      {/* Unsere Wale sub-accordion */}
                      <button
                        onClick={() => setMobileSubExpanded(mobileSubExpanded === 'wale' ? null : 'wale')}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
                      >
                        Unsere Wale
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubExpanded === 'wale' ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileSubExpanded === 'wale' && (
                        <div className="ml-3 space-y-1">
                          <a href="#sichtungsprogramm" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Sichtungsprogramm</a>
                          <a href="#medienbeitraege" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Medienbeiträge</a>
                        </div>
                      )}
                      {/* Delfine in Peru sub-accordion */}
                      <button
                        onClick={() => setMobileSubExpanded(mobileSubExpanded === 'peru' ? null : 'peru')}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
                      >
                        Delfine in Peru
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubExpanded === 'peru' ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileSubExpanded === 'peru' && (
                        <div className="ml-3 space-y-1">
                          <a href="#projektbeschreibung" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Projektbeschreibung</a>
                          <a href="#ortstreue-delfine" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Ortstreue Delfine</a>
                          <a href="#patendelfine" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Paracas-Patendelfine</a>
                          <a href="#delfinmuetter" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Delfinmütter in Paracas</a>
                          <a href="#dynamitfischerei" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Dynamitfischerei</a>
                        </div>
                      )}
                      {/* Viva Vaquita sub-accordion */}
                      <button
                        onClick={() => setMobileSubExpanded(mobileSubExpanded === 'vaquita' ? null : 'vaquita')}
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
                      >
                        Viva Vaquita
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileSubExpanded === 'vaquita' ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileSubExpanded === 'vaquita' && (
                        <div className="ml-3 space-y-1">
                          <a href="#vaquita" onClick={closeMobile} className="block px-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Vaquita – vom Aussterben bedroht</a>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Schweinswale Accordion */}
                <div>
                  <button
                    onClick={() => { setMobileExpanded(mobileExpanded === 'schweinswale' ? null : 'schweinswale'); setMobileSubExpanded(null); }}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-slate-800 uppercase tracking-wide rounded-lg hover:bg-slate-50"
                  >
                    Schweinswale
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'schweinswale' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === 'schweinswale' && (
                    <div className="ml-3 border-l-2 border-[#00c2b2]/20 pl-3 space-y-1">
                      <a href="#der-schweinswal" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Unser Schweinswal</a>
                      <a href="#schweinswale-weltweit" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Schweinswale weltweit</a>
                      <a href="#vaquita" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Vaquita – vom Aussterben bedroht</a>
                    </div>
                  )}
                </div>

                {/* Verein Accordion */}
                <div>
                  <button
                    onClick={() => { setMobileExpanded(mobileExpanded === 'verein' ? null : 'verein'); setMobileSubExpanded(null); }}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-slate-800 uppercase tracking-wide rounded-lg hover:bg-slate-50"
                  >
                    Verein
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'verein' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === 'verein' && (
                    <div className="ml-3 border-l-2 border-[#00c2b2]/20 pl-3 space-y-1">
                      <a href="#verein" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Ziele</a>
                      <a href="#team" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Team</a>
                      <a href="#sponsoren" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Sponsoren & Kooperationspartner</a>
                      <a href="#spenden" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Helfen Sie</a>
                    </div>
                  )}
                </div>

                {/* News Accordion */}
                <div>
                  <button
                    onClick={() => { setMobileExpanded(mobileExpanded === 'news' ? null : 'news'); setMobileSubExpanded(null); }}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-slate-800 uppercase tracking-wide rounded-lg hover:bg-slate-50"
                  >
                    News
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === 'news' ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === 'news' && (
                    <div className="ml-3 border-l-2 border-[#00c2b2]/20 pl-3 space-y-1">
                      <a href="#news" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Aktuelle Meldungen</a>
                      <a href="#medienspiegel" onClick={closeMobile} className="block px-3 py-2.5 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">Medienspiegel</a>
                    </div>
                  )}
                </div>

                {/* Kontakt direct link */}
                <a href="#kontakt" onClick={closeMobile} className="block px-3 py-3 text-sm font-bold text-slate-800 uppercase tracking-wide rounded-lg hover:bg-slate-50 hover:text-[#00c2b2]">
                  Kontakt
                </a>

                {/* Divider */}
                <div className="border-t border-slate-200 my-2"></div>

                {/* Secondary links */}
                <div className="flex items-center gap-4 px-3 py-2 text-sm text-slate-500">
                  <a href="#news" onClick={closeMobile} className="hover:text-[#00c2b2]">News</a>
                  <a href="#impressum" onClick={closeMobile} className="hover:text-[#00c2b2]">Impressum</a>
                  <a href="#datenschutz" onClick={closeMobile} className="hover:text-[#00c2b2]">Datenschutz</a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {route === '#projektbeschreibung' ? (
        <Projektbeschreibung />
      ) : route === '#ortstreue-delfine' ? (
        <OrtsstreueDelfine />
      ) : route === '#patendelfine' ? (
        <Patendelfine />
      ) : route === '#delfinmuetter' ? (
        <Delfinmuetter />
      ) : route === '#dynamitfischerei' ? (
        <Dynamitfischerei />
      ) : route === '#sichtungsprogramm' ? (
        <Sichtungsprogramm />
      ) : route === '#medienbeitraege' ? (
        <Medienbeitraege />
      ) : route === '#der-schweinswal' ? (
        <DerSchweinswal />
      ) : route === '#schweinswale-weltweit' ? (
        <SchweinswaleWeltweit />
      ) : route === '#vaquita' ? (
        <Vaquita />
      ) : route === '#verein' ? (
        <Verein />
      ) : route === '#team' ? (
        <Team />
      ) : route === '#sponsoren' ? (
        <Sponsoren />
      ) : route === '#spenden' ? (
        <Spenden />
      ) : route === '#sichtung-melden' ? (
        <SichtungMelden />
      ) : route === '#kontakt' ? (
        <Kontakt />
      ) : route === '#news' ? (
        <News />
      ) : route === '#impressum' ? (
        <Impressum />
      ) : route === '#datenschutz' ? (
        <Datenschutz />
      ) : route === '#medienspiegel' ? (
        <Medienspiegel />
      ) : route === '#foerdermitgliedschaft' ? (
        <Foerdermitgliedschaft />
      ) : route === '#patenschaftsformular' ? (
        <Patenschaftsformular />
      ) : (
        <>
          {/* Hero Image with Wavy Top */}
          <div className="relative w-full h-[60vh] md:h-[80vh] bg-blue-900">
            {/* Wave Separator */}
            <div
              className="hidden md:block absolute top-0 left-0 w-full h-[48px] z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none'%3E%3Cpath d='M0,0 L0,50 Q250,100 500,50 T1000,50 L1000,0 Z' fill='%23ffffff' opacity='0.3'/%3E%3Cpath d='M0,0 L0,60 Q250,20 500,60 T1000,60 L1000,0 Z' fill='%23ffffff' opacity='0.6'/%3E%3Cpath d='M0,0 L0,30 Q250,70 500,30 T1000,30 L1000,0 Z' fill='%23ffffff'/%3E%3C/svg%3E")`,
                backgroundSize: '800px 100%',
                backgroundRepeat: 'repeat-x'
              }}
            ></div>

            <HeroImage
              src="https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg"
              alt="Schweinswal – Copyright S. Koschinski, fjord-baelt.dk"
            />
          </div>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">

            {/* Intro / Spenden Section */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
              <h2 className="text-2xl sm:text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">Projekte & Arbeit</h2>
              <div className="w-24 h-3 mx-auto mb-8" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat-x', backgroundSize: '20px 10px' }}></div>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Bitte helfen Sie den Schweinswalen und Delfinen an der Küste und unterstützen Sie unsere Arbeit und Projekte mit Ihrer Spende.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a href="https://secure.spendenbank.de/form/3026/" target="_blank" rel="noopener noreferrer" className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors flex items-center justify-center text-sm sm:text-base">
                  <HeartHandshake className="w-5 h-5 mr-2" />
                  Jetzt Spenden
                </a>
                <a href="#sichtung-melden" className="bg-[#fbd334] hover:bg-[#e5c02b] text-slate-900 font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors flex items-center justify-center text-sm sm:text-base">
                  <Binoculars className="w-5 h-5 mr-2" />
                  Sichtung Melden
                </a>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="space-y-16 sm:space-y-24">

              {/* Project 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl sm:text-3xl font-bold text-slate-800 mb-4">Schweinswale in den Flüssen Elbe und Weser</h3>
                  <div className="w-16 h-2 mb-6" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat-x', backgroundSize: '20px 10px' }}></div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Unser Hauptprojekt in Deutschland: Es umfasst das Schweinswal-Sichtungsprogramm, Totfundbergungen und Datenerhebungen zum Vorkommen der kleinen Wale in den Flüssen Elbe und Weser sowie die Einführung von adäquaten Schutzmaßnahmen.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Die Schweinswale in Weser und Elbe sind meist einzeln oder als Duo nahe am Elbufer unterwegs, aber auch Gruppen von bis zu 20 Individuen wurden in Hamburg bei Teufelsbrück im Fahrwasser gesichtet, unglaublich, mehr als 90 Kilometer von der Küste entfernt.
                  </p>
                  <a href="#sichtungsprogramm" className="text-[#00c2b2] font-bold uppercase tracking-wide hover:text-[#00a89a] flex items-center transition-colors">
                    Mehr erfahren <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
                <div className="order-1 lg:order-2">
                  <img src="https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2018/03/STS_20130104_Schweinswal20.jpg" alt="Schweinswal (Phocoena phocoena)" className="w-full h-auto rounded-lg shadow-xl" referrerPolicy="no-referrer" />
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <img src="https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2016/11/Vitali-Pal.jpg" alt="Peru Patendelfin Vitali-Pal. Foto: ACOREMA" className="w-full h-auto rounded-lg shadow-xl" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-bold text-slate-800 mb-4">Schutz der Delfine und Wale vor Perus Küste</h3>
                  <div className="w-16 h-2 mb-6" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat-x', backgroundSize: '20px 10px' }}></div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Etwa 30 Wal- und Delfinarten sind im Pazifik vor Peru anzutreffen. Sogar eine eigene Art, der Peruanische Schnabelwal, wurde hier entdeckt. Doch so vielfältig die Arten, so vielfältig sind auch die Gefahren.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Durch Kontrollen, Öffentlichkeitsarbeit, Zusammenarbeit mit Ministerien, Schulprojekten und vielen Kampagnen gegen Jagd auf Delfine, Dynamitfischerei und Meeresverschmutzung konnte im Distrikt Paracas eine deutliche Verbesserung erreicht werden.
                  </p>
                  <a href="#projektbeschreibung" className="text-[#00c2b2] font-bold uppercase tracking-wide hover:text-[#00a89a] flex items-center transition-colors">
                    Delfine in Peru <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-xl sm:text-3xl font-bold text-slate-800 mb-4">Vaquita – Der kleinste Wal ist vom Aussterben bedroht!</h3>
                  <div className="w-16 h-2 mb-6" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat-x', backgroundSize: '20px 10px' }}></div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    Vor 20 Jahren schwammen noch annähernd 600 der kleinen Schweinswale im Golf in Mexiko – 2016 waren nur noch etwa 100 von ihnen übrig geblieben, heute vermutlich sind es nur noch 10 – 30 Vaquitas.
                  </p>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Die Haupttodesursache ist ihr Beifang in Fischernetzen, vor allem Stellnetzen. Zudem macht ihnen die Wasserverschmutzung mit Pestiziden und Keimen zu schaffen. Ihr Schicksal darf nicht vergessen werden!
                  </p>
                  <a href="#vaquita" className="text-[#00c2b2] font-bold uppercase tracking-wide hover:text-[#00a89a] flex items-center transition-colors">
                    Mehr erfahren <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </div>
                <div className="order-1 lg:order-2">
                  <img src="https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2017/02/VaquitaWeb.jpg" alt="Vaquita" className="w-full h-auto rounded-lg shadow-xl" referrerPolicy="no-referrer" />
                </div>
              </div>

            </div>

            {/* News & Updates Section */}
            <div className="mt-16 sm:mt-32">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-6 sm:mb-8 border-b border-slate-200 pb-4 gap-2">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-800 uppercase tracking-tight mb-2">Aktuelle Meldungen</h2>
                  <div className="w-20 h-2" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat-x', backgroundSize: '20px 10px' }}></div>
                </div>
                <a href="#news" className="text-[#00c2b2] font-bold uppercase tracking-wide hover:text-[#00a89a] flex items-center transition-colors mb-2">
                  Alle News <ChevronRight className="w-5 h-5 ml-1" />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Die Top 5 – Paracas-Patendelfine', img: 'https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2016/11/Schweinswale-Sophia-Wenger6.jpg' },
                  { title: 'Bundeswehr torpediert Schweinswalschutz', img: 'https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2018/04/Schweinswale-im-Hamburger-Hafen-Copyright-Wibke-Hildebrandt.jpg' },
                  { title: 'Dutzende tote Schweinswale an Watteninseln', img: 'https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2016/11/Tatooine.jpg' }
                ].map((news, i) => (
                  <a key={i} href="#news" className="group cursor-pointer block">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img src={news.img} alt={news.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#00c2b2] transition-colors leading-tight">{news.title}</h4>
                    <p className="text-sm text-slate-500 mt-2">Vor 2 Tagen</p>
                  </a>
                ))}
              </div>
            </div>

          </main>
        </>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 sm:py-16 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="https://chrtxeocxkifcoepngvz.supabase.co/storage/v1/object/public/schweinswale-ev/schweinswale_ev_logo_1.png" alt="Schweinswale e.V. Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <h2 className="text-2xl font-black tracking-tighter uppercase">Schweinswale e.V.</h2>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Pro Phocoena – Porpoise Conservation Agency. Wir setzen uns für den Schutz der Schweinswale und Delfine weltweit ein.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Links</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#sichtung-melden" className="hover:text-[#00c2b2] transition-colors">Sichtung melden</a></li>
                <li><a href="#news" className="hover:text-[#00c2b2] transition-colors">News</a></li>
                <li><a href="#verein" className="hover:text-[#00c2b2] transition-colors">Verein</a></li>
                <li><a href="#spenden" className="hover:text-[#00c2b2] transition-colors">Spenden</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-wide">Rechtliches</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#impressum" className="hover:text-[#00c2b2] transition-colors">Impressum</a></li>
                <li><a href="#datenschutz" className="hover:text-[#00c2b2] transition-colors">Datenschutz</a></li>
                <li><a href="#kontakt" className="hover:text-[#00c2b2] transition-colors">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm space-y-2">
            <p>&copy; {new Date().getFullYear()} Schweinswale e.V. Alle Rechte vorbehalten.</p>
            <p>Mit ♥ gemacht von <a href="https://www.bitreform.de" target="_blank" rel="noopener noreferrer" className="text-[#00c2b2] hover:text-[#00a89a] font-medium transition-colors">BITREFORM</a></p>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </div>
  );
}
