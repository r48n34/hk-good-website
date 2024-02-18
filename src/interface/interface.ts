import { Category } from "../data/tempData"

export interface WebsiteData {
    src: string
    title: string
    organization: string
    imageSrc: string
    category: Category[]
    tags: string[]
}