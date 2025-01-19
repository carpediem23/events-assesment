import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import '@/utils/Date.extension';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/common/Button.component';
import useEventsStore from '../api/Events.store';
import { IEvent, IEventFormInputs } from '../types/index.type';
import ErrorIndicator from './ErrorIndicator.component';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  startDate: yup.string().required(),
  endDate: yup
    .string()
    .required()
    .test('is-after-start', 'form.endDateAfterStart', function (value) {
      const { startDate } = this.parent;
      return !startDate || !value || new Date(value) >= new Date(startDate);
    }),
  color: yup.string().required(),
});

interface Props {
  event: IEvent;
}

export default function EventUpdateForm({ event }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { updateEvent, loading, postError } = useEventsStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEventFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: event.title,
      description: event.description,
      startDate: new Date(event.startDate).toInputFormat(),
      endDate: new Date(event.endDate).toInputFormat(),
      color: event.color,
    },
  });

  const onSubmit = async (data: IEventFormInputs) => {
    try {
      const formattedData = {
        ...data,
        startDate: new Date(data.startDate).toISOWithTimezone(),
        endDate: new Date(data.endDate).toISOWithTimezone(),
      };
      await updateEvent(event.id, formattedData);
      navigate('/events');
    } catch (error) {
      console.error('Failed to update event:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          {t('form.title')}
        </label>
        <input
          {...register('title')}
          className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.title && (
          <span className="text-red-500 text-sm">
            {t(errors.title.message!)}
          </span>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          {t('form.description')}
        </label>
        <textarea
          {...register('description')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {t(errors.description.message!)}
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {t('form.startDate')}
          </label>
          <input
            type="datetime-local"
            {...register('startDate')}
            className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.startDate && (
            <span className="text-red-500 text-sm">
              {t(errors.startDate.message!)}
            </span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {t('form.endDate')}
          </label>
          <input
            type="datetime-local"
            {...register('endDate')}
            className="mt-1 block w-full h-10 p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.endDate && (
            <span className="text-red-500 text-sm">
              {t(errors.endDate.message!)}
            </span>
          )}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          {t('form.color')}
        </label>
        <input
          type="color"
          {...register('color')}
          className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="flex gap-4">
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          loading={loading}
        >
          {t('buttons.update')}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate('/events')}
        >
          {t('buttons.cancel')}
        </Button>
      </div>
      {postError && <ErrorIndicator message={t(postError)} />}
    </form>
  );
}
