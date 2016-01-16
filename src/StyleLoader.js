import React from 'react';

const StyleLoader = React.createClass({
    render(){
        return(
            <link rel="stylesheet" type="text/css" href={this.props.stylesheetPath} />
        )
    }
});

export default StyleLoader;