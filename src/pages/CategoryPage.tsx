import { Text, Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import DisplayCardGridScroll from "../components/general/DisplayCardGridScroll";

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

function CategoryPage(){

    let { type } = useParams();

    return (
        <>
        <Container fluid>

            <Text fw={300} fz={52}>
                { type } Website Design
            </Text>

            <Text mb={48} fw={300} fz={18} mt={-8} c="dimmed">
                Here are the great { type } Design
            </Text>

            <DisplayCardGridScroll data={dataArr} />
        </Container>
        </>
    )
}
    
export default CategoryPage
