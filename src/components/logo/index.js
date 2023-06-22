import './style.css'
import logoAlura from '../../assets/logo.svg'

function Logo() {
    return (
        <div className='logo'>
          <img 
            src={logoAlura} 
            alt='Logo' 
            className='logo-img'
          />
          <p><strong>Alura</strong>Books</p>
        </div>
    );
}

export default Logo;