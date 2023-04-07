//This component should only wrap the Form Component as its child. This is to illustrate that you can use nested components with context without passing down props.
import Form from "./Form"

export default () => {
    return(
        <>
        <Form />
        </>
    )
}