import React, { useState } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #111, #222);
  padding: 20px;
`;

const ProfileCard = styled.div`
  background: #1c1c1e;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 350px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ff6b6b;
  transition: border 0.3s ease;

  &:hover {
    border-color: #ff4757;
  }
`;

const ProfileUsername = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0;
  color: #fff;
`;

const ProfileEmail = styled.p`
  font-size: 14px;
  color: #a9a9a9;
  margin-bottom: 20px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const EditButton = styled(Button)`
  background:rgb(235, 106, 20);
  &:hover {
    background:rgb(219, 80, 16);
  }
`;

const LogoutButton = styled(Button)`
  background:rgb(229, 89, 24);
  &:hover {
    background:rgb(241, 94, 15);
  }
`;

const ProfilePage = () => {
  const [user] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    profileImage: "https://i.pravatar.cc/150?img=3",
  });

  return (
    <ProfileContainer>
      <ProfileCard>
        <ProfileImage src={user.profileImage} alt="Profile" />
        <ProfileUsername>{user.username}</ProfileUsername>
        <ProfileEmail>{user.email}</ProfileEmail>
        <EditButton>Edit Profile</EditButton>
        <LogoutButton>Logout</LogoutButton>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default ProfilePage;
