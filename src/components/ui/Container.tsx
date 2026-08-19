type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = '',
}: Props) {
  return (
    <div
      className={`
        max-w-400 mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
}