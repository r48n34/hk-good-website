import { AppShell, Burger, Group, ScrollArea, Skeleton, Text, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from "react-router-dom";
import ColorToggleBtn from './helper/ColorToggleBtn';

import { IconAdjustments } from '@tabler/icons-react';

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
                    <Text fw={300} fz={20}>
                        HK good website
                    </Text>
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
                    <Group justify="space-between">
                        <ColorToggleBtn />

                        <ActionIcon variant="subtle" aria-label="Settings" radius="lg">
                            <IconAdjustments style={{ width: '60%', height: '60%' }} stroke={1.5} />
                        </ActionIcon>

                    </Group>
                </AppShell.Section>

            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

        </AppShell>
    );
}

export default HeadersComp
