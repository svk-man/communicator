export function HomeNavigationLink(props) {
  const { img, text } = props;

  return (
    <a className="link">
      <img className="link__image" src={ img } alt={ text } />
      <h2 className='link__text'>
        { text }
      </h2>
    </a>
  )
}