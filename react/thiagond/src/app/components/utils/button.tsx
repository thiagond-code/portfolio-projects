import Link from "next/link";
import { PropsWithChildren } from "react";
import { ButtonConfig } from "../../types/index";

const baseStyles = 'px-4 py-3 block text-center font-medium text-white rounded-md transition duration-600 delay-100 ease-in-out hover:scale-102'

export default function ButtonLink({ link, type, children }: PropsWithChildren<ButtonConfig>) {
    switch (type) {
        case 'cta':
            return <Link href={link} className={`${baseStyles} bg-sky-400 hover:bg-sky-600`}>{children}</Link>
        case 'sec':
            return <Link href={link} className={`${baseStyles} bg-gray-400 hover:bg-gray-600`}>{children}</Link>
        default:
            return <Link href={link} className={`${baseStyles} bg-purple-500 hover:bg-purple-600`}>{children}</Link>
    }
}