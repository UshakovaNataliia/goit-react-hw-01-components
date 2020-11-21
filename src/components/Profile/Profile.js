import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import unnamed from '../../no_photo.png'

const ProfileCard = styled.div`
  width: 250px;
  margin: 15px auto;

  padding-top: 30px;
  padding-bottom: 0;
  font-size: 12px;
  font-weight: 300;
  color: #768696;
  text-align: center;
  font-size: 15px;
  border: 1px solid #d8e0ea;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  background-color: #fff;
`;
const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
`;
const Name = styled.p`
  font-weight: 700;
  color: black;
  font-size: 16px;
  margin: 0;
`;
const Tag = styled.p`
margin-top: 5px;
margin-bottom:0;
font-size: 12px;
`;
const Stats = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-around;
  background-color: #f3f6f9;
  height: 74px;
  margin-top: 20px;
  margin-bottom: 0;
`;
const Label = styled.li`
    font-size: 10px;
    width: 100%;
    padding-top: 20px;
    border-left: 1px solid #788287;
    border-top: 1px solid #788287;
    &:first-of-type{
    border-left: 0;
    }
`;
const Quantity = styled.span`
  display: block;
  font-weight: 700;
  color: black;
  font-size: 14px;
  margin-top: 10px;
`;

function Profile(user) {
    const { name, tag, location, avatar, stats} = user;
    return (
<ProfileCard>
  <div>
    <Avatar
      src={avatar}
      alt="user avatar"
    />
    <Name>{name}</Name>
    <Tag>@{tag}</Tag>
    <Tag>{location}</Tag>
  </div>

  <Stats>
    <Label>
      <span>Followers: </span>
      <Quantity>{stats.followers}</Quantity>
    </Label>
    <Label>
      <span>View: </span>
      <Quantity>{stats.views}</Quantity>
    </Label>
    <Label>
      <span>Likes: </span>
      <Quantity>{stats.likes}</Quantity>
    </Label>
  </Stats>
</ProfileCard>
    )   
};

Profile.defaultProps = {
    avatar: unnamed,
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    location: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};

export default Profile;