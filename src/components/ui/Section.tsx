type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = '',
}: Props) {
  return (
    <section
      className={`
        px-4 py-16
        md:px-8 md:py-24
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}