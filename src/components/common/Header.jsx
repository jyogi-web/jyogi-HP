import { Link } from 'react-router-dom';
import { Container, Image, Flex, Spacer, Box } from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';

const Header = () => {
    return (
        <Container
            px={{ base: 3, md: 5 }}
            maxW={{ base: "100%", md: "container.xl" }}
        >
            <Flex
                align="center"
                py={{ base: 3, md: 4 }}
                justify="space-between"
            >
                <Link to="/">
                    <Image
                        src="/imgs/jyogi-text.png"
                        alt="Jyogi"
                        maxH={{ base: "30px", md: "auto" }}
                    />
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
