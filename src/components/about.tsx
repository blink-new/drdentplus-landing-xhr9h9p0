import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Award, 
  Users, 
  Heart, 
  Star, 
  Clock, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const achievements = [
  {
    icon: Award,
    title: 'Лучшая клиника года',
    description: 'Победитель премии "Стоматология года 2023"',
    year: '2023'
  },
  {
    icon: Users,
    title: 'Сертифицированные врачи',
    description: 'Все специалисты имеют международные сертификаты',
    year: '2024'
  },
  {
    icon: Heart,
    title: 'Социальная ответственность',
    description: 'Участие в благотворительных программах',
    year: '2023'
  },
  {
    icon: Star,
    title: 'Рейтинг 4.9/5',
    description: 'Средняя оценка от наших пациентов',
    year: '2024'
  }
]

const features = [
  'Современное оборудование премиум-класса',
  'Индивидуальный подход к каждому пациенту',
  'Гарантия качества на все виды лечения',
  'Комфортная атмосфера и внимательный персонал',
  'Использование передовых технологий',
  'Прозрачная система цен без скрытых доплат'
]

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary">
                О клинике
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Ваше здоровье — наша <span className="text-primary font-serif">миссия</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Уже более 15 лет мы предоставляем премиальные стоматологические услуги, сочетая традиционные методы с инновационными технологиями. Наша цель — сделать каждый визит к стоматологу комфортным и результативным.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Узнать больше
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                Виртуальная экскурсия
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <achievement.icon className="w-6 h-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.year}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-5 h-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-primary">24/7</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Экстренная помощь</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-center mb-2">
                        <Shield className="w-5 h-5 text-primary mr-2" />
                        <span className="text-2xl font-bold text-primary">100%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Гарантия качества</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}