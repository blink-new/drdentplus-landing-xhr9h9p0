import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Heart
} from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' }
]

const quickLinks = [
  { title: 'Услуги', href: '#services' },
  { title: 'О нас', href: '#about' },
  { title: 'Врачи', href: '#team' },
  { title: 'Контакты', href: '#contact' },
  { title: 'Отзывы', href: '#reviews' },
  { title: 'Акции', href: '#promotions' }
]

const services = [
  { title: 'Лечение кариеса', href: '#' },
  { title: 'Имплантация', href: '#' },
  { title: 'Протезирование', href: '#' },
  { title: 'Отбеливание', href: '#' },
  { title: 'Детская стоматология', href: '#' },
  { title: 'Ортодонтия', href: '#' }
]

const legalLinks = [
  { title: 'Политика конфиденциальности', href: '#' },
  { title: 'Условия использования', href: '#' },
  { title: 'Лицензии', href: '#' },
  { title: 'Гарантии', href: '#' }
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D+</span>
              </div>
              <span className="text-xl font-bold text-primary">Доктор Дент Плюс</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Премиальная стоматологическая клиника с 15-летним опытом. 
              Современные технологии и индивидуальный подход к каждому пациенту.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@drdentplus.ru</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>г. Калининград, ул. Советский проспект, 15</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span>Пн-Сб: 9:00-21:00, Вс: 10:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Быстрые ссылки</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Услуги</h3>
            <div className="space-y-2">
              {services.map((service, index) => (
                <a 
                  key={index}
                  href={service.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Связаться с нами</h3>
            <div className="space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Записаться на прием
              </Button>
              <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Написать сообщение
              </Button>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Мы в соцсетях</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Доктор Дент Плюс. Все права защищены.
            </p>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end">
              Создано с <Heart className="w-4 h-4 text-red-500 mx-1" /> для вашего здоровья
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Лицензия № ЛО-77-01-020003 от 15.01.2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}