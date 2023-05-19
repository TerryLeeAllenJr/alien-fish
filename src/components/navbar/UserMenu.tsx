import Link from "next/link";

export default function UserMenu() {
    const linkClassName = 'block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 ' +
        'dark:text-light dark:hover:bg-primary'
    return (
        <>
            <div className="absolute right-0 w-48 py-1 bg-white rounded-md shadow-lg top-12 ring-1 ring-black ring-opacity-5
        dark:bg-dark focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-label="User menu">
                <Link href={'/profile'} className={linkClassName}>Your Account</Link>
                <Link href={'/settings'} className={linkClassName}>Settings</Link>
                <Link href={'/logout'} className={linkClassName}>Logout</Link>
            </div>
        </>
    )
}