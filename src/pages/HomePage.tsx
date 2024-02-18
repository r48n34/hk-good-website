import { Container } from '@mantine/core';
import DisplayCardGrid from '../components/general/DisplayCardGrid';

function HomePage(){
    return (
        <Container fluid>
            <DisplayCardGrid data={[]} />
        </Container>
    )
}
    
export default HomePage
