import React from "react";
import Form from "next/form";

const SearchForm = () => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />
    </Form>
  );
};

export default SearchForm;
