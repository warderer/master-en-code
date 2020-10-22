import React from 'react';

class IssueItem extends React.Component{

    render(){
        return(
            <div className="issues-container" key={this.props.url.id}>
                <a href={this.props.url.html_url}>{this.props.url.title}</a>
            </div>
        )
    }
}

export default IssueItem;