import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  MessageCircle,
  Car,
  Navigation
} from 'lucide-react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Адрес',
    content: 'г. Москва, ул. Тверская, 15',
    subtitle: 'Метро Тверская, 2 мин пешком'
  },
  {
    icon: Phone,
    title: 'Телефон',
    content: '+7 (495) 123-45-67',
    subtitle: 'Круглосуточная поддержка'
  },
  {
    icon: Clock,
    title: 'Режим работы',
    content: 'Пн-Сб: 9:00-21:00',
    subtitle: 'Вс: 10:00-18:00'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@drdentplus.ru',
    subtitle: 'Ответим в течение часа'
  }
]

const workHours = [
  { day: 'Понедельник', hours: '9:00 - 21:00' },
  { day: 'Вторник', hours: '9:00 - 21:00' },
  { day: 'Среда', hours: '9:00 - 21:00' },
  { day: 'Четверг', hours: '9:00 - 21:00' },
  { day: 'Пятница', hours: '9:00 - 21:00' },
  { day: 'Суббота', hours: '9:00 - 21:00' },
  { day: 'Воскресенье', hours: '10:00 - 18:00' }
]

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Свяжитесь с <span className="text-primary font-serif">нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Запишитесь на прием или получите консультацию прямо сейчас
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium">
                            {info.content}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Режим работы</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {workHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-foreground">{schedule.day}</span>
                        <span className="text-primary font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 flex-1 min-w-[200px]">
                <Phone className="w-4 h-4 mr-2" />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="flex-1 min-w-[200px]">
                <Navigation className="w-4 h-4 mr-2" />
                Построить маршрут
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Запись на прием</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Услуга</Label>
                  <select className="w-full p-2 border border-input rounded-md bg-background">
                    <option>Выберите услугу</option>
                    <option>Консультация</option>
                    <option>Лечение кариеса</option>
                    <option>Имплантация</option>
                    <option>Протезирование</option>
                    <option>Отбеливание</option>
                    <option>Другое</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваши пожелания или вопросы..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить заявку
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted/30 h-96 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-primary mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Мы находимся в центре Москвы
                    </h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Тверская, 15 (метро Тверская)
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4">
                    <Car className="w-4 h-4 mr-2" />
                    Открыть карту
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}