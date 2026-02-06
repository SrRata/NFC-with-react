import Link from "next/link";

interface SidebarProps {
  children: React.ReactNode;
}

export function Sidebar({children}:SidebarProps) {
    return (
        <aside className="h-screen w-width-sidebar bg-white-primary p-5  flex flex-col items-center justify-between gap-2.5 fixed top-0 left-0">
            {children}
        </aside>
    )
}

interface SidebarNavProps {
  children: React.ReactNode;
}


export function SidebarNav({children}:SidebarNavProps) {
    return (
        <ul className="flex flex-col gap-2 size-full">
            {children}
        </ul>
    )
}

interface SidebarLinkProps {
  children: React.ReactNode;
  href: string;
}

export function SidebarLink({children, href}:SidebarLinkProps) {
    return (
        <li className="text-black-primary font-medium rounded-lg px-3 py-4 flex items-center gap-2.5 pointer hover:bg-blue-secondary">
            <Link href={{href}}>
                {children}
            </Link>
        </li>
    )
}

interface SidebarLogoutProps {
  children: React.ReactNode;
}


export function SidebarLogout({children}:SidebarLogoutProps) {
    
}
