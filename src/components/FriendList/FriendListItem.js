import React from 'react';
import PropTypes from 'prop-types';
import unnamed from '../../no_photo.png';
import styled from 'styled-components';

const LiStyled = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  box-shadow: 0px 4px 7px 1px rgba(0,0,0,0.5);
  margin-bottom: 10px;
  background-color: #fff;
  font-size: 20px;
  &:last-of-type(){
  margin-bottom: 0;
  }
`;
const Status = styled.span`
  display: block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  margin: 16px;
  background-color: ${props=> props.isOnline ? 'green' : 'red'};
`;
const AvatarStyled = styled.img`
  border-radius: 5%;
  margin-right: 16px;
  border: 1px solid grey;
`;

function FriendListItem ({ items }) {
return (
      <>
    {items.map(({ id, avatar, name, isOnline }) => (
      <LiStyled key={id}>
        <Status isOnline={isOnline}></Status>
        <AvatarStyled src={avatar} alt="" width="48" />
        <p>{name}</p>
      </LiStyled>
    ))}
  </>
)
};

FriendListItem.defaultProps = {
  avatar: unnamed,
};
FriendListItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }),
  )
};

export default FriendListItem;