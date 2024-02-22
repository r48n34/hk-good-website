import { useDisclosure } from '@mantine/hooks';
import { Text, Modal, ActionIcon, Box, Tooltip } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';
import { dataArrGen } from '../../data/tempData';

const qaList = [
    { 
        q: "有任何準則嗎?", a: "沒有，全部列出名單均為主觀意見。"
    },
    { 
        q: "接受贊助嗎?", a: "本網站不會接受任何贊助。單純只會記錄設計不錯的中文設計網站。"
    },
    { 
        q: "更新頻率?", a: "隨心。"
    },
    { 
        q: "暫時記錄了多少?", a: `網站暫時記錄了${ dataArrGen.length }個網站。`
    },
]

function QuestionModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Questions" size="60%">
                { qaList.map( (v,i) => (
                    <Box key={i} mb={24}>
                        <Text fw={300} fz={16} c="dimmed">
                            Q: {v.q}
                        </Text>

                        <Text fw={300} fz={20}>
                            {v.a}
                        </Text>
                    </Box>
                ))}
            </Modal>

            <Tooltip label="Questions">
            <ActionIcon variant="subtle" aria-label="Settings" radius="lg" onClick={open}>
                <IconQuestionMark style={{ width: '60%', height: '60%' }} stroke={1.5} />
            </ActionIcon>
            </Tooltip>
        </>
    );
}

export default QuestionModal
