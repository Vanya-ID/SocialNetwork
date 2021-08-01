import React from "react";
import pg from './paginator.module.css';

type Paginator = {
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
}

let Paginator = (props: Paginator) => {

    let pagesCount = Math.ceil(500 / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i) => {
                return <span key={i} className={props.currentPage === p ? pg.selectedPage : pg.page}
                             onClick={() => (props.onPageChanged(p))}
                >{p}</span>
            })}
        </div>
    )
}
export default Paginator
