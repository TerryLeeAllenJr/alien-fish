import Image from "next/image";

export default function UserAvatarButton() {
    const open = false; // TODO: Wire this up.
    return (
        <>
            <div className="relative" x-data="{ open: false }">
                <button type="button" aria-haspopup="true" aria-expanded={open} className="transition-opacity
                duration-200 rounded-full dark:opacity-75
                dark:hover:opacity-100 focus:outline-none focus:ring dark:focus:opacity-100">
                    <span className="sr-only">User menu</span>
                    <Image src={'/images/users/lee.jpeg'}
                           alt={'Lee Allen'}
                           className={'w-10 h-10 rounded-full'}
                           width={280}
                           height={280}
                    />
                </button>
            </div>
        </>
    )
}