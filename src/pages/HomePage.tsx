import { Container, Text } from '@mantine/core';
import DisplayCardGridScroll from '../components/general/DisplayCardGridScroll';
import { dataArrGen } from '../data/tempData';

function HomePage(){
    return (
        <Container fluid>
            <Text fw={300} fz={52} ta="center">
            HK good design website
            </Text>

            <Text mb={48} fw={300} fz={18} mt={-2} c="dimmed" ta="center">
                Collections of Hong Kong great design website
            </Text>

            <DisplayCardGridScroll data={dataArrGen} />
        </Container>
    )
}
    
export default HomePage
