export function Catering() {
  return (
    <section className="relative py-32 px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(51, 25, 0, 0.85), rgba(51, 25, 0, 0.85)), url('https://images.unsplash.com/photo-1576379392044-6d933410d374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
          Catering For Any Occasion
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Whether it's a corporate breakfast meeting, family brunch, or special event,
          Golden Brunch can deliver exceptional food and service to make your occasion memorable.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#F39C12] hover:bg-[#E08E0B] text-white px-8 py-3.5 rounded-md transition text-sm font-semibold uppercase tracking-wide"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}