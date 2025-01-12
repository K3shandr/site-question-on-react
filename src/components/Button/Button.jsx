import './Button.css'

function Button(props){
    console.log(props)
    return(
        <>
            <button>{props.buttonItem}</button>
        </>

    )
}

export default Button