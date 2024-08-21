import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'
import { Layout } from '../Components/Layout/Layout'
import { GetProducts } from '../Components/getProducts/GetProducts'
import { Footer } from '../Components/Footer/Footer'

export const Products = () => {
  return (
    <ContentWrapper title='Produkter'>
      <Layout />
      <GetProducts />
      <Footer></Footer>
    </ContentWrapper>
  )
}
