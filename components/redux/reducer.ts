import { ADD_NOT_INTERESTED, RESET_NOT_INTERESTED } from "./action";
import { ADD_INTERESTED, RESET_INTERESTED } from "./action";

const notInterestedInitialState = {
    restaurants: []
}

const interestedInitialState = {
    restaurants: []
}
export const notInterestedReducer = (state = notInterestedInitialState, action) => {
    switch (action.type) {
        case ADD_NOT_INTERESTED: {
            const { id, restaurant } = action.payload;
            return {
                ...state,
                restaurants: [...state.restaurants, { id, restaurant }]
            };
        }
        case RESET_NOT_INTERESTED: {
            return { ...notInterestedInitialState };
        }
        default: {
            return state;
        }
    }
}

export const interestedReducer = (state = interestedInitialState, action) => {
    switch (action.type) {
        case ADD_INTERESTED: {
            const { id, restaurant } = action.payload;
            return {
                ...state,
                restaurants: [...state.restaurants, { id, restaurant }]
            };
        }
        case RESET_INTERESTED: {
            return { ...interestedInitialState };
        }
        default: 
            return state;
    }
}