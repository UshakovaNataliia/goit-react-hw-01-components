import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const randomColor = () => '#' + Math.floor(Math.random() * 111111111);

const StatsCard = styled.section`
  width: 250px;
  margin: 15px auto;
  padding-top: 20px;

  font-size: 12px;
  font-weight: 300;
  text-align: center;
  font: 15px sans-serif;
  border: 1px solid #d8e0ea;
  background-color: #fff;
`;
const Stats = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  background-color: #f3f6f9;
  color: grey;
  margin-top: 20px;
  margin-bottom: 0;
`;
const Li = styled.li`
  font-size: 10px;
  padding:12px;
  margin: 0;
`;
const Label = styled.span`
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin-top: 10px;
`;

function Statistic({title, stats}) {
  return (
  <StatsCard>
    {title ? <h2>{title}</h2> : ''}
    <Stats>{stats.map(stat =>
      <Li key={stat.id} style={{ background: randomColor() }}>
        <span>{stat.label}</span>
        <Label>{stat.percentage}%</Label>
      </Li>
    )}
    </Stats>
  </StatsCard>    
  )   
};
Statistic.defaultProps = {
  title: 'Statistic'
}
Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  )
};

export default Statistic;