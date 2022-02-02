import React, { useState, useEffect } from 'react';
import { Portfolio, PortfolioTitle, PortfolioList, PortfolioItem, Box, BoxImg, Overlay, OverlaySpan, Span } from './style';
import axios from 'axios';

const Portofolio = () => {

  const [images, setimages] = useState([])
  useEffect(() => {
    axios.get('js/data.json').then(res => {
      setimages(res.data.portfolio)
    })
  }, [])
  console.log(images)

  const imagesList = images.map((imageItem) => {
    return (
     
        <Box key={imageItem.id}>
          <BoxImg src={imageItem.image} alt="" />
          <Overlay>
            <OverlaySpan>
              Show Image
            </OverlaySpan>
          </Overlay>
        </Box>
    
    )
  })



  return (
    <Portfolio>
      <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
      <PortfolioList>
        <PortfolioItem active>All</PortfolioItem>
        <PortfolioItem>HTML</PortfolioItem>
        <PortfolioItem>Photoshop</PortfolioItem>
        <PortfolioItem>Wordpress</PortfolioItem>
        <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
    <div>
      {imagesList}
    </div>
    </Portfolio>
  );


}

export default Portofolio;