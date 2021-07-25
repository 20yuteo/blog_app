import styled from 'styled-components';
import Size from '../../styles/size';

const BaseFormSection = styled.section`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 8px;
    @media screen and (min-width:${Size.MediaScreen.Small}px) and ( max-width:${Size.MediaScreen.Medium}px) {
        min-height: 260px;
    }
    @media screen and (min-width:${Size.MediaScreen.Large}px) {
        min-height: 260px;
    }
`;
export default BaseFormSection;