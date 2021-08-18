import React, {useState} from "react";
import pg from './paginator.module.css';

type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const Paginator = (props: PaginatorPropsType) => {
    const {pageSize, currentPage, onPageChanged, totalUserCount} = props

    let pagesCount = Math.ceil(totalUserCount / pageSize)

    let [portionNumber, setPortionNumber] = useState<number>(1)
    let portionCount = Math.ceil(pagesCount / pageSize)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize + 1
    let rightPortionPageNumber = portionNumber * pageSize

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return <span key={i} className={currentPage === p ? pg.selectedPage : pg.page}
                                 onClick={() => (onPageChanged(p))}
                    >{p}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>}
        </div>
    )
}
export default Paginator
