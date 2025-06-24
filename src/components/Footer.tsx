import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-logistics-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Truck" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">RU-TR Logistics</span>
            </div>
            <p className="text-logistics-gray-400 mb-4">
              Профессиональные грузоперевозки между Россией и Турцией с полным
              циклом логистических услуг.
            </p>
            <div className="flex space-x-4">
              <div className="bg-logistics-gray-800 p-2 rounded-lg hover:bg-logistics-gray-700 transition-colors cursor-pointer">
                <Icon name="MessageCircle" className="h-5 w-5" />
              </div>
              <div className="bg-logistics-gray-800 p-2 rounded-lg hover:bg-logistics-gray-700 transition-colors cursor-pointer">
                <Icon name="Send" className="h-5 w-5" />
              </div>
              <div className="bg-logistics-gray-800 p-2 rounded-lg hover:bg-logistics-gray-700 transition-colors cursor-pointer">
                <Icon name="Phone" className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-logistics-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Грузоперевозки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Таможенное оформление
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Страхование грузов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Складские услуги
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Направления</h3>
            <ul className="space-y-2 text-logistics-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Москва - Стамбул
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  СПб - Анкара
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Екатеринбург - Измир
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Все маршруты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-logistics-gray-400">
              <div className="flex items-center">
                <Icon name="Phone" className="h-4 w-4 mr-3" />
                +7 (800) 123-45-67
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-4 w-4 mr-3" />
                info@rutr-logistics.ru
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="h-4 w-4 mr-3" />
                Москва, ул. Логистическая, 123
              </div>
              <div className="flex items-center">
                <Icon name="Clock" className="h-4 w-4 mr-3" />
                24/7 поддержка клиентов
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-logistics-gray-800 mt-8 pt-8 text-center text-logistics-gray-400">
          <p>&copy; 2024 RU-TR Logistics. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
