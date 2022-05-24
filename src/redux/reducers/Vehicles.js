export const productsInitialState = [];
const Vehicles = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'vehicles':
            return action.payload;
        default:
            return state;
    }
};
export default Vehicles;