export const Button = ({ text, value }) => {

    return (
        <button
        className={`button ${value.length === 0 && 'button_disabled'}`}
        type='submit'
        disabled={value.length === 0}
        >
            {text}
        </button>
    )
}