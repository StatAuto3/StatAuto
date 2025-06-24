'use client';

import React from 'react';
import NextLink from 'next/link';
import { Card, CardBody } from '@heroui/card';
import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';

import { validateEmail, validatePasswords } from '@/app/utils/validations';
import { useUser } from '@/app/contexts/UserContext.provider';
import { siteConfig } from '@/config/site';
import { title } from '@/components/primitives';

interface Errors {
  stable?: string;
  password?: string;
}

export default function RegisterPage() {
  const { setUser } = useUser();

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState<Errors>({});

  // Real-time password validation
  const getPasswordError = (value: FormDataEntryValue) => {
    if (value instanceof File) return 'Wtf ?';
    if (value.length < 4) {
      return 'Password must be 4 characters or more';
    }
    if ((value.match(/[A-Z]/g) || []).length < 1) {
      return 'Password needs at least 1 uppercase letter';
    }
    if ((value.match(/[^a-z]/gi) || []).length < 1) {
      return 'Password needs at least 1 symbol';
    }

    return null;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors: Errors = {};

    // Password validation
    const passwordError = getPasswordError(data.password);

    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    // Clear errors and submit
    setErrors({});
    // setSubmitted(data);
  };

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-xl text-center justify-center'>
        <h1 className={title()}>Register</h1>
      </div>
      <Card className='flex gap-3 mt-8 p-3'>
        <CardBody>
          <Form
            className='w-full max-w-xs flex flex-col gap-4'
            validationBehavior='aria'
            onSubmit={onSubmit}
          >
            <Input
              isRequired
              errorMessage={({ validationDetails }) => {
                if (validationDetails.valueMissing) {
                  return 'Please enter your stable name';
                }

                return errors.stable;
              }}
              label='Stable Name'
              labelPlacement='outside'
              name='name'
              placeholder='Enter your stable name'
              type='text'
            />

            <Input
              isRequired
              errorMessage={({ validationDetails }) =>
                validateEmail(validationDetails)
              }
              label='Email'
              labelPlacement='outside'
              name='email'
              placeholder='Enter your email'
              type='email'
            />

            <Input
              isRequired
              errorMessage='Should not be empty'
              label='Location'
              labelPlacement='outside'
              name='location'
              placeholder="Enter the stable's location"
              type='text'
            />

            <Input
              isRequired
              errorMessage={getPasswordError(password)}
              isInvalid={getPasswordError(password) !== null}
              label='Password'
              labelPlacement='outside'
              name='password'
              placeholder='Enter your password'
              type='password'
              value={password}
              onValueChange={setPassword}
            />

            <Input
              isRequired
              errorMessage={validatePasswords(password, confirmPassword)}
              isInvalid={validatePasswords(password, confirmPassword) !== null}
              label='Confirm password'
              labelPlacement='outside'
              name='confirmPassword'
              placeholder='Confirm your password'
              type='password'
              value={confirmPassword}
              onValueChange={setConfirmPassword}
            />

            <div className='w-full flex gap-2 justify-end my-2'>
              <Button color='primary' type='submit'>
                Submit
              </Button>
            </div>

            <div className='w-full flex gap-2 justify-end'>
              <span>
                Already have an account ?{' '}
                <NextLink
                  className='text-primary'
                  href={siteConfig.auth.login.href}
                >
                  {siteConfig.auth.login.label}
                </NextLink>
              </span>
            </div>
          </Form>
        </CardBody>
      </Card>
    </section>
  );
}
