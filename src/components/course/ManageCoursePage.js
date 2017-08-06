import React from 'react';

class ManageCoursePage extends React.component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: "" }
        };


        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave(e) {
        this.props.actions.createCourse(this.state.course);

        let newCount = this.props.counter.count + 1;
        // this.props.dispatch({ type: 'UPDATE_STUDENT', count: newCount });
        this.props.counterAction(newCount);

        // if we dont define mapDispatchToProps(), this is the pattern we write
        //this.props.dispatch(courseActions.createCourse(this.state.course));

        e.preventDefault();
        this.setState({ course: { title: "" } });
    }

    render() {
        return (
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
        )
    }

}