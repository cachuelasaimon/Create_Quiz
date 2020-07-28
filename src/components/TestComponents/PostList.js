import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { fetchPosts } from '../../Redux _Test/action/postActions'

class PostList extends Component {
    // Will Mount 
    componentWillMount () {
        // Fetch Post
        this.props.fetchPosts()
    }
    // Render UI
    render () {
        const { posts } = this.props;
        const postItems = posts.map( ({ id, title, body}) => (
            <div key={ id }>
                <h3>{ title }</h3>
                <p>{ body }</p>
            </div>
        ))
        return (
            <Container>
                <h1>Posts</h1>
                { postItems }
            </Container>
        )
    }
}

PostList.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(PostList)