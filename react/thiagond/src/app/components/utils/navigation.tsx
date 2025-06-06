import Image from "next/image";
import Link from "next/link";
import { LinkConfig as NavItem } from "../../types";
import { Logo } from "../../types/navigation";

export const links: NavItem[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'About',
        link: '/about'
    },
    {
        label: 'Projects',
        link: '/projects'
    },
    {
        label: 'Contact',
        link: '/contact'
    }
]

export const brandConfig: Logo = {
    text: 'thiagond',
    link: '/',
    type: 'text'
} as Logo;

export const renderBrand = brandConfig.type === 'image'
    ? <Image src={brandConfig.url} alt='' />
    : (
        <h1>
            <Link href={brandConfig.link} className='font-bold text-lg'>{brandConfig.text}</Link>
        </h1>
    )

export const renderLinks = links.map((navLink, id) => {
    return (
        <li key={id} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100'>
            <Link href={navLink.link}>{navLink.label}</Link>
        </li>
    )
})