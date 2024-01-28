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
    <title>Exodia 2024</title>
    <meta name="description" content="Welcome to EXODIA- where Innovation meets Inspiration! Exodia is an all-Kerala event that brings together tech enthusiasts and creative minds to explore Artificial Intelligence (AI), Augmented Reality (AR), and Game Development. This immersive experience empowers attendees with innovative knowledge, hands-on workshops led by our esteemed mentors, and unparalleled networking opportunities. EXODIA is a joint effort by IEDC, FOCES, and MULEARN -the 3 leading forums of the College Of Engineering Chengannur. Taking place on February 17th and 18th at the prestigious CEC Campus, this extravaganza is a fusion of intellect, talent, and excitement. Join us at EXODIA, where you can fuel your passion for technology, connect with like-minded individuals, and stay at the forefront of the latest AI, AR, and Game Development advancements." />
  </Helmet>
    </App>
</HelmetProvider>
  </RecoilRoot>
  </React.StrictMode>,
)
