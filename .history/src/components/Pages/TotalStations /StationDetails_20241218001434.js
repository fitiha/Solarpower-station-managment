// StationDetails.js
import React from 'react';
import { Container, Header, Segment, Image } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

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
  const station = stations.find(station => station.name === stationName);

  if (!station) {
    return <div>Station not found</div>;
  }

  return (
    <Container>
      <Header as='h1' content={station.name} subheader={`Details for ${station.name}`} />
      <Segment>
        <Header icon='building' content='Station Details' />
        <p>City: {station.city}</p>
        <p>Daily Users: {station.dailyUsers}</p>
        <p>USB Ports: {station.usbPorts}</p>
        <p>Held Ports: {station.heldPorts}</p>
        <p>Energy: {station.energy}</p>
        <p>Usage Rate: {station.usageRate}</p>
        <Image src={station.image} size='medium' />
      </Segment>
    </Container>
  );
};

export default StationDetails;