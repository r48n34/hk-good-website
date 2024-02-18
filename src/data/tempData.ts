import { WebsiteData, genRandomCategory } from "../interface/interface"

// export const tempData: WebsiteData[] = [
//     {}
// ]

// For testing
export const dataArrGen: WebsiteData[] = new Array(100).fill(0).map( (_, i) => {

    const typeArr = Math.random() >= 0.5 ? [genRandomCategory()] : [genRandomCategory(), genRandomCategory()]
    
    return {
        title: `ono-pharma recruit ${i}`,
        src: "https://recruit.ono-pharma.com/",
        imageSrc: "",
        organization: "ono pharma",
        category: typeArr,
        tags: typeArr
    }
})