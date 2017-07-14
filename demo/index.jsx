/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Weather from 'Weather';
import './main.scss';

class Demo extends React.Component {
  render() {
    const docs = '//github.com/Opentrace/react-weather';

    return (
      <div className="demo">
        <Weather />
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('content'));