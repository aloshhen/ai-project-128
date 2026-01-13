import { motion } from 'framer-motion'
import { Smartphone, QrCode, CreditCard } from 'lucide-react'

const steps = [
  {
    icon: Smartphone,
    title: 'Установка',
    description: 'Скачайте приложение в Telegram или App Store'
  },
  {
    icon: QrCode,
    title: 'Регистрация',
    description: 'Войдите через QR-код или Telegram-аккаунт'
  },
  {
    icon: CreditCard,
    title: 'Оплата',
    description: 'Пополните баланс криптовалютой или картой'
  }
]

export default function HowItWorks() {
  return (
    <section 
      id="how-it-works" 
      className="py-24 bg-coffee-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">
            Как Это Работает
          </h2>
          <p className="text-xl text-coffee-500 max-w-2xl mx-auto">
            Всего 3 простых шага к идеальному кофе
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-coffee-50 rounded-full p-4 inline-block mb-6">
                <step.icon className="w-10 h-10 text-coffee-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-coffee-900">
                {step.title}
              </h3>
              <p className="text-coffee-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}