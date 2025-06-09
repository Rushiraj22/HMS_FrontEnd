import { Avatar, Text } from '@mantine/core'
import { IconCalendarCheck, IconHeartbeat, IconLayoutGrid, IconMoodHeart, icons, IconStethoscope, IconVaccine } from '@tabler/icons-react'
import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
    {
        name: 'Dashboard', url: '/dashboard', icons: <IconLayoutGrid size={20} stroke={1.5} />

    },
    {
        name: 'Doctors', url: '/doctors', icons: <IconStethoscope size={20} stroke={1.5} />
    },
    {
        name: 'Patients', url: '/patients', icons: <IconMoodHeart size={20} stroke={1.5} />
    },
    {
        name: 'Appointments', url: '/appointments', icons: <IconCalendarCheck size={20} stroke={1.5} />
    },
    {
        name: 'Pharmacy', url: '/pharmacy', icons: <IconVaccine size={20} stroke={1.5} />
    }
]
export const Sidebar = () => {
    return (
        <div className='bg-dark fixed w-64 h-screen overflow-y-auto hide-scrollbar flex flex-col gap-7 items-center '>
            <div className='fixed z-[500] py-3 bg-dark text-primary-400 flex gap-1 items-center'>
                <IconHeartbeat size={40} stroke={2.5} />
                <span className='font-heading text-3xl font-semibold '>Pulse</span>
            </div>
            <div className='flex flex-col mt-20 gap-2 items-center'>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='p-1 bg-white rounded-full shadow-lg'>
                        <Avatar variant='filled' src="avatar.png" size="xl" alt="it's me" />
                    </div>
                    <span className='font-medium text-light text-lg'> Rushiraj</span>
                    <Text size='xs' c="dimmed" className='text-light' >Admin</Text>
                </div>
                <div className='flex flex-col gap-1'>
                    {links.map((link) => {
                        return <NavLink to={link.url} key={link.name} className={({ isActive }) => `flex items-center gap-3 w-full font-medium text-light px-4 py-5 rounded-lg ${isActive ? 'bg-primary-400 text-dark' : 'hover:bg-gray-100 hover:text-dark text-light'}`}>
                            {link.icons}
                            <span>{link.name}</span>
                        </NavLink>
                    })}
                </div>
            </div>
        </div>
    );
};
