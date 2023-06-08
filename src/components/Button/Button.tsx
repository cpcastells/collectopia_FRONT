interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  url?: string;
  altText?: string;
  width?: string;
  height?: string;
}
const Button = ({
  text,
  onClick,
  className,
  altText,
  height,
  width,
  url,
  isDisabled,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      disabled={isDisabled}
    >
      {text ||
        (url && <img src={url} alt={altText} width={width} height={height} />)}
    </button>
  );
};

export default Button;
