import './style.css'
import IconesHeader from "../../components/iconesHeader";
import Logo from '../../components/logo/index.js';
import OpcoesHeader from "../../components/opcoesHeader";

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader/>
            <IconesHeader/>
      </header>
    )
}

export default Header;