import React, { createContext, useContext, useState } from 'react';

export type ContactModalType = 'call' | 'whatsapp' | null;

interface ContactModalContextType {
  modalType: ContactModalType;
  customMessage?: string;
  openCallModal: () => void;
  openWhatsAppModal: (customMessage?: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [modalType, setModalType] = useState<ContactModalType>(null);
  const [customMessage, setCustomMessage] = useState<string | undefined>(undefined);

  const openCallModal = () => {
    setModalType('call');
    setCustomMessage(undefined);
  };

  const openWhatsAppModal = (msg?: string) => {
    setCustomMessage(msg);
    setModalType('whatsapp');
  };

  const closeModal = () => {
    setModalType(null);
    setCustomMessage(undefined);
  };

  return (
    <ContactModalContext.Provider
      value={{ modalType, customMessage, openCallModal, openWhatsAppModal, closeModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = (): ContactModalContextType => {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
};
