import { FC } from 'react'
import { Footer } from '../components/footer'
import Header from '../components/header'

export const BaseLayout: FC = (props) => {
  return (
    <div className="wrap">
      <Header></Header>

      {/* eslint-disable-next-line react/prop-types */}
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}
