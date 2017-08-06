import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {}
        }
    }

    onCourseSave() {

    }

    onCourseChange() {
        console.log('change');
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm
                    allAuthors={[]}
                    course={this.state.course}
                    errors={this.state.errors}
                    onSave={this.onCourseSave}
                    onChange={this.onCourseChange}
                />
            </div>
        )
    }

}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    return {
        course
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);