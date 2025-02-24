"use client"
import Link from "next/link"
import { IconType } from "react-icons"
import { twMerge } from 'tailwind-merge';

interface SidebarItemProps {
    icon: IconType,
    label: string,
    active?: boolean,
    href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon ,
    label,
    active,
    href
}) => {
    return (
        <Link href={href} className={twMerge(`
            flex flex-row h-auto items-center w-full cursor-pointer font-medium gap-x-4 text-lg hover:text-white transition text-neutral-400 py-1
        `, active && 'text-white')} >
           <Icon size={28}/>
           <p className="truncate w-full">{label}</p>
        </Link>
    )
}

export default SidebarItem