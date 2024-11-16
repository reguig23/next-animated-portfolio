"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link})=>{
    const pathName = usePathname()

    console.log(pathName)

    return(
        <Link className={ `rounded p-1 font-raleway ${pathName===link.url && "bg-primary  text-white "}`} href={link.url}>{link.title}</Link>
    )
}

export default NavLink