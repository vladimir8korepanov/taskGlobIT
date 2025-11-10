import { Contact } from '../model/types';
import { Icon } from '@/shared/ui/Icon/Icon';

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

export function ContactCard({ contact, onClick }: ContactCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.10)] cursor-pointer transition-transform hover:scale-[1.02] h-full"
    >
      <h3 className="text-2xl font-bold text-plumbum leading-[30px]">
        {contact.name}
      </h3>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3.5">
          <Icon name="tel" className="w-6 h-6" />
          <span className="text-sm text-asphalt leading-5">{contact.phone}</span>
        </div>
        <div className="flex items-center gap-3.5">
          <Icon name="mail" className="w-6 h-6" />
          <span className="text-sm text-asphalt leading-5 break-all">{contact.email}</span>
        </div>
      </div>
    </div>
  );
}

