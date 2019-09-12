import { createSelector } from 'reselect';

const initialState = {
    isOpen: false
};

const navBar = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_OPEN':
            return ({
                ...state,
                isOpen: !state.isOpen
            });
        default:
            return state;
    }
};

const navBarSelector = state => state.navBar;

export const isNavOpen = createSelector(
    navBarSelector,
    navBar => navBar.isOpen
    );

export default navBar;