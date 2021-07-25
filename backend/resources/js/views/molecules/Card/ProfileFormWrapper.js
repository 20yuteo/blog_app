import styled from "styled-components";
import Size from "../../styles/size";

const ProfileFormWrapper = styled.section`
    display: flex;
    @media screen and (max-width:${Size.MediaScreen.Small}px){
        flex-direction: column;
    }
`;
export default ProfileFormWrapper;