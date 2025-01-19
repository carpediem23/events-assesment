import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { IAlertProps } from '@/types/components.type';
import Button from './Button.component';

const variantStyles = {
  success: {
    container: 'bg-green-50 dark:bg-green-900',
    icon: 'text-green-400',
    title: 'text-green-800 dark:text-green-100',
    message: 'text-green-700 dark:text-green-200',
    confirmButton: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
  },
  error: {
    container: 'bg-red-50 dark:bg-red-900',
    icon: 'text-red-400',
    title: 'text-red-800 dark:text-red-100',
    message: 'text-red-700 dark:text-red-200',
    confirmButton: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  },
  warning: {
    container: 'bg-yellow-50 dark:bg-yellow-900',
    icon: 'text-yellow-400',
    title: 'text-yellow-800 dark:text-yellow-100',
    message: 'text-yellow-700 dark:text-yellow-200',
    confirmButton: 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500',
  },
  info: {
    container: 'bg-blue-50 dark:bg-blue-900',
    icon: 'text-blue-400',
    title: 'text-blue-800 dark:text-blue-100',
    message: 'text-blue-700 dark:text-blue-200',
    confirmButton: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  },
};

export default function Alert({
  title,
  message,
  variant = 'info',
  isOpen,
  loading,
  onConfirm,
  onCancel,
}: IAlertProps): ReactNode {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const styles = variantStyles[variant];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-4 text-center">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500/50"
          onClick={onCancel}
        >
          <div className="absolute inset-0"></div>
        </div>
        <div className="inline-block transform overflow-hidden rounded-lg text-left align-middle bg-white dark:bg-gray-800 shadow-xl transition-all sm:max-w-lg sm:w-full relative z-10">
          <div className={`px-4 pt-5 pb-4 sm:p-6 sm:pb-4 ${styles.container}`}>
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className={`h-6 w-6 ${styles.icon}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                  />
                </svg>
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className={`text-lg font-medium leading-6 ${styles.title}`}>
                  {title}
                </h3>
                <div className="mt-2">
                  <p className={`text-sm ${styles.message}`}>{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.container} px-4 py-3 flex flex-col sm:flex-row-reverse sm:px-6 gap-3`}
          >
            <Button
              variant="primary"
              className={`${styles.confirmButton}`}
              onClick={onConfirm}
              loading={loading}
            >
              {t('buttons.confirm')}
            </Button>
            <Button variant="secondary" className="" onClick={onCancel}>
              {t('buttons.cancel')}
            </Button>
          </div>
        </div>
      </div>{' '}
    </div>
  );
}
