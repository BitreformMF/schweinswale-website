import { useState, useEffect, useRef } from 'react';
import { ChevronRight, MapPin, Send, Camera, Calendar, Clock, Users as UsersIcon, Info } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import HeroImage from '../components/HeroImage';

const wavyLine = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0,5 Q5,0 10,5 T20,5' fill='none' stroke='%2300c2b2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'repeat-x' as const,
  backgroundSize: '20px 10px',
};

// Fix default marker icon
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function LocationPicker({ position, setPosition }: { position: [number, number] | null; setPosition: (pos: [number, number]) => void }) {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

export default function SichtungMelden() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    datum: '',
    uhrzeit: '',
    anzahl: '1',
    verhalten: '',
    gewaesser: '',
    beschreibung: '',
    name: '',
    email: '',
    foto: null as File | null,
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
    try {
      await sendEmail('sichtung', {
        from_name: form.name,
        from_email: form.email,
        datum: form.datum,
        uhrzeit: form.uhrzeit || 'Nicht angegeben',
        anzahl: form.anzahl,
        gewaesser: form.gewaesser,
        verhalten: form.verhalten || 'Nicht angegeben',
        beschreibung: form.beschreibung || 'Keine Beschreibung',
        position: position ? `${position[0].toFixed(5)}° N, ${position[1].toFixed(5)}° O` : 'Nicht markiert',
      });
    } catch (err) {
      console.error('Email send failed:', err);
    }
    setSending(false);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (position && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [position]);

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
          <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">Vielen Dank!</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Ihre Schweinswal-Sichtung wurde erfolgreich übermittelt. Jede Meldung hilft uns, die Schweinswale besser zu schützen!
          </p>
          <button
            onClick={() => { setSubmitted(false); setPosition(null); setForm({ datum: '', uhrzeit: '', anzahl: '1', verhalten: '', gewaesser: '', beschreibung: '', name: '', email: '', foto: null, datenschutz: false }); }}
            className="bg-[#00c2b2] hover:bg-[#00a89a] text-white font-bold uppercase tracking-wide py-3 px-8 rounded-full transition-colors"
          >
            Weitere Sichtung melden
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
          src={`https://web.archive.org/web/20250906010646im_/https://walschutz.org/wp-content/uploads/2018/04/Schweinswale-im-Hamburger-Hafen-Copyright-Wibke-Hildebrandt-300x200.jpg`}
          alt="Schweinswale im Hamburger Hafen"
          />
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 flex-wrap">
          <a href="#" className="hover:text-[#00c2b2] transition-colors" onClick={() => window.scrollTo(0, 0)}>Startseite</a>
          <ChevronRight className="w-4 h-4 mx-1" />
          <span className="text-slate-800 font-semibold">Sichtung melden</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-black text-slate-800 uppercase tracking-tight mb-4">
          Schweinswal-Sichtung melden
        </h1>
        <div className="w-24 h-3 mb-6" style={wavyLine}></div>

        <p className="text-xl text-slate-600 leading-relaxed mb-4 max-w-3xl">
          Sie haben einen Schweinswal gesichtet? Helfen Sie uns bei der Erfassung! Klicken Sie auf die Karte, um den Sichtungsort zu markieren, und füllen Sie das Meldeformular aus.
        </p>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-4 mb-10 flex items-start gap-3 max-w-3xl">
          <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <p className="text-blue-700 text-sm">
            Bitte melden Sie nur Sichtungen von lebenden Schweinswalen. Totfunde melden Sie bitte telefonisch an die zuständige Behörde oder direkt an uns per E-Mail.
          </p>
        </div>

        {/* Map */}
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6 text-[#00c2b2]" />
          1. Sichtungsort auf der Karte markieren
        </h2>
        <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 mb-4" style={{ height: '500px' }}>
          <MapContainer
            center={[53.87, 8.7]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationPicker position={position} setPosition={setPosition} />
          </MapContainer>
        </div>
        {position && (
          <p className="text-sm text-slate-500 mb-10">
            Markierter Ort: {position[0].toFixed(5)}° N, {position[1].toFixed(5)}° O
          </p>
        )}
        {!position && (
          <p className="text-sm text-slate-400 italic mb-10">Klicken Sie auf die Karte, um den Sichtungsort zu markieren.</p>
        )}

        {/* Form */}
        <div ref={formRef}>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Send className="w-6 h-6 text-[#00c2b2]" />
            2. Meldeformular ausfüllen
          </h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Datum */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Calendar className="w-4 h-4 text-[#00c2b2]" />
                  Datum der Sichtung *
                </label>
                <input
                  type="date"
                  name="datum"
                  value={form.datum}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
                />
              </div>

              {/* Uhrzeit */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Clock className="w-4 h-4 text-[#00c2b2]" />
                  Ungefähre Uhrzeit
                </label>
                <input
                  type="time"
                  name="uhrzeit"
                  value={form.uhrzeit}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent"
                />
              </div>

              {/* Anzahl */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <UsersIcon className="w-4 h-4 text-[#00c2b2]" />
                  Anzahl der Tiere *
                </label>
                <select
                  name="anzahl"
                  value={form.anzahl}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent bg-white"
                >
                  <option value="1">1 Tier</option>
                  <option value="2">2 Tiere</option>
                  <option value="3-5">3–5 Tiere</option>
                  <option value="6-10">6–10 Tiere</option>
                  <option value="mehr">Mehr als 10 Tiere</option>
                  <option value="unbekannt">Unbekannt</option>
                </select>
              </div>

              {/* Gewässer */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <MapPin className="w-4 h-4 text-[#00c2b2]" />
                  Gewässer *
                </label>
                <select
                  name="gewaesser"
                  value={form.gewaesser}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent bg-white"
                >
                  <option value="">Bitte wählen…</option>
                  <option value="elbe">Elbe</option>
                  <option value="weser">Weser</option>
                  <option value="ems">Ems</option>
                  <option value="jade">Jade</option>
                  <option value="nordsee">Nordsee (Küste)</option>
                  <option value="ostsee">Ostsee</option>
                  <option value="anderes">Anderes Gewässer</option>
                </select>
              </div>

              {/* Verhalten */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  Beobachtetes Verhalten
                </label>
                <select
                  name="verhalten"
                  value={form.verhalten}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent bg-white"
                >
                  <option value="">Bitte wählen…</option>
                  <option value="schwimmend">Schwimmend / Durchziehend</option>
                  <option value="fressend">Fressend / Jagend</option>
                  <option value="ruhend">Ruhend</option>
                  <option value="spielend">Spielend / Springend</option>
                  <option value="mutter-kalb">Mutter mit Kalb</option>
                  <option value="gruppe">In Gruppe</option>
                  <option value="anderes">Anderes</option>
                </select>
              </div>

              {/* Foto */}
              <div>
                <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                  <Camera className="w-4 h-4 text-[#00c2b2]" />
                  Foto (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setForm(prev => ({ ...prev, foto: e.target.files?.[0] || null }))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#00c2b2]/10 file:text-[#00c2b2] hover:file:bg-[#00c2b2]/20"
                />
              </div>
            </div>

            {/* Beschreibung */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                Zusätzliche Beschreibung
              </label>
              <textarea
                name="beschreibung"
                value={form.beschreibung}
                onChange={handleChange}
                rows={4}
                placeholder="z.B. Wetterbedingungen, besonderes Verhalten, Dauer der Sichtung…"
                className="w-full border border-slate-300 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#00c2b2] focus:border-transparent resize-y"
              />
            </div>

            <div className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Ihre Kontaktdaten</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                {sending ? 'Wird gesendet…' : 'Sichtung melden'}
              </button>
              <p className="text-sm text-slate-400">* Pflichtfelder</p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
