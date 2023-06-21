const Link = ({ changePage, pageTarget }) => <span className="link" onClick={() => changePage(pageTarget)}>{pageTarget}</span>

export default Link;