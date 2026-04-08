import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { credentials } from '../data/content';

export default function About() {
  return (
    <div className="bg-ivory-50 pt-12 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-forest-900">Über mich</h1>
            <p className="text-2xl font-serif italic text-forest-700 mb-8">
              "Ich glaube daran, dass gute Finanzberatung auf Augenhöhe stattfinden muss."
            </p>
            <div className="space-y-6 text-lg text-forest-800/80 leading-relaxed">
              <p>
                Hallo, ich bin Max Müller. Seit über 10 Jahren arbeite ich in der Finanzbranche. In dieser Zeit habe ich oft gesehen, wie Beratung <em>nicht</em> laufen sollte: Unverständliche Produkte, versteckte Kosten und Berater, die eher Verkäufer sind.
              </p>
              <p>
                Deshalb habe ich mich entschieden, es anders zu machen. Mein Ansatz ist unabhängig, transparent und zu 100% auf Ihre Bedürfnisse ausgerichtet. Ich nehme mir die Zeit, Ihnen komplexe Zusammenhänge so zu erklären, dass Sie wirklich verstehen, was Sie unterschreiben.
              </p>
              <p>
                Mein Ziel ist es nicht, Ihnen schnell ein Produkt zu vermitteln. Ich möchte Ihr langfristiger Ansprechpartner in allen finanziellen Lebenslagen sein.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-sand-200">
              <img 
                src="https://picsum.photos/seed/advisor-portrait/800/1066" 
                alt="Max Müller" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="bg-forest-900 text-ivory-50 rounded-3xl p-10 md:p-16 mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Meine Qualifikationen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((cred, i) => (
              <div key={i} className="bg-forest-800 p-8 rounded-2xl">
                <h3 className="font-bold text-xl mb-3">{cred.title}</h3>
                <p className="text-sand-300 text-sm mb-4">{cred.issuer}</p>
                <p className="text-ivory-50/80">{cred.shortExplanation}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-forest-900">Lernen wir uns kennen</h2>
          <p className="text-lg text-forest-800/70 mb-8">
            Ein gutes Beratungsverhältnis basiert auf Vertrauen. Lassen Sie uns in einem kurzen Video-Call herausfinden, ob wir zueinander passen.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-forest-800 text-ivory-50 px-8 py-4 rounded-xl font-bold hover:bg-forest-700 transition-colors">
            Termin vereinbaren <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
