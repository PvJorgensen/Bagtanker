import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'
import { Layout } from '../Components/Layout/Layout'
import { Form } from '../Components/ContactForm/Form'
import { Footer } from '../Components/Footer/Footer'

export const Contact = () => {
  return (
    <ContentWrapper title='Kontakt'>
      <Layout />
      <Form />
      <Footer></Footer>
    </ContentWrapper>
  )
}
