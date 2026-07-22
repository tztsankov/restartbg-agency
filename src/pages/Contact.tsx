import { SEO } from '@/components/SEO';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function Contact() {
  return (
    <>
      <SEO 
        title="Контакти | Заяви Втори Шанс" 
        description="Свържи се с Рестарт и направи първата стъпка към яснота, план и реални опции." 
      />
      
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Свържете се с нас
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Всички запитвания се обработват при пълна поверителност. Ние консултираме дистанционно българи в чужбина и у дома.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Информация за контакт</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 block mb-1">Телефон</h3>
                  <a href="tel:+359894444491" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block">+359 894 444 491</a>
                  <a href="tel:+359899881902" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block">+359 899 881 902</a>
                  <a href="tel:+359876135217" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block">+359 876 135 217</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 block mb-1">Viber / WhatsApp</h3>
                  <a href="tel:+359894444491" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block">+359 894 444 491</a>
                  <a href="tel:+359876135217" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block">+359 876 135 217</a>
                  <p className="text-sm text-slate-500 mt-1">Отговаряме в рамките на 1 работен ден.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 block mb-1">Имейл</h3>
                  <a href="mailto:restart.consult@abv.bg" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block">restart.consult@abv.bg</a>
                  <a href="mailto:restartconsultbg@gmail.com" className="text-lg text-slate-600 hover:text-teal-600 transition-colors block mt-1">restartconsultbg@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 block mb-1">Офис гр. София</h3>
                  <p className="text-slate-600">бул. Мария Луиза 9-11, ет. 3, офис 8</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 block mb-1">Офис гр. Пловдив</h3>
                  <p className="text-slate-600">Пешеходен мост ул. Съединение (по средата)</p>
                  <p className="text-slate-600 mt-1">Работно време: 09:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-xl text-teal-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 block mb-1">Офис гр. Варна</h3>
                  <p className="text-slate-600">гр. Варна, ул. „Заменхоф“ № 1, ет. 2</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
               <h4 className="font-bold text-slate-900 mb-2">Търсите най-бързия път?</h4>
               <p className="text-slate-600 text-sm mb-4">
                 За да ви дадем адекватна информация, най-добре е първо да попълните кратката ни форма за диагностика.
               </p>
               <Button asChild variant="outline" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-[16px] leading-[1.3]">
                 <Link to="/diagnostic">Започни с Втори Шанс</Link>
               </Button>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Изпратете ни съобщение</h2>
              <form className="space-y-6" action="https://api.web3forms.com/submit" method="POST">
                {/* ЗАБЕЛЕЖКА: Вземете своя Access Key от https://web3forms.com/ и го поставете тук */}
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="Ново съобщение от сайта (Контакти)" />
                <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Име</label>
                  <input type="text" name="name" required className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Имейл или Телефон</label>
                  <input type="text" name="contact_info" required className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all bg-slate-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Как можем да помогнем?</label>
                  <textarea name="message" required rows={5} className="w-full p-4 rounded-md border border-slate-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none bg-slate-50 focus:bg-white"></textarea>
                </div>
                <Button type="submit" className="w-full max-w-[calc(100vw-48px)] sm:w-auto h-auto min-h-[56px] py-4 px-6 whitespace-normal text-center text-base leading-[1.3]">
                  Изпрати запитване
                </Button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  Вашите данни са защитени. Ние не споделяме информация с трети лица.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
