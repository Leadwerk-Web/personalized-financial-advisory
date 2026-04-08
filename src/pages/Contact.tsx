import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to backend here
    setIsSubmitted(true);
  };

  return (
    <div className="bg-ivory-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-900">Kennenlernen</h1>
            <p className="text-lg text-forest-800/80">
              Der erste Schritt zu mehr Klarheit. Buchen Sie sich direkt einen Termin in meinem Kalender oder schreiben Sie mir eine Nachricht.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Calendar Option */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-ivory-200">
            <div className="w-12 h-12 bg-sand-200 rounded-xl flex items-center justify-center text-forest-900 mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-forest-900">Direkt Termin buchen</h2>
            <p className="text-forest-800/70 mb-8">
              Wählen Sie einfach einen passenden Zeitpunkt für ein 15-minütiges Erstgespräch per Video oder Telefon aus.
            </p>
            
            {/* Placeholder for Calendly or similar */}
            <div className="aspect-[4/3] bg-ivory-50 rounded-xl border border-ivory-200 flex flex-col items-center justify-center text-forest-800/50 p-6 text-center">
              <Calendar className="w-12 h-12 mb-4 opacity-20" />
              <p>Hier würde die Kalender-Integration (z.B. Calendly) erscheinen.</p>
              <button className="mt-6 bg-forest-800 text-ivory-50 px-6 py-3 rounded-lg font-semibold hover:bg-forest-700 transition-colors">
                Kalender öffnen
              </button>
            </div>
          </div>

          {/* Form Option */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-forest-900 rounded-xl flex items-center justify-center text-ivory-50">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-forest-900">Nachricht schreiben</h2>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-forest-900 text-ivory-50 rounded-3xl p-8 text-center"
              >
                <CheckCircle2 className="w-16 h-16 text-sand-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Vielen Dank!</h3>
                <p className="text-ivory-50/80">
                  Ihre Nachricht ist angekommen. Ich melde mich in der Regel innerhalb von 24 Stunden bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-forest-900 mb-2">Name</label>
                    <input required type="text" id="name" className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-forest-900 mb-2">E-Mail</label>
                    <input required type="email" id="email" className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-forest-900 mb-2">Telefon (optional)</label>
                  <input type="tel" id="phone" className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="topic" className="block text-sm font-bold text-forest-900 mb-2">Thema</label>
                  <select id="topic" className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent">
                    <option value="kennenlernen">Allgemeines Kennenlernen</option>
                    <option value="absicherung">Absicherung</option>
                    <option value="vermoegensaufbau">Vermögensaufbau</option>
                    <option value="altersvorsorge">Altersvorsorge</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-forest-900 mb-2">Ihre Nachricht</label>
                  <textarea required id="message" rows={4} className="w-full bg-white border border-ivory-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input required type="checkbox" id="consent" className="mt-1.5" />
                  <label htmlFor="consent" className="text-sm text-forest-800/70">
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme gespeichert werden. Weitere Informationen finden Sie in der <a href="/datenschutz" className="underline hover:text-forest-900">Datenschutzerklärung</a>.
                  </label>
                </div>

                <button type="submit" className="w-full bg-forest-800 text-ivory-50 px-8 py-4 rounded-xl font-bold hover:bg-forest-700 transition-colors">
                  Nachricht senden
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="mt-24 pt-12 border-t border-ivory-200">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-forest-900 mb-4">Warum Kunden mir vertrauen</h2>
            <p className="text-forest-800/70">Unabhängige Beratung mit Brief und Siegel.</p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center mb-16">
            <div>
              <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center text-forest-800 mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="font-bold text-forest-900 mb-1">IHK Geprüft</p>
              <p className="text-sm text-forest-800/60">Geprüfter Fachwirt für Finanzberatung</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center text-forest-800 mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="font-bold text-forest-900 mb-1">100% Unabhängig</p>
              <p className="text-sm text-forest-800/60">Keine Bindung an Banken oder Versicherer</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center text-forest-800 mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="font-bold text-forest-900 mb-1">Transparente Kosten</p>
              <p className="text-sm text-forest-800/60">Klare Honorar- oder Provisionsmodelle</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-bold text-forest-900 mb-2">E-Mail</p>
              <a href="mailto:hallo@mueller-finanz.de" className="text-forest-800/80 hover:text-forest-900">hallo@mueller-finanz.de</a>
            </div>
            <div>
              <p className="font-bold text-forest-900 mb-2">Telefon</p>
              <a href="tel:+49800123456" className="text-forest-800/80 hover:text-forest-900">0800 123 456</a>
            </div>
            <div>
              <p className="font-bold text-forest-900 mb-2">Büro</p>
              <p className="text-forest-800/80">Musterstraße 123<br/>10115 Berlin</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
