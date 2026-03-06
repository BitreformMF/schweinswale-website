import { useState } from 'react';
import { ChevronRight, Send, Users } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function Foerdermitgliedschaft() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    beitrag: '25',
    beitragCustom: '',
    telefon: '',
    adresse: '',
    zahlweise: '',
    datenschutz: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setForm(prev => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm(prev => ({ ...prev, [target.name]: target.value }));
    }
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const beitragText = form.beitrag === 'custom' ? `${form.beitragCustom} € (eigener Betrag)` : form.beitrag === '13.50' ? '13,50 € (ermäßigt)' : '25,00 €';
    try {
      await sendEmail('foerdermitgliedschaft', {
        from_name: form.name,
        from_email: form.email,
        beitrag: beitragText,
        zahlweise: form.zahlweise,
        telefon: form.telefon || 'Nicht angegeben',
        adresse: form.adresse,
      });
    } catch (err) {
      console.error('Email send failed:', err);
    }
    setSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <>
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
            src="https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg"
            alt="Schweinswal"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-[#00c2b2]/10 flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-[#00c2b2]" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">Antrag gesendet!</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Vielen Dank für Ihren Antrag auf Fördermitgliedschaft. Wir werden uns so schnell wie möglich bei Ihnen melden.
          </p>
          <a
            href="#spenden"
            className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors inline-block"
          >
            Zurück zur Übersicht
          </a>
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
          src="https://web.archive.org/web/20250906010646im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg"
          alt="Schweinswal"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <a href="#spenden" className="hover:text-[#00c2b2] transition-colors">Helfen Sie</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Fördermitgliedschaft</span>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-[#00c2b2]/10 flex items-center justify-center">
            <Users className="w-7 h-7 text-[#00c2b2]" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight">
              Fördermitgliedschaft
            </h1>
          </div>
        </div>
        <div className="w-24 h-3 mb-8" style={wavyLine}></div>

        <div className="bg-slate-50 rounded-xl p-6 mb-8 border-l-4 border-[#00c2b2]">
          <p className="text-lg text-slate-700 font-semibold">
            Ja, ich möchte Fördermitglied werden!
          </p>
          <p className="text-slate-600 mt-1">
            Fördermitglied können Sie bereits mit einem Jahresbeitrag von 25,- € werden, ermäßigt bereits ab 13,50 €! Bitte füllen Sie das folgende Formular aus. Wir senden Ihnen einen Aufnahmeantrag zu.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Name *</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Ihr vollständiger Name"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">E-Mail-Adresse *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="ihre@email.de"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Jahresbeitrag *</label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200 cursor-pointer hover:border-[#00c2b2] transition-colors">
                  <input
                    type="radio"
                    name="beitrag"
                    value="25"
                    checked={form.beitrag === '25'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#00c2b2] focus:ring-[#00c2b2]"
                  />
                  <div>
                    <span className="font-bold text-slate-800">25,00 €</span>
                    <span className="text-slate-500 text-sm ml-2">/ Jahr</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200 cursor-pointer hover:border-[#00c2b2] transition-colors">
                  <input
                    type="radio"
                    name="beitrag"
                    value="13.50"
                    checked={form.beitrag === '13.50'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#00c2b2] focus:ring-[#00c2b2]"
                  />
                  <div>
                    <span className="font-bold text-slate-800">13,50 €</span>
                    <span className="text-slate-500 text-sm ml-2">/ Jahr (ermäßigt)</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 bg-slate-50 rounded-lg p-4 border border-slate-200 cursor-pointer hover:border-[#00c2b2] transition-colors">
                  <input
                    type="radio"
                    name="beitrag"
                    value="custom"
                    checked={form.beitrag === 'custom'}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#00c2b2] focus:ring-[#00c2b2]"
                  />
                  <span className="font-bold text-slate-800">Eigener Betrag</span>
                </label>
                {form.beitrag === 'custom' && (
                  <div className="ml-8">
                    <div className="relative">
                      <input
                        type="number"
                        name="beitragCustom"
                        value={form.beitragCustom}
                        onChange={handleChange}
                        required
                        min="25"
                        step="0.01"
                        placeholder="Mindestens 25,00"
                        className="w-full border border-slate-300 rounded-lg px-4 py-3 pr-12 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-medium">€ / Jahr</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Mindestbeitrag: 25,00 € / Jahr</p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Zahlweise *</label>
              <select
                name="zahlweise"
                value={form.zahlweise}
                onChange={handleChange}
                required
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent bg-white"
              >
                <option value="">Bitte wählen…</option>
                <option value="einzug">Ich erteile eine Einzugsermächtigung</option>
                <option value="spendenformular">Ich überweise per Spendenformular</option>
                <option value="bankauftrag">Ich überweise per Bankauftrag</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Telefonnummer</label>
              <input
                type="tel"
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
                placeholder="Ihre Telefonnummer (optional)"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
              />
            </div>

            <div>
              <label className="text-sm font-bold text-slate-700 mb-2 block">Adresse *</label>
              <textarea
                name="adresse"
                value={form.adresse}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Straße, Hausnummer, PLZ, Ort"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent resize-y"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="datenschutz"
                checked={form.datenschutz}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5 text-[#00c2b2] border-slate-300 rounded focus:ring-[#00c2b2]"
              />
              <label className="text-sm text-slate-600">
                Ich akzeptiere, dass meine Daten verschlüsselt übertragen und gespeichert werden. Sie werden nicht an Dritte weitergegeben. Ich stimme der{' '}
                <a href="#datenschutz" className="text-[#00c2b2] hover:text-[#00a89a] font-medium">Datenschutzerklärung</a> zu. *
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={sending}
              className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-10 rounded-full transition-colors flex items-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {sending ? 'Wird gesendet…' : 'Antrag absenden'}
            </button>
            <p className="text-sm text-slate-400 mt-3">* Pflichtfelder</p>
          </div>
        </form>
      </main>
    </>
  );
}
