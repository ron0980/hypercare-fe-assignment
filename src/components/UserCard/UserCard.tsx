import { useState, memo, lazy, Suspense, useCallback } from "react";
import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import { User } from "../../types/types";
import LazyLoadImage from "../LazyLoadImage/LazyLoadImage";

const UserModal = lazy(() => import('../UserModal/UserModal'));

interface UserCardProps {
    user: User;
}

const StyledCard = styled(Card)({
    textAlign: "center",
    borderRadius: "12px",
    padding: "0",
    maxHeight: "350px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    border: "1px solid #e0e0e0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.2)",
        borderColor: "#3f51b5",
    },
});

const TopHalf = styled("div")({
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    padding: "20px",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:after": {
        content: '""',
        position: "absolute",
        bottom: "-20px",
        width: "100%",
        height: "40px",
        backgroundColor: "#3f51b5",
        borderBottomLeftRadius: "50% 20px",
        borderBottomRightRadius: "50% 20px",
    },
});

const BottomHalf = styled(CardContent)({
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "20px",
    borderBottomLeftRadius: "12px",
    borderBottomRightRadius: "12px",
    paddingTop: "30px",
});

const StyledAvatar = styled(LazyLoadImage)({
    width: "80px",
    height: "80px",
    margin: "0 auto 10px",
    borderRadius: "50%",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    border: "2px solid #ffffff",
});

const StyledButton = styled(Button)({
    marginTop: "10px",
    backgroundColor: "#3f51b5",
    color: "#ffffff",
    "&:hover": {
        backgroundColor: "#303f9f",
    },
});

const Description = styled(Typography)({
    marginTop: "10px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: "40px",
});

const UserCard = memo(({ user }: UserCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = useCallback(() => setIsModalOpen(true), []);
    const handleCloseModal = useCallback(() => setIsModalOpen(false), []);

    return (
        <>
            <StyledCard>
                <TopHalf>
                    <StyledAvatar
                        src={user.avatar}
                        alt={`${user.firstname} ${user.lastname}`}
                    />
                    <Typography variant="h6">{`${user.firstname} ${user.lastname}`}</Typography>
                </TopHalf>
                <BottomHalf>
                    <Description variant="body2">{user.description}</Description>
                    <StyledButton variant="contained" onClick={handleOpenModal}>
                        View More
                    </StyledButton>
                </BottomHalf>
            </StyledCard>
            <Suspense fallback={<div>Loading...</div>}>
                {isModalOpen && <UserModal isOpen={isModalOpen} onClose={handleCloseModal} user={user} />}
            </Suspense>
        </>
    );
});

export default UserCard;
