import React from 'react'
import { Layout } from '../Components/Layout/Layout'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'
import { Footer } from '../Components/Footer/Footer'
import { GetNews } from '../Components/getNews/GetNews'

export const NewsDetails = () => {
  return (
    <ContentWrapper title='Nyheder'>
      <Layout />
      <GetNews />

      <Footer />
    </ContentWrapper>
  )
}
