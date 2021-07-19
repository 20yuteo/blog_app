const Error = (props) => {
    return (
        <StyledError>
            { props.checkElement && props.checkElement.type === "required" ?  props.errorMessage : '' }
            { props.checkElement && props.checkElement.type === "pattern" ?  props.errorMessage : '' }
        </StyledError>
    )
}
export default Error;