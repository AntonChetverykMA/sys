import React from 'react';

import data from './data';

// Находим индекс начиная с которого сумма элементов,
// находящихся по правую сторону от этого индекса
// (включая элемент с этим индексом),
// равна сумме елементов по левую сторону

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
    // Разделяем массив на два, по разделительному индексу
    let leftArr = arr.slice(0, splitPoint);
    let rightArr = arr.slice(splitPoint);

    return [leftArr, rightArr];
  }

  // Если такой индекс не найден

  // Сортируем массив в обратном порядке
  arr = [...data.set.sort((a, b) => b - a)];
  let leftArr = [];
  let rightArr = [];

  for (const num of arr) {
    const leftArrSum = leftArr.reduce((sum, cur) => sum + cur, 0);
    const rightArrSum = rightArr.reduce((sum, cur) => sum + cur, 0);

    // На каждой интерации добавляем текущий елемент
    // в "левый" или "правый"
    // массив в зависимости от того в каком из них
    // текущая сумма элементов меньше

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
