/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let filteredTripsOutput = trips;

  if(filters.searchPhrase){
    const searchPhrasePattern = new RegExp(filters.searchPhrase, 'i');
    const searchPhrase = (trip => searchPhrasePattern.test(trip.name));
    filteredTripsOutput = filteredTripsOutput.filter(searchPhrase);
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
  const getCountryCode = ((trip)=> trip.country.code == countryCode);
  const filteredTrips = trips.filter(getCountryCode);
  return filteredTrips.length ? filteredTrips : [{error: true}];
};

const tagFilter = (filters, filteredTripsOutput) => {
  if (filters.tags.length) {
    for (let tag of filters.tags) {
      const tagIndex = (trip => trip.tags.indexOf(tag) >= 0);
      filteredTripsOutput = filteredTripsOutput.filter(tagIndex);
    }
  }
  return filteredTripsOutput;
};

const durationFilter = (filteredTripsOutput, filters) => {
  const duration = (trip =>
    trip.days >= filters.duration.from
    && trip.days <= filters.duration.to
  );

  filteredTripsOutput = filteredTripsOutput.filter(duration);
  return filteredTripsOutput;
};

const sortTripsDesc = (filteredTripsOutput) =>{
  filteredTripsOutput.sort((priceA, priceB) =>
  {
    const parsePrice = (value)=> parseInt((value).cost.slice(1));

    return (parsePrice(priceA) < parsePrice(priceB)) ? 1 : -1;
  });
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
