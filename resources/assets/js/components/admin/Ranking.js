import React, {Component} from 'react';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';
import times from 'lodash.times';
import { Helmet } from 'react-helmet';
import Page from './Page';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';

const TOTAL_PER_PAGE = 10;

class Ranking extends Component {
  constructor(props) {
      super(props);
      this.state = {
      ranks: [],
      page: 0,
      totalPages: 0,
    };
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.getRanks();
  }

  componentWillReceiveProps({ location = {} }) {
    if (location.pathname === '/ranks' && location.pathname !== this.props.location.pathname) {
      this.getRanks();
    }
  }

  getRanks() {
    get('/ranks')
      .then(({ data }) => {
        const totalPages = Math.ceil(data.length / TOTAL_PER_PAGE);
        this.setState({
          ranks: data,
          page: 0,
          totalPages : totalPages,
        });
      });
  }

  setPage(page) {
    return () => {
      this.setState({ page });
    };
  }

  decrementPage() {
    const { page } = this.state;

    this.setState({ page: page - 1 });
  }

  incrementPage() {
    const { page } = this.state;

    this.setState({ page: page + 1 });
  }


  render() {
    const { ranks, page, totalPages } = this.state;
    const startIndex = page * TOTAL_PER_PAGE;

    return (
        <div>
            <Nav link="Logout" />  
            <SideBar />
            <Page title="Ranking">
            <Helmet>
              <title>List Ranking</title>
            </Helmet>

            <Table celled striped>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>CODE ID</Table.HeaderCell>
                  <Table.HeaderCell>NAME</Table.HeaderCell>
                  <Table.HeaderCell>TITLE POST</Table.HeaderCell>
                  <Table.HeaderCell>VOTE UP</Table.HeaderCell>
                  <Table.HeaderCell>AVARTAR</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {ranks.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(rank =>
                  (<Table.Row key={rank.id}>
                    <Table.Cell>{rank.code_id}</Table.Cell>
                    <Table.Cell>{rank.name}</Table.Cell>
                    <Table.Cell>{rank.title}</Table.Cell>
                    <Table.Cell>{rank.number_vote}</Table.Cell>
                    <Table.Cell><img className="thumb"  src={rank.avatar} /></Table.Cell>
                  </Table.Row>),
                )}
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan={6}>
                    <Menu floated="right" pagination>
                      {page !== 0 && <Menu.Item as="a" icon onClick={this.decrementPage}>
                        <Icon name="left chevron" />
                      </Menu.Item>}
                      {times(totalPages, n =>
                        (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                          {n + 1}
                        </Menu.Item>),
                      )}
                      {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                        <Icon name="right chevron" />
                      </Menu.Item>}
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
            </Page>
        </div>
    );
  }
}
export default Ranking;