import { Container } from '@mantine/core';
import DisplayCardGrid from '../components/general/DisplayCardGrid';

const dataArr = new Array(100).fill(0).map( (_, i) => (
    {
        title: `ono-pharma recruit ${i}`,
        src: "https://recruit.ono-pharma.com/",
        imageSrc: "",
        organization: "ono pharma",
        category: ["requitment"],
        tags: ["aaa", "bbb", "ccc"]
    }
))

function HomePage(){
    return (
        <Container fluid>
            <DisplayCardGrid data={dataArr} />
        </Container>
    )
}
    
export default HomePage
