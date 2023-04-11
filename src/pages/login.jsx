import React, { useState } from 'react';
import {
    f7, LoginScreenTitle, Page, List, Link,
    ListInput, Row, Button, Block, Preloader
} from 'framework7-react';
import { sendOTP, handleOTPInput } from '../services/supertoken';
const steps = {
	sendOtp: 'sendOtp',
	verifyOtp: 'verifyOtp',
}

const LoginPage = ({ f7router }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [step, setStep] = useState(steps.sendOtp);
    const [isLoading, setLoading] = useState(false);
    const [otp, setOTP] = useState('');

    let input = <ListInput className="inputStyle" type='text' name='Phone Number'
        placeholder='Phone number' value={phoneNumber}
        onInput={(e) => setPhoneNumber(e.target.value)}>
        </ListInput>;
    let btnText = "Login";

    const requestOTP = async () => {
        setLoading(true);
        const response = await sendOTP(phoneNumber);
        console.log(response);
        setStep(steps.verifyOtp);
        setLoading(false);
    }

    const verifyOtp = async () => {
        setLoading(true);
        const response = await handleOTPInput(otp);
        console.log(response);
        setLoading(false);
        if (response && response.newUser) {
            return f7router.navigate('/form')
        }
        f7router.refreshPage();
    }

    let btnFunc = requestOTP;

    if  (step == steps.verifyOtp) {
        input = <ListInput
        type='text' name='otp'
        placeholder='OTP' value={otp}
        onInput={(e) => setOTP(e.target.value)}
        ></ListInput>;
        btnFunc = verifyOtp;
        btnText = "Verify OTP";
    }
    
    return (
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List>{input}</List>
        <List>
          <Block strong>
            <Row tag='p'>
              {isLoading ? (
                <Block className='text-align-center'>
                  <Preloader color='multi' />
                </Block>
              ) : (
                <Button
                  className='col'
                  large
                  fill
                  raised
                  color='black'
                  onClick={btnFunc}
                >
                  {btnText}
                </Button>
              )}
            </Row>
          </Block>
          <Block className='chopmoni__footer' color='red'>
            <h2>Chopmoni</h2>
            <p>Terms and Privacy Policy Notice</p>
          </Block>
          <Link href='/about/'>About Page</Link>
        </List>
      </Page>
    )
}

export default LoginPage;
