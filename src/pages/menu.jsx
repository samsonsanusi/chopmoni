import React from 'react';
import { Page, Navbar, BlockTitle, Block, useStore, List, ListItem, NavLeft, NavRight, NavTitle, Link } from 'framework7-react';

const MenuPage = (props) => {
  const menu = props.menu;

  return (
    <>
    <Page name="Menu">
      <Navbar>
        <NavLeft backLink="Back"></NavLeft>
        <NavTitle>Menu</NavTitle>
        <NavRight>
          <Link href='/addItems'>Add items</Link>
        </NavRight>
      </Navbar>
      <List>
      { menu.items.map((item, index) => {
        return <ListItem key={index} title={item.name}></ListItem>
      })}
      </List>
    </Page>
    </>
  );
}

export default MenuPage;
