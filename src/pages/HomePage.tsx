import { Container, Text } from '@mantine/core';
import DisplayCardGridScroll from '../components/general/DisplayCardGridScroll';
import { dataArrGen } from '../data/tempData';
import { motion } from 'framer-motion';

function HomePage(){
    return (
        <motion.div
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -600, opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
        <Container fluid>
            <Text fw={300} fz={52} ta="center">
                HK good design website
            </Text>

            <Text mb={48} fw={300} fz={18} mt={-2} c="dimmed" ta="center">
                Collections of Hong Kong / Chinese word main great design website
            </Text>

            <DisplayCardGridScroll data={dataArrGen} />
        </Container>
        </motion.div>
    )
}
    
export default HomePage
