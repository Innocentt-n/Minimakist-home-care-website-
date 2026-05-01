/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Heart, 
  Users, 
  Home, 
  PawPrint, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MessageCircle,
  Calendar,
  Sparkles
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-brand-green selection:text-white bg-white">
      {/* --- Top Navigation --- */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/20">
                <Home className="text-white w-7 h-7" />
              </div>
              <span className="text-2xl font-bold font-display text-slate-900 leading-none">
                Parkresidenz <br />
                <span className="text-sm font-medium text-brand-green uppercase tracking-[0.2em] block mt-1">am Germanswald</span>
              </span>
            </div>

            <div className="hidden md:flex items-center gap-10">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Beratung & Kontakt</span>
                <a href="tel:+4977218790" className="text-lg font-bold text-slate-900 hover:text-brand-green transition-colors">+49 7721 8790</a>
              </div>
              <button className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-brand-green/20 active:scale-95 text-base">
                Besichtigung vereinbaren
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Hero Section (RE-ENGINEERED FOR CONVERSION) --- */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-blue text-brand-green font-bold text-xs uppercase tracking-[0.2em] mb-10 shadow-sm">
              <Sparkles className="w-4 h-4" />
              Exzellente Pflege in Villingen
            </span>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tight mb-10">
              Ein sicheres und <br />
              <span className="text-brand-green">würdevolles Zuhause</span> <br />
              für Ihre Angehörigen
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Professionelle Pflege in einer warmen, familiären Umgebung – für mehr Sicherheit und Lebensqualität im Alltag.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="w-full sm:w-auto bg-brand-green text-white px-12 py-6 rounded-[2rem] font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl shadow-brand-green/30 flex items-center justify-center gap-3 group active:scale-95">
                Besichtigung vereinbaren
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-12 py-6 rounded-[2rem] font-bold text-xl hover:border-brand-green/40 hover:bg-brand-beige/30 transition-all flex items-center justify-center gap-3 active:scale-95">
                <Phone className="w-6 h-6" />
                Jetzt Kontakt aufnehmen
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 bg-[radial-gradient(circle_at_center,rgba(45,90,70,0.05)_0%,transparent_70%)]" />
      </section>

      {/* --- Image Showcase --- */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-3xl aspect-[16/7] group"
          >
            <img 
              src="https://picsum.photos/seed/nursing_home_vibe/1600/700" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Parkresidenz am Germanswald"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
              <p className="text-white/80 uppercase font-bold tracking-widest text-sm mb-2">Kurgebiet Villingen</p>
              <h3 className="text-3xl font-bold text-white max-w-xl">Umgeben von Natur, erfüllt von Menschlichkeit.</h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Warum Wir (GRID UPGRADE) --- */}
      <section id="warum-wir" className="py-32 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Überzeugende Vorteile</span>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
                Warum uns Familien <br /> vertrauen
              </h2>
            </div>
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-2">
              Wir verbinden medizinische Kompetenz mit Herzlichkeit. In der Parkresidenz ist jeder Bewohner Teil einer lebendigen Gemeinschaft.
            </p>
          </div>

          <motion.div 
            {...staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                icon: Heart, 
                title: "Individuelle Betreuung", 
                text: "Personalisierte Pflegepläne, die den Menschen in den Mittelpunkt stellen." 
              },
              { 
                icon: MapPin, 
                title: "Ruhige Lage", 
                text: "Idyllische Umgebung im Kurgebiet Villingen direkt am Germanswald." 
              },
              { 
                icon: Home, 
                title: "Familiäre Atmosphäre", 
                text: "Ein Zuhause mit 79 Bewohnern – groß genug für Qualität, klein genug für Nähe." 
              },
              { 
                icon: PawPrint, 
                title: "Haustiere willkommen", 
                text: "Liebgewonnene Gefährten dürfen nach Absprache gerne mit einziehen." 
              }
            ].map((feature, id) => (
              <motion.div 
                key={id}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.7 }
                }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-brand-beige rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-brand-green transition-all duration-500">
                  <feature.icon className="w-10 h-10 text-brand-green group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- Detailed Info Section --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-5xl font-bold text-slate-900 mb-8 leading-tight">Viel Raum für Persönlichkeit</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                Ein Umzug bedeutet Veränderung, aber nicht den Verlust der Identität. Bei uns können die Zimmer mit eigenen Möbeln und Erinnerungsstücken eingerichtet werden.
              </p>
              <ul className="space-y-6">
                {[
                  "Zimmer mit eigenem Charakter gestaltbar",
                  "Aktive Einbeziehung der Angehörigen",
                  "Vielseitige Freizeit- und Betreuungsangebote",
                  "Barrierefreie Architektur im gesamten Haus"
                ].map((item, id) => (
                  <li key={id} className="flex gap-4 items-center text-lg font-medium text-slate-800">
                    <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="rounded-[2rem] overflow-hidden shadow-lg h-64">
                    <img src="https://picsum.photos/seed/room1/400/600" className="w-full h-full object-cover" alt="Zimmer Beispiel" referrerPolicy="no-referrer" />
                   </div>
                   <div className="bg-brand-blue rounded-[2rem] p-8 text-center">
                    <span className="text-4xl font-bold text-brand-green block mb-1">79</span>
                    <span className="text-sm font-bold uppercase text-slate-500 tracking-widest">Plätze</span>
                   </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-brand-green rounded-[2rem] p-8 text-center text-white h-48 flex flex-col justify-center">
                    <Heart className="w-10 h-10 text-white/50 mx-auto mb-3" />
                    <span className="text-lg font-bold">100% Herzlichkeit</span>
                  </div>
                  <div className="rounded-[2rem] overflow-hidden shadow-lg h-80">
                    <img src="https://picsum.photos/seed/care2/400/800" className="w-full h-full object-cover" alt="Pflegekraft" referrerPolicy="no-referrer" />
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-32 bg-brand-blue/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-green font-bold uppercase tracking-widest text-sm mb-4 block">Der Weg zu uns</span>
          <h2 className="text-5xl font-bold text-slate-900 mb-20 tracking-tight">Klarheit von Anfang an</h2>
          
          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-brand-green/20" />
            
            {[
              { icon: MessageCircle, title: "Anfrage", text: "Kontaktieren Sie uns telefonisch oder per Mail." },
              { icon: Calendar, title: "Information", text: "Wir beraten Sie umfassend zu allen Pflegeaspekten." },
              { icon: MapPin, title: "Besichtigung", text: "Machen Sie sich vor Ort ein eigenes Bild von uns." },
              { icon: Home, title: "Einzug", text: "Wir unterstützen Sie beim reibungslosen Übergang." }
            ].map((item, id) => (
              <motion.div 
                key={id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: id * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="w-32 h-32 bg-white rounded-full mx-auto flex items-center justify-center shadow-2xl mb-8 border-[6px] border-brand-blue group hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-12 h-12 text-brand-green" />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-black shadow-lg">
                    {id + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed px-4">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CONVERSION CALL --- */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900 rounded-[4rem] p-16 md:p-32 text-white relative overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-blue/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
              Gemeinsam den richtigen Platz finden
            </h2>
            <p className="text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-light">
              Rufen Sie uns an oder vereinbaren Sie eine Besichtigung. Wir freuen uns darauf, Sie kennenzulernen.
            </p>
            
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <button className="w-full lg:w-auto bg-brand-green text-white px-12 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4">
                Besichtigung vereinbaren
              </button>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-widest mb-2">Direkter Draht</span>
                <a href="tel:+4977218790" className="text-4xl font-black text-white hover:text-brand-green transition-colors">+49 7721 8790</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-20 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                  <Home className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-slate-900">Parkresidenz</span>
              </div>
              <p className="text-lg text-slate-500 leading-relaxed">
                Ihr professioneller Partner für stationäre Pflege im Kurgebiet Villingen. Geborgenheit ist unser höchstes Gut.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Kontakt</h4>
                <ul className="space-y-4 text-slate-500 font-medium">
                  <li><a href="tel:+4977218790" className="hover:text-brand-green transition-colors">+49 7721 8790</a></li>
                  <li className="text-sm opacity-60">+49 7721 879110</li>
                  <li className="text-sm">78052 Villingen-Schwenningen</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Links</h4>
                <ul className="space-y-4 text-slate-500 font-medium">
                  <li><a href="#" className="hover:text-brand-green transition-colors text-sm">Impressum</a></li>
                  <li><a href="#" className="hover:text-brand-green transition-colors text-sm">Datenschutz</a></li>
                  <li><a href="#" className="hover:text-brand-green transition-colors text-sm">Cookie-Richtlinie</a></li>
                </ul>
              </div>
            </div>

            <div className="bg-brand-beige p-8 rounded-[2rem]">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-green" />
                Rezeption
              </h4>
              <div className="space-y-2 text-sm font-medium text-slate-600">
                <div className="flex justify-between"><span>Mo - Fr:</span> <span>08:00 – 12:00</span></div>
                <div className="flex justify-between"><span>Mo & Mi:</span> <span>13:00 – 17:00</span></div>
                <div className="flex justify-between"><span>Fr Nachmittag:</span> <span>13:00 – 16:00</span></div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Parkresidenz am Germanswald. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-brand-green/10 rounded-full">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
              <span className="text-xs font-bold text-brand-green uppercase tracking-widest">Qualität geprüft</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
