import { Coffee, UtensilsCrossed, Users, Clock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Coffee,
      title: "Fresh Breakfast",
      description: "Enjoy fresh made-to-order breakfast favorites every morning."
    },
    {
      icon: UtensilsCrossed,
      title: "Brunch & Lunch",
      description: "The perfect combination of breakfast and lunch classics."
    },
    {
      icon: Clock,
      title: "Open Daily",
      description: "Serving you seven days a week from 6:30 AM."
    },
    {
      icon: Users,
      title: "Catering Available",
      description: "A large group or family reunion? We can help make it special."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FEF5E7] rounded-full mb-4">
                <feature.icon className="text-[#F39C12]" size={36} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}