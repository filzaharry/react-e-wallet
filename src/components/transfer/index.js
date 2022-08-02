import React, { useState, useEffect, useRef, useContext, Fragment} from 'react'
import { Alert, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import AuthContext from '../../context/authprovider'
import axios from '../../api'

const TRANSFER_URL = '/transfer'


export default function Transfer() {
  const getUser = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [transfer, setTransfer] = useState('')
  const [phone, setPhone] = useState('')

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(()=> {
    userRef.current.focus()
  }, [])

  useEffect(()=> {
    setErrMsg('')
  }, [transfer, phone])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = JSON.stringify({
        transfer,
        to:phone
    })
    const urlWithId = TRANSFER_URL +'/'+ getUser.auth.userId
    console.log("body",body);

    try {
      const res = await axios.post(urlWithId, body,
      {
        headers: {
            'Content-Type' : 'application/json'
        },
      })
      console.log(JSON.stringify(res));
      if(res.data.code != '200'){
        setErrMsg(res.data.message)
      } else {
          setTransfer('')
          setSuccess(true)
          console.log(transfer);
      }

    } catch (error) {
      console.log(error.message);
      setErrMsg(error.message)
      errRef.current.focus()
    }
    

  }

  return (
    <>
    <Container className='col-lg-5 mt-10'>

        <p className='text-bold'>Transfer E-Wallet</p>
        {/* <Alert
        color={errMsg ? ("danger") : ("")}
        ref={errRef}
        dismiss={function noRefCheck(){}}
        >
        {errMsg}
        </Alert> */}
        {success ? (<Alert color='success'>Success Transfer</Alert>):(<Alert color='danger'>{errMsg}</Alert>)}
        <Form 
        onSubmit={handleSubmit}
        >
        <FormGroup>
            <Input 
            type="number"
            id="transfer" 
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setTransfer(e.target.value)}
            value={transfer}
            required
            />
        </FormGroup>
        <FormGroup>
            <Input 
            type="number"
            id="phone" 
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            />
        </FormGroup>
            <Button
            color="primary"
            >
            Transfer
            </Button>
        </Form>
        </Container> 
    </>
  )
}
