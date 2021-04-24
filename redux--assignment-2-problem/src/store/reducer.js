import * as actionName from './actions';

const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.PERSON_ADDED:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      }
      return {
        ...state,
        persons: state.persons.concat(newPerson)
      }
    case actionName.PERSON_DELETE:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personId)
      }
  }
  return state
}

export default reducer;