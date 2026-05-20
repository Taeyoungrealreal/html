import React from 'react';
import { Helmet } from 'react-helmet-async';
import History from '../components/sections/History';

const HistoryPage = () => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>BA TECH - 연혁</title>
      </Helmet>
      <History />
    </div>
  );
};

export default HistoryPage;
