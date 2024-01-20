import React, { useState, useEffect } from 'react';

const TimestampConverter = ( timestamp ) => {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const convertTimestampToDate = () => {
      const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
      const formattedDate = date.toUTCString(); // Get the UTC string representation

      setFormattedDate(formattedDate);
    };

    convertTimestampToDate();
  }, [timestamp]);
};

export default TimestampConverter;
