import React from 'react'
import Menu from '../components/ui/menu'
import Card from '../components/ui/cars/card'
import { Car } from '../lib/types/types';

type Props = {};



const car: Car = {
  "name":"SuperCar",
  "type":"BMW",
  "color":"Red",
  "engine":{
    "serialnumber":54287,
    "horsepower":180,
  },
}

export default function page({}: Props) {
  return (
    <div>
      <h1>Cars Page</h1>
      <Card car = {car} />
    </div>
  )
}