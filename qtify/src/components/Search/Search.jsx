import React from 'react'
import styles from "./Search.module.css"
import {ReactComponent as SearchIcon} from "../../assets/SearchIcon.svg"

const Search = ({search}) => {
  return (
    <div >
      <form className={styles.wrapper}  >
        <input className={styles.search} placeholder={search} />
        <div>
            <button className={styles.searchButton} type='submit' >
              <SearchIcon/>
            </button>
        </div>
      </form>
        </div>
  )
}

export default Search;