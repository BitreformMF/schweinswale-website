import { useState } from 'react';
import { ChevronRight, Send, Mail, MapPin, Phone } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', betreff: '', nachricht: '', datenschutz: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    if (target instanceof HTMLInputElement && target.type === 'checkbox') {
      setForm(prev => ({ ...prev, [target.name]: target.checked }));
    } else {
      setForm(prev => ({ ...prev, [target.name]: target.value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendEmail('kontakt', {
        from_name: form.name,
        from_email: form.email,
        subject: form.betreff,
        message: form.nachricht,
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
          <HeroImage
            src={`https://web.archive.org/web/20250805145610im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
            alt="Schweinswal"
            />
        </div>
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-20 h-20 rounded-full bg-[#00c2b2]/10 flex items-center justify-center mx-auto mb-6">
            <Send className="w-10 h-10 text-[#00c2b2]" />
          </div>
          <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">Nachricht gesendet!</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', email: '', betreff: '', nachricht: '', datenschutz: false }); }}
            className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors"
          >
            Neue Nachricht senden
          </button>
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
        <HeroImage
          src={`https://web.archive.org/web/20250906010646im_/https://walschutz.org/wp-content/uploads/2017/02/cropped-IMG_1744-Schweinswal-Copyright-S.-Koschinski-www.fjord-baelt.dkWeb_.jpg`}
          alt="Schweinswal"
          />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Kontakt</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Kontakt
        </h1>
        <div className="w-24 h-3 mb-10" style={wavyLine}></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">So erreichen Sie uns</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#00c2b2]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Adresse</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Schweinswale e.V.<br />
                    c/o Denise Wenger<br />
                    Deutschland
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#00c2b2]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">E-Mail</h3>
                  <a href="mailto:info@walschutz.org" className="text-[#00c2b2] hover:text-[#00a89a] transition-colors font-medium">
                    info@walschutz.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-[#00c2b2]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#00c2b2]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Totfund melden</h3>
                  <p className="text-slate-600 text-sm">
                    Bitte melden Sie Totfunde umgehend telefonisch an die zuständige Behörde oder per E-Mail an uns.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-50 rounded-xl p-6">
              <h3 className="font-bold text-slate-800 mb-2">Sichtung melden?</h3>
              <p className="text-slate-600 text-sm mb-4">
                Für Schweinswal-Sichtungen nutzen Sie bitte unser spezielles Meldeformular mit Kartenmarkierung.
              </p>
              <a href="#sichtung-melden" className="text-[#00c2b2] hover:text-[#00a89a] font-bold text-sm uppercase tracking-wide flex items-center transition-colors">
                Zur Sichtungsmeldung <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Schreiben Sie uns</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Ihr Name"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-700 mb-2 block">E-Mail *</label>
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
              </div>

              <div className="mb-6">
                <label className="text-sm font-bold text-slate-700 mb-2 block">Betreff *</label>
                <select
                  name="betreff"
                  value={form.betreff}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent bg-white"
                >
                  <option value="">Bitte wählen…</option>
                  <option value="allgemein">Allgemeine Anfrage</option>
                  <option value="spende">Spende / Fördermitgliedschaft</option>
                  <option value="patenschaft">Patenschaft</option>
                  <option value="presse">Presseanfrage</option>
                  <option value="kooperation">Kooperationsanfrage</option>
                  <option value="totfund">Totfund melden</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="text-sm font-bold text-slate-700 mb-2 block">Nachricht *</label>
                <textarea
                  name="nachricht"
                  value={form.nachricht}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Ihre Nachricht an uns…"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent resize-y"
                />
              </div>

              <div className="flex items-start gap-3 mb-8">
                <input
                  type="checkbox"
                  name="datenschutz"
                  checked={form.datenschutz}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-[#00c2b2] border-slate-300 rounded focus:ring-[#00c2b2]"
                />
                <label className="text-sm text-slate-600">
                  Ich habe die{' '}
                  <a href="#datenschutz" className="text-[#00c2b2] hover:text-[#00a89a] font-medium">Datenschutzerklärung</a>{' '}
                  gelesen und stimme der Verarbeitung meiner Daten zu. *
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-10 rounded-full transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  {sending ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
                <p className="text-sm text-slate-400">* Pflichtfelder</p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
