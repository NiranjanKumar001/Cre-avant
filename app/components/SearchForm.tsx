import React from 'react'
import Form from "next/form";

const SearchForm = () => {
  return (
    <Form action="/" scroll={false} className='search-form'>SearchForm</Form>
    <input
    name="query"
    defaultValue=""
    className='search-input'
    placeholder='Search Startups' 
    />
  )
}

export default SearchForm