import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Image, Input, Dropdown } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import './TotalStations.css';

const stations = [
  { city: 'Koye Feche', name: 'Koye101', dailyUsers: 120, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 10, heldPorts: 5, energy: '50kWh', usageRate: '5kWh/day' },
  { city: 'Goro', name: 'Goro101', dailyUsers: 150, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 8, heldPorts: 3, energy: '40kWh', usageRate: '4kWh/day' },
  { city: 'Tulu Dimtu', name: 'Tulu101', dailyUsers: 200, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 12, heldPorts: 7, energy: '60kWh', usageRate: '6kWh/day' },
  { city: 'Addis Ababa', name: 'Addis101', dailyUsers: 180, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 15, heldPorts: 10, energy: '70kWh', usageRate: '7kWh/day' },
  { city: 'Koye Feche', name: 'Koye102', dailyUsers: 100, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 10, heldPorts: 4, energy: '50kWh', usageRate: '5kWh/day' },
  { city: 'Goro', name: 'Goro102', dailyUsers: 130, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 8, heldPorts: 2, energy: '40kWh', usageRate: '4kWh/day' },
  { city: 'Tulu Dimtu', name: 'Tulu102', dailyUsers: 190, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 12, heldPorts: 6, energy: '60kWh', usageRate: '6kWh/day' },
  { city: 'Addis Ababa', name: 'Addis102', dailyUsers: 170, image: 'https://img.freepik.com/premium-photo/smart-street-furniture_1375060-10312.jpg?w=740', usbPorts: 15, heldPorts: 9, energy: '70kWh', usageRate: '7kWh/day' },
];

const cityOptions = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'Koye Feche', text: 'Koye Feche', value: 'Koye Feche' },
  { key: 'Tulu Dimtu', text: 'Tulu Dimtu', value: 'Tulu Dimtu' },
  { key: 'Goro', text: 'Goro', value: 'Goro' },
  { key: 'Addis Ababa', text: 'Addis Ababa', value: 'Addis Ababa' },
];

class TotalStations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedCity: 'all',
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  handleCityChange = (e, { value }) => {
    this.setState({ selectedCity: value });
  };

  filterStations = () => {
    const { searchQuery, selectedCity } = this.state;
    return stations.filter(station => {
      const matchesCity = selectedCity === 'all' || station.city === selectedCity;
      const matchesSearch = station.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesSearch;
    });
  };

  handleStationClick = (stationName) => {
    this.props.history.push(`/station/${stationName}`);
  };

  render() {
    const filteredStations = this.filterStations();

    return (
      <Container className="total-stations-page">
        <Header as='h1' content='Total Stations' subheader='Overview of all solar-powered charging stations'/>
        <Grid stackable stretched>
          <Grid.Column width={16}>
            <Segment>
              <Header icon='search' content='Search and Filter'/>
              <Input
                icon='search'
                placeholder='Search by station id...'
                value={this.state.searchQuery}
                onChange={this.handleSearchChange}
              />
              <Dropdown
                placeholder='Select City'
                selection
                options={cityOptions}
                value={this.state.selectedCity}
                onChange={this.handleCityChange}
                style={{ marginLeft: '10px' }}
              />
            </Segment>
          </Grid.Column>
          {filteredStations.map((station, index) => (
            <Grid.Column key={index} computer={8} largeScreen={4} widescreen={4}>
              <Segment onClick={() => this.handleStationClick(station.name)} style={{ cursor: 'pointer' }}>
                <Header icon='building' content={station.name}/>
                <p>City: {station.city}</p>
                <p>Daily Users: {station.dailyUsers}</p>
                <Image src={station.image} size='medium' />
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withRouter(TotalStations);