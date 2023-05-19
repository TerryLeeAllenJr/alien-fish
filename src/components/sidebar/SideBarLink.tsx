'use client'
import {useState,PropsWithChildren} from "react";
import clsx from "clsx";
import {IconArrowDown} from "@tabler/icons-react";
import SideBarDropdown from "@/components/sidebar/SideBarDropdown";

type SideBarLinkProps = {
    href: string | false,
    title: string,
    icon: React.ReactElement | null,
};


export default function SideBarLink(props: PropsWithChildren<SideBarLinkProps>) {

    const [open,setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        console.info(e);
        setOpen(!open);
        if(!props.href)
            e.preventDefault();
    };

    return (
        <div className={'border-b-2 last:border-0'}>
            {/* active & hover classes 'bg-primary-100 dark:bg-primary' */}

            <a href={props.href || '/'} onClick={ (e) => handleClick(e) }
               className="flex items-center p-2 text-gray-500 transition-colors rounded-md
                dark:text-light hover:bg-primary-100 dark:hover:bg-primary" role="button" aria-haspopup="true"
               aria-expanded={open ? 'true' : 'false'}>
                <span aria-hidden="true">{props.icon}</span>
                <span className="ml-2 text-sm"> {props.title}</span>
                <span className={`${props.href && "hidden"} ml-auto`} aria-hidden="true">
                    <IconArrowDown className={`${open && "animate-wiggle"} w-4 h-4`}/>
                </span>
            </a>
            <SideBarDropdown label={props.title} open={open}>
                {props.children}
            </SideBarDropdown>
        </div>
    )
}