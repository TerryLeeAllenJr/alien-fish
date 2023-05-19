import MobileMenuButton from "./MobileMenuButton";
import Link from "next/link";
import {IconDotsVertical} from "@tabler/icons-react";
import NotificationButton from "./NotificationButton";
import SettingsButton from "./SettingsButton";
import UserAvatarButton from "./UserAvatarButton";
import UserMenu from "./UserMenu";
import SearchBar from "@/components/navbar/SearchBar";

export default function NavBar() {
    return (
        <>
            <header className="relative flex-shrink-0 bg-white dark:bg-darker">
                <div className="flex items-center justify-between p-2 border-b dark:border-primary-darker">

                    <MobileMenuButton/>
                    <SearchBar/>
                    {/* Mobile sub menu button */}
                    <button className="p-1 transition-colors duration-200 rounded-md text-primary-lighter bg-primary-50
                        hover:text-primary hover:bg-primary-100 dark:hover:text-light dark:hover:bg-primary-dark
                        dark:bg-dark md:hidden focus:outline-none focus:ring">
                        <span className="sr-only">Open sub manu</span>
                        <span aria-hidden="true"><IconDotsVertical className={'w-8 h-8'} /></span>
                    </button>

                    {/* Desktop Right buttons */}
                    <nav aria-label="Secondary" className="hidden space-x-2 md:flex md:items-center">
                        <NotificationButton/>
                        <SettingsButton/>
                        <UserAvatarButton/>
                        <UserMenu/>
                    </nav>
                </div>
                {/* TODO: Mobile Menu */}
            </header>
        </>
    )
}