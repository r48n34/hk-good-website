import { AppShell, Burger, Group, ScrollArea, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from "react-router-dom";

function HeadersComp() {

    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ 
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened }
            }}
            padding="md"
        >

            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Text>HK good website</Text>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">

                <AppShell.Section>
                    <Text fz={14} fw={300}>
                        CATEGORY
                    </Text>
                </AppShell.Section>

                <AppShell.Section grow my="md" component={ScrollArea}>
                    {Array(60)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
                </AppShell.Section>

                <AppShell.Section>
                    <Text fz={10}>
                        Navbar footer – always at the bottom
                    </Text>
                </AppShell.Section>

            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

        </AppShell>
    );
}

export default HeadersComp
