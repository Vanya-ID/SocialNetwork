import React from "react";
import pg from './paginator.module.css';

type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

const Paginator = (props: PaginatorPropsType) => {
    const {pageSize, currentPage, onPageChanged} = props

    //                      totalUserCount
    let pagesCount = Math.ceil(500 / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => {
                return <span key={i} className={currentPage === p ? pg.selectedPage : pg.page}
                             onClick={() => (onPageChanged(p))}
                >{p}</span>
            })}
        </div>
    )
}
export default Paginator
