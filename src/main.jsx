import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
import { Helmet ,HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RecoilRoot>
<HelmetProvider>
    <App>
    <Helmet>
    <title>Exodia &apos;24 - All Kerala Technical Gala</title>
    <meta name="description" content="Exodia is an all-Kerala event that brings together tech enthusiasts and creative minds to explore Artificial Intelligence (AI), Augmented Reality (AR), and Game Development. EXODIA is a joint effort by IEDC, FOCES, and MULEARN -the 3 leading forums of the College Of Engineering Chengannur. Taking place on February 17th and 18th at the prestigious CEC Campus, Join us at EXODIA, where you can fuel your passion for technology, connect with like-minded individuals, and stay at the forefront of the latest AI, AR, and Game Development advancements." />
    <link rel="canonical" href="https://www.exodiacec.online"/>
    <meta name="keyword" content='exodia,exodia2024,cec,foces,iedc,bootcamp,mulearn,ai,ar,game,hands-on,all kerala,event,2days,technical,worshops,college-of-engineering-chengannur,culturals,music,band,chengannur,alappuzha'/>
  
  </Helmet>
    </App>
</HelmetProvider>
  </RecoilRoot>
  </React.StrictMode>,
)
