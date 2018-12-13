import { combineReducers } from "redux";
import { editUserReducer } from "app/components/EditUserDetail/redux/editUserDetail.reducer";
import { loaderReducer } from "app/components/Loader/redux/loader.reducer";
import { ComponentsStates } from "app/store/components/components.state";

export const uiReducers = combineReducers<ComponentsStates>({
    editUser: editUserReducer as any,
    loader: loaderReducer as any
});  