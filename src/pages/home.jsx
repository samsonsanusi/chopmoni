import React from 'react'
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
} from 'framework7-react'
import { logout } from '../services/supertoken'

const HomePage = () => (
  <Page name='home'>
    <Navbar>Welcome Back</Navbar>
    <Block strong>
      <List>
        <ListItem link="/menu" title='Menu'></ListItem>
        <ListItem link="/orders" title="Orders"></ListItem>
      </List>
      <Row>
        <Button fill raised onClick={ logout }> Logout </Button>
      </Row>
    </Block>
  </Page>
)
export default HomePage
