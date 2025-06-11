import { Notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

const successNotifications = (message: string) => {
    Notifications.show({
        title: 'Success',
        message: message,
        color: 'green',
        icon: <IconCheck />,
        withCloseButton: true,
        autoClose: 3000,
        withBorder: true,
        radius: 'md',
        classNames: {
            root: 'bg-green-50 border-green-200 text-green-800',
            title: 'text-lg font-semibold',
        }
    });
};
const errorNotifications = (message: string) => {
    Notifications.show({
        title: 'Error',
        message: message,
        color: 'red',
        icon: <IconX />,
        withCloseButton: true,
        // autoClose: 3000,
        withBorder: true,
        radius: 'md',
        classNames: {
            root: 'bg-red-50 border-red-200 text-red-800',
            title: 'text-lg font-semibold',
        }
    });
};
export { successNotifications, errorNotifications };