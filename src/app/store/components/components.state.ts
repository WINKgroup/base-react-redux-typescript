import { LoaderState } from "app/components/Loader/redux/loader.reducer";
import { EditUserDetailsState } from "app/components/EditUserDetail/redux/editUserDetail.reducer";
import { MessageState } from "app/components/Message/redux/message.reducer";

export interface ComponentsStates {
    editUser: EditUserDetailsState;
    loader: LoaderState;
    message: MessageState;
}