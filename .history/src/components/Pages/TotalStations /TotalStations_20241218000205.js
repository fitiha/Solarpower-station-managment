import React, { Component } from 'react';
import { Container, Grid, Header, Segment, Image, Input, Dropdown } from 'semantic-ui-react';
import './TotalStations.css';

const stations = [
  { city: 'Koye Feche', name: 'Station 1', dailyUsers: 120, image: 'station1.jpg' },
  { city: 'Goro', name: 'Station 2', dailyUsers: 150, image: 'station2.jpg' },
  { city: 'Tulu Dimtu', name: 'Station 3', dailyUsers: 200, image: 'station3.jpg' },
  
];

const cityOptions = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'addis_ababa', text: 'Addis Ababa', value: 'Addis Ababa' },
  { key: 'tulu_dimtu', text: 'Tulu Dimtu', value: 'Tulu Dimtu' },
  // Add more cities as needed
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

  render() {
    const filteredStations = this.filterStations();

    return (
      <Container>
        <Header as='h1' content='Total Stations' subheader='Overview of all solar-powered charging stations'/>
        <Grid stackable stretched>
          <Grid.Column width={16}>
            <Segment>
              <Header icon='search' content='Search and Filter'/>
              <Input
                icon='search'
                placeholder='Search by station name...'
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
              <Segment>
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

export default TotalStations;