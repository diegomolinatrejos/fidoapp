import React from 'react'
import './style.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Navigation} from "swiper"
import {Card, CardActions, CardContent, Button, Typography} from '@mui/material'



function Cards({card}) {

  return (
      <div className='cardBox'>
        <Card style={{borderRadius:'1.2rem', marginRight:'0.5rem', boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'}} >
          <CardContent style={{padding:'0.6rem 0.7rem 0.2rem 0.7rem'}}>
            <Swiper slidesPerView={1}
                spaceBetween={30}
                loop={false}
                mousewheel={true}
                cssMode={true}
                pagination
                navigation={true}
                modules={[Pagination,Navigation]}
                className='swiperContainer'>
                  { card.imgSrc.map((src,i)=>(
                <SwiperSlide key={i}>
                    <img src={src} className='cardImg' />
                </SwiperSlide>
                ))}
            </Swiper>
            <Typography  style={{marginTop:'0.7rem', fontWeight:700}} >   
              {card.title}
            </Typography>
            <Typography  component="p">
            {card.descripcion}
            </Typography>
            <Typography color="textSecondary">
            ₡{card.price}
            </Typography> 
          </CardContent>
          <CardActions>
            <Button size="small" style={{color:'#8C30F5', backgroundColor:'#F1E4FF', fontWeight:600, borderRadius:'0.5rem'}}>Información</Button>
          </CardActions>
        </Card>
      </div>
  )
}

export default Cards
