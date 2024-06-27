import React from 'react'
import { Container } from 'react-bootstrap'
import CardsSection from '../Components/CardsSection'
import {useSelector} from "react-redux";

export default function ProjectsPage() {
  const cards = useSelector(state=>state.cards.filteredCards);
  return (
    <Container fluid className='mx-0 px-0'>
      <CardsSection cards={cards}/>
    </Container>
  )
}
