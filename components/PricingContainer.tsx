import React from 'react'
import { Box,Heading,Img,Text } from '@chakra-ui/react'
import styles from '../styles/PricingContainer.module.css'
import { Button } from '@chakra-ui/react'
import tick from '../public/tick.png'
import Image from 'next/image'
const PricingContainer = () => {
  return (
    <>
    <Box className={styles.pricing}  position='absolute' top='70%' left='5' right='5' margin='0px auto'  borderRadius='12px'  bg='#FFFFFF' height='auto'>
      <Box className={styles.blend} borderTopLeftRadius='12px' borderBottomLeftRadius='12px'  display='flex'  flexDirection='column' pt='40px' alignItems='center' mix-blend-mode='soft-light' bg='#e1dfe7' height='21.06rem' width='32.00rem' >
            <Heading as='h1' color='#171923' fontWeight='extrabold' pt='0px' className={styles.price2}  fontSize='1.50rem'>Premium PRO</Heading>
            <Heading className={styles.price1} fontSize='3.75rem' as='h1' color='#171923' pt='5px' >$329</Heading>
            <Heading className={styles.extrabold} pb='20px' pt='10px' fontSize='1.13rem' color='#171923'>billed just once</Heading>
            <Button className={styles.button}  color='white'   bg='#805AD5' mt='25px'>Get Started</Button>
      </Box>
      <Box  max-width='41.13rem'  className={styles.access} fontSize='1.13rem'>
        <Text>Access these features when you get this pricing package for your business.</Text>
        <Box mt='20px'  display='flex' >
          <Image className={styles.imagelogo} src={tick} alt='logo'  />
          <Text   ml='20px'>International calling and messaging API</Text>
        </Box>
        <Box mt='16px'  display='flex' >
          <Image className={styles.imagelogo} src={tick} alt='logo'  />
          <Text   ml='20px'>Additional phone numbers</Text>
        </Box>
        <Box mt='16px'  display='flex' >
          <Image className={styles.imagelogo} src={tick} alt='logo'  />
          <Text   ml='20px'>Automated messages via Zapier</Text>
        </Box>
        <Box mt='16px'  display='flex' >
          <Image className={styles.imagelogo} src={tick} alt='logo'  />
          <Text   ml='20px'>24/7 support and consulting</Text>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default PricingContainer


