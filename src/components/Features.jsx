import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Coffee, Wallet, Globe, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section 
      id="features" 
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">
            Технологии Будущего Кофе
          </h2>
          <p className="text-xl text-coffee-500 max-w-2xl mx-auto">
            CoffeeOS объединяет передовые технологии, чтобы сделать каждую чашку кофе идеальной.
          </p>
        </div>
        <BentoGrid className="max-w-5xl mx-auto">
          <BentoGridItem
            title="Умный Заказ"
            description="Предзаказ кофе с точным временем приготовления"
            icon={<Coffee className="h-6 w-6" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Криптовалютные Платежи"
            description="Оплата TON, Stars и другими криптовалютами"
            icon={<Wallet className="h-6 w-6" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title="Глобальная Сеть"
            description="Единая экосистема кофеен по всему миру"
            icon={<Globe className="h-6 w-6" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title="Моментальный Кофе"
            description="Технология быстрого приготовления без очередей"
            icon={<Zap className="h-6 w-6" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </section>
  )
}