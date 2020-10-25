import React, { useState } from 'react';

const options = [
  { value: 'm', name: 'Метры', metric_system: 'customary' },
  { value: 'cm', name: 'Сантиметры', metric_system: 'customary' },
  { value: 'in', name: 'Дюймы', metric_system: 'imperial' },
  { value: 'ft', name: 'Футы', metric_system: 'imperial' },
];

function Inputs() {
  const [valueToCurrency, setvalueToCurrency] = useState(0);
  const [valueFromCurrency, setvalueFromCurrency] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('m');
  const [toCurrency, setToCurrency] = useState('m');

  const convertationToMillimeters = () => {
    const fromCurrencyInfo = options.find(
      (item) => item.value === fromCurrency
    );
    let valueInMillimeters;

    if (fromCurrencyInfo.metric_system === 'customary') {
      switch (fromCurrency) {
        case 'm':
          valueInMillimeters = valueFromCurrency * 100 * 10;
          break;

        case 'cm':
          valueInMillimeters = valueFromCurrency * 10;
          break;

        default:
          valueInMillimeters = valueFromCurrency;
      }
    }

    if (fromCurrencyInfo.metric_system === 'imperial') {
      switch (fromCurrency) {
        case 'in':
          valueInMillimeters = valueFromCurrency * 25.4;
          break;

        case 'ft':
          valueInMillimeters = valueFromCurrency * 25.4 * 12;
          break;

        default:
          valueInMillimeters = 0;
      }
    }

    return valueInMillimeters;
  };

  const getConvertedValue = () => {
    const toCurrencyInfo = options.find((item) => item.value === toCurrency);
    const valueInMillimeters = convertationToMillimeters();
    let convertedValue;

    if (toCurrencyInfo.metric_system === 'customary') {
      switch (toCurrency) {
        case 'm':
          convertedValue = valueInMillimeters / 1000;
          break;

        case 'cm':
          convertedValue = valueInMillimeters / 10;
          break;

        default:
          convertedValue = 0;
      }
    }

    if (toCurrencyInfo.metric_system === 'imperial') {
      switch (toCurrency) {
        case 'in':
          debugger;
          convertedValue = valueInMillimeters / 25.4;
          break;

        case 'ft':
          convertedValue = valueInMillimeters / (25.4 * 12);
          break;

        default:
          convertedValue = 0;
      }
    }

    setvalueToCurrency(Number(convertedValue.toFixed(2)));
  };

  return (
    <div style={{ width: '50%', margin: '50px auto' }}>
      <div className='d-flex flex-row justify-content-between'>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {options.map((item) => (
            <option value={item.value} key={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <div> {'>'} </div>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
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
          value={valueFromCurrency}
          onChange={(e) => setvalueFromCurrency(e.target.value)}
        />
        <div>{valueToCurrency}</div>
      </div>

      <button
        className='btn btn-primary'
        style={{ display: 'block', margin: 'auto', borderRadius: '5px' }}
        onClick={getConvertedValue}
      >
        Конверитровать
      </button>
    </div>
  );
}

export default Inputs;
