import styled from "styled-components";
import { TagsCheckBox } from "./Card/TagsCheckbox";

export const TagsWrapper = ({tag_array, register, watch}) => {

    const StyledTagsWrapper = styled.section`
        display: flex;
        flex-wrap: wrap;
    `;

    let tagSectionArray = [];

    if (tag_array !== undefined && tag_array.length > 0){
        for (let i = 0; i < tag_array.length; i ++){
            console.log(tag_array[i]);
            tagSectionArray.push(<TagsCheckBox name={tag_array[i]['name']} register={register} watch={watch} key={i}　/>);
        }
    }

    return (
        <StyledTagsWrapper>
            { tagSectionArray }
        </StyledTagsWrapper>
    )
}