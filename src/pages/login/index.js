import React, { useState, useEffect, useRef, useContext, Fragment} from 'react'
import AuthContext from '../../context/authprovider'
import axios from '../../api'
import  { Navigate } from 'react-router-dom'
import { Alert, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const LOGIN_URL = '/login'

export default function Login() {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')
  
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(()=> {
    userRef.current.focus()
  }, [])

  useEffect(()=> {
    setErrMsg('')
  }, [phone, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(phone, pwd);

    try {
      const res = await axios.post(LOGIN_URL, JSON.stringify({phone:phone,password:pwd}),
      {
        headers: {'Content-Type' : 'application/json'},
      })
      // console.log(JSON.stringify(res));

      const accessToken = res?.data?.token
      const userId = res?.data?.user?.id
      setAuth({phone, pwd, accessToken, userId})
      setPhone('')
      setPwd('')
      setSuccess(true)
      console.log(phone, pwd, accessToken, userId);
    } catch (error) {
      console.log(error.message);
      setErrMsg(error.message)
      errRef.current.focus()
    }
    

  }

  return (
    <>
    {success ? (
      <Navigate to='/home'  />
    ) : (

        <Container className='col-lg-5 mt-10'>

           <p className='text-bold'>Login E-Wallet</p>
          {/*
            <Alert
            color={errMsg ? ("danger") : ("")}
            ref={errRef}
            dismiss={function noRefCheck(){}}
          >
            {errMsg}
          </Alert> */}

          <Alert></Alert>
          <Form onSubmit={handleSubmit}>

            <FormGroup>
              <Label for="phone">Mobile Phone</Label>
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
            <FormGroup>
              <Label for="password">Password</Label>
              <Input 
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              />
            </FormGroup>
              <Button
              color="primary"
              >
                Login
              </Button>
          </Form>

          {/* <p>don't have an account yet? <Link to="/register">click here</Link></p> */}




        </Container>
        )}
  </>
  )
}
