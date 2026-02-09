import React, { Component } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

// Wrapper to pass hooks to class component
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        let navigate = useNavigate();
        return <Component {...props} params={params} navigate={navigate} />;
    }
    return ComponentWithRouterProp;
}

class BookEdit extends Component {

    emptyItem = {
        title: '',
        author: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
    }

    async componentDidMount() {
        if (this.props.params.id !== 'new') {
            const book = await (await fetch(`/api/book/${this.props.params.id}`)).json();
            this.setState({ item: book });
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = { ...this.state.item };
        item[name] = value;
        this.setState({ item });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { item } = this.state;

        if (item._id) {
            await fetch(`/api/book/${item._id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
        } else {
            await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item),
            });
        }
        this.props.navigate('/');
    }

    render() {
        const { item } = this.state;
        const title =
            <h2 className='mt-3'>
                {item._id ? 'Edit Book' : 'Add Book'}
            </h2>;
        return (
            <div>
                <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title" className='h5 mt-3'>
                                Book Title
                            </Label>
                            <Input
                                type="text"
                                name="title"
                                id="title"
                                value={this.state.item.title || ''}
                                onChange={this.handleChange}
                                autoComplete="title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="author" className='h5 mt-3'>
                                Author
                            </Label>
                            <Input
                                type="text"
                                name="author"
                                id="author"
                                value={this.state.item.author || ''}
                                onChange={this.handleChange}
                                autoComplete="author" />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                color="primary"
                                type="submit"
                                className='mt-3'
                            >Save</Button>{' '}
                            <Button
                                color="secondary"
                                className='mt-3'
                                tag={Link} to="/"
                            >
                            Cancel
                            </Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default withRouter(BookEdit);
