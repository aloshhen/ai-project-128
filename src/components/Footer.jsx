import { Coffee, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className="w-8 h-8 text-white" />
            <span className="text-xl font-bold">CoffeeOS</span>
          </div>
          <p className="text-white/80">
            Революционная платформа для кофейных энтузиастов по всему миру.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold mb-4">Продукт</h4>
            <ul className="space-y-2">
              {['Возможности', 'Как работает', 'Цены', 'Демо'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2">
              {['О нас', 'Карьера', 'Контакты', 'Блог'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Социальные сети</h4>
          <div className="flex space-x-4">
            {[Twitter, Instagram, Linkedin].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-white/80 hover:text-white"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-8 pt-8 border-t border-white/10">
        <p className="text-white/50">
          © 2024 CoffeeOS. Все права защищены.
        </p>
      </div>
    </footer>
  )
}