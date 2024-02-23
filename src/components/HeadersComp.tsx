import { AppShell, Burger, Group, ScrollArea, Text, NavLink, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';


import { Outlet, useNavigate } from "react-router-dom";
import ColorToggleBtn from './helper/ColorToggleBtn';

import { IconAppWindow, IconChevronRight } from '@tabler/icons-react';
import QuestionModal from './general/QuestionModal';
import { categoryList } from '../data/tempData';
import SpotLightSearch from './SpotLightSearch';
import HistoryLookUp from './general/HistoryLookUp';

function HeadersComp() {

    const navigate = useNavigate()
    const [opened, { toggle, close }] = useDisclosure();

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
                <Group h="100%" px="md" justify="space-between">

                    <UnstyledButton onClick={() => navigate(`/`)}>
                        <Group>
                            <IconAppWindow size={24}/> 
                            <Text fw={300} fz={20} ml={-10}>
                                HK good website
                            </Text>
                        </Group>
                    </UnstyledButton>

                    <Group visibleFrom="sm">
                        <HistoryLookUp />
                        <SpotLightSearch />
                    </Group>

                    <Group hiddenFrom="sm">
                        <HistoryLookUp />
                        <Burger opened={opened} onClick={toggle} size="sm" />
                    </Group>

                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
            <motion.div
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 600, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >

                <AppShell.Section>
                    <SpotLightSearch mb={16} hiddenFrom="sm"/>
                    <Text fz={14} fw={300}>
                        CATEGORY
                    </Text>
                </AppShell.Section>

                <AppShell.Section
                    grow my="md"
                    component={ScrollArea}
                    scrollbarSize={2}
                >
                    {
                        categoryList.map((v) => (
                            <NavLink
                                key={v}
                                label={v}
                                leftSection={
                                    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                                }
                                onClick={() => {
                                    navigate(`/category/${v}`);
                                    close()
                                }}
                            />
                        )
                        )}
                </AppShell.Section>

                <AppShell.Section>
                    <Group justify="space-between">
                        <ColorToggleBtn />
                        <QuestionModal />
                    </Group>
                </AppShell.Section>
            </motion.div>                    
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

        </AppShell>
    );
}

export default HeadersComp
