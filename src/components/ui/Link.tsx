import { Link } from '@/i18n/navigation';
import type { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  label?: string;
  path: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isBlank?: boolean;
  className?: string;
};

export const CustomLink = ({
  label, 
  path,
  onClick,
  isBlank = false,
  className = '',
  children,
}: Props) => {
  return (
    <Link
      href={path}
      target={isBlank ? '_blank' : undefined}
      onClick={onClick}
      className={`${className} transition-opacity duration-300 hover:opacity-70`}
    >
      {label ?? children}
    </Link>
  );
};

export const SocialLink = ({
  label, 
  path,
  onClick,
  isBlank = true,
  className = '',
}: Props) => {
  return (
    <Link
      href={path}
      target={isBlank ? '_blank' : undefined}
      onClick={onClick}
      className={`${className} transition-opacity duration-300 hover:opacity-70`}
    >
      {label}
    </Link>
  );
};