import { WebsiteData } from "../interface/interface"

export const categoryList = [
    // "Review/Introduction/Commentary",
    // "LIVE/Radio",
    // "Corporation",
    "Business",
    // "Education",
    // "Kids",
    "IT",
    // "Design",
    // "Manufacturing",
    // "Life/Goods",
    // "Personal Site",
    // "Music",
    // "Manga/Anime/Books",
    // "Beauty",
    // "Fashion",
    // "Entertainment",
    // "Movie/TV",
    // "Cooking",
    // "Plants",
    // "Pets",
    // "Culture",
    // "Art",
    // "Sports",
    // "Health",
    // "Medical",
    // "Science",
    // "Travel",
    // "Agriculture",
    // "Car",
    // "Real estate",
    // "Architecture",
    // "Finance/Insurance",
    // "Law",
    // "Marriage",
    // "Celebration",
    // "Funeral",
    // "Nursing care",
    // "Elderly",
] as const
export type Category = typeof categoryList[number]
export const genRandomCategory = () => categoryList[Math.floor( Math.random() * categoryList.length )]

export const dataArrGen: WebsiteData[] = [
    {
        title: `香港創科協會`,
        src: "https://hkita.hk/",
        imageSrc: "",
        organization: "香港創科協會",
        category: ["IT", "Business"],
        tags: ["IT", "Business"]
    },
    {
        title: `Digital Butter's`,
        src: "https://www.butter.com.hk/services/web-design-hong-kong",
        imageSrc: "",
        organization: "Digital Butter's",
        category: ["IT", "Business"],
        tags: ["IT", "Business"]
    },
    {
        title: `betterpi`,
        src: "https://www.betterpi.com/",
        imageSrc: "",
        organization: "betterpi",
        category: ["IT", "Business"],
        tags: ["IT", "Business"]
    },
]



// For testing
// export const dataArrGen: WebsiteData[] = new Array(100).fill(0).map( (_, i) => {
//     const typeArr = Math.random() >= 0.5 ? [genRandomCategory()] : [genRandomCategory(), genRandomCategory()]
//     return {
//         title: `ono-pharma recruit ${i}`,
//         src: "https://recruit.ono-pharma.com/",
//         imageSrc: "",
//         organization: "ono pharma",
//         category: typeArr,
//         tags: typeArr
//     }
// })