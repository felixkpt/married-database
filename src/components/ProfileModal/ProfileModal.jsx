import './ProfileModal.scss'
import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModal = ({ modalOpened, setModalOpened }) => {
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
            <div className="ProfileModal">
                <form>
                    <h3>Your info</h3>
                    <div className='form-input'>
                        <input type="text" className="auth-input" placeholder='Your name' />
                    </div>
                    <button className='button'>Update</button>
                </form>
            </div>
        </Modal>
    );
}

export default ProfileModal
