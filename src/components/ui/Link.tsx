import Link from 'next/link';

type Props = {
  children?: React.ReactNode;
  label?: string;
  path: string;
  isBlank?: boolean;
  className?: string;
};

export default function CustomLink({
  label, 
  path,
  isBlank,
  className,
  children,
}: Props) {
  return (
    <Link
      href={path}
      target={isBlank ? '_blank' : '_self'}
      className={`${className} transition-opacity duration-300 hover:opacity-70`}
    >
      {label ?? children}
    </Link>
  );
}