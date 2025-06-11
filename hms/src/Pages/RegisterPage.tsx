import { PasswordInput, SegmentedControl, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconHeartbeat } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom';
import { registerUser } from '../Service/UserService';

const RegisterPage = () => {
    const form = useForm({

        initialValues: {
            type: 'PATIENT', // Default type can be set to 'Patient' or any other type you prefer
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            name: (value: any) => (value.trim() === '' ? 'Name is required' : null),
            email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: any) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
            confirmPassword: (value: any, values: any) => (value !== values.password ? 'Passwords do not match' : null),
        },
    });
    function handleSubmit(values: {
        name: string; type: string; email: string; password: string; confirmPassword: string
    }) {
        console.log('Register submitted:', values);
        registerUser({
            name: values.name,
            email: values.email,
            password: values.password
        }).then((response) => {
            console.log('Registration successful:', response);
        }).catch((error: any) => {
            console.error('Registration failed:', error);
        });
    }

    return (
        <div style={{ background: 'url("/bg.jpg.jpg")' }} className='h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center' >
            <div className=' py-3 text-primary-500  text-primary-400 flex gap-1 items-center '>
                <IconHeartbeat size={45} stroke={3} />
                <span className='font-heading text-4xl font-semibold '>Pulse</span>
            </div>
            <div className='w-[450px] backdrop-blur-md p-10 py-8 rounded-lg'>
                <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5 '>
                    <div className='text-xl font-bold self-center'>Register </div>
                    <SegmentedControl {...form.getInputProps('type')} fullWidth size="md" radius="md" color='primary' bg='none' border-white data={[{ label: 'Admin', value: 'ADMIN' }, { label: 'Patient', value: 'PATIENT' }, { label: 'Doctor', value: 'DOCTOR' }]} />
                    <TextInput {...form.getInputProps('name')}
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Name"

                        styles={{
                            input: {
                                color: 'black', // prevents red text on error
                                backgroundColor: '#f3f4f6', // same as gray-100
                                border: '1px solid #d1d5db', // gray-300
                                borderRadius: '0.375rem', // rounded-md
                                padding: '0.5rem 1rem',

                                '::placeholder': {
                                    color: '#9ca3af', // Tailwind gray-400
                                    opacity: 1,       // Ensure color shows properly
                                },
                            },
                            error: {
                                color: '#ef4444', // red-500
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            },
                        }}
                        {...form.getInputProps('name')}
                    />
                    <TextInput {...form.getInputProps('email')}
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Email"

                        styles={{
                            input: {
                                color: 'black', // prevents red text on error
                                backgroundColor: '#f3f4f6', // same as gray-100
                                border: '1px solid #d1d5db', // gray-300
                                borderRadius: '0.375rem', // rounded-md
                                padding: '0.5rem 1rem',

                                '::placeholder': {
                                    color: '#9ca3af', // Tailwind gray-400
                                    opacity: 1,       // Ensure color shows properly
                                },
                            },
                            error: {
                                color: '#ef4444', // red-500
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            },
                        }}
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput {...form.getInputProps('password')}
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Password"

                        styles={{
                            input: {
                                color: 'black',
                                backgroundColor: '#f3f4f6',
                                border: '1px solid #d1d5db',
                                borderRadius: '0.375rem',
                                padding: '0.5rem 1rem',
                                '::placeholder': {
                                    color: '#9ca3af', // Tailwind gray-400
                                    opacity: 1,       // Ensure color shows properly
                                },
                            },
                            error: {
                                color: '#ef4444',
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            },
                        }}

                        {...form.getInputProps('password')}
                    />
                    <PasswordInput {...form.getInputProps('confirmPassword')}
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Password"

                        styles={{
                            input: {
                                color: 'black',
                                backgroundColor: '#f3f4f6',
                                border: '1px solid #d1d5db',
                                borderRadius: '0.375rem',
                                padding: '0.5rem 1rem',
                                '::placeholder': {
                                    color: '#9ca3af', // Tailwind gray-400
                                    opacity: 1,       // Ensure color shows properly
                                },
                            },
                            error: {
                                color: '#ef4444',
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            },
                        }}

                        {...form.getInputProps('confirmPassword')}
                    />

                    <button className='bg-primary-400 text-white font-semibold text-lg py-2 rounded-md hover:bg-primary-500 transition-colors duration-300'>Register</button>
                    <div className='text-center text-gray-500 text-sm'> have an account? {' '}   <Link to="/login" className='text-primary-400 cursor-pointer hover:underline'>
                        Login
                    </Link></div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;

