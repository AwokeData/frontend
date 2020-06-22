import React from 'react';
import { Menu, Button, Icon, Sidebar } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem:
        (props &&
          props.location &&
          props.location.pathname &&
          this.props.location.pathname.replace('/', '')) ||
        'home',
      mobileNavVisible: false,
    };
  }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name, mobileNavVisible: false });

  render() {
    const { activeItem, mobileNavVisible } = this.state;

    return (
      <nav className="sticky" id="navbar">
        <Menu secondary id="primary-menu">
          <h1><a href={'/'}>Company Logo</a></h1>
          
          
          <Menu.Item
            as={Link}
            to={'/how-it-works'}
            name="how-it-works"
            active={activeItem === 'how-it-works'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={'/products'}
            name="products"
            active={activeItem === 'products'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to={'/about'}
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item
              name="sign up"
              // active={activeItem === "signup"}
              onClick={this.handleItemClick}
              as={Link}
              to={'/signup'}
            >
              <Button className="primary-button">Get Started</Button>
            </Menu.Item>
            <Menu.Item
              name="login"
              as={Link}
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
              className="login"
              to={'/login'}
            >
              Log In
            </Menu.Item>

            <Menu.Item
              className="mobile-btn"
              name="mobile"
              onClick={() =>
                this.setState(
                  {
                    mobileNavVisible: !mobileNavVisible,
                  },
                  () => console.log(mobileNavVisible),
                )
              }
            >
              <Icon name="bars" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <div className="mobile-nav">
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            direction="right"
            visible={mobileNavVisible}
            width="very wide"
          >
            <Menu.Item
              as={Link}
              to={'/'}
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to={'/about'}
              name="about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to={'/how-it-works'}
              name="how-it-works"
              active={activeItem === 'how-it-works'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to={'/products'}
              name="products"
              active={activeItem === 'products'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to={'/dashboard'}
              name="dashboard"
              active={activeItem === 'dashboard'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="login"
              as={Link}
              active={activeItem === 'login'}
              to={'/login'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="signup"
              as={Link}
              active={activeItem === 'signup'}
              onClick={this.handleItemClick}
              to={'/signup'}
            />
          </Sidebar>

          <Sidebar.Pusher
            dimmed={mobileNavVisible}
            onClick={() => this.setState({ mobileNavVisible: false })}
          ></Sidebar.Pusher>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
