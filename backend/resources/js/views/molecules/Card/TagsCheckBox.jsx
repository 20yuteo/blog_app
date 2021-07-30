import FormLabel from "../../atoms/Forms/CardForms/FormLabel";
import styled from "styled-components";

export const TagsCheckBox = ({name, register, watch}) => {
    const Label = styled.div`
        color: #A5A5A5;
    `;

    return (
        <>
            <FormLabel>
                { watch('tagsArray') !== undefined && watch('tagsArray').length > 0 && watch('tagsArray').includes(name) ? <div>{name}</div> : <Label>{name}</Label>}
                <input type="checkbox" value={name} {...register("tagsArray")} defaultChecked={false} />
            </FormLabel>
        </>
    )
}