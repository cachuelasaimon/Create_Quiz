import React, { Component } from 'react'
import { Container, FormGroup, Button } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { newPost } from '../../Redux _Test/action/postActions'


class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            body:''
        }
    }
    // Form Handler
    ChangeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        }) 
    }
    SubmitHandler = (e) => {
        e.preventDefault();
        const { title, body } = this.state
        this.props.newPost({title: title, body: body})
    }

    
    render() {
        const { item } = this.props;
        const { title, body } = this.state
        
        return (
            <Container>
                <h1>Add Post { title } { body }</h1>
                <form onSubmit={this.SubmitHandler}>
                    <FormGroup>
                        <input 
                            type="text" 
                            className="form-control"
                            onChange={this.ChangeHandler} 
                            name='title' 
                            placeholder="Title"
                            value={ title } />
                    </FormGroup>
                    <FormGroup>
                        <textarea 
                            type="text" 
                            className="form-control" 
                            onChange={this.ChangeHandler}
                            name='body' 
                            placeholder="Body"
                            value={ body } ></textarea>
                    </FormGroup>
                    <Button type="submit" color="warning">Post</Button>
                </form>
            </Container>
        )
    }
}

PostForm.propType = {
    newPost: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
 const mapStateToProps = state => ({
     posts: state.posts.item
 })

export default connect(mapStateToProps,{ newPost })(PostForm)
