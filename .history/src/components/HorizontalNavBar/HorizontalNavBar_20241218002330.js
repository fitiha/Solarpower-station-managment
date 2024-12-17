import React, { Component } from 'react';
import { Container, Dropdown, Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HorizontalNavBar.css';

const onClickLink = (event) => alert(`You clicked the ${event.target.textContent.trim()} link.`);

class HorizontalNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: ''
    };
  }

  componentDidMount() {
    const getUserUri = 'https://reqres.in/api/users/2';

    fetch(getUserUri).then((response) => {
      if (response.ok !== true) {
        throw new Error(`HTTP response code is '${response.status}'.`);
      }
      return response.json();
    }).then((object) => {
      this.setState({
        userName: `Station Admin`
      });
    }).catch((error) => {
      console.log('Failed to fetch user data. ' + error.message);
    });
  }

  render() {
    return (
      <Menu inverted size='large' className='horizontal-nav-bar'>
        <Container>
          <Menu.Item as='a' icon='sidebar' onClick={this.props.toggleSidebar}
                     className='hidden-on-small-monitor hidden-on-large-monitor'/>

          <Menu.Item as={Link} to="/" header>
            <Icon name='sun' color='yellow'/> SolarNet Ethiopia
          </Menu.Item>
          <Menu.Item as={Link} to="/" className='hidden-on-tablet hidden-on-phone' active>Overview</Menu.Item>
          <Menu.Item as={Link} to="/total-stations" className='hidden-on-tablet hidden-on-phone'and >Total Stations</Menu.Item>
          <Menu.Item as={Link} to="/inverters" className='hidden-on-tablet hidden-on-phone'>Inverters</Menu.Item>
          <Menu.Item as={Link} to="/batteries" className='hidden-on-tablet hidden-on-phone'>Batteries</Menu.Item>

          <Menu.Menu position='right' className='hidden-on-tablet hidden-on-phone'>
            <Dropdown item icon='dropdown' text={this.state.userName}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={onClickLink} icon='user' text='Profile'/>
                <Dropdown.Item onClick={onClickLink} icon='setting' text='Settings'/>
                <Dropdown.Item onClick={onClickLink} icon='help circle' text='Help'/>
                <Dropdown.Divider/>
                <Dropdown.Item onClick={onClickLink} icon='log out' text='Sign out'/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

HorizontalNavBar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired
};

export default HorizontalNavBar;