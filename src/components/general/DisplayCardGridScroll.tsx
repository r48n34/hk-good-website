import { Text, Grid, Group, Loader, Space, Box } from "@mantine/core";

import { WebsiteData } from "../../interface/interface";
import WebsiteCard from "./WebsiteCard";
import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

import InfiniteScroll from 'react-infinite-scroller';

type DisplayCardGridProps = {
    data: WebsiteData[];
}

const EACH_PAGE_SHOWS = 24

function DisplayCardGridScroll({ data }: DisplayCardGridProps) {

    const [activePage, setPage] = useState(1);
    const [displayData, setDisplayData] = useState<WebsiteData[]>(data.slice(0, 24));

    function fetchMore() {
        const newPage = activePage + 1;
        setDisplayData(data.slice(0, (newPage - 1) * EACH_PAGE_SHOWS + EACH_PAGE_SHOWS))
        setPage(newPage)
    }

    return (
        <Box>

            <InfiniteScroll
                pageStart={0}
                loadMore={() => fetchMore()}
                hasMore={(activePage - 1) * EACH_PAGE_SHOWS + EACH_PAGE_SHOWS <= data.length}
                loader={
                    <Group justify="center" mt={12} mb={12}>
                        <Loader color="blue" type="bars" size="sm" />
                    </Group>
                }
            >
                <Grid>
                    {displayData.map((v) => (
                        <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={v.title}>
                            <WebsiteCard data={v} />
                        </Grid.Col>
                    ))}

                </Grid>
            </InfiniteScroll>

            <Space h="lg" />
        </Box>
    )
}

export default DisplayCardGridScroll
