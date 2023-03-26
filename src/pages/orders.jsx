import React from 'react';
import { Page, Navbar, BlockTitle, Block, useStore, List, ListItem } from 'framework7-react';

const OrdersPage = (props) => {
  const orders = props.orders;

  return (
    <Page name="Orders">
      <Navbar title="Orders" backLink="Back" />
      <List>
      { orders.map((order, index) => {
        console.log(order)
        return <ListItem key={index} title={order}></ListItem>
      })}
      </List>
    </Page>
  );
}

export default OrdersPage;
