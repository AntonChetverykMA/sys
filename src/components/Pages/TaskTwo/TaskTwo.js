import React from 'react';
import { data } from './data';

const dataCopy = { ...data };

function filteredData() {
  let info = dataCopy.data;
  const condition = dataCopy.condition;

  if (condition.hasOwnProperty('include')) {
    const props = Object.entries(condition['include'][0]);

    info = info.filter((item) => {
      const [key, value] = props[0];
      return item[key] === value;
    });
  }

  if (condition.hasOwnProperty('sort_by')) {
    const key = condition['sort_by'][0];
    info.sort((a, b) => a[key].localeCompare(b[key]));
  }

  return info;
}

const res = filteredData();

function TaskTwo() {
  return <div className='container'>{JSON.stringify(res)}</div>;
}

export default TaskTwo;
