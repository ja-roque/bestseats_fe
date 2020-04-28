import React from 'react';
import './seatGrid.scss'
import Seat from "../seat/seat";

const SeatGrid = (props) => {
  const venueData = props.venueData;
  const seatData = props.seatData;

  let allSeats = []
  let beastSeats = []
  if (venueData) {
    venueData.seat_data.forEach(function(seat){
      allSeats.push(<Seat key={seat.seat_id} col={seat.col_num} row={seat.row_num} available={seat.available} best={seat.best} />)
    });
  }

  if (seatData) {
    seatData.forEach(function(seat){
      beastSeats.push(`${seat[0].seat_id} `)
    });
  }

  return <div className={'component-seat-grid'}>
    <div className={'wrapper'} style={{gridTemplateColumns: `1/${venueData.columns}fr`, gridTemplateRows: `1/${venueData.rows}` }}>
      {allSeats}
    </div>

    <div id={'legend'} className={'wrapper'} style={{width: '100%', textAlign: 'left'}}>
      <div><Seat key={'greenseat'} legend={true} col={1} row={1} available={true} best={true}/><span>- Best</span></div>
      <div><Seat key={'blueseat'} legend={true} col={1} row={2} available={true} best={false}/><span>- Available</span></div>
      <div><Seat key={'grayseat'} legend={true} col={1} row={3} available={false} best={false}/><span>- Occupied</span></div>
    </div>

    <h1 id={'bestseats'}>
      {beastSeats}
    </h1>
  </div>

}
export default SeatGrid