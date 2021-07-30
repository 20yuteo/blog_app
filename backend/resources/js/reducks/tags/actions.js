export const GET_TAGS = "GET_TAGS";
export const getTagsAction = (tagState) => {
    return {
        type: "GET_TAGS",
        payload: {
            tag_array: tagState.tag_array
        }
    }
};