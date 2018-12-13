import { LoaderState } from "app/components/Loader/redux/loader.reducer";
import { EditUserDetailsState } from "app/components/EditUserDetail/redux/editUserDetail.reducer";


export interface ComponentsStates {
    editUser: EditUserDetailsState;
    loader: LoaderState;
}