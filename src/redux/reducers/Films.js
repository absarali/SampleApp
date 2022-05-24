export const productsInitialState = [];
const Films = (state = productsInitialState, action) => {
    switch (action.type) {
        case 'films':
            return action.payload;
        default:
            return state;
    }
};
export default Films;