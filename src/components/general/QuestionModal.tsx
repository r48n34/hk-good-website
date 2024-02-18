import { useDisclosure } from '@mantine/hooks';
import { Text, Modal, ActionIcon } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';
import { dataArrGen } from '../../data/tempData';

function QuestionModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Questions" size="60%">
                <Text fw={300} fz={16}>
                    Q: 有任何準則嗎?
                </Text>

                <Text fw={300} fz={20}>
                    A: 沒有，全部列出名單均為主觀意見。
                </Text>

                <Text fw={300} fz={16} mt={18}>
                    Q: 接受贊助嗎?
                </Text>

                <Text fw={300} fz={20}>
                    A: 本網站不會接受任何贊助。單純只會記錄設計不錯的中文設計網站。
                </Text>

                <Text fw={300} fz={16} mt={18}>
                    Q: 暫時記錄了多少?
                </Text>

                <Text fw={300} fz={20}>
                    A: 網站暫時記錄了{ dataArrGen.length }個網站。
                </Text>

                <Text fw={300} fz={16} mt={18}>
                    Q: 更新頻率?
                </Text>

                <Text fw={300} fz={20}>
                    A: 隨心。
                </Text>
            </Modal>

            <ActionIcon variant="subtle" aria-label="Settings" radius="lg" onClick={open}>
                <IconQuestionMark style={{ width: '60%', height: '60%' }} stroke={1.5} />
            </ActionIcon>
        </>
    );
}

export default QuestionModal
