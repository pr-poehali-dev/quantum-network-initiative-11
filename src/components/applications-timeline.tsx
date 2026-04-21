import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Медицина и реабилитация",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Сертифицированные BCI-устройства для клиник и частных пользователей. Нейрореабилитация, контроль хронической
            боли, восстановление двигательных функций — всё в нашем каталоге.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              MindStream Медицинский — для клиник и реабилитации
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              NeuroSleep Pro — улучшение качества сна
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Официальные сертификаты FDA и CE
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Продуктивность и работа",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Профессиональные нейроинтерфейсы для офиса, разработчиков и творческих людей. Управляйте ПК мыслью,
            ускоряйте работу и снижайте когнитивную нагрузку.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              NeuralLink Pro X1 — управление компьютером мыслью
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Synapseband EEG — фокус и борьба со стрессом
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Рост продуктивности до 3× по данным исследований
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Геймерам и AR/VR",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Полное погружение без контроллеров. Нейроуправление в играх, VR-мирах и дополненной реальности —
            следующий уровень взаимодействия с цифровым пространством.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              CogniDrive Controller — скорость реакции 0.3 мс
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              ThinkAR Glasses — управление AR без рук
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Совместимость с PC, PlayStation, Meta Quest
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Категории устройств</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Нейроинтерфейсы для каждой задачи — от клинической реабилитации до профессионального гейминга
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
