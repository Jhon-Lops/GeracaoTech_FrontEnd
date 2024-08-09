import Logo from "../Logo";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import Cart from "./mini-cart.svg";
import { Container, SearchCart, InputCart, Wrapper, Pesquisa } from "./styles";


function Header() {
    return (  
        <Wrapper >
            <Container>
                <MdMenu style={{ width: "24px", height: "24px", paddingLeft: "20px"}}/>
                <Logo />
                <SearchCart>
                    <CiSearch style={{ width: "20px", height: "20px"}}/>
                    <img src= {Cart} style={{ width: "24px", height: "24px"}}/>
                </SearchCart>
            
            </Container>

            <Pesquisa>
                <InputCart placeholder="Pesquisar produto..."/>

            </Pesquisa>
        </Wrapper>

        
    ); 

}

export default Header;

// voltei, hj o dia ta que ta