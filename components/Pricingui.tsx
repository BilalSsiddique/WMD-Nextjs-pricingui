
import React from 'react'
import {Box} from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import styles from '../styles/Pricingui.module.css'
const Pricingui = () => {
  return (
    <>
    <Box  className={styles.powermain} display='flex' width='100%' height='20.50rem' bg='#6B46C1' alignItems='center' pt='50px' flexDirection='column'  >
        <Heading className={styles.main} color='#F7FAFC' fontSize='3.00rem' fontWeight='bold'>
          Simple pricing for your business
        </Heading>
        <Text className={styles.main2} color='#F7FAFC' fontSize='1.5rem' marginTop= '16px' fontWeight='medium' >Plans that are carefully crafted to suit your business.</Text>
    </Box>
    </>
  )
}



export default Pricingui