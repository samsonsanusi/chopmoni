import React, { useState } from 'react'
import {
  Page,
  Navbar,
  List,
  ListInput,
  BlockTitle,
  Row,
  Button,
  Block,
  Preloader,
} from 'framework7-react'
import { createBusiness } from '../services/apiService'

const BusinessFormPage = ({ f7router }) => {
  const [businessName, setBusinessName] = useState('')
  const [address, setAddress] = useState('')
  const [cac, setCac] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [bank, setBank] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [isLoading, setLoading] = useState('')

  async function registerBusinessInfo() {
    setLoading(true)
    await createBusiness({
      businessName,
      address, 
      cac,
      mobileNumber,
      userEmail,
      bank,
      accountNumber,
    })
    setLoading(false)
    f7router.navigate('/')
  }

  return (
    <Page name='form'>
      <Navbar title='Create Business'></Navbar>
      <List noHairlinesMd>
        <ListInput
          type='text'
          placeholder='Business/Company Name'
          className='formInput__style'
          value={businessName}
          onInput={(e) => setBusinessName(e.target.value)}
        ></ListInput>

        <ListInput
          type='text'
          placeholder='CAC BN/RG Number'
          className='formInput__style'
          value={cac}
          onInput={(e) => setCac(e.target.value)}
        ></ListInput>

        <ListInput
          type='number'
          placeholder='Mobile Number'
          className='formInput__style'
          value={mobileNumber}
          onInput={(e) => setMobileNumber(e.target.value)}
        ></ListInput>

        <ListInput
          type='email'
          placeholder='Email'
          className='formInput__style'
          value={userEmail}
          onInput={(e) => setUserEmail(e.target.value)}
        ></ListInput>

        <ListInput
          type='text'
          placeholder='Bank'
          className='formInput__style'
          value={bank}
          onInput={(e) => setBank(e.target.value)}
        ></ListInput>

        <ListInput
          className='formInput__style'
          type='number'
          placeholder='AccountNumber'
          value={accountNumber}
          onInput={(e) => setAccountNumber(e.target.value)}
        ></ListInput>
      </List>
      <Block strong>
        <Row tag='p'>
          {isLoading ? (
            <Preloader color='multi' />
          ) : (
            <Button
              className='col'
              large
              fill
              raised
              color='green'
              onClick={registerBusinessInfo}
            >
              Update
            </Button>
          )}
        </Row>
      </Block>
    </Page>
  )
}

export default BusinessFormPage
