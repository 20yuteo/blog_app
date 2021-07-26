export const ADD_POST = "ADD_POST";
export const addPostAction = (postState) => {
    return {
        type: "ADD_POST",
        payload: {
            tags_name: postState.tags_name
        }
    }
}