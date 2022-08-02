import React from 'react'
import { Col } from 'reactstrap'
import Sidebar from '../../components/sidebar'
import Topup from '../../components/topup'
import Transfer from '../../components/transfer'

export default function Home() {
  return (
    <>
    <Sidebar/>
    
    <Col>
    <Topup/>
    <Transfer/>
    </Col>
    </>
  )
}
