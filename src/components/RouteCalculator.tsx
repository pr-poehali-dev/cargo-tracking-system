import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const RouteCalculator = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");

  const russianCities = [
    "Москва",
    "Санкт-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Казань",
    "Нижний Новгород",
  ];
  const turkishCities = [
    "Стамбул",
    "Анкара",
    "Измир",
    "Бурса",
    "Анталья",
    "Адана",
  ];

  return (
    <section id="routes" className="py-16 bg-logistics-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-logistics-gray-900 mb-4">
            Рассчитайте стоимость доставки
          </h2>
          <p className="text-lg text-logistics-gray-600">
            Укажите маршрут и параметры груза для получения точного расчета
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Route" className="h-6 w-6 mr-2 text-primary" />
              Параметры доставки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from-country">Страна отправления</Label>
                    <Select defaultValue="russia">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="russia">🇷🇺 Россия</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="from-city">Город отправления</Label>
                    <Select value={fromCity} onValueChange={setFromCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        {russianCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Icon
                    name="ArrowUpDown"
                    className="h-6 w-6 text-logistics-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="to-country">Страна назначения</Label>
                    <Select defaultValue="turkey">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="turkey">🇹🇷 Турция</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="to-city">Город назначения</Label>
                    <Select value={toCity} onValueChange={setToCity}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите город" />
                      </SelectTrigger>
                      <SelectContent>
                        {turkishCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-base font-medium">
                    Параметры груза
                  </Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                      <Label htmlFor="weight">Вес (кг)</Label>
                      <Input id="weight" placeholder="1000" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="volume">Объем (м³)</Label>
                      <Input id="volume" placeholder="10" type="number" />
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">
                    Габариты (необязательно)
                  </Label>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                      <Label htmlFor="length">Длина (м)</Label>
                      <Input id="length" placeholder="3" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="width">Ширина (м)</Label>
                      <Input id="width" placeholder="2" type="number" />
                    </div>
                    <div>
                      <Label htmlFor="height">Высота (м)</Label>
                      <Input id="height" placeholder="2" type="number" />
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Calculator" className="h-5 w-5 mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RouteCalculator;
