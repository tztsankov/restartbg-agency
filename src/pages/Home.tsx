import { Link } from 'react-router-dom';
import { ArrowRight, Scale, MapPin, TrendingUp, CheckCircle2, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';

export function Home() {
  return (
    <>
      <SEO 
        title="Рестарт | План за дългове, ЧСИ и втори шанс в България" 
        description="С Рестарт миналото не решава бъдещето ви. Получете правна яснота за стари дългове и ЧСИ, план за завръщане и стратегия за бъдещ доход и финансиране." 
      />
      
      {/* Hero Section */}
      <section className="relative bg-slate-50 lg:bg-transparent pb-24 lg:py-32 lg:min-h-[85vh] flex flex-col lg:flex-row items-center z-0 overflow-hidden">
        
        {/* Desktop Background Image & Gradient (Hidden on mobile) */}
        <div className="hidden lg:block absolute inset-0 z-[-1]">
          <img src="/content/hero.png" alt="Ново начало" className="w-full h-full object-cover object-[left_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 to-[#0A1628]/25"></div>
        </div>

        {/* Mobile Stacked Image (Hidden on lg) */}
        <div className="block lg:hidden w-full aspect-[4/5] relative mb-10 shrink-0">
          <img src="/content/hero.png" alt="Ново начало" className="w-full h-full object-cover object-[30%_center]" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-[60px] w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="hero-text lg:max-w-[540px]">
              <div className="inline-block px-3 py-1.5 bg-teal-50 lg:bg-[#0A1628]/50 lg:border lg:border-teal-500/30 rounded-full text-teal-600 lg:text-teal-400 font-bold text-[10px] sm:text-xs mb-5 uppercase tracking-wide lg:backdrop-blur-sm">
                НОВ ЗАКОН. НОВИ РЕШЕНИЯ.
              </div>
              <h1 className="text-4xl sm:text-[56px] leading-[1.1] font-extrabold tracking-[-2px] text-slate-900 lg:text-white mb-6 drop-shadow-sm lg:drop-shadow-md">
                Личен фалит вече и в България. Освободи се от оковите. Започни на чисто.
              </h1>
              <p className="text-[18px] leading-[1.6] text-slate-500 lg:text-slate-300 max-w-[540px] mb-8 lg:drop-shadow-sm">
                Реална възможност за ново начало. Рестарт помага на българи, блокирани от стари дългове, ЧСИ и страх, да получат правна яснота чрез новия закон за личния фалит, план за завръщане и път към нов доход.
              </p>
              
              {/* Desktop Pill grid matching the design */}
              <div className="hidden lg:grid grid-cols-3 gap-4 mt-10">
                <div className="bg-white lg:bg-white/10 lg:backdrop-blur-md p-5 rounded-2xl border border-slate-200 lg:border-white/10 shadow-sm">
                  <span className="text-[11px] font-bold uppercase text-teal-600 lg:text-teal-400 block mb-2">Минало</span>
                  <span className="text-[14px] font-bold text-slate-900 lg:text-white block mb-1">Личен Фалит</span>
                  <span className="text-[12px] text-slate-500 lg:text-slate-300 leading-[1.4]">Новият закон дава реален шанс.</span>
                </div>
                <div className="bg-white lg:bg-white/10 lg:backdrop-blur-md p-5 rounded-2xl border border-slate-200 lg:border-white/10 shadow-sm">
                  <span className="text-[11px] font-bold uppercase text-teal-600 lg:text-teal-400 block mb-2">Настояще</span>
                  <span className="text-[14px] font-bold text-slate-900 lg:text-white block mb-1">Завръщане</span>
                  <span className="text-[12px] text-slate-500 lg:text-slate-300 leading-[1.4]">Програма "Избирам България".</span>
                </div>
                <div className="bg-white lg:bg-white/10 lg:backdrop-blur-md p-5 rounded-2xl border border-slate-200 lg:border-white/10 shadow-sm">
                  <span className="text-[11px] font-bold uppercase text-teal-600 lg:text-teal-400 block mb-2">Бъдеще</span>
                  <span className="text-[14px] font-bold text-slate-900 lg:text-white block mb-1">Нов Доход</span>
                  <span className="text-[12px] text-slate-500 lg:text-slate-300 leading-[1.4]">Бизнес финансиране.</span>
                </div>
              </div>

              {/* Trust bar matching design */}
              <div className="hidden lg:flex items-center gap-6 pt-6 border-t border-slate-100 lg:border-white/10 mt-10">
                 <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500 lg:text-slate-300">
                   <img src="/content/MarinPopovski.JPG" alt="Екип Юристи" className="w-8 h-8 rounded-full object-cover lg:shadow-inner border border-slate-200/20" />
                   Екип Юристи
                 </div>
                 <div className="flex items-center gap-2 text-[12px] font-semibold text-slate-500 lg:text-slate-300">
                   <img src="/content/KrasimirDonchev.JPG" alt="Екип Икономисти" className="w-8 h-8 rounded-full object-cover lg:shadow-inner border border-slate-200/20" />
                   Екип Икономисти
                 </div>
              </div>

              <div className="mt-8 relative z-20">
                <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-[80%] md:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-[16px] leading-[1.3]">
                  <Link to="/diagnostic">Разбери какви са реалните ти опции</Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Рестарт не е просто правна услуга. <br className="hidden md:block"/>Това е път към ново начало.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ние обединяваме правна, икономическа и практическа подкрепа, за да ви дадем пълната картина. Не обещаваме чудеса, а ясни и изпълними стъпки.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative top-0 hover:-top-2 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">1. Изчистване на миналото</h3>
              <p className="text-slate-600 leading-relaxed">
                Личен фалит, ЧСИ, запори, стари дългове, давност, преструктуриране и правна яснота.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative top-0 md:top-8 hover:top-6 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">2. Стабилизиране на настоящето</h3>
              <p className="text-slate-600 leading-relaxed">
                Завръщане в България, работа, документи, възможности по програма "Избирам България" и подготовка за нормален живот.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative top-0 md:top-16 hover:top-14 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">3. Изграждане на бъдещето</h3>
              <p className="text-slate-600 leading-relaxed">
                Нов доход, бизнес идея, европрограми, финансиране и реалистична оценка на възможностите.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics Promo */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 w-full order-1 lg:order-none">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Започни оттук
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              Първо проверяваме. После казваме какви са реалните опции - <span className="font-bold text-teal-600">Безплатно</span>.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Първата стъпка не е голям процес, не е обвързваща програма. Първата стъпка е оценка. Най-опасното не е, че имаш проблем. Най-опасното е да взимаш решения на сляпо.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Без агресивни правни такси на сляпо",
                "Без нереалистични обещания",
                "Цялостна картина на твоята ситуация",
                "Човешко и поверително отношение"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  {text}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-[16px] leading-[1.3]">
              <Link to="/diagnostic">Как работи диагностиката <ArrowRight className="ml-2 w-4 h-4 inline"/></Link>
            </Button>
          </div>
          <div className="lg:w-1/2 w-full order-2 lg:order-none mt-8 lg:mt-0 flex">
            <div className="bg-slate-50 p-1 lg:p-4 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 w-full">
               <div className="bg-white rounded-2xl p-4 border border-slate-100">
                 <img 
                   src="/content/hero1.png" 
                   alt="Търсиш изход, не чудо." 
                   className="w-full h-auto rounded-xl mb-6 lg:mb-8 object-cover" 
                 />
                 <div className="px-4 lg:px-6 pb-2 lg:pb-4">
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">Търсиш изход, не чудо.</h3>
                   <p className="text-slate-600">Ако не знаеш какво дължиш, дали има запор или дали можеш да се върнеш спокойно, всяко решение може да е грешно. Затова проверяваме първо.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance">
            Защо да се довериш на екипа на Рестарт?
          </h2>
          <p className="text-lg text-slate-400 mb-12 text-balance">
            Рестарт е изграден от доказани юристи, икономисти и експерти (вкл. Красимир Дончев, с реален опит в законодателството за личния фалит). 
            Ние работим редовно с българи в чужбина дистанционно при пълна конфиденциалност.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12 items-center text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-teal-500">100%</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Поверителност</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-teal-500">Екип</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Експерти</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold text-teal-500 leading-tight block h-[36px] flex items-center">Онлайн</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Процес</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold text-teal-500 leading-tight block h-[36px] flex items-center">Реални</span>
              <span className="text-sm text-slate-400 uppercase tracking-wider">Очаквания</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Summary */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Често задавани въпроси</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 lg:p-8">
            <Accordion>
              <AccordionItem title="Ако живея в чужбина, мога ли да направя диагностика дистанционно?">
                Да. Първата стъпка може да започне дистанционно чрез телефон, имейл, Viber или WhatsApp. Разбираме предизвикателствата пред българите зад граница.
              </AccordionItem>
              <AccordionItem title="Ще ми изтриете ли дълговете гарантирано?">
                Не обещаваме автоматичен резултат. Ще проверим дали има законови възможности според вашия конкретен случай, като например изтекла давност или опции за личен фалит.
              </AccordionItem>
              <AccordionItem title="Ще разбере ли семейството ми за проблемите?">
                Процесът е абсолютно поверителен. Подхождаме дискретно, експертно и преди всичко — без осъждане.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-teal-50/50"></div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center text-balance flex flex-col items-center">
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg leading-[1.3]">
            <Link to="/diagnostic">Искам Втори Шанс</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
