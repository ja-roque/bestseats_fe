export function formDataToVenue(data) {
    let venueData ={
        count: data.count.value,
        venue_data:{
            venue: {
                layout: {
                    rows: data.rowcount.value,
                    columns: data.colcount.value,
                }
            },
            seats:{}
        }

    }

    let seats = data.availables.value.split(',')
    seats.forEach(function(seat){
        let seat_struc = {
                "id": seat,
                "row": seat.split(/([a-zA-Z]+)(?=[0-9])/)[1],
                "column": seat.split(/([a-zA-Z]+)(?=[0-9])/)[2],
                "status": "AVAILABLE"
        }
        venueData.venue_data.seats[seat] = seat_struc;
    });

    return venueData;
}
