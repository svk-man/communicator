function HomeNavigationLink(props) {
  const { image, text } = props;

  return (
    <a className="link">
      <img className="link__image" src={ image } alt={ text } />
      <h2 className='link__text'>
        { text }
      </h2>
    </a>
  )
}

export default HomeNavigationLink;
