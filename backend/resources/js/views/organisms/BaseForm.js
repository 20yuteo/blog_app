import styled from 'styled-components';
import Size from '../styles/size';

const BaseForm = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: ${(props) => props.PaddingTop}px;
    padding-bottom: ${(props) => props.PaddingBottom}px;
    padding-left: ${(props) => props.PaddingLeft}px;
    padding-right: ${(props) => props.PaddingRight}px;
    margin: 0 auto;
    @media screen and (max-width:${Size.MediaScreen.Small}px) {
        max-width: 32rem;
    }
    @media screen and (min-width:${Size.MediaScreen.Small}px) and ( max-width:${Size.MediaScreen.Medium}px) {
        max-width: 32rem;
    }
    @media screen and (min-width:${Size.MediaScreen.Large}px) {
        max-width: 64rem;
    }
`;
export default BaseForm;