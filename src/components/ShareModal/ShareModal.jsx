import './ShareModal.scss'
import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../PostShare/PostShare';

const ShareModal = ({ modalOpened, setModalOpened }) => {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size={'50%'}
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
        >
            <div className="ShareModal">
                <PostShare />
            </div>
        </Modal>
    );
}

export default ShareModal
