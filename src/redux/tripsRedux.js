/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  output = durationFilter(output, filters);
  output = tagFilter(filters, output);

  descSort(output);

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter((trip) => trip.id == tripId);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter((trip) => trip.country.code == countryCode);
  return filtered.length ? filtered : [{error: true}];
};

const tagFilter = (filters, output) => {
  if (filters.tags.length > 0) {
    for (let tag of filters.tags) {
      output = output.filter(trip => trip.tags.indexOf(tag) >= 0);
    }
  }
  return output;
};

const durationFilter = (output, filters) => {
  output = output.filter(
    (trip => trip.days >= filters.duration.from
    && trip.days <= filters.duration.to)
  );
  return output;
};

const descSort = (output, costCompare) => {
  costCompare = (priceOne, priceTwo) => {
    priceOne = priceOne.cost.substr(1).replace(',', '');
    priceTwo = priceTwo.cost.substr(1).replace(',', '');
    return priceTwo - priceOne;
  };
  output.sort(costCompare);
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
