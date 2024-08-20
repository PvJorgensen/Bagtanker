import React from 'react'
import { SlideShow } from '../Components/BackgroundSlide/SlideShow'
import { Header } from '../Components/Header/Header'
import { FrontNews } from '../Components/FrontNews/FrontNews'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'

export const Home = () => {
  return (
    <>
    <ContentWrapper title='Forside'>
    <Header></Header>
    <FrontNews></FrontNews>
    <SlideShow></SlideShow>
    </ContentWrapper>
    </>
  )
}
