import { ReactNode } from 'react';

export interface ModalProps {
  title: string;
  submitLabel: string;
  cancelLabel: string;
  children: ReactNode;
  onSubmit: () => void;
  onCancel: () => void;
  onClose: () => void;
}
