/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let filteredTripsOutput = trips;

  if(filters.searchPhrase){
    const searchPhrasePattern = new RegExp(filters.searchPhrase, 'i');
    filteredTripsOutput = filteredTripsOutput.filter(trip => searchPhrasePattern.test(trip.name));
  }

  filteredTripsOutput = durationFilter(filteredTripsOutput, filters);
  filteredTripsOutput = tagFilter(filters, filteredTripsOutput);

  sortTripsDesc(filteredTripsOutput);

  return filteredTripsOutput;
};

export const getTripById = ({trips}, tripId) => {
  const filteredTrips = trips.filter((trip) => trip.id == tripId);
  return filteredTrips.length ? filteredTrips[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filteredTrips = trips.filter((trip) => trip.country.code == countryCode);
  return filteredTrips.length ? filteredTrips : [{error: true}];
};

const tagFilter = (filters, filteredTripsOutput) => {
  if (filters.tags.length) {
    for (let tag of filters.tags) {
      filteredTripsOutput = filteredTripsOutput.filter(trip => trip.tags.indexOf(tag) >= 0);
    }
  }
  return filteredTripsOutput;
};

const durationFilter = (filteredTripsOutput, filters) => {
  filteredTripsOutput = filteredTripsOutput.filter(
    (trip => trip.days >= filters.duration.from
    && trip.days <= filters.duration.to)
  );
  return filteredTripsOutput;
};

const sortTripsDesc = (filteredTripsOutput) =>{
  filteredTripsOutput.sort((priceA, priceB) =>
    (parseInt(priceA.cost.slice(1)) < parseInt(priceB.cost.slice(1))) ? 1 : -1);
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
