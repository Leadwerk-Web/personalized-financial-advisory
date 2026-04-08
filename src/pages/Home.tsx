import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, TrendingUp, Sun, CheckCircle2, Star, X, Building2, UserCheck, Award, Users, Briefcase, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { clientStories, credentials, generalFaq } from '../data/content';

const chartData = [
  { age: 30, value: 10000, withoutProtection: 10000 },
  { age: 35, value: 25000, withoutProtection: 25000 },
  { age: 40, value: 45000, withoutProtection: 45000 },
  { age: 45, value: 70000, withoutProtection: 15000 }, // Event happens here
  { age: 50, value: 100000, withoutProtection: 5000 },
  { age: 55, value: 135000, withoutProtection: 0 },
  { age: 60, value: 180000, withoutProtection: 0 },
  { age: 65, value: 230000, withoutProtection: 0 },
];

export default function Home() {
  return (
    <div>
      {/* 1. Personal Hero */}
      <section className="relative bg-ivory-50 overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-forest-900">
              Finanzen verstehen. <br />
              <span className="text-forest-700 italic font-light">Entscheidungen treffen.</span>
            </h1>
            <p className="text-lg md:text-xl text-forest-800/80 mb-10 leading-relaxed font-medium">
              Ich helfe jungen Berufstätigen und Familien, Klarheit in ihre Finanzen zu bringen – unabhängig, verständlich und ohne Verkaufsdruck.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="bg-forest-800 text-ivory-50 px-8 py-4 rounded-xl font-semibold hover:bg-forest-700 transition-colors flex items-center justify-center gap-2 shadow-sm">
                Unverbindlich kennenlernen
              </Link>
              <a href="#themen" className="bg-ivory-100 text-forest-900 border border-ivory-200 px-8 py-4 rounded-xl font-semibold hover:bg-ivory-200 transition-colors flex items-center justify-center gap-2">
                Themen entdecken <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-sand-200 relative group">
              <img 
                src="https://picsum.photos/seed/advisor-calm/800/1000" 
                alt="Max Müller - Finanzberater" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.5 Stats Bar */}
      <div className="bg-forest-900 py-10 border-t border-forest-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-forest-800/50">
          <div><p className="text-4xl font-serif font-bold text-sand-300 mb-2">10+</p><p className="text-sm text-ivory-50/70 uppercase tracking-wider font-bold">Jahre Erfahrung</p></div>
          <div><p className="text-4xl font-serif font-bold text-sand-300 mb-2">100%</p><p className="text-sm text-ivory-50/70 uppercase tracking-wider font-bold">Unabhängig</p></div>
          <div><p className="text-4xl font-serif font-bold text-sand-300 mb-2">500+</p><p className="text-sm text-ivory-50/70 uppercase tracking-wider font-bold">Zufriedene Kunden</p></div>
          <div><p className="text-4xl font-serif font-bold text-sand-300 mb-2">150+</p><p className="text-sm text-ivory-50/70 uppercase tracking-wider font-bold">Gesellschaften</p></div>
        </div>
      </div>

      {/* 1.75 Trust Seals (Inspired by Hoesch & Partner) */}
      <div className="py-8 bg-white border-b border-ivory-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-24 opacity-70">
          <div className="flex items-center gap-3"><Award className="w-8 h-8 text-forest-700" /><span className="font-bold text-sm uppercase tracking-wider text-forest-900">IHK Geprüft</span></div>
          <div className="flex items-center gap-3"><ShieldCheck className="w-8 h-8 text-forest-700" /><span className="font-bold text-sm uppercase tracking-wider text-forest-900">100% Unabhängig</span></div>
          <div className="flex items-center gap-3"><Star className="w-8 h-8 text-forest-700" /><span className="font-bold text-sm uppercase tracking-wider text-forest-900">Top Bewertet</span></div>
        </div>
      </div>

      {/* 1.8 Target Groups (Inspired by ASI Karlsruhe) */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-900">In welcher Phase stecken Sie?</h2>
            <p className="text-lg text-forest-800/70">
              Finanzplanung ändert sich mit dem Leben. Ich begleite Sie in jeder Phase mit der passenden Strategie.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Berufseinsteiger', desc: 'Den Grundstein legen: Erste eigene Wohnung, erstes Gehalt, wichtige Basis-Absicherungen.', icon: Briefcase },
              { title: 'Familien & Paare', desc: 'Verantwortung übernehmen: Vermögensaufbau für Kinder, Immobilienkauf und Hinterbliebenenschutz.', icon: Users },
              { title: 'Erfahrene & 50+', desc: 'Den Ruhestand planen: Rentenlücke schließen, Vermögen strukturieren und entspannt zurücklehnen.', icon: Sun }
            ].map((phase, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-ivory-200 shadow-sm hover:shadow-md transition-shadow">
                <phase.icon className="w-8 h-8 text-forest-700 mb-6" />
                <h3 className="text-xl font-bold mb-3 text-forest-900">{phase.title}</h3>
                <p className="text-forest-800/70 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Topic Entry Cards */}
      <section id="themen" className="py-24 bg-ivory-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-900">Wobei kann ich helfen?</h2>
            <p className="text-lg text-forest-800/70">
              Wir starten dort, wo Ihr Bedarf am größten ist. Kein Produktverkauf, sondern echte Lösungen für Ihre Lebenssituation.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Absicherung',
                desc: 'Schützen Sie Ihr Einkommen und Ihre Familie vor existenziellen Risiken.',
                icon: ShieldCheck,
                link: '/absicherung',
                color: 'bg-sand-100 text-forest-800'
              },
              {
                title: 'Vermögensaufbau',
                desc: 'Bauen Sie systematisch Vermögen auf, das zu Ihren Zielen passt.',
                icon: TrendingUp,
                link: '/vermoegensaufbau',
                color: 'bg-forest-800 text-ivory-50'
              },
              {
                title: 'Altersvorsorge',
                desc: 'Schließen Sie Ihre Rentenlücke für einen entspannten Ruhestand.',
                icon: Sun,
                link: '/altersvorsorge',
                color: 'bg-sand-200 text-forest-900'
              }
            ].map((topic, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
              >
                <Link to={topic.link} className={`block h-full rounded-3xl p-8 transition-transform hover:-translate-y-1 ${topic.color}`}>
                  <topic.icon className="w-10 h-10 mb-6 opacity-80" />
                  <h3 className="text-2xl font-bold mb-3">{topic.title}</h3>
                  <p className="opacity-90 mb-8 leading-relaxed">{topic.desc}</p>
                  <div className="flex items-center gap-2 font-semibold text-sm uppercase tracking-wider">
                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Example / Diagram Section */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest-900">Warum ein gutes Konzept entscheidend ist</h2>
            <p className="text-lg text-forest-800/70">
              Ein Beispiel aus der Praxis: Was passiert bei einer unerwarteten Berufsunfähigkeit mit 45 Jahren? Ein klares Bild sagt mehr als tausend Klauseln.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-ivory-200 shadow-sm">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-forest-900">Vermögensentwicklung</h3>
                  <p className="text-forest-800/70 mb-6">
                    Ohne Absicherung zehrt ein Schicksalsschlag Ihre Ersparnisse schnell auf. Mit dem richtigen Schutz wächst Ihr Vermögen trotz Einkommensausfall weiter.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-forest-700 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-forest-900">Mit Absicherung</p>
                      <p className="text-sm text-forest-800/70">Rente fängt den Ausfall auf, Sparplan läuft weiter.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-rose-400 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold text-forest-900">Ohne Absicherung</p>
                      <p className="text-sm text-forest-800/70">Ersparnisse müssen für den Lebensunterhalt aufgebraucht werden.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#234c43" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#234c43" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorWithout" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#fb7185" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#fb7185" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e6d5c3" />
                    <XAxis 
                      dataKey="age" 
                      tickFormatter={(val) => `${val} J.`} 
                      stroke="#1a3c34"
                      tick={{ fill: '#1a3c34', opacity: 0.7 }}
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <YAxis 
                      tickFormatter={(val) => `${val / 1000}k €`} 
                      stroke="#1a3c34"
                      tick={{ fill: '#1a3c34', opacity: 0.7 }}
                      tickLine={false}
                      axisLine={false}
                      dx={-10}
                    />
                    <Tooltip 
                      formatter={(value: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)}
                      labelFormatter={(label) => `Alter: ${label} Jahre`}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #f2efe9', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <ReferenceLine x={45} stroke="#d4bfa5" strokeDasharray="3 3" label={{ position: 'top', value: 'Eintritt BU', fill: '#1a3c34', fontSize: 12, opacity: 0.7 }} />
                    <Area 
                      type="monotone" 
                      dataKey="withoutProtection" 
                      name="Ohne Absicherung"
                      stroke="#fb7185" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorWithout)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      name="Mit Absicherung"
                      stroke="#234c43" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Advisory Process */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-forest-900">So arbeite ich</h2>
              <p className="text-lg text-forest-800/70 mb-10">
                Gute Beratung braucht Zeit und Vertrauen. Mein Prozess ist darauf ausgelegt, dass Sie jede Entscheidung zu 100% nachvollziehen können.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Kennenlernen & Analyse', desc: 'Wir besprechen Ihre Ziele und prüfen, wo Sie aktuell stehen. Völlig unverbindlich.' },
                  { step: '02', title: 'Konzept & Strategie', desc: 'Ich erarbeite einen maßgeschneiderten Plan und erkläre Ihnen alle Optionen verständlich.' },
                  { step: '03', title: 'Umsetzung & Begleitung', desc: 'Wir setzen die Strategie um. Ich bleibe Ihr Ansprechpartner für alle zukünftigen Fragen.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="font-serif text-3xl font-light text-sand-300">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-forest-900">{item.title}</h4>
                      <p className="text-forest-800/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-sand-100 rounded-3xl p-10 md:p-14">
              <h3 className="text-2xl font-bold mb-6 text-forest-900">Mein Versprechen</h3>
              <ul className="space-y-4">
                {[
                  'Kein Fachchinesisch',
                  'Kein Verkaufsdruck',
                  '100% Transparenz bei Kosten',
                  'Unabhängige Produktauswahl',
                  'Langfristige Partnerschaft'
                ].map((promise, i) => (
                  <li key={i} className="flex items-center gap-3 text-forest-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-forest-700 shrink-0" />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-900">Der Unterschied macht sich bezahlt</h2>
            <p className="text-lg text-forest-800/70">Warum eine unabhängige Beratung langfristig die bessere Wahl ist.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-ivory-50 rounded-3xl p-8 md:p-10 border border-ivory-200 opacity-80">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-ivory-200 rounded-full flex items-center justify-center text-forest-800/50">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-forest-900">Klassische Bank/Vertreter</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Verkauft hauseigene Produkte',
                  'Gebunden an eine Gesellschaft',
                  'Oft hohe versteckte Kosten',
                  'Verkaufsdruck durch Quoten',
                  'Häufig wechselnde Ansprechpartner'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-forest-800/70">
                    <X className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-forest-900 rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-800 rounded-bl-full -z-10 opacity-50" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-sand-200 rounded-full flex items-center justify-center text-forest-900">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-ivory-50">Unabhängiger Makler</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Zugriff auf den gesamten Markt',
                  'Rechtlich nur Ihnen verpflichtet',
                  '100% Kostentransparenz',
                  'Beratung statt Verkauf',
                  'Ein fester Ansprechpartner auf Dauer'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-ivory-50/90">
                    <CheckCircle2 className="w-5 h-5 text-sand-300 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Personal Trust Section */}
      <section className="py-24 bg-forest-900 text-ivory-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Warum ich tue, was ich tue</h2>
          <p className="text-lg md:text-xl text-ivory-50/80 leading-relaxed mb-8">
            "Finanzen müssen nicht kompliziert sein. Ich habe oft erlebt, wie Menschen aus Unsicherheit falsche Entscheidungen treffen oder gar nichts tun. Mein Ziel ist es, Ihnen diese Unsicherheit zu nehmen. Ich möchte, dass Sie Ihre Finanzen verstehen und mit einem guten Gefühl in die Zukunft blicken können."
          </p>
          <p className="font-serif text-xl italic text-sand-200">— Max Müller</p>
        </div>
      </section>

      {/* 5. Client Stories & Credentials */}
      <section className="py-24 bg-ivory-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-forest-900">Das sagen meine Kunden</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {clientStories.map((story, i) => (
              <div key={i} className="bg-ivory-50 rounded-2xl p-8 shadow-sm border border-ivory-200">
                <div className="flex gap-1 text-sand-300 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-forest-800 italic mb-6 leading-relaxed">"{story.quote}"</p>
                <div>
                  <p className="font-bold text-forest-900">{story.nameOrInitials}</p>
                  <p className="text-sm text-forest-800/60">{story.segment}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-ivory-200 pt-16">
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-forest-800/50 mb-8">Qualifikationen</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {credentials.map((cred, i) => (
                <div key={i} className="text-center max-w-[200px]">
                  <p className="font-bold text-forest-900 mb-1">{cred.title}</p>
                  <p className="text-xs text-forest-800/60">{cred.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Partner Strip */}
          <div className="border-t border-ivory-200 pt-16 mt-16">
            <h3 className="text-center text-sm font-bold uppercase tracking-widest text-forest-800/50 mb-8">Auswahl aus über 150 Partnergesellschaften</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-40 grayscale">
              <div className="text-xl font-serif font-bold">Allianz</div>
              <div className="text-xl font-sans font-black tracking-tighter">ALTE LEIPZIGER</div>
              <div className="text-xl font-serif italic">Die Bayerische</div>
              <div className="text-xl font-sans font-bold uppercase tracking-widest">Gothaer</div>
              <div className="text-xl font-serif font-bold">HanseMerkur</div>
              <div className="text-xl font-sans font-bold">VOLKSWOHL BUND</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-ivory-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-forest-900">Häufige Fragen</h2>
          <div className="space-y-8">
            {generalFaq.map((faq, i) => (
              <div key={i}>
                <h4 className="text-xl font-bold mb-3 text-forest-900">{faq.question}</h4>
                <p className="text-forest-800/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 Lead Magnet (Inspired by various modern brokers) */}
      <section className="py-16 bg-sand-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-forest-900">Noch nicht bereit für ein Gespräch?</h2>
            <p className="text-forest-800/80 text-lg">
              Laden Sie sich meine kostenfreie Checkliste herunter: "Die 5 wichtigsten Finanz-Schritte für junge Berufstätige".
            </p>
          </div>
          <button className="shrink-0 bg-forest-900 text-ivory-50 px-8 py-4 rounded-xl font-bold hover:bg-forest-800 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" /> Checkliste gratis anfordern
          </button>
        </div>
      </section>

      {/* 7. Final Contact Block */}
      <section className="py-24 bg-forest-800 text-ivory-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Lassen Sie uns sprechen</h2>
          <p className="text-lg text-ivory-50/80 mb-10 max-w-2xl mx-auto">
            Buchen Sie sich direkt einen Termin in meinem Kalender für ein kurzes, unverbindliches Kennenlernen. Oder schreiben Sie mir eine Nachricht.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-sand-200 text-forest-900 px-8 py-4 rounded-xl font-bold hover:bg-sand-300 transition-colors text-lg">
            Termin vereinbaren <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
