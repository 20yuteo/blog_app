import BaseCheckBox from "../../atoms/Forms/BaseCheckBox";
import FormLabel from "../../atoms/Forms/CardForms/FormLabel";
import { useState } from "react";
import styled from "styled-components";

export const TagsCheckBox = () => {

    const [checked, setChecked] = useState(false);

    const Label = styled.div`
        color: #A5A5A5;
    `;

    const checkTags = () => {
        if(checked){
            setChecked(false);
        } else {
            setChecked(true);
        }
    }

    return (
        <>
            <FormLabel>
                { !checked ? <Label>#TagName</Label> : <div>#TagName</div> }
                <input type="checkbox" defaultChecked={checked} onClick={checkTags} />
            </FormLabel>
        </>
    )
}