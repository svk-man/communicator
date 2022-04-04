function OtherPageLink(props) {
  const { text } = props;

  return (
    <a className="header__link">
      { text }
    </a>
  )
}

export default OtherPageLink