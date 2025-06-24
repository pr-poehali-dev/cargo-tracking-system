import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FleetGallery = () => {
  const trucks = [
    {
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Полуприцепы 90 м³",
      capacity: "До 24 тонн",
      features: ["GPS мониторинг", "Климат-контроль", "Страхование"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Рефрижераторы",
      capacity: "До 20 тонн",
      features: [
        "Температурный режим",
        "Мониторинг температуры",
        "Сертификация",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Тенты 120 м³",
      capacity: "До 24 тонн",
      features: ["Боковая загрузка", "Крепежные системы", "Защита от влаги"],
    },
  ];

  return (
    <section id="fleet" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-logistics-gray-900 mb-4">
            Наш автопарк
          </h2>
          <p className="text-lg text-logistics-gray-600">
            Современные автомобили с полным техническим оснащением
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trucks.map((truck, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={truck.image}
                  alt={truck.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-logistics-gray-900 mb-2">
                  {truck.title}
                </h3>
                <div className="flex items-center mb-4">
                  <Icon name="Weight" className="h-4 w-4 text-primary mr-2" />
                  <span className="text-logistics-gray-600">
                    {truck.capacity}
                  </span>
                </div>
                <ul className="space-y-2">
                  {truck.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-logistics-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="h-4 w-4 text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;
