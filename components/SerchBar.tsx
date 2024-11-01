"use client"


import React, { useState } from 'react'
import SearchManuefactarer from './SearchManuefactarer'

const SerchBar = () => {

    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () =>{}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManuefactarer
                manufacturer ={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SerchBar