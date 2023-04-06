import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const ElementCard = ({img, title, subtitle}) => (
  <Card
    hoverable
    cover={<img alt="hero" src={img} />}
  >
    <Meta title={title} description={subtitle}/>
  </Card>
);