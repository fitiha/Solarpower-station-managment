// StationDetails.js
import React from 'react';
import { Container, Header, Segment, Image, Button, Grid, Icon } from 'semantic-ui-react';
import { useParams, useHistory } from 'react-router-dom';
import './StationDetails.css';

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

const StationDetails = () => {
  const { stationName } = useParams();
  const history = useHistory();
  const station = stations.find(station => station.name === stationName);

  if (!station) {
    return <div>Station not found</div>;
  }

  return (
    <Container className="station-details-page">
      <Button onClick={() => history.goBack()} color='green' style={{ marginBottom: '20px' }}>Back</Button>
      <Grid stackable>
        <Grid.Column width={6}>
          <Image src={station.image} size='medium' style={{ height: '300px', objectFit: 'cover' }} />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header as='h1' content={station.name} subheader={`Details for ${station.name}`} />
            <p><Icon name='map marker alternate' /> <strong>City:</strong> {station.city}</p>
            <p><Icon name='users' /> <strong>Daily Users:</strong> {station.dailyUsers}</p>
            <p><Icon name='usb' /> <strong>USB Ports:</strong> {station.usbPorts}</p>
            <p><Icon name='plug' /> <strong>Held Ports:</strong> {station.heldPorts}</p>
            <p><Icon name='battery full' /> <strong>Energy:</strong> {station.energy}</p>
            <p><Icon name='chart line' /> <strong>Usage Rate:</strong> {station.usageRate}</p>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default StationDetails;