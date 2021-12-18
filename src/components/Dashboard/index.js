import ViewUsername from "../ViewUsername";
import ViewCounter from "../ViewCounter"
import { useEffect, useState } from "react";
import { doGetRequest } from './../../services/doGetResquest';


export default function Dashboard() {
  const API_URL = 'https://swapi.py4e.com/api/'
  
  const [person, setPerson] = useState('')
  const [eyeColor, setEyeColor] = useState('')

  useEffect(() => {
    const apiConsult = async () => {
      const response = await doGetRequest(`${API_URL}people/1/`)
      console.log(`response`, response)
      setPerson(response.name)
      setEyeColor(response.eye_color)
    }
    apiConsult()

  })
  return (
    <div>
      <h2>Dashboard</h2>
      <ViewUsername />
      <ViewCounter />
      <p>{person} has {eyeColor} eyes</p>
    </div>
  )
}

