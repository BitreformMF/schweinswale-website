import { useState, useEffect } from 'react';

const CONSENT_KEY = 'cookie-consent';

type ConsentState = 'pending' | 'accepted' | 'rejected' | 'custom';

interface CookieSettings {
  essential: true;
  analytics: boolean;
}

function getStoredConsent(): { state: ConsentState; settings: CookieSettings } | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return null;
}

function storeConsent(state: ConsentState, settings: CookieSettings) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ state, settings }));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    storeConsent('accepted', { essential: true, analytics: true });
    setVisible(false);
  };

  const handleRejectAll = () => {
    storeConsent('rejected', { essential: true, analytics: false });
    setVisible(false);
  };

  const handleSaveCustom = () => {
    storeConsent('custom', { essential: true, analytics });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-end">
      <div className="fixed inset-0 bg-black/40" onClick={() => {}} />
      <div className="relative w-full max-w-3xl mx-4 mb-4 sm:mb-6 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8">
        <h3 className="text-lg font-bold text-slate-800 mb-2">Datenschutz-Einstellungen</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          Wir verwenden Cookies und ähnliche Technologien auf unserer Website. Einige davon sind technisch notwendig, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern. Weitere Informationen finden Sie in unserer{' '}
          <a href="#datenschutz" className="text-[#00c2b2] hover:text-[#00a89a] font-medium" onClick={() => setVisible(false)}>
            Datenschutzerklärung
          </a>.
        </p>

        {showDetails && (
          <div className="mb-4 space-y-3">
            <label className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mt-0.5 w-5 h-5 text-[#00c2b2] border-slate-300 rounded focus:ring-[#00c2b2]"
              />
              <div>
                <span className="font-semibold text-slate-800 text-sm">Technisch notwendig</span>
                <span className="ml-2 text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full font-medium">Immer aktiv</span>
                <p className="text-xs text-slate-500 mt-1">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200 cursor-pointer hover:border-[#00c2b2] transition-colors">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="mt-0.5 w-5 h-5 text-[#00c2b2] border-slate-300 rounded focus:ring-[#00c2b2]"
              />
              <div>
                <span className="font-semibold text-slate-800 text-sm">Statistik & Analyse</span>
                <p className="text-xs text-slate-500 mt-1">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln und melden.
                </p>
              </div>
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          {showDetails ? (
            <button
              onClick={handleSaveCustom}
              className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold text-sm uppercase tracking-wide py-3 px-6 rounded-full transition-colors"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={handleAcceptAll}
              className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold text-sm uppercase tracking-wide py-3 px-6 rounded-full transition-colors"
            >
              Alle akzeptieren
            </button>
          )}
          <button
            onClick={handleRejectAll}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm uppercase tracking-wide py-3 px-6 rounded-full transition-colors"
          >
            Nur notwendige
          </button>
          {!showDetails && (
            <button
              onClick={() => setShowDetails(true)}
              className="text-slate-500 hover:text-slate-700 font-medium text-sm py-3 px-6 transition-colors"
            >
              Einstellungen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
