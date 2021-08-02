import styled from "styled-components";
import Size from "../../styles/size";
import Color from "../../styles/color";


const PostCard = styled.div`
    background-color: ${ Color.Card.Background };
    color: ${ Color.Card.Form.Color };
    font-size: ${ Size.FontSize.Medium }rem;
    height: 240px;
    width: 240px;
    padding: 16px;
    margin: 8px;
    box-sizing: border-box;
`;

export default PostCard;