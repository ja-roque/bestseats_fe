import React from 'react';
import './seat.scss'

const Seat = (props) => {
  let color = props.available ? '#00c0ff' : 'gray'
  if (props.best){ color = 'green'}
  return <div key={'e'}  className="component-seat" style={{backgroundColor: color, gridColumn: props.col + 1, gridRow: props.row + 1, display: props.legend ? 'inline-block' : ''}}/>
}

export default Seat
