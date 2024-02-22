import { Card, Text, Badge, Group, Box } from '@mantine/core';
import { WebsiteData } from "../../interface/interface";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Atropos from 'atropos/react';

type WebsiteCardProps = {
    data: WebsiteData;
}

function WebsiteCard({ data }: WebsiteCardProps) {
    return (
        // <Indicator size={15} processing>
        <Atropos
            shadowScale={0.8}
            duration={200}
        >
        <Card shadow="sm" padding="lg" radius="md" component="a" href={data.src} target='_blank'>
            <Card.Section>
                <Box >
                    <LazyLoadImage
                        style={{ objectFit: "cover" }}
                        alt={data.title}
                        height={250}
                        width="100%"
                        effect="blur"
                        src={`/${data.imageSrc}` || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                    />

                    <Group pos={"fixed"} style={{ right: 10, top: 10, zIndex: 99999 }}>
                    <Badge color="gray" radius="sm" >
                        Website
                    </Badge>
                    </Group>
                </Box>
            </Card.Section>

            <Text fw={300} mt={8} fz={22}>
                {data.title}
            </Text>

            <Group justify="flex-start" mt={8}>
                { data.tags.map( (v, i) => 
                    <Badge color="orange" radius="sm" key={v + i} size="sm">
                        {v}
                    </Badge>
                )}
            </Group>
        </Card>
        </Atropos>
        // </Indicator>
    )
}

export default WebsiteCard
