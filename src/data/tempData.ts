import { WebsiteData } from "../interface/interface"

export const categoryList = [
    // "Review/Introduction/Commentary",
    // "LIVE/Radio",
    // "Corporation",
    "Business",
    "Education",
    // "Kids",
    "IT",
    "Marketing",
    "Design",
    "Gambling",
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
    "Culture",
    "Art",
    // "Sports",
    // "Health",
    // "Medical",
    // "Science",
    "Energy",
    // "Travel",
    // "Agriculture",
    // "Car",
    "Real estate",
    // "Architecture",
    "Shops",
    "NPO",
    "Finance",
    "Insurance",
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
        "title": "香港創科協會",
        "src": "https://hkita.hk/",
        "imageSrc": "香港創科協會.jpg",
        "organization": "香港創科協會",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "Digital Butter's",
        "src": "https://www.butter.com.hk/services/web-design-hong-kong",
        "imageSrc": "Digital_Butter's.jpg",
        "organization": "Digital Butter's",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "betterpi",
        "src": "https://www.betterpi.com/",
        "imageSrc": "betterpi.jpg",
        "organization": "betterpi",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "hk-bingo",
        "src": "https://www.hk-bingo.com/",
        "imageSrc": "hk-bingo.jpg",
        "organization": "hk-bingo",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "Page lab",
        "src": "https://hellopagelab.com/",
        "imageSrc": "Page_lab.jpg",
        "organization": "pagelab",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "tectom",
        "src": "https://www.tectom.com.hk/",
        "imageSrc": "tectom.jpg",
        "organization": "tectom",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "mediastudio",
        "src": "https://www.mediastudio.space/zh/service/website-design",
        "imageSrc": "mediastudio.jpg",
        "organization": "mediastudio",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "websiteking",
        "src": "https://www.websiteking.hk/",
        "imageSrc": "websiteking.jpg",
        "organization": "websiteking",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "appicidea",
        "src": "https://appicidea.com/",
        "imageSrc": "appicidea.jpg",
        "organization": "appicidea",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "snapask",
        "src": "https://snapask.com/zh-hk/",
        "imageSrc": "snapask.jpg",
        "organization": "snapask",
        "category": [
            "Education"
        ],
        "tags": [
            "Education"
        ]
    },
    {
        "title": "pcmarket",
        "src": "https://www.pcmarket.com.hk/",
        "imageSrc": "pcmarket.jpg",
        "organization": "pcmarket",
        "category": [
            "IT",
            "Marketing"
        ],
        "tags": [
            "IT",
            "Marketing"
        ]
    },
    {
        "title": "Centanet hk",
        "src": "https://hk.centanet.com/info/index",
        "imageSrc": "Centanet_hk.jpg",
        "organization": "Centanet hk",
        "category": [
            "Real estate"
        ],
        "tags": [
            "Real estate"
        ]
    },
    {
        "title": "tpark",
        "src": "https://www.tpark.hk/en/",
        "imageSrc": "tpark.jpg",
        "organization": "tpark",
        "category": [
            "Energy"
        ],
        "tags": [
            "Energy"
        ]
    },
    {
        "title": "citic",
        "src": "https://www.citic.com/ar2021/en/",
        "imageSrc": "citic.jpg",
        "organization": "citic",
        "category": [
            "Finance"
        ],
        "tags": [
            "Finance"
        ]
    },
    {
        "title": "superview",
        "src": "https://www.superview.com.hk/",
        "imageSrc": "superview.jpg",
        "organization": "superview",
        "category": [
            "Design"
        ],
        "tags": [
            "Design"
        ]
    },
    {
        "title": "HK Art museum",
        "src": "https://hk.art.museum/en/web/ma/home.html",
        "imageSrc": "HK_Art_museum.jpg",
        "organization": "HK Art museum",
        "category": [
            "Art",
            "Culture"
        ],
        "tags": [
            "Art",
            "Culture"
        ]
    },
    {
        "title": "HKJC Smart platform",
        "src": "https://m.hkjc.com/en/index.html",
        "imageSrc": "HKJC_Smart_platform.jpg",
        "organization": "HKJC",
        "category": [
            "Gambling"
        ],
        "tags": [
            "Gambling"
        ]
    },
    {
        "title": "ovaldesign",
        "src": "https://www.ovaldesign.com.hk/",
        "imageSrc": "ovaldesign.jpg",
        "organization": "ovaldesign",
        "category": [
            "Design"
        ],
        "tags": [
            "Design"
        ]
    },
    {
        "title": "morehugsbykenlo",
        "src": "http://www.morehugsbykenlo.com/",
        "imageSrc": "morehugsbykenlo.jpg",
        "organization": "morehugsbykenlo",
        "category": [
            "Design",
            "Shops"
        ],
        "tags": [
            "Design",
            "Shops"
        ]
    },
    {
        "title": "newlife330",
        "src": "https://newlife330.hk/",
        "imageSrc": "newlife330.jpg",
        "organization": "newlife330",
        "category": [
            "NPO"
        ],
        "tags": [
            "NPO"
        ]
    },
    {
        "title": "k2",
        "src": "https://k2.digital/",
        "imageSrc": "k2.jpg",
        "organization": "k2",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "lolli",
        "src": "https://lolli.com.hk/",
        "imageSrc": "lolli.jpg",
        "organization": "lolli",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    },
    {
        "title": "worfu",
        "src": "https://worfu.com.hk/",
        "imageSrc": "worfu.jpg",
        "organization": "worfu",
        "category": [
            "Business"
        ],
        "tags": [
            "Business"
        ]
    },
    {
        "title": "rabbitstudio",
        "src": "https://rabbitstudio.net/",
        "imageSrc": "rabbitstudio.jpg",
        "organization": "rabbitstudio",
        "category": [
            "IT",
            "Business"
        ],
        "tags": [
            "IT",
            "Business"
        ]
    }
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