import { Link } from 'react-router-dom';
import { Container,Image } from '@chakra-ui/react';

const Header = () => {
    return(
        <Container px={5}>
            <Link to="/"> <Image src="/imgs/jyogi-text.png" alt="Jyogi"/></Link>
        </Container>
    );
}
export default Header;
