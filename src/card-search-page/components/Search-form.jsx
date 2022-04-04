function CardSearchForm(props) {
  const { onSearchChange, onFormSubmit, searchValue } = props;

  return (
    <form className="wrapper form" onSubmit={ onFormSubmit }>
      <input className="form__search" type="text" value={ searchValue } onChange={ onSearchChange } />
      <input className="form__search__icon" type="submit" value="" />
    </form>
  )
}

export default CardSearchForm