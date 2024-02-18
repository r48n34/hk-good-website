import { AppShell, Burger, Group, ScrollArea, Text, ActionIcon, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet, useNavigate } from "react-router-dom";
import ColorToggleBtn from './helper/ColorToggleBtn';

import { IconChevronRight, IconQuestionMark } from '@tabler/icons-react';

function HeadersComp() {

    const navigate = useNavigate()
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

                <AppShell.Section
                    grow my="md"
                    component={ScrollArea}
                    // type="never"
                    scrollbarSize={2}
                >
                    {
                        ["IT", "Vtube", "Science", "Cooking", "School"].map((v) => (
                            <NavLink
                                key={v}
                                // href="#required-for-focus"
                                label={v}
                                leftSection={
                                    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                                }
                                onClick={ () => navigate(`/category/${v}`)}
                            />
                        )
                    )}
                </AppShell.Section>

                <AppShell.Section>
                    <Group justify="space-between">
                        <ColorToggleBtn />

                        <ActionIcon variant="subtle" aria-label="Settings" radius="lg">
                            <IconQuestionMark style={{ width: '60%', height: '60%' }} stroke={1.5} />
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
