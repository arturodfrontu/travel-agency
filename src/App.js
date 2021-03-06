import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import { AnimatedSwitch, spring } from 'react-router-transition';
import PropTypes from 'prop-types';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Countries from './components/views/Countries/CountriesContainer';
import Country from './components/views/Country/CountryContainer';
import Home from './components/views/Home/Home';
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';
import Region from './components/views/Regions/RegionsContainer';
import Trip from './components/views/Trip/TripContainer';
import Trips from './components/views/Trips/TripsContainer';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    const mapStyle = (style) => {
      return {
        opacity: style.opacity,
        transform: `translateY(${style.offset}px)`,
      };
    };

    const glide = (value) => {
      return spring(value, {
        stiffness: 45,
        damping: 30,
      });
    };

    const routeTransitions = {
      atEnter: {
        offset: -1150,
      },
      atLeave: {
        offset: glide(0),
      },
      atActive: {
        offset: 0,
      },
    };

    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            location={location}
            mapStyles={mapStyle}
            {...routeTransitions}
          >
            <Route exact path='/' component={Home} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/country/:id' component={Country} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/regions' component={Region} />
            <Route exact path='/trip/:id' component={Trip} />
            <Route exact path='/trips' component={Trips} />
            <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
