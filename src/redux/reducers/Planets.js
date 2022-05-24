export const productsInitialState = [];
const Planets = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'planets':
            return action.payload;
        default:
            return state;
    }
};
export default Planets;