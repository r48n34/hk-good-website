import { useState } from 'react';
import { ActionIcon, Button, Popover, Text, Tooltip } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useHistoryStore } from '../../store/historyStore';

interface RemoveAllHistProps {
    disabled: boolean
}

function RemoveAllHist({ disabled }:RemoveAllHistProps) {

    const removeAllHist = useHistoryStore( (state) => state.removeAllHist );
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <Popover opened={opened} onChange={setOpened} width={250}>
            <Popover.Target>
                <Tooltip label="Clear History">
                    <ActionIcon
                        disabled={disabled} 
                        onClick={() => setOpened((o) => !o)}
                        variant="transparent"
                        aria-label="Remove history button"
                    >
                        <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Tooltip>
            </Popover.Target>

            <Popover.Dropdown>
                <Text c="dimmed" fz={14}>Are you sure to delete all the history record?</Text>
                <Button 
                    variant="light"
                    color="red"
                    fullWidth
                    mt={12}
                    onClick={() => {
                        removeAllHist();
                        setOpened(false)
                    }}
                >
                    Yes
                </Button>
            </Popover.Dropdown>
        </Popover>
    );
}

export default RemoveAllHist
