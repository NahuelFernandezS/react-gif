import React, { useState } from "react";

export const AddCategory = ( { onNewCategory }) => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = (event) => {
    /* event.preventDefault(); */
    setInputValue(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    const value = inputValue.trim();
    if ( value.length <= 2) return;
 /*    setCategories((categories) => [inputValue, ...categories]);
    setInputValue(''); */
    onNewCategory(value);
    setInputValue(''); 
  }
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
