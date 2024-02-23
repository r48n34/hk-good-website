import { Popover, ActionIcon, Text, Tooltip, ScrollArea, Box, Divider, Group } from "@mantine/core";
import { IconHistory } from "@tabler/icons-react";
import { useHistoryStore } from "../../store/historyStore";
import RemoveAllHist from "./RemoveAllHist";

function HistoryLookUp({...props}: any) {

    const historyList = useHistoryStore( (state) => state.historyList );
    
    return (
        <>
            <Popover width={350} position="bottom" withArrow shadow="md">
                <Popover.Target>
                <Tooltip label="History">
                    <ActionIcon {...props} variant="transparent" aria-label="Settings">
                        <IconHistory style={{ width: '70%', height: '70%' }} stroke={1.5} />
                    </ActionIcon>
                </Tooltip>
                </Popover.Target>

                <Popover.Dropdown>
                    <Group justify="space-between" mb={12}>
                        <Text fz={16} fw={300} ta="left" >
                            History record
                        </Text>
                        <RemoveAllHist disabled={historyList.length <= 0}/>
                    </Group>


                    <Divider my="sm" />
                    <ScrollArea h={250}>
                        {historyList.map( v => (
                        <Box key={v.title + v.visitedDate.toString()} >
                            <Text fz={9} ta="right">
                                {new Date(v.visitedDate).toUTCString()}
                            </Text>
                            <Text fz={18} fw={300}>
                                {v.title}
                            </Text>
                            <Text c="dimmed" fz={10} component="a" href={v.src} target='_blank'>
                                {v.src}
                            </Text>
                            <Divider my="sm" />
                        </Box>
                        ))}
                    </ScrollArea>
                </Popover.Dropdown>
            </Popover>
        </>
    )
}

export default HistoryLookUp
