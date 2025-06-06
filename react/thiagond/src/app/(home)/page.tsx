import type { Metadata } from "next"
import Button from "../components/utils/button"
import { primaryFont, secondaryFont } from "../fonts"
import { ButtonConfig as ButtonInterface } from "../types/index"

interface ButtonConfig extends ButtonInterface {
  label: string
}

export const metadata: Metadata = {
  title: 'Home'
}

const buttons: ButtonConfig[] = [
  {
    label: 'View my projects',
    link: '/projects',
    type: 'cta'
  },
  {
    label: 'Contact me',
    link: '/contact',
    type: 'sec'
  },
]

const renderButtons = buttons.map((button, id) => {
  return (
    <li key={id}>
      <Button link={button.link} type={button.type}>{button.label}</Button>
    </li>
  )
})

const Hero = () => {
  return (
    <section className='flex flex-col gap-4 text-md pb-4'>
      <div className='flex flex-col gap-4 pb-4'>
        <h2 className={`${primaryFont.className} text-xl font-medium`}>Hey, I&apos;m</h2>
        <h1 className={`${secondaryFont.className} text-4xl font-bold`}>Thiago Nogueira</h1>
        <p className={`${primaryFont.className}`}>CS Undergrad & Software Engineer Aspirant</p>
      </div>
      <div>
        <ul className='flex flex-col gap-2'>
          {renderButtons}
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}