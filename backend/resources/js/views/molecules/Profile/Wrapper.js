import styled from 'styled-components';
import Size from '../../styles/size';

const Wrapper = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 2;
        @media screen and (min-width:${Size.MediaScreen.Large}px) {
            max-width: 480px;
        }
`;
export default Wrapper;