import React from 'react';

import data from './data';

function getResult(data) {
  const arr = [...data.set.sort((a, b) => a - b)];
  console.log(arr);
}

getResult(data);

function TaskThree() {
  return <div>Task3</div>;
}

export default TaskThree;
