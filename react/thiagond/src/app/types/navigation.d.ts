import { ImageConfig as Brand } from "./index"

interface BrandWIT extends Omit<Brand, 'captions'> {
    type: 'both'
    text: string,
    link: RouteName,
}

interface BrandWithImage extends Omit<Brand, 'captions'> {
    type: 'image'
}

interface BrandWithText extends Omit<BrandWIT, 'url'> {
    type: 'text'
}

export type Logo = BrandWIT | BrandWithImage | BrandWithText