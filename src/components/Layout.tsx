import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Phone, Mail } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-50 text-forest-900 font-sans selection:bg-sand-200">
      {/* Top Bar (Inspired by BGV / Di Sabatino) */}
      <div className="bg-forest-900 text-ivory-50/80 text-xs py-2.5 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6 font-medium">
            <a href="tel:0800123456" className="flex items-center gap-2 hover:text-ivory-50 transition-colors"><Phone className="w-3.5 h-3.5" /> 0800 123 456</a>
            <a href="mailto:hallo@mueller-finanz.de" className="flex items-center gap-2 hover:text-ivory-50 transition-colors"><Mail className="w-3.5 h-3.5" /> hallo@mueller-finanz.de</a>
          </div>
          <div className="flex gap-4 font-medium">
            <span>Mo - Fr: 09:00 - 18:00 Uhr</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-ivory-50/90 backdrop-blur-md border-b border-ivory-200">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-forest-800 rounded-xl flex items-center justify-center text-ivory-50 font-serif font-bold text-xl group-hover:bg-forest-700 transition-colors">
              M
            </div>
            <span className="font-serif font-semibold text-xl tracking-tight text-forest-900">Müller Finanz</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-forest-800/80">
            <Link to="/absicherung" className="hover:text-forest-900 transition-colors">Absicherung</Link>
            <Link to="/vermoegensaufbau" className="hover:text-forest-900 transition-colors">Vermögensaufbau</Link>
            <Link to="/altersvorsorge" className="hover:text-forest-900 transition-colors">Altersvorsorge</Link>
            <Link to="/ueber-mich" className="hover:text-forest-900 transition-colors">Über mich</Link>
            <Link to="/kontakt" className="bg-forest-800 text-ivory-50 px-5 py-2.5 rounded-lg hover:bg-forest-700 transition-colors font-semibold">
              Kennenlernen
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-forest-900 text-ivory-50/70 py-16 border-t border-forest-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-ivory-50 rounded-xl flex items-center justify-center text-forest-900 font-serif font-bold text-xl">
                M
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight text-ivory-50">Müller Finanz</span>
            </div>
            <p className="max-w-xs mb-6">
              Unabhängige Finanzberatung auf Augenhöhe. Klar, verständlich und persönlich.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg text-ivory-50 mb-4">Themen</h4>
            <ul className="space-y-3">
              <li><Link to="/absicherung" className="hover:text-ivory-50 transition-colors">Absicherung</Link></li>
              <li><Link to="/vermoegensaufbau" className="hover:text-ivory-50 transition-colors">Vermögensaufbau</Link></li>
              <li><Link to="/altersvorsorge" className="hover:text-ivory-50 transition-colors">Altersvorsorge</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-ivory-50 mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li><Link to="/impressum" className="hover:text-ivory-50 transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-ivory-50 transition-colors">Datenschutz</Link></li>
              <li><Link to="/erstinformation" className="hover:text-ivory-50 transition-colors">Erstinformation</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-forest-800/50 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Müller Finanz. Alle Rechte vorbehalten.
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/kontakt" className="bg-sand-300 text-forest-900 p-4 rounded-full shadow-2xl hover:bg-sand-200 transition-all flex items-center gap-3 group border border-sand-100">
          <Calendar className="w-6 h-6" />
          <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
            <span className="pr-2">Termin buchen</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
