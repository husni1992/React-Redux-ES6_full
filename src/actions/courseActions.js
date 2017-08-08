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

export function updateCourseSuccess(course) {
    return { type: actions.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
    return { type: actions.CREATE_COURSE_SUCCESS, course };
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

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            throw (error);
        });
    };
}