import React from 'react';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
};

export type TAlertVariant = 'success' | 'error' | 'warning' | 'info';

export interface IAlertProps {
  title: string;
  message: string;
  variant: TAlertVariant;
  isOpen: boolean;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}
