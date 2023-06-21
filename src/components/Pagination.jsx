import Link from "./Link";

const Pagination = ({ changePage, page, elementPerPage, length }) => {
    const maxPage = Math.ceil(length / elementPerPage)
    return (
        <div className="pagination">
            <button
                disabled={page === 1 ? true : false}
                onClick={() => changePage(page - 1)}
            >
                &#60;
            </button>
            <Link changePage={changePage} pageTarget={1} />
            <span>...</span>
            {page > 3 && <Link changePage={changePage} pageTarget={page - 2} />}
            {page > 2 && <Link changePage={changePage} pageTarget={page - 1} />}

            <input
                type="number"
                value={page}
                min="1"
                max={maxPage.toString()}
                onChange={(e) => changePage(parseInt(e.target.value))}
            />

            {page < maxPage - 1 && <Link changePage={changePage} pageTarget={page + 1} />}
            {page < maxPage - 2 && <Link changePage={changePage} pageTarget={page + 2} />}

            <span>...</span>
            <Link changePage={changePage} pageTarget={maxPage} />
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