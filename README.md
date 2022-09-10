# MovieBooking
Login and book a seat to a movie of ur choice 

The Login Creds are fetched by hitting /authenticate endpoint in express layer.

Once User is authenticated, we show the a list of movies as radio option and a disabled checkbox list of 10 seats.

The seat booking is enabled once the user selects a movie.

Post submission of these details, all booking info will be logged to Bookings.txt file.