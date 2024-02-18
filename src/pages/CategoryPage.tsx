import { Text, Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import DisplayCardGridScroll from "../components/general/DisplayCardGridScroll";
import { dataArrGen } from "../data/tempData";

function CategoryPage(){

    let { type } = useParams();
    const finalData = dataArrGen.filter( v => v.category.includes(type as any) )

    return (
        <>
        <Container fluid>
            <Text fw={300} fz={52}>
                { type } Website Design
            </Text>

            <Text mb={48} fw={300} fz={18} mt={-8} c="dimmed">
                Here are the great { type } Design
            </Text>

            <DisplayCardGridScroll data={finalData} />
        </Container>
        </>
    )
}
    
export default CategoryPage
