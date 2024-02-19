import { Card, Text, Badge, Group } from '@mantine/core';
import { WebsiteData } from "../../interface/interface";
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { motion } from 'framer-motion';

import Atropos from 'atropos/react';

type WebsiteCardProps = {
    data: WebsiteData;
}

function WebsiteCard({ data }: WebsiteCardProps) {
    return (
        // <motion.div
        //     whileHover={{ 
        //         scale: 0.95,
        //         transition: { duration: 0.4 },
        //     }}
        //     whileTap={{ scale: 0.9 }}
        // >
        <Atropos
            shadowScale={0.8}
            duration={200}
        >
        <Card shadow="sm" padding="lg" radius="md" component="a" href={data.src} target='_blank'>
            <Card.Section >
                {/* <Image
                    src={data.imageSrc || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                    height={160}
                    alt="Norway"
                /> */}
                <LazyLoadImage
                    style={{ objectFit: "cover" }}
                    alt={data.title}
                    height={250}
                    width="100%"
                    src={`/${data.imageSrc}` || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                    effect="blur"
                    wrapperProps={{
                        style: {transitionDelay: "1s"},
                    }}
                />
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
        // </motion.div>
    )
}

export default WebsiteCard
