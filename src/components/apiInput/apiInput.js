import React, {useState} from 'react';

import './apiInput.scss'
import {Button, Form} from "react-bootstrap";
import { formDataToVenue } from "../../helpers/venueDataHelper";
import SeatGrid from "../seatGrid";



const ApiInput = (props) => {

  let [venueData, setVenueData] = useState(false)
  let [seatData, setSeatData] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements)
    const data = formDataToVenue(event.target.elements);
    console.log(data)

    fetch('http://localhost:3000/bestseats/venue', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response =>{
          response.json().then(json => {
            setVenueData({ rows: data.venue_data.venue.layout.rows, columns: data.venue_data.venue.layout.columns , seat_data: json})
          });
        }

    );

    fetch('http://localhost:3000/bestseats/seats', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response =>{
          response.json().then(json => {
            setSeatData(json)
          });
        }

    );
  };

  return <div className="component-api-input">

    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="rowcount">
        <Form.Label>Row Count</Form.Label>
        <Form.Control type="number" placeholder="Row count for venue" />
      </Form.Group>

      <Form.Group controlId="colcount">
        <Form.Label>Column Count</Form.Label>
        <Form.Control type="number" placeholder="Column count for venue" />
      </Form.Group>

      <Form.Group controlId="availables">
        <Form.Label>Available seat IDs separated by comma E.g "a7,b5,k9"</Form.Label>
        <Form.Control type="text" placeholder="Available seats" />
      </Form.Group>

      <Form.Group controlId="count">
        <Form.Label>How many seats do you want?</Form.Label>
        <Form.Control type="number" placeholder="Number of requested seats" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <SeatGrid key={`uniq`} venueData={venueData} seatData={seatData} className={'component-seat-grid'}/>
  </div>;
}

export default ApiInput