import { Contact } from '@/entities/contact/model/types';
import { X } from "lucide-react";
import { useEffect } from "react";

interface ContactModalProps {
  contact: Contact | null;
  onClose: () => void;
}

export function ContactModal({ contact, onClose }: ContactModalProps) {
  useEffect(() => {
    if (contact) {
      // Вычисляем ширину скроллбара перед блокировкой скролла
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      // Сохраняем текущие значения
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Блокируем скролл и компенсируем ширину скроллбара
      document.body.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      
      return () => {
        // Восстанавливаем исходные значения
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [contact]);

  if (!contact) return null;

  return (
    <div
      className="fixed inset-0 bg-[#BCC3D0] bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="flex flex-col gap-10 p-6 bg-white rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.10)] w-full max-w-[500px] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-10">
          <h2 className="flex-1 text-2xl font-bold text-plumbum leading-[30px]">
            {contact.name}
          </h2>
          <button
            onClick={onClose}
            className="w-5 h-5 text-black hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-10">
          <div className="flex flex-col gap-3.5">
            <div className="text-lg text-plumbum leading-6">Телефон:</div>
            <div className="text-lg text-plumbum leading-6">Почта:</div>
            {(contact.hireDate || contact.hire_date) && (
              <div className="text-lg text-plumbum leading-6">Дата приема:</div>
            )}
            {(contact.position || contact.position_name) && (
              <div className="text-lg text-plumbum leading-6">Должность:</div>
            )}
            {contact.department && (
              <div className="text-lg text-plumbum leading-6">Подразделение:</div>
            )}
          </div>
          <div className="flex-1 flex flex-col gap-3.5">
            <div className="text-base text-asphalt leading-6">{contact.phone}</div>
            <div className="text-base text-asphalt leading-6 break-all">{contact.email}</div>
            {(contact.hireDate || contact.hire_date) && (
              <div className="text-base text-asphalt leading-6">{contact.hireDate || contact.hire_date}</div>
            )}
            {(contact.position || contact.position_name) && (
              <div className="text-base text-asphalt leading-6">{contact.position || contact.position_name}</div>
            )}
            {contact.department && (
              <div className="text-base text-asphalt leading-[18px]">{contact.department}</div>
            )}
          </div>
        </div>

        {(contact.additionalInfo || contact.address) && (
          <div className="flex flex-col gap-3">
            <div className="text-lg text-plumbum leading-6">Дополнительная информация:</div>
            <div className="text-base text-asphalt leading-[18px]">
              {contact.additionalInfo || contact.address}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

