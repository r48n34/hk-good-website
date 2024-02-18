import { Container } from '@mantine/core';
// import DisplayCardGrid from '../components/general/DisplayCardGrid';
import DisplayCardGridScroll from '../components/general/DisplayCardGridScroll';
import { dataArrGen } from '../data/tempData';

function HomePage(){
    return (
        <Container fluid>
            <DisplayCardGridScroll data={dataArrGen} />
        </Container>
    )
}
    
export default HomePage
