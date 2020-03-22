import React from 'react';
import Calendar from './components/Calendar';
import HallsFilter from './containers/HallsFilter';

function App() {
  return (
    <div>
      <HallsFilter/>
      <Calendar/>
    </div>
  );
}

export default App;
