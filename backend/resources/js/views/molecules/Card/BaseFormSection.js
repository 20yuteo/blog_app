import styled from 'styled-components';
import Size from '../../styles/size';

const BaseFormSection = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: auto;
    text-align: center;
    @media screen and (max-width:${Size.MediaScreen.Small}px) {
            width: 270px;
        }
    @media screen and (min-width:${Size.MediaScreen.Small}px) and ( max-width:${Size.MediaScreen.Medium}px) {
        min-height: 260px;
        width: 500px;
    }
    @media screen and (min-width:${Size.MediaScreen.Large}px) {
        min-height: 260px;
        width: 750px;
    }
`;
export default BaseFormSection;