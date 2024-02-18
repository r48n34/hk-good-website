export const categoryList = ["IT", "Vtube", "Science", "Cooking", "School"] as const
export type Category = typeof categoryList[number]

export const genRandomCategory = () => categoryList[Math.floor( Math.random() * categoryList.length )]

export interface WebsiteData {
    src: string
    title: string
    organization: string
    imageSrc: string
    category: Category[]
    tags: string[]
}