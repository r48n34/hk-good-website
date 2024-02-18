import { Grid } from "@mantine/core";
import { WebsiteData } from "../../interface/interface";
import WebsiteCard from "./WebsiteCard";

type DisplayCardGridProps = {
    data: WebsiteData[];
}

function DisplayCardGrid({ data }: DisplayCardGridProps){
    return (
        <>
        <Grid>
            { [1,1,1,1,1,1,1,1,1,1].map( (v,i) => 
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={i}>
                    <WebsiteCard data={{
                        src: "https://recruit.ono-pharma.com/",
                        imageSrc: "",
                        title: "ono-pharma recruit",
                        organization: "ono pharma",
                        tags: ["aaa", "bbb", "ccc"]
                    }}/>
                </Grid.Col>
            )}

        </Grid>
        </>
    )
}
    
export default DisplayCardGrid
