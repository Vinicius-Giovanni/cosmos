export function OrbitMark({ className = "" }: { className?: string }) {
  const polygon = (sides: number, radius: number, rotation = 0) =>
    Array.from({ length: sides }, (_, i) => {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 2 + (rotation * Math.PI) / 180;
      return `${(100 + radius * Math.cos(angle)).toFixed(2)},${(100 + radius * Math.sin(angle)).toFixed(2)}`;
    }).join(" ");

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.85">
        <polygon points={polygon(8, 78)} />
        <polygon points={polygon(8, 78, 22.5)} />
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="0.35" opacity="0.35">
        <circle cx="100" cy="100" r="94" />
        <polygon points={polygon(8, 58, 11)} />
      </g>
    </svg>
  );
}
