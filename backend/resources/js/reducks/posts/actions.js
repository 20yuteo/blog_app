export const ADD_POST = "ADD_POST";
export const addPostAction = (postState) => {
    return {
        type: "ADD_POST",
        payload: {
            tags_name: postState.tags_name
        }
    }
}

export const GET_POST = "GET_POST";
export const getPostsAction = (postState) => {
    return {
        type: "GET_POST",
        payload: {
            post_array: postState.post_array
        }
    }
}