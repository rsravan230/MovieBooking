# MovieBooking
Login and book a seat to a movie of ur choice 

The login creds are fetched by hitting /authenticate endpoint in express layer which is stored in server/index.js file.

The client starts from App.js, which lands on LogInPage.jsx component, once user is authenticated, we show the a list of movies as radio option and a disabled checkbox list of 10 seats mentioned in Movies.jsx file.

The seat booking is enabled once the user selects a movie.

Post submission of these details, all booking info will be logged to Bookings.txt file.