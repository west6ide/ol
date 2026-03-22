import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  contactSalesSchema,
  type ContactSalesValues,
} from '@/features/contact-sales/model/contact-sales.schema';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

const defaultValues: ContactSalesValues = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactSalesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactSalesValues>({
    resolver: zodResolver(contactSalesSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (values) => {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 700);
    });

    console.info('Lead captured', values);
    reset(defaultValues);
  });

  return (
    <section className="card lead-form" id="contact">
      <div className="section-head">
        <div>
          <p className="eyebrow">Lead capture</p>
          <h3>Production-ready form flow</h3>
        </div>
      </div>

      <form className="lead-form__body" onSubmit={onSubmit}>
        <Input
          label="Name"
          placeholder="Alex Mercer"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          label="Email"
          placeholder="alex@company.com"
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          label="Company"
          placeholder="Northstar Labs"
          error={errors.company?.message}
          {...register('company')}
        />
        <Input
          as="textarea"
          label="Project brief"
          placeholder="We need a scalable frontend platform with a design system and analytics-ready flows."
          error={errors.message?.message}
          rows={5}
          {...register('message')}
        />

        <div className="lead-form__footer">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Request proposal'}
          </Button>
          {isSubmitSuccessful ? <span className="form-success">Request captured locally.</span> : null}
        </div>
      </form>
    </section>
  );
}
