export function Logo({ className = "h-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Golden text */}
      <text x="10" y="35" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#331900">
        Golden
      </text>

      {/* Brunch text */}
      <text x="10" y="65" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#331900">
        Brunch
      </text>

      {/* Honeycomb hexagons */}
      <g transform="translate(180, 15)">
        {/* Center hexagon */}
        <path d="M 30 15 L 40 20 L 40 30 L 30 35 L 20 30 L 20 20 Z" fill="#D4941D" opacity="0.9"/>

        {/* Surrounding hexagons */}
        <path d="M 30 -5 L 40 0 L 40 10 L 30 15 L 20 10 L 20 0 Z" fill="#E8A728" opacity="0.8"/>
        <path d="M 50 5 L 60 10 L 60 20 L 50 25 L 40 20 L 40 10 Z" fill="#E8A728" opacity="0.8"/>
        <path d="M 50 25 L 60 30 L 60 40 L 50 45 L 40 40 L 40 30 Z" fill="#E8A728" opacity="0.8"/>
        <path d="M 30 35 L 40 40 L 40 50 L 30 55 L 20 50 L 20 40 Z" fill="#E8A728" opacity="0.8"/>
        <path d="M 10 25 L 20 30 L 20 40 L 10 45 L 0 40 L 0 30 Z" fill="#E8A728" opacity="0.8"/>
        <path d="M 10 5 L 20 10 L 20 20 L 10 25 L 0 20 L 0 10 Z" fill="#E8A728" opacity="0.8"/>

        {/* Bee body */}
        <ellipse cx="30" cy="25" rx="6" ry="8" fill="#331900"/>
        <ellipse cx="30" cy="22" rx="5" ry="3" fill="#D4941D"/>
        <ellipse cx="30" cy="28" rx="5" ry="3" fill="#D4941D"/>

        {/* Bee wings */}
        <ellipse cx="25" cy="23" rx="4" ry="6" fill="white" opacity="0.7" transform="rotate(-30 25 23)"/>
        <ellipse cx="35" cy="23" rx="4" ry="6" fill="white" opacity="0.7" transform="rotate(30 35 23)"/>
      </g>
    </svg>
  );
}
