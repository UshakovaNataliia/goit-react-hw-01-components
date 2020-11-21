import React from 'react';
import styled from 'styled-components';
import FriendListItem from './FriendListItem';

const FriendListStyled = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: space-around;
  margin: 15px auto;
  flex-direction: column;
  width: 250px;
`;

function FriendList({friend}) {
    return (
      <FriendListStyled>
        <FriendListItem items={friend}/>
      </FriendListStyled>
    )   
};

export default FriendList;