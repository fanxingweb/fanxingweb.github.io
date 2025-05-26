export default function Iconfont({ type, className = "", ...rest }) {
  return (
    <svg className={`icon ${className}`} aria-hidden="true" {...rest}>
      <use xlinkHref={type} />
    </svg>
  );
}
