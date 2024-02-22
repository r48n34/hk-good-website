import { Text, Container } from "@mantine/core";
import { useParams } from "react-router-dom";
import DisplayCardGridScroll from "../components/general/DisplayCardGridScroll";
import { dataArrGen } from "../data/tempData";
import { motion } from 'framer-motion';

function CategoryPage() {

    let { type } = useParams();
    const finalData = dataArrGen.filter(v => v.category.includes(type as any))

    return (
        <>
            <motion.div
                initial={{ x: 600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -600, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <Container fluid>
                    <Text fw={300} fz={52}>
                        {type} Website Design
                    </Text>

                    <Text mb={48} fw={300} fz={18} mt={-8} c="dimmed">
                        Here are the great {type} Design ( Total: {finalData.length} )
                    </Text>

                    <DisplayCardGridScroll data={finalData} />
                </Container>
            </motion.div>
        </>
    )
}

export default CategoryPage
