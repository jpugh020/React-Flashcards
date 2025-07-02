import {createSlice} from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            
        }
    },
    reducers: {
        addTopic: (state, action) => {
            // no need to check if state.topics exists since it is initialized as an empty object
            state.topics[action.payload.id] = action.payload;
        },
        addQuizId: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
        

    },
    extraReducers: {
    }
});

export const selectTopics = (state) => {
    return state.topics.topics;
}
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;