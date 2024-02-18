import { Pagination, Grid } from "@mantine/core";
import { useWindowScroll } from '@mantine/hooks';
import { WebsiteData } from "../../interface/interface";
import WebsiteCard from "./WebsiteCard";
import { useState } from "react";

type DisplayCardGridProps = {
    data: WebsiteData[];
}

function DisplayCardGrid({ data }: DisplayCardGridProps){

    const [_, scrollTo] = useWindowScroll();
    
    const [activePage, setPage] = useState(1);
    const EACH_PAGE_SHOWS = 24

    const START = (activePage - 1) *  EACH_PAGE_SHOWS
    const END = START + EACH_PAGE_SHOWS

    const items = data.slice( (activePage - 1) *  EACH_PAGE_SHOWS , END).map( (v) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={v.title}>
            <WebsiteCard data={v}/>
        </Grid.Col>
    ));

    return (
        <>
        <Grid>
            { items }
        </Grid>

        <Pagination
            mt={48}
            mb={24}
            total={Math.ceil(data.length / EACH_PAGE_SHOWS)}
            value={activePage}
            onChange={(ind) => {
                setPage(ind);
                scrollTo({ y: 0 });
            }}
        />
        </>
    )
}
    
export default DisplayCardGrid
