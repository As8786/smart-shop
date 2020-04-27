import React, { Component, useContext } from 'react';
import { LoadingValueContext } from './Context/LaodingContext';



const LoadingHOC = (ChildComp) => {

    return class extends Component {
        render() {
            return <LoadingValueContext.Consumer>
                <ChildComp {...this.props} />
            </LoadingValueContext.Consumer>
        }
    }
}


export default LoadingHOC