import React from 'react'
import CustomImage from './CustomImage';
import { Box, Button } from '@chakra-ui/react' ;

function HeroSection() {
    const images = [
        "/img/foods/breakfast.jpg",
        "/img/foods/burger.jpg",
        "/img/foods/chef.jpg",
        "/img/foods/cookbg.jpg",
        "/img/foods/dessert.jpg",
        "/img/foods/fries.jpg",
        "/img/foods/fruit.jpg",
        "/img/foods/jello.jpg",
        "/img/foods/meal.jpg"
    ]
    return (
    <>
    <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Grab A Bite</h1>
                <p className="info">GrubPalace is a place where fantasies about dream meals come to reality. And our service is absolutely free. So start exploring now.</p>
                <Button boxShadow='dark-lg' className="btn">explore now</Button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    </Box>
    </>
    )
}
export default HeroSection;