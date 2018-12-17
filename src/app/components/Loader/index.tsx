import * as React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { RootState } from 'app/store/state';

export namespace Loader {
    export interface Props {
        visible?: boolean
    }
}

@connect(
    (state: RootState) => ({
        visible: state.components.loader.visibility
    }),
)
export class Loader extends React.Component<Loader.Props> {
    render() {
        if(this.props.visible) 
            return (
                <div className="loaderContainer">
                    <div className="loader" />
                </div>)
        else return (<noscript/>)
    }
}
