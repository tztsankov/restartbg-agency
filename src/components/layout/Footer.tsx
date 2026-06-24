import { Link } from 'react-router-dom';
import { Map, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
             <Link to="/" className="flex items-center gap-2">
              <img src="/content/RestartLogo.jpg" alt="Рестарт Лого" className="h-[40px] md:h-[48px] w-auto rounded" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Цялостно решение за ново начало. Помагаме на българи да получат правна яснота, план за завръщане и път към нов доход.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Услуги</h3>
            <ul className="space-y-4">
              <li><Link to="/diagnostic" className="transition-colors hover:text-teal-400">Втори Шанс</Link></li>
              <li><Link to="/bankruptcy" className="transition-colors hover:text-teal-400">Личен фалит</Link></li>
              <li><Link to="/return-to-bg" className="transition-colors hover:text-teal-400">Помощ за завръщащи се българи</Link></li>
              <li><Link to="/euro-programs" className="transition-colors hover:text-teal-400">Европрограми и бизнес</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Компания</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="transition-colors hover:text-teal-400">За екипа</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-teal-400">Контакти</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Контакти</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>+359 894 444 491<br/>+359 899 881 902<br/>+359 876 135 217<br/><span className="text-xs text-slate-500">Viber / WhatsApp</span></span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0 mt-1" />
                <span className="flex flex-col">
                  <span>restart.consult@abv.bg</span>
                  <span>restartconsultbg@gmail.com</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span>Пон - Пет: 09:00 - 18:00<br/><span className="text-xs text-slate-400 text-balance mt-1 block">Дистанционни консултации с предварителна уговорка.</span></span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 mb-8 border-t border-white/15"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-white/60">
          <p>© 2026 Рестарт. Всички права запазени.</p>
          <p className="text-center md:text-right">Този сайт има информативна цел и не предоставя 100% гаранции преди диагностика.</p>
        </div>
      </div>
    </footer>
  );
}
