import React, { useState, useRef } from "react";
import MapContainer from "./MapContainer";
const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const elInput = useRef();
  const onChange = e => {
    setInputText(e.target.value);
  };
  const [place, setPlace] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
    elInput.current.focus();
  };
  return (
    <div>
      <form className="inputForm" onSubmit={onSubmit}>
        <input
          placeholder="검색할 장소를 입력해주세요."
          onChange={onChange}
          value={inputText}
          ref={elInput}
        />
        <button type="submit">검색</button>
      </form>
      <MapContainer searchPlace={place} />
    </div>
  );
};
export default SearchPlace;
