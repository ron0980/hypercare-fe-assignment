import React, { useEffect, useRef, useCallback } from 'react';
import { Modal, Box, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';
import { User } from '../../types/types';

interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: User;
}

const StyledModal = styled(Box)({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#fff',
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
});

const Header = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
});

const AvatarContainer = styled(Box)({
    marginRight: '16px',
});

const UserInfo = styled(Box)({
    flex: 1,
});

const UserModal = ({ isOpen, onClose, user }: UserModalProps) => {
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (isOpen && closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, [isOpen]);

    const handleBackdropClick = useCallback((event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }, [onClose]);

    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            aria-labelledby="user-modal-title"
            aria-describedby="user-modal-description"
        >
            <StyledModal role="dialog" aria-modal="true" onClick={handleBackdropClick}>
                <Header>
                    <AvatarContainer>
                        <Avatar
                            src={user.avatar}
                            alt={`${user.firstname} ${user.lastname}`}
                            sx={{ width: 100, height: 100, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '50%' }}
                        />
                    </AvatarContainer>
                    <UserInfo>
                        <Typography
                            id="user-modal-title"
                            variant="h6"
                            align="left"
                            sx={{ marginTop: '2px', fontWeight: 'bold' }}
                        >
                            {`${user.firstname} ${user.lastname}`}
                        </Typography>
                        <Typography variant="subtitle1" align="left">
                            {`Role: ${user.role}`}
                        </Typography>
                        <Typography variant="subtitle2" align="left">
                            {`Joined: ${user.join_date}`}
                        </Typography>
                        <Typography variant="body2" align="left">
                            {`Email: ${user.email}`}
                        </Typography>
                    </UserInfo>
                </Header>
                <Typography
                    id="user-modal-description"
                    variant="body1"
                    sx={{ textAlign: 'left', marginTop: '10px', color: 'black' }}
                >
                    {user.description}
                </Typography>
                <Button
                    variant="contained"
                    onClick={onClose}
                    sx={{ mt: 2, alignSelf: 'center' }}
                    ref={closeButtonRef}
                >
                    Close
                </Button>
            </StyledModal>
        </Modal>
    );
};

export default React.memo(UserModal);
