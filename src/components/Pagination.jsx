import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const delta = 2;
        const left = currentPage - delta;
        const right = currentPage + delta;

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i <= right)) {
                pages.push(i);
            }
        }

        const visiblePages = [];
        let prev = null;
        for (const page of pages) {
            if (prev !== null && page - prev > 1) {
                visiblePages.push('...');
            }
            visiblePages.push(page);
            prev = page;
        }
        return visiblePages;
    };

    return (
        <div className="pagination">
            <button
                className="pagination__btn pagination__btn--nav"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                ‹
            </button>

            {getPageNumbers().map((item, idx) =>
                item === '...' ? (
                    <span key={`ellipsis-${idx}`} className="pagination__ellipsis">
                        …
                    </span>
                ) : (
                    <button
                        key={item}
                        className={`pagination__btn ${currentPage === item ? 'pagination__btn--active' : ''}`}
                        onClick={() => onPageChange(item)}
                    >
                        {item}
                    </button>
                )
            )}

            <button
                className="pagination__btn pagination__btn--nav"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                ›
            </button>
        </div>
    );
};

export default Pagination;
