import React from 'react';

import {useCoordinates} from '../../useCoordinates';

const styles = {
  container: {
    border: '1px solid #ddd',
    padding: 14,
    display: 'flex',
    flexFlow: 'row wrap',
    maxWidth: 350,
    fontFamily:
      '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
  },
  text: {
    flex: '1 1 100%',
    margin: '8px 0',
    fontSize: 14,
    lineHeight: '24px',
  },
};

const DemoComponent = () => {
  const {coordinates, isLoading} = useCoordinates();
  return (
    <div style={styles.container}>
      <header>
        <h2>
          <code>useCoordinates()</code>
        </h2>
      </header>
      <p style={styles.text}>isLoading: {`${isLoading}`}</p>
      <p style={styles.text}>latitude: {coordinates?.latitude}</p>
      <p style={styles.text}>longitude: {coordinates?.longitude}</p>
    </div>
  );
};

export default DemoComponent;
