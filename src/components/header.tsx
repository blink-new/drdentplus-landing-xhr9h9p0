import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'
import { motion } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">D+</span>
            </div>
            <span className="text-xl font-bold text-primary">Доктор Дент Плюс</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О нас
            </a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors">
              Врачи
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          {/* Contact Info & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+7 (495) 123-45-67</span>
            </div>
            <ModeToggle />
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">
                Услуги
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">
                Врачи
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Контакты
              </a>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground pt-2">
                <Phone className="w-4 h-4" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <Button className="bg-primary hover:bg-primary/90 w-full">
                Записаться
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}