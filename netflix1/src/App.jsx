import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Row from './components/Row/Row'
import Question from './components/Question/Question'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)
  const rowItem = [
    {
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
      video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
      order: 0,
      heading: "Enjoy on your TV",
      para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      className:"w-[65%] top-8 left-16"
    },
    {
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
      video: "",
      order: 1,
      heading: "Download your shows to watch offline",
      para: "Save your favourites easily and always have something to watch."
    }
    , {
      img: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
      video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
      order: 0,
      heading: "Watch everywhere",
      para: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    }
    ,
    {
      img: "https://occ-0-2890-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d",
      video: "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
      order: 1,
      heading: "Create profiles for kids",
      para: "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
    }
  ]
  return (
    <>
      <Header />
      <Banner />
      {
        rowItem.map((items, index) => (
          <div key={index}>
            <Row items={items} />
          </div>))
      }
      <Question />
      {/* <Footer/> */}
    </>
  )
}

export default App
