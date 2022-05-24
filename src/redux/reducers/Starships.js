export const productsInitialState = [];
const Starships = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'starships':
            return action.payload;
        default:
            return state;
    }
};
export default Starships;