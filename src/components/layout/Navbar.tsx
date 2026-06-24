import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Map } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navigation = [
  { name: 'Начало', href: '/' },
  { name: 'Личен фалит', href: '/bankruptcy' },
  { name: 'Помощ за завръщащи се българи', href: '/return-to-bg' },
  { name: 'Европрограми', href: '/euro-programs' },
  { name: 'За нас', href: '/about' },
  { name: 'Контакти', href: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-[60px]" aria-label="Global">
        <div className="flex z-10">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img src="/content/RestartLogo.jpg" alt="Рестарт Лого" className="h-[40px] md:h-[48px] w-auto" />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Отвори главното меню</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center absolute left-0 right-0 pointer-events-none">
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-200/60 shadow-sm pointer-events-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              // Slightly shorter names for desktop nav
              const name = item.name;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-[14px] font-medium transition-all px-4 py-2 rounded-full",
                    isActive 
                      ? "bg-slate-100 text-slate-900" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Right Side CTA */}
        <div className="hidden lg:flex items-center gap-4 z-10">
          <Button asChild className="rounded-full bg-teal-600 hover:bg-teal-700 text-white text-[14px] h-[40px] shadow-sm px-6">
            <Link to="/diagnostic">Започни тук</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute inset-x-0 top-full bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                    location.pathname === item.href 
                      ? "bg-slate-50 text-teal-600" 
                      : "text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Button asChild className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/diagnostic">Разбери реалните си опции</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
