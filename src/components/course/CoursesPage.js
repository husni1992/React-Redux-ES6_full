import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import counterAction from '../../actions/counterActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    shouldComponentUpdate() {
        return this.props.courses.length < 30;
    }

    deleteCourse(courseId) {
        this.props.actions.deleteCourse(courseId);
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses} />
            </div>
        );
    }
}



CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    counter: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    counterAction: PropTypes.func.isRequired
};

// this listens and renders when the given state is changed
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course)),
        // deleteCourse: courseId => dispatch(courseActions.deleteCourse(courseId)),
        // use below pattern to bind all course actions to this.props.actions object
        actions: bindActionCreators(courseActions, dispatch),
        counterAction: bindActionCreators(counterAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);