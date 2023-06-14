const chooseStations = function (stations) {
  const appVenue = [];
  for ( const venue of venues) {
    if ((venue[1] >= 20) && (venue[2] === "school" || venue[2] === "community centre")) {
      appVenue.push(game[0]);
    }
  }
   return appVenue;
};


// condensed ver:

// const chooseStations = function (stations) {
//   const appVenue = [];
//   for ( let venue of venues) {
//     if ((venue[1] >= 20) && (venue[2] === "school" || venue[2] === "community centre") && (venue[0] === "")) { 
//       return appVenue;
//     }
    
//   }
// };
