import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  BlockTitle,
  Row,
  Button,
  Block
} from 'framework7-react';

const FormPage = () => (
  <Page name='form'>
    <Navbar title='Register' backLink='Back'></Navbar>

    <List noHairlinesMd>
      <ListInput
        type='text'
        placeholder='First Name'
        className='formInput__style'
      ></ListInput>

      <ListInput
        type='text'
        placeholder='Last Name'
        className='formInput__style'
      ></ListInput>

      <ListInput
        type='tel'
        placeholder='Mobile Number'
        className='formInput__style'
      ></ListInput>

      <ListInput
        type='text'
        placeholder='Business/Company Name'
        className='formInput__style'
      ></ListInput>

      <ListInput
        className='formInput__style'
        type='text'
        placeholder='Business Address'
      ></ListInput>

      <ListInput
        className='formInput__style'
        type='password'
        placeholder='Password'
      ></ListInput>
    </List>
    <Block strong>
      <Row tag='p'>
        <Button className='col' large fill raised color='green'>
          Create My Account
        </Button>
      </Row>
    </Block>
    <Block className='chopmoni__footer' color='red'>
      <h2>Chopmoni</h2>
      <p>Terms and Privacy Policy Notice</p>
    </Block>
  </Page>
)

export default FormPage;
