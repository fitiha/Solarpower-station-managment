import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VerticalNavBarContainer from '../../containers/VerticalNavBarContainer';
import HorizontalNavBarContainer from '../../containers/HorizontalNavBarContainer';
import OverviewPageContent from '../OverviewPageContent/OverviewPageContent';
import TotalStations from '../Pages/TotalStations ';
import Inverters from '../Pages/Inverters';
import Batteries from '../Pages/Batteries';
import StationDetails from '../Pages/';
import { getNearbyRandomNumber } from '../../lib/random';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    setInterval(this.updateInputRadiances.bind(this), 4000);
    setInterval(this.updateStoredEnergies.bind(this), 4000);
  }

  updateInputRadiances() {
    const newInputRadiancesByPanelId = [];
    this.props.panels.forEach((panel) => {
      newInputRadiancesByPanelId[panel.id] = getNearbyRandomNumber(0, 1, panel.inputRadianceKWM2, 0.05);
    });
    this.props.updateInputRadiances(newInputRadiancesByPanelId);
  }

  updateStoredEnergies() {
    const newStoredEnergiesByBatteryId = [];
    this.props.batteries.forEach((battery) => {
      newStoredEnergiesByBatteryId[battery.id] = getNearbyRandomNumber(0, battery.energyCapacityKWh, battery.storedEnergyKWh, 0.25);
    });
    this.props.updateStoredEnergies(newStoredEnergiesByBatteryId);
  }

  hideSidebarIfVisible() {
    if (this.props.sidebarVisible === true) {
      this.props.toggleSidebarVisibility();
    }
  }

  render() {
    return (
      <Router>
        <Sidebar.Pushable>
          <VerticalNavBarContainer toggleSidebarVisibility={this.props.toggleSidebarVisibility} />
          <Sidebar.Pusher onClick={this.hideSidebarIfVisible.bind(this)} dimmed={this.props.sidebarVisible}>
            <HorizontalNavBarContainer />
            <Switch>
              <Route exact path="/" component={OverviewPageContent} />
              <Route path="/total-stations" component={TotalStations} />
              <Route path="/inverters" component={Inverters} />
              <Route path="/batteries" component={Batteries} />
              <Route path="/station/:stationName" component={StationDetails} />
            </Switch>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

App.propTypes = {
  batteries: PropTypes.array.isRequired,
  panels: PropTypes.array.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
  toggleSidebarVisibility: PropTypes.func.isRequired,
  updateInputRadiances: PropTypes.func.isRequired,
  updateStoredEnergies: PropTypes.func.isRequired
};

export default App;