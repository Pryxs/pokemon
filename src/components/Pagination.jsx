const Pagination = ({changePage, page, elementPerPage, startIndex, length}) => {
    const maxPage = Math.ceil(length / elementPerPage)
    return (
        <div className="pagination">
            <button 
                disabled={page === 1 ? true : false} 
                onClick={() => changePage(page -1)}
            >
                &#60;
            </button>
            <button onClick={() => changePage(1)}>1</button>
            ...
            {page > 2 && <button onClick={() => changePage(page - 2)}>{page - 2}</button>}
            {page > 1 && <button onClick={() => changePage(page - 1)}>{page - 1}</button>}

            <input 
                type="number" 
                value={page} 
                min="1" 
                max={maxPage.toString()} 
                onChange={(e) => changePage(parseInt(e.target.value))}
            />

            {page < maxPage - 1 && <button onClick={() => changePage(page + 1)}>{page + 1}</button>}
            {page < maxPage - 2 && <button onClick={() => changePage(page + 2)}>{page + 2}</button>}

            ...
            <button onClick={() => changePage(maxPage)}>{maxPage}</button>
            <button 
                disabled={page >= maxPage ? true : false} 
                onClick={() => changePage(page + 1)}
            >
                &#62;
            </button>
        </div>
)}

export default Pagination;