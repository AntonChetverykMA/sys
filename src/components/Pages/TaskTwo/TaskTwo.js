import React from 'react';

import data from './data';
import { include, exclude } from './rules';

const dataCopy = { ...data };
const functions = { include, exclude }; // переданные функции(модули)
const allConditions = dataCopy.condition;

function getfilterData() {
  let passedConditionFunc;
  let passedConditionObj;

  for (const func in functions) {
    if (allConditions.hasOwnProperty(func)) {
      passedConditionFunc = functions[func]; // выбираем какой переданный модуль нужно вызвать
      passedConditionObj = allConditions[func][0]; // получаем критерий поиска
    }
  }

  return passedConditionFunc(dataCopy.data, passedConditionObj); // получаем отфильтрованный список
}

const filtredArr = getfilterData();

const getSortedArr = (arr) => {
  const key = allConditions['sort_by'][0];
  return arr.sort((a, b) => a[key].localeCompare(b[key]));
};

const sortedArr = getSortedArr(filtredArr); //сортируем отфилтрованный список

console.log(sortedArr);

function TaskTwo() {
  return <div className='container'>Result in console</div>;
}

export default TaskTwo;
