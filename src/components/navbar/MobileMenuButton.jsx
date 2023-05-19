import {IconMenu} from "@tabler/icons-react";
export default function MobileMenuButton() {
    return (
        <>
            <button className="p-1 transition-colors duration-200 rounded-md text-primary-lighter
                bg-primary-50 hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark
                dark:bg-dark md:hidden focus:outline-none focus:ring">
                <span className="sr-only">Open main manu</span>
                <span aria-hidden="true">
                    <IconMenu className={'w-8 h-8'} />
                </span>
            </button>
        </>
    )
}