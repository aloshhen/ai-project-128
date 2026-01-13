import { Zap } from 'lucide-react'

export default function CTA() {
  return (
    <section className="bg-coffee-gradient text-white py-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Присоединяйтесь к Кофейной Революции
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-80">
          Станьте частью будущего кофейной индустрии прямо сейчас. 
          Никаких очередей, моментальный кофе, технологии высшего класса.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-coffee-900 px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-coffee-50 transition-colors">
            <Zap className="w-6 h-6" />
            <span className="text-lg">Начать Сейчас</span>
          </button>
          <button className="border border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
            <span className="text-lg">Узнать Больше</span>
          </button>
        </div>
      </div>
    </section>
  )
}