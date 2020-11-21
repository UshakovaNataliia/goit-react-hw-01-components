import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LineStyled = styled.tr`
  height: 50px;
  text-transform: capitalize;
  &:nth-child(even){
    background-color: #ecf1f4;
  }
`;
const Td = styled.td`
  border: 1px solid #ecf1f4;
`;

function Transactions ({ transaction }) {
  return (
    <>
      {transaction.map(({ id, type, amount, currency }) => (
        <LineStyled key={id}>
          <Td>{type}</Td>
          <Td>{amount}</Td>
          <Td>{currency}</Td>
        </LineStyled>
      ))}
    </>
  )
};

Transactions.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;