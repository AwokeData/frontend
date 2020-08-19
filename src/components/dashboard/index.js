import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import axios from 'axios';

import DashboardMain from './dashboard-main';
import DashboardNav from './dashboard-nav';
import DashboardPanel from './dashboard-panel';

const DashboardWrapper = styled.div`
  background-color: #384586;
`;

const DashboardContent = styled.div`
  display: flex;
  padding: 10px;
`;

class Dashboard extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    const url = `/get_data`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ data: data })
      console.log(this.state.data.categories)
     })
  }
  render() {
    return (
      <DashboardWrapper id="dashboard">
        <DashboardNav />
        <DashboardContent>
          <DashboardPanel />
          <DashboardMain />
        </DashboardContent>
      </DashboardWrapper>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  dashboard: state.dashboard.transactions || [],
  ...ownProps,
});

export default connect(mapStateToProps)(Dashboard);
