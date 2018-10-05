import React from 'react';

// 如果组件没有用到状态的话，可以使用无状态的函数表达式代替class，
// 但是无状态的函数表达不能使用this关键字,直接使用props，用参数的形式传入
const Weather = props =>  (
    <div>
      {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
      {props.temperature && <p>Temperature: {props.temperature}</p>}
      {props.humidity && <p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      {props.error && <p>Error: {props.error}!</p>}
    </div>
  )

export default Weather;