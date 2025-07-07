import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Award, Users, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-background dark:from-primary-950/20 dark:to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Премиальная
                <span className="text-primary block font-serif">
                  стоматология
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Индивидуальный подход, передовые технологии и безупречное качество лечения в комфортной атмосфере
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Виртуальный тур
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Пациентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Премиальное качество</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Использование только лучших материалов и оборудования
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Опытные врачи</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Команда высококвалифицированных специалистов
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Без очередей</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Точное время приема и комфортное ожидание
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Гарантия результата</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Официальная гарантия на все виды лечения
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}