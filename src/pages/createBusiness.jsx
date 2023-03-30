import React, { useState } from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  BlockTitle,
  Row,
  Button,
  Block,
  Preloader
} from 'framework7-react';
import { createBusiness } from '../services/apiService';

const FormPage = ({ f7router }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [isLoading, setLoading] = useState('');

  async function registerBusiness() {
    setLoading(true);
    await createBusiness({ firstName, lastName, businessName, businessAddress })
    setLoading(false);
    f7router.navigate('/');
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
          type='text'
          placeholder='Business/Company Name'
          className='formInput__style'
          value={businessName}
          onInput={(e) => setBusinessName(e.target.value)}
        ></ListInput>

        <ListInput
          className='formInput__style'
          type='text'
          placeholder='Business Address'
          value={businessAddress}
          onInput={(e) => setBusinessAddress(e.target.value)}
        ></ListInput>
      </List>
      <Block strong>
        <Row tag='p'>
          { isLoading ? <Preloader color='multi'/> :
            <Button className='col' large fill raised color='green' onClick={registerBusiness}>
              Create My Account
            </Button>
          }
        </Row>
      </Block>
      <Block className='chopmoni__footer' color='red'>
        <h2>Chopmoni</h2>
        <p>Terms and Privacy Policy Notice</p>
      </Block>
    </Page>
  )
}

export default FormPage;
