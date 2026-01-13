import { motion } from 'framer-motion'
import { Coffee, Zap, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-coffee-gradient text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            CoffeeOS: Умная Кофейная Экосистема
          </h1>
          <p className="text-xl mb-8 opacity-80">
            Революционная платформа, которая трансформирует ваш кофейный опыт через технологии и инновации.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-coffee-900 px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-coffee-50 transition-colors">
              <Zap className="w-5 h-5" />
              <span>Начать</span>
            </button>
            <button className="border border-white/50 text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-white/10 transition-colors">
              <Smartphone className="w-5 h-5" />
              <span>Telegram</span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <div className="bg-white/10 rounded-2xl p-8">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
              alt="Современный кофейный аппарат" 
              className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}