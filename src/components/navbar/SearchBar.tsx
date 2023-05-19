import {IconSearch} from "@tabler/icons-react";

export default function SearchBar() {
    return (
        <div className="flex items-center md:w-[40%] lg:w-[30%] xl:w-[20%]">
            <div className="relative ltr:mr-2 rtl:mr-0 rtl:ml-2 hidden lg:mr-4 md:block lg:block w-full">
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center
            pl-3">
                    <IconSearch className={'z-10'}/>
                </div>
                <input
                    type="text"
                    id="email-adress-icon"
                    className="block w-full rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-200/10 p-2
            pl-10 text-slate-600 dark:text-slate-400 outline-none focus:border-slate-300
            focus:ring-slate-300 dark:bg-slate-800/20 sm:text-sm"
                    placeholder="Search..."
                />
            </div>
        </div>
    )
}