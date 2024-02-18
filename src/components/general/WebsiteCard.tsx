import { Card, Image, Text, Badge, Group } from '@mantine/core';
import { WebsiteData } from "../../interface/interface";

type WebsiteCardProps = {
    data: WebsiteData;
}

function WebsiteCard({ data }: WebsiteCardProps) {
    return (
        <Card padding="lg" radius="md" component="a" href={data.src} target='_blank'>
            <Card.Section >
                <Image
                    src={data.imageSrc || "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"}
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Text fw={300} mt={8} fz={22}>
                {data.title}
            </Text>

            <Group justify="flex-start" mt={8}>
                { data.tags.map( v => 
                    <Badge color="orange" radius="sm" key={v} size="sm">
                        {v}
                    </Badge>
                )}
            </Group>

        </Card>
    )
}

export default WebsiteCard
