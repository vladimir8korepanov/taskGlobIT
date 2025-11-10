import { useState, useEffect, useCallback } from 'react';
import { Contact } from '@/entities/contact/model/types';
import { fetchContacts } from '@/entities/contact/api/contactApi';
import { SearchBar } from '@/features/search-contacts/ui/SearchBar';
import { ContactModal } from '@/features/view-contact-details/ui/ContactModal';
import { ContactsList } from '@/widgets/contacts-list/ui/ContactsList';

export function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadContacts = useCallback(async (term?: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchContacts(term);
      setContacts(data);
    } catch (err) {
      setError('Ошибка при загрузке данных. Убедитесь, что сервер запущен на http://localhost:3000');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadContacts(searchTerm || undefined);
    }, 300); // Задержка для поиска (debounce)

    return () => clearTimeout(timeoutId);
  }, [searchTerm, loadContacts]);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-plumbum mb-8">Список пользователей</h1>
        
        <div className="mb-8">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Поиск по имени..."
          />
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            {error}
          </div>
        )}

        {loading && contacts.length === 0 ? (
          <div className="text-center py-12 text-asphalt">Загрузка...</div>
        ) : (
          <ContactsList
            contacts={contacts}
            onContactClick={handleContactClick}
          />
        )}
      </div>

      <ContactModal contact={selectedContact} onClose={handleCloseModal} />
    </div>
  );
}

