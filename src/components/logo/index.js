import logoAlura from '../../assets/logo.svg'

function Logo() {
    return (
        <div className='logo'>
          <img src={logoAlura} alt='Logo' />
          <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;