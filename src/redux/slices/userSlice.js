import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../services";
import {get} from "axios";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null
};

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    });

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload
        }

    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.loading = false
    //         state.users = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.loading = false
    //         state.errors = action.payload
    //     },
    //     [getAll.pending]: (state, action) => {
    //         state.loading = true
    //     }
    // }
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.loading = false
                state.errors = action.payload
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = false
                state.loading = true
            })
            .addCase(getById.fulfilled,(state,action) =>{
                state.selectedUser = action.payload
            })

});

const {reducer: userReducer, actions: {setSelectedUser}} = userSlice;

const userActions = {getAll, setSelectedUser,getById};

export {userReducer, userActions}