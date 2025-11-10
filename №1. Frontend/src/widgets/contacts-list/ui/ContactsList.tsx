import { Contact } from '@/entities/contact/model/types';
import { ContactCard } from '@/entities/contact/ui/ContactCard';

interface ContactsListProps {
  contacts: Contact[];
  onContactClick: (contact: Contact) => void;
}

export function ContactsList({ contacts, onContactClick }: ContactsListProps) {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-12 text-asphalt">
        Пользователи не найдены
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onClick={() => onContactClick(contact)}
        />
      ))}
    </div>
  );
}

