import React from 'react';
import './seatGrid.scss'
import Seat from "../seat/seat";

const SeatGrid = (props) => {
  const seatData = props.seatData;
  let allSeats = []
  if (seatData) {
    seatData.seat_data.forEach(function(seat){
      allSeats.push(<Seat key={seat.seat_id} col={seat.col_num} row={seat.row_num} available={seat.available} best={seat.best} />)
    });
  }
  return <div className={'component-seat-grid'}>
    <div className={'wrapper'} style={{gridTemplateColumns: `1/${seatData.columns}fr`, gridTemplateRows: `1/${seatData.rows}` }}>
      {allSeats}
    </div>
  </div>

}
export default SeatGrid