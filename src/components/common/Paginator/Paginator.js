import React, {useState} from 'react';
import styles from "./Paginator.module.css";



let Paginator = ({currentPage,onPageChanged , totalItemsCount ,pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber,setPortionNumber] = useState(1) ;
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 ;
    let rightPortionPageNumber = portionNumber * portionSize ;

    return <div>
        <div className={  (styles.paginator,styles.selectedPage) } >
            { portionNumber > 1 &&
                <button onClick ={ () => setPortionNumber(portionNumber - 1)}> PFEV < /button> }
            {
                pages.
                    filter (p => p >=leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map (p => {
                    return <span className ={ ({[styles.selectedPage]:currentPage === p}, styles.selectedPage) }
                                 onClick = { (e) => {onPageChanged (p) ; } } > {p} </span> })}
            { portionCount > portionNumber &&
                <button onClick = { () => setPortionNumber( portionNumber + 1)}> NEXT </button> }


        </div>


    </div>

            }

    export default Paginator ;

