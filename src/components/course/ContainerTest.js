import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class ContainerTest extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        console.info('Updated count');
        return (
            <div>
                Updated: {this.props.counter.count} times
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.counter
    };
}

export default connect(mapStateToProps)(ContainerTest);