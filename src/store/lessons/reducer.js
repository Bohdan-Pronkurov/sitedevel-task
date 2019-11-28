import Immutable from 'seamless-immutable';
import * as constants from '../constants/actionConstants'

const initialState = Immutable({
  holderLessons: [],
  selectedLesson: null,
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case constants.LESSONS_FETCHED:
      return state.merge({
        holderLessons: action.lessons,
      });

    case constants.LESSON_SELECT:
      return state.merge({
        selectedLesson: action.lesson,
      });

    default:
      return state;
  }
}
