export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
  // Маппинг полей бэкенда для удобства использования в компонентах
  position?: string;
  hireDate?: string;
  additionalInfo?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: {
    message: string;
    code: number;
  };
}

