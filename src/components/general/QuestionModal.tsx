import { useDisclosure } from '@mantine/hooks';
import { Modal, ActionIcon } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons-react';

function QuestionModal() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Questions" size="60%">
                {/* Modal content */}
            </Modal>

            <ActionIcon variant="subtle" aria-label="Settings" radius="lg" onClick={open}>
                <IconQuestionMark style={{ width: '60%', height: '60%' }} stroke={1.5} />
            </ActionIcon>
        </>
    );
}

export default QuestionModal
