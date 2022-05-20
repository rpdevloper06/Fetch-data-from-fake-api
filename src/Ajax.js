import React, { Component } from 'react';
import axios from 'axios';


class Ajax extends Component {
    constructor() {
        super();
        this.state = {
            posts: []  // data keeping here for render
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            //console.log(response.data[1]);
            this.setState({ posts:response.data }) // store date to posts from responsce.data
        })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <td className='tit-bar'>ID</td>
                        <td className='tit-bar'>title</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((itm, k) => {
                        return ( // map function using in table body for repeting table raw
                            <tr>
                                <td className='post-col'>{itm.id}</td>
                                <td className='post-col'>{itm.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

export default Ajax;