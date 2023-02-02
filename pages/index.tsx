import Head from "next/head"
import Pricingui from "../components/Pricingui"
import PricingContainer from "../components/PricingContainer"
import Lastcomponent from "../components/Lastcomponent"

const Home= ()=>{

    return (
        < >
         <Head>
            <title>Pricing UI</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
         </Head>
        <Pricingui  />
        <PricingContainer/>
        <Lastcomponent/>
        
        
        </>
    )
}

export default Home