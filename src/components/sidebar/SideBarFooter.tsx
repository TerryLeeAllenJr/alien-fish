import {IconLoader, IconSettings} from "@tabler/icons-react";
export default function SideBarFooter() {
    return (
        <>

            <div className="flex px-2 py-4 align-middle border-t-2">
                <div>
                    <IconLoader className={'w-4 h-4 animate-spin'}/>
                </div>

                <span className={'pl-1 text-xs text-gray-400'}>
                    Connection messages coming soon...
                </span>

            </div>
        </>
    )
}