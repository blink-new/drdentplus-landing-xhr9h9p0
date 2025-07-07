import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Smile, 
  Shield, 
  Sparkles, 
  Heart, 
  Crown, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    icon: Smile,
    title: 'Терапевтическая стоматология',
    description: 'Лечение кариеса, пульпита, периодонтита с использованием современных методов',
    features: ['Безболезненное лечение', 'Микроскопное лечение', 'Пломбы последнего поколения'],
    price: 'от 3 500 ₽',
    popular: false
  },
  {
    id: 2,
    icon: Crown,
    title: 'Протезирование',
    description: 'Восстановление зубов коронками, мостами, винирами премиум-класса',
    features: ['Цифровое моделирование', 'Керамика E-max', 'Циркониевые коронки'],
    price: 'от 25 000 ₽',
    popular: true
  },
  {
    id: 3,
    icon: Sparkles,
    title: 'Имплантация',
    description: 'Установка имплантов ведущих мировых производителей',
    features: ['Импланты Nobel, Straumann', 'Компьютерная навигация', 'Пожизненная гарантия'],
    price: 'от 45 000 ₽',
    popular: false
  },
  {
    id: 4,
    icon: Heart,
    title: 'Эстетическая стоматология',
    description: 'Виниры, отбеливание, художественная реставрация',
    features: ['Голливудская улыбка', 'Виниры без обточки', 'Zoom отбеливание'],
    price: 'от 8 000 ₽',
    popular: false
  },
  {
    id: 5,
    icon: Shield,
    title: 'Пародонтология',
    description: 'Лечение заболеваний десен современными методами',
    features: ['Лазерная терапия', 'Плазмолифтинг', 'Профессиональная гигиена'],
    price: 'от 2 500 ₽',
    popular: false
  },
  {
    id: 6,
    icon: Zap,
    title: 'Хирургическая стоматология',
    description: 'Малоинвазивные операции с применением лазерных технологий',
    features: ['Лазерная хирургия', 'Быстрое заживление', 'Минимальная травматичность'],
    price: 'от 5 000 ₽',
    popular: false
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши <span className="text-primary font-serif">услуги</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр стоматологических услуг премиум-класса с использованием передовых технологий
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="default" className="bg-primary">
                      Популярно
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary">
                      {service.price}
                    </div>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Подробнее
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Записаться на консультацию
          </Button>
        </motion.div>
      </div>
    </section>
  )
}