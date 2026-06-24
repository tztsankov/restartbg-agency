import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { Scale, HeartHandshake, ShieldCheck, CheckCircle2, AlertTriangle, AlertCircle, FileText, TrendingDown } from 'lucide-react';

export function Bankruptcy() {
  return (
    <>
      <SEO 
        title="Личен фалит и ЧСИ | Рестарт" 
        description="Законът за личния фалит е вече факт в България. Провери дали отговаряш на условията и как да опростиш дълговете си." 
      />
      
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Scale className="w-64 h-64" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Scale className="w-16 h-16 text-teal-400 mx-auto mb-8" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance tracking-[-1px]">
            Закон за личния фалит: Как да опростите дълговете
          </h1>
          <p className="text-xl text-slate-300 text-balance mb-10 max-w-2xl mx-auto">
            Чувствате ли се в капан? Получавате ли заплахи от колектори, но нямате никакъв шанс да върнете дълговете си? Вече има изход. България прие Закон за личния фалит - и това може да промени живота ви.
          </p>
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg leading-[1.3] bg-teal-500 hover:bg-teal-400 text-slate-900 border-none shadow-[0_4px_14px_0_rgba(20,184,166,0.39)] hover:shadow-[0_6px_20px_rgba(20,184,166,0.23)] hover:-translate-y-0.5 transition-all">
            <Link to="/diagnostic">Заявете безплатна оценка на вашия случай</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-slate mx-auto">
            
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Какво е личен фалит?</h2>
            <p className="text-slate-700 leading-relaxed mb-8">
              Законът за несъстоятелността на физическите лица, известен още като Закона за личния фалит, приет на 19 юни 2025 г., предлага дългоочакван механизъм за опрощаване на непосилни дългове. Целта му е да даде <strong>втори шанс на добросъвестните длъжници</strong> и да сложи край на т.нар. „вечен длъжник“.
            </p>
            <p className="text-slate-700 leading-relaxed mb-12">
              Според официални прогнози, законът ще обхване стотици хиляди българи, задлъжнели към банки, фирми за бързи кредити, топлофикации и дори частни лица.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-10 mb-16 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-8 h-8 text-teal-600 shrink-0" />
                Проверете дали отговаряте на условията
              </h3>
              <p className="text-slate-600 mb-6">
                Законът поставя ясни критерии за това кой може да поиска откриване на производство по несъстоятелност. Те са създадени, за да защитят добросъвестните хора, изпаднали в реални затруднения, а не тези, които целят да избегнат плащания чрез измама.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex flex-col md:flex-row gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="md:w-1/3 text-slate-900 font-bold shrink-0">Неплатежоспособност</div>
                  <div className="text-slate-600">Да не можете да платите дългове над 10 минимални работни заплати (5 500 евро) в продължение на 12+ месеца.</div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="md:w-1/3 text-slate-900 font-bold shrink-0">Добросъвестност</div>
                  <div className="text-slate-600">Да не сте увреждали умишлено интересите на кредиторите – напр. чрез фиктивни продажби или укриване на имущество.</div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl">
                <p className="text-sm text-slate-800">
                  <strong className="text-slate-900">📣 Пример:</strong> Иван е продал луксозен 4-стаен апартамент в столицата за 80 000 евро през 2024 г., сключвайки сделка на значително по-ниска от пазарната цена. В този случай Иван няма да изпълнява критерия за добросъвестност спрямо кредиторите си, следователно няма да може да се възползва от процедурата за личния фалит.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
               <FileText className="w-8 h-8 text-teal-600 shrink-0" />
               Как започва процедурата по личен фалит?
            </h3>
            <ul className="space-y-4 mb-16 text-slate-700">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-sm">1</div>
                <span>Като длъжник, трябва да подадете молба до районния съд по вашия постоянен адрес, с която да поискате откриване на производство по несъстоятелност.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-sm">2</div>
                <span>Съдът проверява дали отговаряте на изискванията и открива делото.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-sm">3</div>
                <span>С откриването на производството се <strong>спират всички висящи срещу вас съдебни и изпълнителни дела</strong>.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-sm">4</div>
                <span>Съдът назначава синдик (това може да бъде и държавен съдебен изпълнител). От този момент той поема контрола и може да води дела от ваше име и да събира вземанията ви в специална сметка, а вие губите право да се разпореждате с имуществото си (например да го продавате) без разрешението на синдика.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Какво следва? Три възможни сценария</h3>
            
            <div className="space-y-8 mb-16">
              <div className="bg-white border text-left border-slate-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-xl text-slate-900 mb-3">Сценарий 1: Погасителен план <span className="text-sm font-normal text-slate-500 ml-2">(Основен механизъм)</span></h4>
                <p className="text-slate-600 mb-4">
                  Синдикът (или вие) предлага на съда план за погасяване на задълженията. Този план може да включва отсрочване, частично или дори пълно опрощаване на дългове. Ако бъде одобрен, вие се задължавате да го изпълнявате за срок до 3 години. След успешното му приключване, <strong>остатъкът от дълговете, които не са покрити, се опрощава.</strong>
                </p>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm text-slate-700">
                  <strong>📣 Пример:</strong> Ако имате месечен доход от 1500 евро, съдът може да определи, че трябва да живеете с минималната работна заплата, а остатъкът да отива за погасяване на дълговете по плана. След изтичането на 3-те години, остатъкът от дълговете, които не са покрити, се опрощава.
                </div>
              </div>

              <div className="bg-white border text-left border-slate-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-xl text-slate-900 mb-3">Сценарий 2: Осребряване на имущество <span className="text-sm font-normal text-slate-500 ml-2">(При липса на доходи)</span></h4>
                <p className="text-slate-600 mb-4">
                  Ако нямате доходи за погасителен план, но притежавате имущество, се преминава към неговата продажба. След продажбата на активите и разпределението на парите между кредиторите, останалите дългове се опрощават.
                </p>
                <div className="flex gap-3 bg-rose-50 border border-rose-100 p-4 rounded-xl text-sm text-slate-700">
                  <AlertTriangle className="w-5 h-5 text-rose-500 shrink-0" />
                  <p><strong>⚠️ Важно:</strong> Ако сте в брак, вашето имущество включва и половината от общото ви семейно имущество. При продажба на общ семеен имот, съпругът-недлъжник има право да получи половината от сумата.</p>
                </div>
              </div>

              <div className="bg-white border text-left border-slate-200 p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-xl text-slate-900 mb-3">Сценарий 3: Производство без имущество и доходи <span className="text-sm font-normal text-slate-500 ml-2">(Крайният изход)</span></h4>
                <p className="text-slate-600">
                  Ако сте в най-тежката ситуация – нямате нито доходи, нито имущество, което да бъде продадено – законът отново дава изход. Производството се спира за 1 година, през която се следи дали няма да придобиете някакви активи. Ако това не се случи, делото се прекратява. Три години след прекратяването му, всичките ви дългове се заличават.
                </p>
              </div>
            </div>

            <div className="mb-16 max-w-2xl mx-auto">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <h4 className="font-bold text-xl text-slate-900 mb-4">Кои дългове НЕ се опрощават?</h4>
                <ul className="space-y-3 text-slate-600 font-medium">
                  <li className="flex gap-2 text-rose-600"><span className="shrink-0">❌</span> Издръжка на деца или роднини</li>
                  <li className="flex gap-2 text-rose-600"><span className="shrink-0">❌</span> Глоби към държавата</li>
                  <li className="flex gap-2 text-rose-600"><span className="shrink-0">❌</span> Задължения, възникнали след започване на процедурата</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0A1628] text-white rounded-3xl p-8 lg:p-12 text-center shadow-lg mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold mb-6">📌 Съвет: Не прибързвайте!</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Процедурата по личен фалит е мощен инструмент – но еднократен. Помислете внимателно кога да го използвате. Потърсете експертна консултация, особено ако:
              </p>
              <ul className="space-y-3 text-slate-300 font-medium max-w-xs mx-auto text-left mb-10">
                <li className="flex gap-3"><span className="text-teal-400">✅</span> имате смесени дългове към близки и банки;</li>
                <li className="flex gap-3"><span className="text-teal-400">✅</span> притежавате недвижимо имущество;</li>
                <li className="flex gap-3"><span className="text-teal-400">✅</span> искате да запазите част от активите си.</li>
              </ul>
              
              <div className="bg-white/10 p-6 rounded-2xl max-w-md mx-auto mb-8 text-left backdrop-blur-sm border border-white/10">
                <h3 className="font-bold text-lg mb-4 text-center">Свържете се с нас чрез "Рестарт"</h3>
                <p className="text-slate-300 text-center text-sm mb-4">Имате въпроси или се чудите дали личният фалит е правилното решение за вас? Ние предлагаме:</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2 justify-center"><span>—</span> Анализ на ситуацията ви</li>
                  <li className="flex gap-2 justify-center"><span>—</span> Прогноза за най-вероятния изход</li>
                  <li className="flex gap-2 justify-center"><span>—</span> Ясна стратегия как да защитите интересите си</li>
                </ul>
              </div>

               <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg leading-[1.3] bg-teal-500 hover:bg-teal-400 text-slate-900">
                  <Link to="/contact">Заявете консултация сега</Link>
               </Button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
