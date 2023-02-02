import React from 'react'
import { Flex,Text } from '@chakra-ui/react'
import Image from 'next/image'
import logo1 from '../public/1st.png'
import logo2 from '../public/2nd.png'
import logo3 from '../public/3rd.png'

import styles from '../styles/Iconscomponent.module.css'
const Lastcomponent = () => {
  return (
    <>
        <Flex className={styles.icons} position='absolute' justifyContent='space-between'  top='190%' left='18' right='18' margin='0 auto'  >
            <Flex  className={styles.iconscontainer} alignItems='center' bg='white' width='18.06rem' >
                <Image className={styles.logo1} src={logo1}  alt='1'/>
                <Text ml='25px' fontSize='1.1rem' fontWeight='extrabold' color='#171923'>30 days money back Guarantee</Text>
            </Flex>
            <Flex className={styles.iconscontainer}  alignItems='center' bg='white' width='18.06rem' >
                <Image className={styles.logo1} src={logo2}  alt='1'/>
                <Text ml='25px' fontSize='1.1rem' fontWeight='extrabold' color='#171923'>No setup fees
                100% hassle-free</Text>
            </Flex>
            <Flex className={styles.iconscontainer}  alignItems='center' bg='white' width='18.06rem' >
                <Image className={styles.logo1} src={logo3}  alt='1'/>
                <Text ml='25px' fontSize='1.1rem' fontWeight='extrabold' color='#171923'>No monthly subscription
                Pay once and for all</Text>
            </Flex>
        </Flex>
    </>
  )
}

export default Lastcomponent