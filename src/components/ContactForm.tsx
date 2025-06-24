import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-logistics-gray-900 mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-logistics-gray-600 mb-8">
              Получите персональное предложение или задайте вопрос нашим
              специалистам
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon name="Phone" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-logistics-gray-900">
                    Телефон
                  </div>
                  <div className="text-logistics-gray-600">
                    +7 (800) 123-45-67
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Icon
                    name="MessageCircle"
                    className="h-6 w-6 text-green-600"
                  />
                </div>
                <div>
                  <div className="font-medium text-logistics-gray-900">
                    WhatsApp
                  </div>
                  <div className="text-logistics-gray-600">
                    +7 (999) 123-45-67
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon name="Send" className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-logistics-gray-900">
                    Telegram
                  </div>
                  <div className="text-logistics-gray-600">@rutr_logistics</div>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Имя</Label>
                    <Input id="firstName" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Фамилия</Label>
                    <Input id="lastName" placeholder="Ваша фамилия" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш груз и требования к доставке..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заявку
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100"
                  >
                    <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
