import React, { useState } from 'react';

const convertMagnitudes = {
  m: { cm: 100, m: 1, in: 1000 / 25.4, ft: 1000 / 304.8 },
  cm: { cm: 1, m: 0.01, in: 10 / 25.4, ft: 10 / 304.8 },
  in: { cm: 2.54, m: 0.0254, in: 1, ft: 1 / 12 },
  ft: { cm: 2.54 * 12, m: 0.0254 * 12, in: 12, ft: 1 },
};

const options = [
  { value: 'm', name: 'Метры', metric_system: 'customary' },
  { value: 'cm', name: 'Сантиметры', metric_system: 'customary' },
  { value: 'in', name: 'Дюймы', metric_system: 'imperial' },
  { value: 'ft', name: 'Футы', metric_system: 'imperial' },
];

function Inputs() {
  const [valueToMagnitude, setValueToMagnitude] = useState(0);
  const [valueFromMagnitude, setValueFromMagnitude] = useState(0);
  const [fromMagnitude, setFromMagnitude] = useState('m');
  const [toMagnitude, setToMagnitude] = useState('m');

  return (
    <div style={{ width: '50%', margin: '50px auto' }}>
      <div className='d-flex flex-row justify-content-between'>
        <select
          value={fromMagnitude}
          onChange={(e) => setFromMagnitude(e.target.value)}
        >
          {options.map((item) => (
            <option value={item.value} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <div> {'>'} </div>
        <select
          value={toMagnitude}
          onChange={(e) => setToMagnitude(e.target.value)}
        >
          {options.map((item) => (
            <option value={item.value} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className='d-flex flex-row justify-content-between my-4'>
        <input
          type='number'
          value={valueFromMagnitude}
          onChange={(e) => setValueFromMagnitude(e.target.value)}
        />
        <div>{valueToMagnitude}</div>
      </div>

      <button
        className='btn btn-primary'
        style={{ display: 'block', margin: 'auto', borderRadius: '5px' }}
        onClick={() => {
          const coefficient = convertMagnitudes[fromMagnitude][toMagnitude];
          const value = Number((coefficient * valueFromMagnitude).toFixed(2));

          setValueToMagnitude(value);
        }}
      >
        Конверитровать
      </button>
    </div>
  );
}

export default Inputs;
