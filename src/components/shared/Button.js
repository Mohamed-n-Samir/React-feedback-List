const Button = ({children, version, type, isDisabled}) => {
    return ( <button disabled={isDisabled} type={type} className={`btn ${version}`} >
        {children}
    </button> );
}
 

Button.defaultProp = {
    version: "primary",
    type: "button",
    isDisabled: false,
}

export default Button;