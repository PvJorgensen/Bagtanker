import React from 'react'
import { SecondHeader } from '../SecondHeader/SecondHeader'
import { CategoryNav } from '../CategoryNav/CategoryNav'
import { Footer } from '../Footer/Footer'
import { WatchNav } from '../WatchNav/WatchNav'


export const Layout = () => {
  return (
    <>
    <SecondHeader></SecondHeader>
    <CategoryNav></CategoryNav>
    <WatchNav></WatchNav>
    </>
  )
}
