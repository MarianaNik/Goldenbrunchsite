import logo from "../../imports/logobrunch.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Golden Brunch Logo" className="h-16 md:h-20" style={{ mixBlendMode: 'multiply' }} />
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider">
              <a href="#home" className="text-gray-700 hover:text-[#F39C12] transition">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-[#F39C12] transition">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-[#F39C12] transition">About</a>
              <a href="#locations" className="text-gray-700 hover:text-[#F39C12] transition">Locations</a>
              <a href="#contact" className="text-gray-700 hover:text-[#F39C12] transition">Contact</a>
            </div>
            <a
              href="https://order.toasttab.com/online/golden-brunch-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-6 py-2.5 rounded-md transition text-sm font-medium"
              style={{ backgroundColor: '#F39C12' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E08E0B'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F39C12'}
            >
              ORDER ONLINE
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
