export function Menu() {
  return (
    <section id="menu" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 700 }}>
            Breakfast. Brunch. Lunch.
          </h2>
          <p className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'Great Vibes, cursive', color: '#F39C12' }}>Made for Every Craving</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            From golden pancakes and hearty breakfast classics to fresh salads and satisfying sandwiches,
            our menu has something special for everyone.
          </p>
          <a
            href="https://order.toasttab.com/online/golden-brunch-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white px-8 py-3.5 rounded-md transition text-sm font-semibold uppercase tracking-wide"
            style={{ backgroundColor: '#F39C12' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E08E0B'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F39C12'}
          >
            Order Online
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-80 rounded-lg overflow-hidden group">
            <img
              src="/src/imports/sausagelinkeggs.png"
              alt="Breakfast"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">Breakfast</h3>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden group">
            <img
              src="/src/imports/Screenshot_2026-04-28_at_10.24.49 PM.png"
              alt="Brunch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">Brunch</h3>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden group">
            <img
              src="/src/imports/blt.png"
              alt="Lunch"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">Lunch</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
