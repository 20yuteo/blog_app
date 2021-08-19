import styled from "styled-components";
import Loader from "react-loader-spinner";
import Color from "../../styles/color";

const StyledLoader = () =>{

    const LoaderWrapper = styled.div`
        text-align: center;
    `;

    return (
        <LoaderWrapper>
            <Loader
                type="Puff"
                color={Color.Stroke}
                height={100}
                width={100}
            />
        </LoaderWrapper>
    )
}

export default StyledLoader;