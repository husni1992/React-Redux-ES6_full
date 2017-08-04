import * as actions from '../actions/actionTypes';

export function createCourse(course) {
    return { type: actions.CREATE_COURSE, course };
}

export function deleteCourse(courseId) {
    return { type: actions.DELETE_COURSE, courseId };
}