import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.courseRow = this.courseRow.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave(e) {
        this.props.actions.createCourse(this.state.course);
        let newCount = this.props.students.count + 1;
        // this.props.dispatch({ type: 'UPDATE_STUDENT', count: newCount });
        e.preventDefault();
        this.setState({ course: { title: "" } });
    }

    deleteCourse(courseId) {
        this.props.actions.deleteCourse(courseId);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}
            <span className="btn btn-danger" onClick={() => { this.deleteCourse(course.title) }}>X</span>
        </div>;
    }

    shouldComponentUpdate() {
        return this.props.courses.length < 30;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <form onSubmit={this.onClickSave}>
                    <h2>Add Course</h2>
                    <input
                        type="text"
                        onChange={this.onTitleChange}
                        value={this.state.course.title} />

                    <input
                        type="submit"
                        value="Save"
                        onClick={this.onClickSave} />
                </form>
            </div>
        );
    }
}



CoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

// this listens and renders when the given state is changed
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses,
        students: state.students
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // createCourse: course => dispatch(courseActions.createCourse(course)),
        // deleteCourse: courseId => dispatch(courseActions.deleteCourse(courseId)),
        // use below pattern to bind all course actions to this.props.actions object
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);