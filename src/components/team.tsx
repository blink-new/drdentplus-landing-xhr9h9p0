import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, Award, Calendar, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import doctorImage from '@/assets/doctor.jpg'

const doctors = [
  {
    id: 1,
    name: 'Доктор Алексеев Александр',
    specialty: 'Главный врач, имплантолог',
    experience: '15 лет',
    education: 'МГМСУ, США (Harvard)',
    image: doctorImage,
    rating: 4.9,
    reviews: 245,
    specializations: ['Имплантация', 'Хирургия', 'Протезирование'],
    achievements: ['Лучший врач года 2023', 'Международный сертификат']
  },
  {
    id: 2,
    name: 'Доктор Петрова Елена',
    specialty: 'Терапевт, эндодонт',
    experience: '12 лет',
    education: 'СПбГМУ, Германия (Charité)',
    image: doctorImage,
    rating: 4.8,
    reviews: 189,
    specializations: ['Эндодонтия', 'Терапия', 'Эстетика'],
    achievements: ['Специалист года 2023', 'Премия за инновации']
  },
  {
    id: 3,
    name: 'Доктор Смирнов Михаил',
    specialty: 'Ортодонт, детский врач',
    experience: '10 лет',
    education: 'РУДН, Швейцария (Zurich)',
    image: doctorImage,
    rating: 4.9,
    reviews: 156,
    specializations: ['Ортодонтия', 'Детская стоматология', 'Брекеты'],
    achievements: ['Лучший ортодонт 2023', 'Детский любимчик']
  },
  {
    id: 4,
    name: 'Доктор Иванова Анна',
    specialty: 'Пародонтолог, гигиенист',
    experience: '8 лет',
    education: 'РНИМУ, Италия (Milan)',
    image: doctorImage,
    rating: 4.8,
    reviews: 134,
    specializations: ['Пародонтология', 'Гигиена', 'Профилактика'],
    achievements: ['Эксперт по гигиене', 'Сертификат качества']
  }
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наша <span className="text-primary font-serif">команда</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Опытные специалисты с международным образованием и многолетним опытом
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group overflow-hidden">
                <div className="relative">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {doctor.experience}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-primary font-medium">
                        {doctor.specialty}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {doctor.education}
                      </p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{doctor.rating}</span>
                      </div>
                      <div className="text-muted-foreground">
                        {doctor.reviews} отзывов
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {doctor.specializations.map((spec, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      {doctor.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-border">
                      <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                        <Calendar className="w-4 h-4 mr-1" />
                        Записаться
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
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
          <p className="text-muted-foreground mb-6">
            Не можете выбрать врача? Мы поможем подобрать специалиста именно для вас
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Помочь с выбором врача
          </Button>
        </motion.div>
      </div>
    </section>
  )
}