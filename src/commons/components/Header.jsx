import '../assets/styles/header.css';

function Header(props) {
  const { content } = props;

  return (
    <header className='header'>
      { content }
    </header>
  )
}

export default Header;
