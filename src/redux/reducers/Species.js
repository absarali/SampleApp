export const productsInitialState = [];
const Species = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'species':
            return action.payload;
        default:
            return state;
    }
};
export default Species;