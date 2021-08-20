import Size from "../../styles/size";
import Color from "../../styles/color";
import styled from "styled-components";

    const StyledTitle = styled.div`
        font-size: 3.6rem;
    `;

    const StyledCreatedAt = styled.div`
        font-size: 1.6rem;
    `;

    const TitleWrapper = styled.div`
        color: ${ Color.Headline };
        font-weight: ${ Size.FontWeight };
        border: 8px solid ${ Color.Headline };
        background-color: ${ Color.Card.Background };
        color: ${ Color.Card.Headline };
        padding: 24px;
        margin: 16px;
        display: flex;
        flex-direction: column;
    `;

const Title = (props) => {
    return (
            <TitleWrapper>
                <StyledTitle>
                    { props.title }
                </StyledTitle>
                <StyledCreatedAt>
                    created_at: { props.created_at }
                </StyledCreatedAt>
            </TitleWrapper>
        )
}
export default Title;