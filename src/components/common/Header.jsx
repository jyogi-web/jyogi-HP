import { Link } from 'react-router-dom';
import { Container, Image, Flex, Spacer, Box } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

const Header = () => {
    return (
        <Container px={5}>
            <Flex align="center" py={2}>
                <Link to="/">
                    <Image src="/imgs/jyogi-text.png" alt="Jyogi" />
                </Link>
                <Spacer />
                <Box>
                    <ColorModeButton />
                </Box>
            </Flex>
        </Container>
    );
}
export default Header;
