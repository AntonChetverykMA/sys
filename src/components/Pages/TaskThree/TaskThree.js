import React from 'react';

import data from './data';

function findSplitPoint() {
  const arr = [...data.set.sort((a, b) => a - b)];
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];

    let rightSum = 0;

    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }

    if (leftSum === rightSum) return i + 1;
  }

  return false;
}

const splitPoint = findSplitPoint();

function getResult() {
  let arr = [...data.set.sort((a, b) => a - b)];

  if (splitPoint) {
    let leftArr = arr.slice(0, splitPoint);
    let rightArr = arr.slice(splitPoint);

    return [leftArr, rightArr];
  }

  arr = [...data.set.sort((a, b) => b - a)];
  let leftArr = [];
  let rightArr = [];

  for (const num of arr) {
    const leftArrSum = leftArr.reduce((sum, cur) => sum + cur, 0);
    const rightArrSum = rightArr.reduce((sum, cur) => sum + cur, 0);

    leftArrSum <= rightArrSum ? leftArr.push(num) : rightArr.push(num);
  }

  return [leftArr, rightArr];
}

const result = getResult();

function TaskThree() {
  return (
    <div className='container'>
      <div>{`Left array: ${result[0].toString()}`}</div>
      <div>{`Right array: ${result[1].toString()}`}</div>
    </div>
  );
}

export default TaskThree;
