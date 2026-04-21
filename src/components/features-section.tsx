import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const products = [
  {
    title: "NeuralLink Pro X1",
    description: "Флагманский нейроинтерфейс с 1024 электродами. Управляйте компьютером, смартфоном и умным домом силой мысли.",
    icon: "Brain",
    badge: "Хит продаж",
    price: "₽ 2 490 000",
  },
  {
    title: "Synapseband EEG",
    description: "Неинвазивная гарнитура для мониторинга мозговых волн. Медитация, фокус, управление стрессом — всё в одном устройстве.",
    icon: "Headphones",
    badge: "Новинка",
    price: "₽ 89 000",
  },
  {
    title: "CogniDrive Controller",
    description: "BCI-контроллер для геймеров и профессионалов. Скорость реакции 0.3 мс, совместимость с PC и консолями.",
    icon: "Gamepad2",
    badge: "Геймерам",
    price: "₽ 149 000",
  },
  {
    title: "MindStream Медицинский",
    description: "Сертифицированное устройство для нейрореабилитации. Используется в более 200 клиниках по всему миру.",
    icon: "HeartPulse",
    badge: "Медицина",
    price: "₽ 890 000",
  },
  {
    title: "NeuroSleep Pro",
    description: "Интеллектуальный мониторинг сна с анализом фаз и стимуляцией для глубокого восстановления и управления сновидениями.",
    icon: "Moon",
    badge: "Сон & Здоровье",
    price: "₽ 65 000",
  },
  {
    title: "ThinkAR Glasses",
    description: "AR-очки с нейроуправлением. Управляйте дополненной реальностью без рук — только мыслью.",
    icon: "Glasses",
    badge: "AR/VR",
    price: "₽ 320 000",
  },
]

export function FeaturesSection() {
  return (
    <section id="catalog" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Каталог устройств</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Передовые нейроинтерфейсы для медицины, продуктивности и развлечений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Icon name={product.icon} size={24} className="text-violet-500" />
                  </div>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <CardDescription className="text-muted-foreground leading-relaxed flex-1">
                  {product.description}
                </CardDescription>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-bold text-violet-500 font-orbitron">{product.price}</span>
                  <Button size="sm" className="bg-violet-500 hover:bg-violet-600 text-white border-0">
                    В корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}