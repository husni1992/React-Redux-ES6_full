import * as actions from '../actions/actionTypes';
import courseApi from '../api/mockCourseApi';

export function createCourse(course) {
    return { type: actions.CREATE_COURSE, course };
}

export function deleteCourse(courseId) {
    return { type: actions.DELETE_COURSE, courseId };
}

export function editCourse(course) {
    return { type: actions.EDIT_COURSE, course };
}

export function loadCoursesSuccess(courses) {
    return { type: actions.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw (error);
        });
    }
}