import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-logistics-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-logistics-gray-900 mb-6">
              Надежные грузоперевозки
              <span className="text-primary block">Россия ⟷ Турция</span>
            </h1>

            <p className="text-lg text-logistics-gray-600 mb-8">
              Профессиональные логистические услуги с полным циклом
              сопровождения. Быстро, безопасно, с гарантией качества.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Calculator" className="h-5 w-5 mr-2" />
                Рассчитать стоимость
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Консультация
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-logistics-gray-500">
              <div className="flex items-center">
                <Icon name="Shield" className="h-4 w-4 mr-2 text-green-500" />
                Страхование грузов
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="h-4 w-4 mr-2 text-blue-500" />
                Доставка в срок
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Грузовик на дороге"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-logistics-gray-600">
                Успешных доставок
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
