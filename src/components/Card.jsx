import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle,  Button
  } from 'reactstrap';

const Cards = (props)=>{
    return(
        <>
        <Card>
        <CardImg width="100%" heigth="100%" src={props.imgsrc} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
        </>
    )
}

export default Cards;