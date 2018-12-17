import * as React from 'react';
import * as style from './style.css';
import { connect } from 'react-redux';
import { RootState } from 'app/store/state';


export namespace Message {
    export interface Props {
        content?: string;
        timeout?: number;
    }
}

@connect(
    (state: RootState) => ({
        content: state.components.message.content,
        timeout: state.components.message.timeout,
    }),
)

export class Message extends React.Component<Message.Props> {
    render() {
        if (this.props.content)
            return (
                <div className={style.alert}>
                    <p className={style.alertText}>{this.props.content}</p>
                </div>)
        else return (<noscript />)
    }
}
