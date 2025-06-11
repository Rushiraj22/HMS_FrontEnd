import { ActionIcon, Button } from '@mantine/core'
import { IconBell, IconBellRinging, IconLayoutSidebarLeftCollapse, IconSearch } from '@tabler/icons-react'
import React from 'react'
import ProfileMenu from './ProfileMenu'
import { Link } from 'react-router-dom'
import { log } from 'console'

export const Header = () => {
    return (
        <div className='bg-light shadow-lg w-full h-16 flex justify-between items-center px-5'>
            <ActionIcon variant="transparent" size="lg" aria-label="Settings">
                <IconLayoutSidebarLeftCollapse style={{ width: '90%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            <div className='flex gap-5 items-center'>
                <Link to='login'> <Button > Login </Button> </Link>
                <ActionIcon variant="transparent" size="xl" aria-label="Search">
                    <IconSearch style={{ width: '90%', height: '70%' }} stroke={1.5} />
                </ActionIcon>
                <ActionIcon variant="transparent" size="xl" aria-label="Settings">
                    <IconBellRinging style={{ width: '90%', height: '70%' }} stroke={2} />
                </ActionIcon>
                <ProfileMenu />
            </div>

        </div>
    )
}
