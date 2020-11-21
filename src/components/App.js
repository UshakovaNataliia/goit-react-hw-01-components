import React from 'react';
import Profile from './Profile';
import Statistic from './StatisticSection';
import FriendList from './FriendList';
import TransactionHistory from './Transactions';

import user from '../user.json';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import transactions from '../transaction-history.json';


export default function App () {
  return (
    <>
      <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
      />
      <Statistic stats={statisticalData} />
      <FriendList friend={friends} />
      <TransactionHistory items={transactions} />;
    </>
  )
}