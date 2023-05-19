import {IconChartArrows, IconAddressBook, IconApps, IconArticle, IconTopologyRing2} from "@tabler/icons-react";
import SubNavLink from "@/components/sidebar/SubNavLink";
import SideBarFooter from "@/components/sidebar/SideBarFooter";
import SideBarLink from "@/components/sidebar/SideBarLink";
import Logo from "@/components/Logo";
export default function Sidebar() {
    const open = false;
    const isActive = false;
    return (
        <>
        {/* Sidebar */}
        <aside className="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block
            shadow-sm">
            <div className="flex flex-col h-full">
                <header>
                    <div className={'w-full m-0 p-2 bg-primary-light'}>
                        <Logo className={'w-12 h-12'}/>
                    </div>

                </header>
                {/* Sidebar links */}
                <nav aria-label="Main" className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">

                    <SideBarLink href={false} title={"Dashboards"} icon={<IconChartArrows className={'w-4 h-4'}/>}>
                        <SubNavLink href={'/admin/dashboards/servers'} active={false}>Servers</SubNavLink>
                        <SubNavLink href={'/admin/dashboards/jobs'} active={false}>Jobs</SubNavLink>
                        <SubNavLink href={'/admin/dashboards/users'} active={false}>Users</SubNavLink>
                        <SubNavLink href={'/admin/dashboards/posts'} active={false}>Posts</SubNavLink>
                        <SubNavLink href={'/admin/dashboards/repos'} active={false}>Repositories</SubNavLink>
                    </SideBarLink>

                    <SideBarLink href={false} title={'Contacts'} icon={<IconAddressBook className={'w-4 h-4'}/>}>
                        <SubNavLink href={'/admin/contacts/clients'} active={false}>Clients</SubNavLink>
                        <SubNavLink href={'/admin/contacts/contributors'} active={false}>Contributors</SubNavLink>
                        <SubNavLink href={'/admin/contacts/employees'} active={false}>Employees</SubNavLink>
                    </SideBarLink>

                    <SideBarLink href={'/admin/jobs'} title={'Jobs'} icon={<IconApps className={'w-4 h-4'}/>}/>

                    <SideBarLink href={false} title={'Posts'} icon={<IconArticle className={'w-4 h-4'}/>}>
                        <SubNavLink href={'/admin/posts/create'} active={false}>Create</SubNavLink>
                        <SubNavLink href={'/admin/posts/moderate'} active={false}>Moderate</SubNavLink>
                    </SideBarLink>

                    <SideBarLink href={'/admin/spec-ops'} title={'Spec Ops'} icon={<IconTopologyRing2 className={'w-4 h-4'}/>}/>

                </nav>
                <SideBarFooter/>
            </div>
            </aside>
        </>
    );
}