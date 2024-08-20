import React from 'react'
import { ContentWrapper } from '../Components/ContentWrapper/ContentWrapper'
import { Layout } from '../Components/Layout/Layout'
import { Logon } from '../Components/Login/Logon'

export const Login = () => {
  return (
    <ContentWrapper title='Login'>
      <Layout />
      <Logon />
    </ContentWrapper>
  )
}
