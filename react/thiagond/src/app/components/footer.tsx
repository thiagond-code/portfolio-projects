import Link from "next/link"
import { renderBrand, links } from "./utils/navigation"

const year = new Date().getFullYear()

export const renderFooterLinks = links.map((navLink, id) => {
    return (
        <li key={id} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100'>
            <Link href={navLink.link}>{navLink.label}</Link>
        </li>
    )
})

export default function Footer() {
    return (
        <footer className='grid space-y-6'>
            <section>
                {renderBrand}
            </section>
            <section className='pb-4'>
                <h1 className='font-medium pb-4'>Navigation</h1>
                <ul className='space-y-2'>
                    {renderFooterLinks}
                </ul>
            </section>
            <section className='text-center text-sm'>
                <p>Thiago Nogueira<sup>&reg;</sup> {year}.</p>
            </section>
        </footer>
    )
}