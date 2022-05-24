export const productsInitialState = [];
const People = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'people':
            return action.payload;
        default:
            return state;
    }
};
export default People;