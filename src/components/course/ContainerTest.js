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
                Updated: {this.props.students.count} times
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger
    return {
        students: state.students
    };
}

export default connect(mapStateToProps)(ContainerTest);