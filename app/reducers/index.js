import clone        from 'clone';
import assign       from 'object-assign';
import {
  REQUEST_START,
  REQUEST_DATA,
} from '../constants/Constants';

const initialState = {
  color: 'red',
  data: {
    loading: false,
    objects: [],
  },
};

export default function reduce(state = initialState, action) {
  switch (action.type) {

  case REQUEST_START:
    return assign({}, state, {
      data: assign({}, state.data, {
        loading: true,
      }),
    });

  case REQUEST_DATA:
    return assign({}, state, {
      data: assign({}, state.data, {
        loading: false,
        objects: action.data,
      }),
    });

  default:
    return state;
  }
}
