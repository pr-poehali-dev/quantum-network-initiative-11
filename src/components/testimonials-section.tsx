import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    name: "Елена Родригес",
    role: "Нейрохирург, клиника «Сеченов»",
    avatar: "/professional-woman-scientist.png",
    content:
      "MindStream изменил подход к реабилитации наших пациентов. Восстановление двигательных функций ускорилось на 340%. Рекомендую всем клиникам.",
    rating: 5,
  },
  {
    name: "Маркус Уильямс",
    role: "Senior Developer, Yandex",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "NeuralLink Pro X1 — это WOW. Печатаю мыслью быстрее, чем на клавиатуре. Доставка пришла за 3 дня, поддержка на связи 24/7.",
    rating: 5,
  },
  {
    name: "Анна Ковальски",
    role: "Киберспортсмен, Team Spirit",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "CogniDrive Controller дал мне преимущество 0.3 мс над соперниками. Настройка заняла 10 минут, а результаты почувствовал сразу.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Отзывы покупателей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные истории людей, изменивших жизнь с нашими устройствами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-violet-500 fill-violet-500" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}