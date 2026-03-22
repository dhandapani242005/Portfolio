import './Button.css';

function Button({
  href,
  text,
  variant = 'primary',
  target,
  rel,
  download = false,
  ariaLabel,
  disabled = false,
  tooltip,
}) {
  if (disabled) {
    return (
      <span className={`btn btn-${variant} btn-disabled`} title={tooltip}>
        {text}
      </span>
    );
  }
  return (
    <a
      href={href}
      className={`btn btn-${variant}`}
      target={target}
      rel={rel}
      download={download}
      aria-label={ariaLabel || text}
      title={tooltip}
    >
      {text}
    </a>
  );
}

export default Button;
