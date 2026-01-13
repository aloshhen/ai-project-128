import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Иван Петров',
    role: 'Основатель Tech Startup',
    quote: 'CoffeeOS — это не просто приложение, это революция в мире кофе!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'
  },
  {
    name: 'Анна Смирнова',
    role: 'UX Дизайнер',
    quote: 'Невероятно удобный и технологичный способ наслаждаться кофе.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80'
  }
]

export default function Testimonials() {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-900 mb-4">
            Что Говорят Пользователи
          </h2>
          <p className="text-xl text-coffee-500 max-w-2xl mx-auto">
            Реальные истории от людей, которые уже используют CoffeeOS
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-coffee-50 rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-4 left-4 text-coffee-500/20 w-16 h-16" />
              <p className="text-xl italic mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-coffee-900">{testimonial.name}</h4>
                  <p className="text-coffee-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}