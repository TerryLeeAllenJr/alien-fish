import {PropsWithChildren} from "react";
import clsx from "clsx";

type SideBarDropdownProps = {
    label: string,
    open: boolean
};
export default function SideBarDropdown( props: PropsWithChildren<SideBarDropdownProps> ) {
    return (
        <div role="menu" className={clsx("mt-2 space-y-2 px-7",{"hidden":!props.open})} aria-label={props.label}>
            {props.children}
        </div>
    )
}