import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
const SearchForm = () => {
  const query = "Test";
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset/>}
      </div>
    </Form>
  );
};

export default SearchForm;
