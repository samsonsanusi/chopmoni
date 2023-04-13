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
import { createUserWallet } from '../services/apiService'

const FormPage = ({ f7router }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [isLoading, setLoading] = useState('')

  async function createWallet() {
    setLoading(true)
    await createUserWallet({
      firstName,
      lastName,
      mobileNumber,
      userEmail,
      userSex,
      residentialAddress,
      businessName,
      businessAddress,
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
          placeholder='First Name'
          className='formInput__style'
          value={firstName}
          onInput={(e) => setFirstName(e.target.value)}
        ></ListInput>

        <ListInput
          type='text'
          placeholder='Last Name'
          className='formInput__style'
          value={lastName}
          onInput={(e) => setLastName(e.target.value)}
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
          type='sex'
          placeholder='Sex'
          className='formInput__style'
          value={userSex}
          onInput={(e) => setUserSex(e.target.value)}
        ></ListInput>

        <ListInput
          className='formInput__style'
          type='text'
          placeholder='Residential Address'
          value={residentialAddress}
          onInput={(e) => setResidentialAddress(e.target.value)}
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
              onClick={createWallet}
            >
              Create My Wallet
            </Button>
          )}
        </Row>
      </Block>
    </Page>
  )
}

export default FormPage
