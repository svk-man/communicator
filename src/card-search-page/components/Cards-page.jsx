import { useEffect, useState } from "react";
import Header from "../../commons/components/Header";
import Footer from "../../commons/components/footer";
import HeaderContent from "./Header";
import CardSearchForm from "./Search-form";
import FoundCardList from "./Card-list";
import "../style/card-search-style.css";
import API from "../apis";
import { request } from "../../commons/request";

function CardSearchPage() {
  const [searchText, setSearchText] = useState( '' );
  const [submittedValue, setSubmittedValue] = useState( '' );
  const [cardList, setCardList] = useState( [] );

  function onSearchChange(event) {
    setSearchText( event.target.value );
  }

  function onFormSubmit(event) {
    event.preventDefault();

    setSubmittedValue( searchText );
    setSearchText( '' );
  }

  useEffect(() => {
    request(`${ API.PICTOGRAMS_LIST_KEY }${ submittedValue }`)
      .then(data => {
        if (Array.isArray(data)) {
          setCardList(data);
        }
      })
  }, [submittedValue])

  return (
    <>
      <Header content={ HeaderContent } />
      <CardSearchForm searchValue={ searchText } onSearchChange={ onSearchChange } onFormSubmit={ onFormSubmit } />
      <FoundCardList cardList={ cardList } />
      <Footer />
    </>
  )
}

export { CardSearchPage }