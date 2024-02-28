// The whole idea of enums is to restrict the user's choice.


//BAD CODE

// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;


// if (seat === AISLE) {
  
// };


enum SeatChoice {
  AISLE = 'aisle',
  MIDDLE = 3,
  WINDOW,
  FOURTH
}

const hcSeat = SeatChoice.AISLE
