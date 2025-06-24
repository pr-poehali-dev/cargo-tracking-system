import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-logistics-gray-900">
              Illidium
            </span>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#services"
              className="text-logistics-gray-600 hover:text-primary transition-colors"
            >
              Услуги
            </a>
            <a
              href="#routes"
              className="text-logistics-gray-600 hover:text-primary transition-colors"
            >
              Маршруты
            </a>
            <a
              href="#fleet"
              className="text-logistics-gray-600 hover:text-primary transition-colors"
            >
              Автопарк
            </a>
            <a
              href="#contact"
              className="text-logistics-gray-600 hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Select defaultValue="ru">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">🇷🇺 RU</SelectItem>
                <SelectItem value="en">🇬🇧 EN</SelectItem>
                <SelectItem value="tr">🇹🇷 TR</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              +7 (800) 123-45-67
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
