import {IconSettings} from "@tabler/icons-react";

export default function SettingsButton() {
    return (
        <>
            <button className="p-2 transition-colors duration-200 rounded-full text-primary-lighter bg-primary-50
            hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark dark:bg-dark
            focus:outline-none focus:bg-primary-100 dark:focus:bg-primary-dark focus:ring-primary-darker">
                <span className="sr-only">Open settings panel</span>
                <IconSettings className={'w-7 h-7'}/>
            </button>
        </>
    )
}