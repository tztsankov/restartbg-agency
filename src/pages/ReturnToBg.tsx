import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { PlaneLanding, MapPin, Briefcase, FileSearch, Landmark, CheckCircle2 } from 'lucide-react';

export function ReturnToBg() {
  return (
    <>
      <SEO 
        title="Помощ за завръщащи се българи от чужбина | Рестарт" 
        description="Нова национална програма Избирам България улеснява завръщането на българи от чужбина с финансова и институционална подкрепа." 
      />
      
      <section className="bg-slate-900 py-24 object-cover relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <PlaneLanding className="w-16 h-16 text-teal-400 mx-auto mb-8" />
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Помощ за завръщащи се българи от чужбина
          </h1>
          <p className="text-xl text-slate-300 text-balance mb-10">
            Започни планирането с реалните факти. Разбери какво се случва със стари дългове и какви са опциите за ново начало.
          </p>
          <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg">
            <Link to="/diagnostic">Провери своите опции и се завърни с план</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Assimilated content block - Moved to Top */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12 mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <Landmark className="w-48 h-48" />
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
                <Landmark className="w-4 h-4" />
                Национална програма
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Избирам България</h2>
              <p className="text-slate-500 font-medium mb-8">Актуално към 30 април 2026 г.</p>
              
              <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
                <p className="text-lg font-medium text-slate-900">
                  Министерството на труда и социалната политика стартира нова програма, която предоставя финансов и институционален пакет от мерки за улесняване на преместването и професионалната реализация на българите, връщащи се от чужбина.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" /> Финансова Подкрепа
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Държавна помощ до <strong>2 500 евро</strong> (от ЕС) или <strong>5 000 евро</strong> (от целия свят) за транспорт и пренасяне на багаж, изплащани срещу документи от лицензирани фирми. Допълнителни средства за настаняване и ежедневен транспорт.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" /> Стимули за Заетост
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      При оставане на работа над 6 месеца: помощ в размер на <strong>30% от шест средни работни заплати</strong> за сектора. При над 1 година: подкрепата нараства до <strong>50%</strong>. Безплатни езикови обучения.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-4 not-prose">
                  <h4 className="font-bold text-slate-900 mb-4">Кой може да кандидатства?</h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-2"><span className="text-teal-600 font-bold">—</span> <span>Живели или учили в чужбина <strong>поне 12 от последните 18 месеца</strong>.</span></li>
                    <li className="flex gap-2"><span className="text-teal-600 font-bold">—</span> <span>Безработни, икономически неактивни или активно търсещи работа лица.</span></li>
                    <li className="flex gap-2"><span className="text-teal-600 font-bold">—</span> <span>Програмата е достъпна и за <strong>вътрешна миграция</strong> (за преместване в населени места под 50 хил. души) при същите условия. Очаква се общо да бъдат подкрепени близо 2000 души.</span></li>
                  </ul>
                </div>

                <p className="text-[15px] leading-relaxed">
                  Специален <strong>Национален информационен портал</strong> ще предоставя ясна информация за трудови права, легално пребиваване, признаване на квалификации, здравно осигуряване и др. Кандидатстването е планирано за есента чрез бюрата по труда към Агенцията по заетостта.
                </p>
                <p className="text-[15px] leading-relaxed">
                  „Избирам България“ е част от по-широките усилия за справяне с демографските и икономическите предизвикателства, свързани с липсата на квалифицирани кадри в страната. Новата програма има амбицията да предложи устойчив механизъм, който да върне част от българския потенциал у дома и да насърчи по-добър баланс в развитието на регионите.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Страхът от завръщането е разбираем</h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-16">
            Много българи в чужбина отлагат завръщането си не защото не искат, а защото са блокирани от финансова несигурност и институционални проблеми от миналото.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-slate-900 mb-4 flex gap-3 items-center">
                <FileSearch className="w-6 h-6 text-teal-600" />
                Неяснота около дълговете
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2"><span>—</span> "Ако започна работа, ще ми запорират ли заплатата веднага?"</li>
                <li className="flex gap-2"><span>—</span> "Мога ли да си открия банкова сметка изобщо?"</li>
                <li className="flex gap-2"><span>—</span> "Имам ли стари ЧСИ-та, които ме чакат на границата?" (Спойлер: ЧСИ не спира на границата, но и митовете във Фейсбук обикновено са преувеличени).</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-slate-900 mb-4 flex gap-3 items-center">
                <Briefcase className="w-6 h-6 text-teal-600" />
                Доход и програми
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex gap-2"><span>—</span> Трудна адаптация към българския пазар на труда.</li>
                <li className="flex gap-2"><span>—</span> Неяснота около документи и здравни осигуровки.</li>
                <li className="flex gap-2"><span>—</span> Възможности за държавни програми като "Избирам България" (и кой реално има право на тях).</li>
              </ul>
            </div>
          </div>

          <div className="py-[80px] w-full max-w-[600px] mx-auto">
             <img 
               src="/content/returntobg2.png"
               alt="От страх към яснота"
               className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm"
             />
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 lg:p-12 text-center">
            <MapPin className="w-12 h-12 text-teal-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Надеждата не е стратегия. Направи план.</h2>
            <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
              Преди да си купиш билет или да напуснеш квартирата в чужбина, премини през "Втори Шанс". Ние можем дистанционно да проверим ситуацията ви със стари дългове, ЧСИ и възможностите по новия закон за личния фалит.
            </p>
            <div className="w-full max-w-[600px] mx-auto mb-[32px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="/content/returntobg1.png"
                 alt="Спокойно завръщане"
                 className="w-full aspect-[4/5] object-cover"
               />
            </div>
             <Button asChild size="lg" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-lg">
                <Link to="/diagnostic">Искам Втори Шанс</Link>
             </Button>
          </div>
        </div>
      </section>
    </>
  );
}
