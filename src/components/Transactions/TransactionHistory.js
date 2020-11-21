import React from 'react';
import styled from 'styled-components';
import PropTypes, {object} from 'prop-types';
import Transactions from './Transactions';

const TransactionHistoryStyled = styled.table`
  width: 450px;
  margin: 15px auto;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
const Tr = styled.tr`
  background-color: #00bcd5;
  color: white;
  height: 50px;
  text-transform: uppercase;
  font-weight: bold;
`;
const Th = styled.th`
  border: 1px solid gray;
  padding: 0;
  width:150px;
  margin: 0;
`;

function TransactionHistory({items}) {
    return (
      <TransactionHistoryStyled>
        <thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </thead>
    
        <tbody>
          <Transactions transaction={items} />
        </tbody>
      </TransactionHistoryStyled>
    )   
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(object).isRequired,
};

export default TransactionHistory;