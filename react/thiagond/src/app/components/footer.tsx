import { JSX } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { renderBrand, links } from "./utils/navigation"
import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const renderFooterLinks = links.map((footerLink) => {
    return (
        <li key={footerLink.label} className='px-4 text-gray-700 hover:text-blue-500 transition-colors duration-600 ease-in-out delay-100'>
            <Link href={footerLink.link}>{footerLink.label}</Link>
        </li>
    )
})

interface SocialMedia {
    icon: JSX.Element
    link: string
}

const iconStyle = 'size-12'

const socialMediaObj: SocialMedia[] = [
    {
        icon: <FontAwesomeIcon icon={faLinkedin} className={`${iconStyle}`} />,
        link: 'https://linkedin.com/in/thiagond'
    },
    {
        icon: <FontAwesomeIcon icon={faGithub} className={`${iconStyle}`} />,
        link: 'https://github.com/thiagond-code'
    }
]

const renderSocialMedia = socialMediaObj.map((socialMedia) => {
    return (
        <li key={socialMedia.link}>
            <a href={socialMedia.link} target="_blank" rel="noopener noreferrer">{socialMedia.icon}</a>
        </li>
    )
})

const year = new Date().getFullYear()

export default function Footer() {
    return (
        <footer className='flex flex-col gap-4'>
            <section className='flex flex-col gap-8'>
                <div className='flex flex-col gap-4'>
                    {renderBrand}
                    <div className='flex flex-col gap-4'>
                        <span className='flex items-center gap-2'>
                            <FontAwesomeIcon icon={faEnvelope} className='size-6' />
                            <p className='hover:text-blue-400 transition delay-100 duration-600'>
                                <a href='mailto:thiagond360@gmail.com' className='flex items-center gap-2'>
                                    thiagond360@gmail.com
                                    <FontAwesomeIcon icon={faArrowRight} className='size-4' />
                                </a>
                            </p>
                        </span>
                        <span className='flex items-center gap-2 pb-4'>
                            <FontAwesomeIcon icon={faMap} className='size-6' />
                            <p>
                                Governador Valadares, MG (BR)
                            </p>
                        </span>
                        <span className='flex flex-col gap-4'>
                            <h1 className='font-medium'>Languages</h1>
                            <p>🇧🇷 BR | 🇺🇸 US | 🇪🇸 ES</p>
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col pb-4'>
                        <h1 className='font-medium pb-4 hidden sm:block'>Navigation</h1>
                        <ul className='flex sm:block justify-center'>
                            {renderFooterLinks}
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col justify-center text-center text-xs gap-4 text-neutral-500'>
                    <ul className='flex justify-center gap-8'>
                        {renderSocialMedia}
                    </ul>
                    <p className='text-sm'> &copy; {year} Thiago Nogueira. All rights reserved.</p>
                    <p>Built with Next.js + TypeScript</p>
                </div>
            </section>
        </footer>
    )
}