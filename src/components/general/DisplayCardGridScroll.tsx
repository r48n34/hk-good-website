import { useEffect, useState } from "react";
import { useWindowScroll } from '@mantine/hooks';
import { Grid, Group, Loader, Space, Box } from "@mantine/core";
import { WebsiteData } from "../../interface/interface";
import InfiniteScroll from 'react-infinite-scroller';
import WebsiteCard from "./WebsiteCard";

type DisplayCardGridProps = {
    data: WebsiteData[];
}

const EACH_PAGE_SHOWS = 12

function DisplayCardGridScroll({ data }: DisplayCardGridProps) {

    const [_, scrollTo] = useWindowScroll();
    const [activePage, setPage] = useState(1);
    const [displayData, setDisplayData] = useState<WebsiteData[]>(data.slice(0, EACH_PAGE_SHOWS));

    function fetchMore() {
        const newPage = activePage + 1;
        setDisplayData(data.slice(0, (newPage - 1) * EACH_PAGE_SHOWS + EACH_PAGE_SHOWS))
        setPage(newPage)
    }

    // Reset
    useEffect( () => {
        scrollTo({ y: 0 });
        setDisplayData(data.slice(0, EACH_PAGE_SHOWS))
        setPage(1);
    },[data])

    return (
        <Box>
            <InfiniteScroll
                pageStart={1}
                loadMore={() => fetchMore()}
                threshold={150} // Default 250
                hasMore={(activePage - 1) * EACH_PAGE_SHOWS + EACH_PAGE_SHOWS <= data.length}
                loader={
                    <Group justify="center" mt={12} mb={12}>
                        <Loader color="blue" type="bars" size="sm" />
                    </Group>
                }
            >
                <Grid gutter="xl">
                    {displayData.map((v) => (
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={v.title}>
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
