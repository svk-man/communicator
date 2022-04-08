import { useEffect, useState } from 'react';
import Header from '../../../commons/components/Header';
import Footer from '../../../commons/components/Footer';
import HeaderContent from './HeaderContent';
import CardSearchForm from './CardSearchForm';
import FoundCardList from './FoundCardList';
import '../assets/style/card-search-style.css';
import { requestCardData } from '../../../commons/network';

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
    requestCardData( submittedValue )
      .then(data => {
        setCardList(data);
      })
  }, [submittedValue]);

  return (
    <>
      <Header content={ HeaderContent } />
      <CardSearchForm searchValue={ searchText } onSearchChange={ onSearchChange } onFormSubmit={ onFormSubmit } />
      <FoundCardList cardList={ cardList } />
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default CardSearchPage;
=======
export { CardSearchPage };
>>>>>>> main
