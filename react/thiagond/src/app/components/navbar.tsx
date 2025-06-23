import Link from 'next/link';
import { renderBrand, links } from './utils/navigation';

export const renderNavLinks = links.map((navLink) => {
    return (
        <li key={navLink.label} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100 font-medium'>
            <Link href={navLink.link}>{navLink.label}</Link>
        </li>
    )
})

export default function Navbar() {
    return (
        <header>
            <nav className='flex justify-between items-center'>
                {renderBrand}
                <ul className='hidden md:flex'>
                    {renderNavLinks}
                </ul>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer size-8 md:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </nav>
        </header>
    )
}