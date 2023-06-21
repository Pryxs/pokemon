import Link from "./Link";

const Pagination = ({ changePage, currentPage, elementPerPage, length }) => {
    const maxPage = Math.ceil(length / elementPerPage)
    const pageList = Array.from({ length: maxPage }, (v, k) => k + 1).map((page, index) => {
        if (page < currentPage - 1 && page !== 1) return;
        if (page > currentPage + 1 && page !== maxPage) return;

        return page;
    }).filter(Boolean)

    if (1 < currentPage - 2) pageList.splice(1, 0, '...');
    if (currentPage + 2 < maxPage) pageList.splice(pageList.length - 1, 0, '...');

    return (
        <div className="pagination">
            <Link disabled={currentPage === 1 ? true : false} changePage={changePage} pageTarget={currentPage - 1} text={'<'} />

            {pageList && pageList.map((page) => {
                if (typeof (page) === 'string') return < span > {page}</span>
                return <Link key={page.toString()} changePage={changePage} pageTarget={page} text={page} />
            })}

            <Link disabled={currentPage === maxPage ? true : false} changePage={changePage} pageTarget={currentPage + 1} text={'>'} />
        </div >
    )
}

export default Pagination;



// <button
// disabled={page === 1 ? true : false}
// onClick={() => changePage(page - 1)}
// >
// &#60;
// </button>
// <Link changePage={changePage} pageTarget={1} />
// <span>...</span>
// {page > 3 && <Link changePage={changePage} pageTarget={page - 2} />}
// {page > 2 && <Link changePage={changePage} pageTarget={page - 1} />}

// <input
// type="number"
// value={page}
// min="1"
// max={maxPage.toString()}
// onChange={(e) => changePage(parseInt(e.target.value))}
// />

// {page < maxPage - 1 && <Link changePage={changePage} pageTarget={page + 1} />}
// {page < maxPage - 2 && <Link changePage={changePage} pageTarget={page + 2} />}

// <span>...</span>
// <Link changePage={changePage} pageTarget={maxPage} />
// <button
// disabled={page >= maxPage ? true : false}
// onClick={() => changePage(page + 1)}
// >
// &#62;
// </button>