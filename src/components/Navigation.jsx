import { Coffee, Menu } from 'lucide-react'

export default function Navigation() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-coffee-50/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="w-8 h-8 text-coffee-500" />
          <span className="text-xl font-bold text-coffee-900">CoffeeOS</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {[
            ['Главная', 'hero'],
            ['Возможности', 'features'],
            ['Как работает', 'how-it-works'],
            ['Отзывы', 'testimonials']
          ].map(([label, id]) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-coffee-900 hover:text-coffee-500 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-coffee-900" />
        </button>
      </div>
    </nav>
  )
}