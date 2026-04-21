import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как оформить заказ и какие способы оплаты доступны?",
      answer:
        "Выберите устройство в каталоге, нажмите «В корзину» и следуйте инструкциям. Принимаем карты Visa/Mastercard/МИР, СБП, а также рассрочку на 12 месяцев без переплат.",
    },
    {
      question: "Сроки и условия доставки?",
      answer:
        "Доставляем по всей России за 2–5 рабочих дней. Москва и Санкт-Петербург — курьером на следующий день. Доставка бесплатна при заказе от ₽ 50 000.",
    },
    {
      question: "Нужна ли операция для использования большинства устройств?",
      answer:
        "Большинство наших устройств — неинвазивные (Synapseband, CogniDrive, NeuroSleep, ThinkAR). Инвазивные импланты (NeuralLink Pro X1) устанавливаются в партнёрских клиниках с полным медицинским сопровождением.",
    },
    {
      question: "Есть ли гарантия на устройства?",
      answer:
        "Все устройства поставляются с гарантией 2 года. Сервисные центры есть в 15 городах России. Также доступна расширенная гарантия на 3 года и страхование устройства.",
    },
    {
      question: "Как проходит настройка и обучение работе с устройством?",
      answer:
        "Каждый заказ сопровождается инструкцией и доступом к нашему приложению с пошаговыми уроками. Для сложных устройств включена бесплатная онлайн-консультация специалиста.",
    },
    {
      question: "Можно ли вернуть или обменять устройство?",
      answer:
        "Возврат в течение 14 дней для неинвазивных устройств в оригинальной упаковке без следов использования. Обмен доступен в любое время при наличии заводского брака.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать перед покупкой нейроинтерфейса
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-violet-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-violet-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}