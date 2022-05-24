import { combineReducers } from 'redux';
import Films from './reducers/Films'
import People from './reducers/People'
import Planets from './reducers/Planets'
import Species from './reducers/Species'
import Starships from './reducers/Starships'
import Vehicles from './reducers/Vehicles'

const rootReducer = combineReducers({
    Films,
    People,
    Planets,
    Species,
    Starships,
    Vehicles
});

export default rootReducer;