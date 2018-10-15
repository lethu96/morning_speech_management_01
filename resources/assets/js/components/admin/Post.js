import React from 'react';
import { Table, Menu, Icon, Button } from 'semantic-ui-react';
import { get } from 'axios';
import times from 'lodash.times';
import { Helmet } from 'react-helmet';
import Page from './Page';
import Nav from '../auth/navbar';
import SideBar from '../auth/sidebar';
import ReadMoreReact from 'read-more-react';


const TOTAL_PER_PAGE = 3;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            page: 0,
            totalPages: 0,
        };

        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.setPage = this.setPage.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.getposts();
    }

    componentWillReceiveProps({ location = {} }) {
        if (location.pathname === '/posts' && location.pathname !== this.props.location.pathname) {
            this.getposts();
        }
    }

    getposts() {
        get('/posts')
            .then(({ data }) => {
                const totalPages = Math.ceil(data.length / TOTAL_PER_PAGE);
                this.setState({
                    posts: data,
                    page: 0,
                    totalPages: totalPages,
                }
            );
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

    handleDelete(postId) {
        const { posts } = sthis.state;

        this.setState({
            posts: posts.filter(p => p.id !== postId),
        });
    }

    render() {
        const { posts, page, totalPages } = this.state;
        const startIndex = page * TOTAL_PER_PAGE;

        return (
            <div>
                <Nav link="Logout" />  
                <SideBar />
                    <div className="content-wrapper">
                        <section className="content">
                            <div className="row">
                                <Table celled striped>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className="title">User</Table.HeaderCell>
                                            <Table.HeaderCell className="title">Title</Table.HeaderCell>
                                            <Table.HeaderCell className="content">Content</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {posts.slice(startIndex, startIndex + TOTAL_PER_PAGE).map(post =>
                                        (   <Table.Row key={post.id}>
                                                <Table.Cell><strong>{post.user.name}</strong></Table.Cell>
                                                <Table.Cell>{post.title}</Table.Cell>
                                                <Table.Cell>
                                                    <ReadMoreReact text={post.content}
                                                        min={80}
                                                        ideal={100}
                                                        max={200} />
                                                </Table.Cell>
                                              
                                            </Table.Row>),
                                        )}
                                    </Table.Body>
                                    <Table.Footer>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan={6}>
                                                <Menu floated="right" pagination>
                                                    {page !== 0 && <Menu.Item as="a" icon onClick={this.decrementPage}>
                                                        <i className="fa fa-chevron-left" />
                                                    </Menu.Item>}
                                                    {times(totalPages, n =>
                                                        (<Menu.Item as="a" key={n} active={n === page} onClick={this.setPage(n)}>
                                                        {n + 1}
                                                        </Menu.Item>),
                                                    )}
                                                    {page !== (totalPages - 1) && <Menu.Item as="a" icon onClick={this.incrementPage}>
                                                        <i className="fa fa-chevron-right" />
                                                    </Menu.Item>}
                                                </Menu>
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Footer>
                                </Table>
                            </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Post;
