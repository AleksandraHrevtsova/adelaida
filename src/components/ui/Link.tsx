import { Link } from '@/i18n/navigation';
import type {
  MouseEventHandler,
  ReactNode,
} from 'react';

type Props = {
  children?: ReactNode;
  label?: string;
  path: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  isBlank?: boolean;
  className?: string;
};

const baseLinkClasses =
  'transition-opacity duration-300 hover:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2';

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
      rel={isBlank ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseLinkClasses} ${className}`}
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
      rel={isBlank ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseLinkClasses} ${className}`}
    >
      {label}
    </Link>
  );
};