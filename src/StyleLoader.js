import React from 'react';

class StyleLoader extends React.Component{
    render(){
        return(
            <link rel="stylesheet" type="text/css" href={this.props.stylesheetPath} />
        )
    }
}

export default StyleLoader;