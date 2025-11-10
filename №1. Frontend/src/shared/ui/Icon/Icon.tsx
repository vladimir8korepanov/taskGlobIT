import { TelIcon } from './TelIcon';
import { MailIcon } from './MailIcon';

interface IconProps {
  name: 'tel' | 'mail';
  className?: string;
}

export function Icon({ name, className = 'w-6 h-6' }: IconProps) {
  const iconClassName = `${className} text-primary flex-shrink-0`;

  if (name === 'tel') {
    return <TelIcon className={iconClassName} />;
  }

  if (name === 'mail') {
    return <MailIcon className={iconClassName} />;
  }

  return null;
}
