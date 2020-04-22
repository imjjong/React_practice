// import react library
import React, { Component } from 'react';

class ReadContent extends Component {
    render(){
        console.log('Read Render')
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article> 
        )
    }
}

export default ReadContent;