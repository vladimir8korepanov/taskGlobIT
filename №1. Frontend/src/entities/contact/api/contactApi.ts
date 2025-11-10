import { Contact, ApiResponse } from '../model/types';

const API_BASE_URL = 'http://localhost:3000';

export async function fetchContacts(searchTerm?: string): Promise<Contact[]> {
  const url = new URL(API_BASE_URL);
  if (searchTerm && searchTerm.trim()) {
    url.searchParams.append('term', searchTerm.trim());
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP ошибка! статус: ${response.status}`);
    }
    const result: ApiResponse<Contact[]> = await response.json();
    
    if (!result.success) {
      throw new Error(result.error?.message || 'Не удалось загрузить контакты');
    }
    
    // Маппинг полей бэкенда в удобный формат для фронтенда
    return result.data.map(contact => ({
      ...contact,
      position: contact.position_name || undefined,
      hireDate: contact.hire_date || undefined,
      additionalInfo: contact.address || undefined,
    }));
  } catch (error) {
    console.error('Ошибка при загрузке контактов:', error);
    throw error;
  }
}

