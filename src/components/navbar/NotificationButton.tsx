import {IconBell} from "@tabler/icons-react";

export default function NotificationButton() {
    return (
        <>
            <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50
                hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark
                focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                <span className="sr-only">Open Notification panel</span>
               <IconBell className={'w-7 h-7'}/>
            </button>
        </>
    )
}