const Link = ({ changePage, pageTarget, text, disabled }) =>
    <button
        className="link"
        onClick={() => changePage(pageTarget)}
        disabled={disabled}
    >
        {text}
    </button>

export default Link;