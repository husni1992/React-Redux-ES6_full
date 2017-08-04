// import * as type from '../common/actionTypes';

export function createCourse(course) {
    return { type: 'CREATE_COURSE', course };
}

export function deleteCourse(courseId) {
    return { type: 'DELETE_COURSE', courseId };
}