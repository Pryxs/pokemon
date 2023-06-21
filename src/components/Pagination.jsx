const Pagination = ({ changePage, page, elementPerPage, startIndex, length }) => {
    const maxPage = Math.ceil(length / elementPerPage)
    return (
        <div className="pagination">
            <button
                disabled={page === 1 ? true : false}
                onClick={() => changePage(page - 1)}
            >
                &#60;
            </button>
            <span className="link" onClick={() => changePage(1)}>1</span>
            <span>...</span>
            {page > 2 && <span className="link" onClick={() => changePage(page - 2)}>{page - 2}</span>}
            {page > 1 && <span className="link" onClick={() => changePage(page - 1)}>{page - 1}</span>}

            <input
                type="number"
                value={page}
                min="1"
                max={maxPage.toString()}
                onChange={(e) => changePage(parseInt(e.target.value))}
            />

            {page < maxPage - 1 && <span className="link" onClick={() => changePage(page + 1)}>{page + 1}</span>}
            {page < maxPage - 2 && <span className="link" onClick={() => changePage(page + 2)}>{page + 2}</span>}

            <span>...</span>
            <span className="link" onClick={() => changePage(maxPage)}>{maxPage}</span>
            <button
                disabled={page >= maxPage ? true : false}
                onClick={() => changePage(page + 1)}
            >
                &#62;
            </button>
        </div>
    )
}

export default Pagination;