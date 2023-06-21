import Link from "./Link";

const Pagination = ({ changePage, currentPage, elementPerPage, length }) => {
    const maxPage = Math.ceil(length / elementPerPage)
    const pageList = Array.from({ length: maxPage }, (v, k) => k + 1).map((page) => {
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