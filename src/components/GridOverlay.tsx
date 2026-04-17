export function GridOverlay({ size, visible }: { size: number; visible: boolean }) {
  if (!visible) return null;
  return (
    <div style={{
      position: "absolute", inset: 0,
      pointerEvents: "none", zIndex: 190,
      backgroundImage: `radial-gradient(circle, rgba(77,186,214,0.22) 1px, transparent 1px)`,
      backgroundSize: `${size}px ${size}px`,
    }} />
  );
}
