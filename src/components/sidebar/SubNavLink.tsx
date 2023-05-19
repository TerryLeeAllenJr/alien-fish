import {PropsWithChildren} from "react";
import Link from 'next/link';

type SubNavLinkProps = {
    href: string,
    active: boolean,
    preload?: boolean | null
};
export default function SubNavLink (props: PropsWithChildren<SubNavLinkProps>) {
    return (
        <>
            {/* active & hover classes 'text-gray-700 dark:text-light' */}
            {/* inActive classes 'text-gray-400 dark:text-gray-400' */}
            <Link href={props.href} role={'menuitem'} prefetch={false}
                className={'block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 ' +
                    'dark:hover:text-light hover:text-gray-700'}>
                {props.children}
            </Link>
        </>
    )
}