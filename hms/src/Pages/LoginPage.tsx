import { PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconHeartbeat } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const form = useForm({

        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value: any) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value: any) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
        },
    });
    function handleSubmit(values: { email: string; password: string; }) {
        // Here you would typically send a request to your backend API for authentication
        // For demonstration, we'll just log the values
        console.log('Login submitted:', values);
        // You can add navigation or error handling here as needed
    }

    return (
        <div style={{ background: 'url("/bg.jpg.jpg")' }} className='h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex flex-col items-center justify-center' >
            <div className=' py-3 text-primary-500  text-primary-400 flex gap-1 items-center '>
                <IconHeartbeat size={45} stroke={3} />
                <span className='font-heading text-4xl font-semibold '>Pulse</span>
            </div>
            <div className='w-[450px] backdrop-blur-md p-10 py-8 rounded-lg'>
                <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5 '>
                    <div className='text-xl font-bold self-center'>Login </div>
                    <TextInput
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
                            },
                            error: {
                                color: '#ef4444', // red-500
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            },
                        }}
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
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
                            },
                            error: {
                                color: '#ef4444',
                                fontSize: '0.875rem',
                                marginTop: '0.25rem',
                            },
                        }}

                        {...form.getInputProps('password')}
                    />
                    <button className='bg-primary-400 text-white font-semibold text-lg py-2 rounded-md hover:bg-primary-500 transition-colors duration-300'>Login</button>
                    <div className='text-center text-gray-500 text-sm'>Don't have an account? {' '}   <Link to="/register" className='text-primary-400 cursor-pointer hover:underline'>
                        Sign Up
                    </Link></div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
