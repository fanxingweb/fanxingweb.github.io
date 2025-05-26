export default function TransitionHoverText({
  text,
  initIdx = 0,
  autoControl = true,
  delay = 0.05,
  ...props
}) {
  const className = autoControl ? "transition-text-control" : undefined;

  if (!text) {
    return null;
  }

  return (
    <div className={className} {...props}>
      {text.split("").map((w, i) => (
        <span
          key={i}
          style={{ transitionDelay: `${delay * (i + initIdx) + delay}s` }}
        >
          {w}
        </span>
      ))}
    </div>
  );
}
