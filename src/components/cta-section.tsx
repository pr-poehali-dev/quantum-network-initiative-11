import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const perks = [
  { icon: "Truck", label: "Бесплатная доставка от ₽50 000" },
  { icon: "Shield", label: "Гарантия 2 года" },
  { icon: "CreditCard", label: "Рассрочка 0%" },
  { icon: "Headset", label: "Поддержка 24/7" },
]

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-sans text-balance">
            Готовы войти в будущее?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
            Более 3 000 довольных покупателей уже используют наши нейроинтерфейсы. Присоединяйтесь — следующее поколение технологий ждёт вас.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {perks.map((perk, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/50 border border-primary/20">
                <Icon name={perk.icon} size={24} className="text-red-500" />
                <span className="text-sm text-muted-foreground text-center leading-tight">{perk.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
              onClick={() => document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" })}
            >
              Перейти в каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
