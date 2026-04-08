import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { services, clientStories } from '../data/content';

export default function Service() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return <Navigate to="/" replace />;
  }

  // Find a relevant client story (just picking one based on index for simplicity, 
  // in a real app we might map them explicitly)
  const storyIndex = Object.keys(services).indexOf(slug || '');
  const story = clientStories[storyIndex % clientStories.length];

  return (
    <div className="bg-ivory-50">
      {/* Hero */}
      <section className="pt-20 pb-24 bg-forest-900 text-ivory-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-sand-200 font-serif italic mb-8">
              {service.shortDescription}
            </p>
            <p className="text-lg text-ivory-50/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              {service.promise}
            </p>
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-sand-200 text-forest-900 px-8 py-4 rounded-xl font-bold hover:bg-sand-300 transition-colors">
              {service.ctaLabel} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Framing & Who it's for */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-forest-900">Für wen ist das?</h2>
            <ul className="space-y-6">
              {service.whoItsFor.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 bg-sand-200 p-1.5 rounded-full text-forest-900 shrink-0 h-fit">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <p className="text-lg text-forest-800/80">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-ivory-100 p-10 rounded-3xl border border-ivory-200">
            <h2 className="text-2xl font-bold mb-6 text-forest-900 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-forest-700" />
              Häufige Fehler
            </h2>
            <ul className="space-y-4">
              {service.commonMistakes.map((mistake, i) => (
                <li key={i} className="flex gap-3 text-forest-800/80">
                  <span className="text-forest-700 font-bold">—</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-forest-800 text-ivory-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Was Sie erwartet</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {service.includedItems.map((item, i) => (
              <div key={i} className="bg-forest-900 p-8 rounded-2xl">
                <div className="text-sand-300 font-serif text-2xl mb-4">0{i + 1}</div>
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Story */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-forest-800/50 mb-8">Aus der Praxis</h2>
          <blockquote className="text-2xl md:text-3xl font-serif text-forest-900 italic mb-8 leading-relaxed">
            "{story.quote}"
          </blockquote>
          <div>
            <p className="font-bold text-forest-900">{story.nameOrInitials}</p>
            <p className="text-forest-800/60">{story.segment}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-forest-900">Fragen & Antworten</h2>
          <div className="space-y-8">
            {service.faq.map((faq, i) => (
              <div key={i} className="border-b border-ivory-200 pb-8 last:border-0">
                <h4 className="text-xl font-bold mb-3 text-forest-900">{faq.question}</h4>
                <p className="text-forest-800/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ivory-100 border-t border-ivory-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-forest-900">Klingt das nach dem, was Sie suchen?</h2>
          <p className="text-lg text-forest-800/70 mb-10">
            Lassen Sie uns in einem kurzen, kostenfreien Gespräch herausfinden, ob und wie ich Ihnen helfen kann.
          </p>
          <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 bg-forest-800 text-ivory-50 px-8 py-4 rounded-xl font-bold hover:bg-forest-700 transition-colors">
            {service.ctaLabel} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
