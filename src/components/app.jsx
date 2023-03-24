import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [businessname, setBusinessname] = useState('')
  const [password, setPassword] = useState('');

  // Framework7 Parameters
  const f7params = {
    name: 'My App', // App name
      theme: 'auto', // Automatic theme detection



      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker (only on production build)
      serviceWorker: process.env.NODE_ENV ==='production' ? {
        path: '/service-worker.js',
      } : {},
  };
  const alertLoginData = () => {
    f7.dialog.alert(
      'Businessname: ' + businessname + '<br>Password: ' + password,
      () => {
        f7.loginScreen.close()
      }
    )
  }
  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App {...f7params}>
      {/* Left panel with cover effect*/}
      <Panel left cover dark>
        <View>
          <Page>
            <Navbar title='Left Panel' />
            <Block>Left panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Right panel with reveal effect*/}
      <Panel right reveal dark>
        <View>
          <Page>
            <Navbar title='Right Panel' />
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel>

      {/* Views/Tabs container */}
      <Views tabs className='safe-areas'>
        {/* Tabbar for switching views-tabs */}
        <Toolbar tabbar labels bottom>
          <Link
            tabLink='#view-home'
            tabLinkActive
            iconIos='f7:house_fill'
            iconAurora='f7:house_fill'
            iconMd='material:home'
            text='Home'
          />
          <Link
            tabLink='#view-catalog'
            iconIos='f7:square_list_fill'
            iconAurora='f7:square_list_fill'
            iconMd='material:view_list'
            text='Catalog'
          />
          <Link
            tabLink='#view-settings'
            iconIos='f7:gear'
            iconAurora='f7:gear'
            iconMd='material:settings'
            text='Settings'
          />
        </Toolbar>

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id='view-home' main tab tabActive url='/' />

        {/* Catalog View */}
        <View id='view-catalog' name='catalog' tab url='/catalog/' />

        {/* Settings View */}
        <View id='view-settings' name='settings' tab url='/settings/' />
      </Views>

      {/* Popup */}
      <Popup id='my-popup'>
        <View>
          <Page>
            <Navbar title='Popup'>
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup>

      <LoginScreen id='my-login-screen'>
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type='text'
                name='businessname'
                placeholder='Businessname'
                value={businessname}
                onInput={(e) => setBusinessname(e.target.value)}
              ></ListInput>
              <ListInput
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title='Sign In' onClick={() => alertLoginData()} />
              <Block className='chopmoni__footer' color='red'>
                <h2>Chopmoni</h2>
                <p>Terms and Privacy Policy Notice</p>
              </Block>
            </List>
          </Page>
        </View>
      </LoginScreen>
    </App>
  )
}
export default MyApp;