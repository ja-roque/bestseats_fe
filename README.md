This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

We set that port so locals don't clash ( rails and react )

## Logic
A simple frontend was developed as # bonus.
With a bootstrap form, a JSON input containing all the seat data respecting the constraints is built with a helper and sent to the Rails server.

Once a response is received, seats are rendered as color coded squares that determine if a seat is available or not and which are the best seats, let them be by group or individuals.
