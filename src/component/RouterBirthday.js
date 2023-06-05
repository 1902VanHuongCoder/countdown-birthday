import React from 'react'
import { useParams } from 'react-router-dom'
import Birthday from './Birthday';

const RouterBirthday = () => {
    const params = useParams();
    const {name, day, month} = params;
  return (
    <Birthday name={name} day={day} month={month} />
  )
}

export default RouterBirthday