import React, { useState, useEffect, useRef, useContext, Fragment} from 'react'
import { Alert, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import AuthContext from '../../context/authprovider'
import axios from '../../api'

const TOPUP_URL = '/topup'


export default function Topup() {
  const getUser = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [topup, setTopup] = useState('')

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(()=> {
    userRef.current.focus()
  }, [])

  useEffect(()=> {
    setErrMsg('')
  }, [topup])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = JSON.stringify({topup:topup})
    const urlWithId = TOPUP_URL +'/'+ getUser.auth.userId
    console.log("body",body);

    try {
      const res = await axios.post(urlWithId, body,
      {
        headers: {
            'Content-Type' : 'application/json'
        },
      })
      console.log(JSON.stringify(res));

      setTopup('')
      setSuccess(true)
      console.log(topup);
    } catch (error) {
      console.log(error.message);
      setErrMsg(error.message)
      errRef.current.focus()
    }
    

  }

  return (
    <>
    <Container className='col-lg-5 mt-10'>

        <p className='text-bold'>Topup E-Wallet</p>
        {/* <Alert
        color={errMsg ? ("danger") : ("")}
        ref={errRef}
        dismiss={function noRefCheck(){}}
        >
        {errMsg}
        </Alert> */}
        {success ? (<Alert color='success'>Success Topup</Alert>):(<></>)}
        <Form 
        onSubmit={handleSubmit}
        >
        <FormGroup>
            <Input 
            type="number"
            id="topup" 
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setTopup(e.target.value)}
            value={topup}
            required
            />
        </FormGroup>
            <Button
            color="primary"
            >
            Topup
            </Button>
        </Form>
        </Container> 
    </>
  )
}
