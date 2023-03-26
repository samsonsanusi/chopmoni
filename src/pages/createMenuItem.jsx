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
  Preloader,
  NavRight,
  Link,
  Progressbar,
} from 'framework7-react';
import { createMenuItems, uploadImageToServer } from '../services/apiService';

const emptyItem = {name: "", price: 0.00, image: '' };

const CreateMenuItemsPage = ({ f7router }) => {
  const [items, setItems] = useState([emptyItem]);
  const [loadings, setLoadings] = useState([false]);

  async function uploadImage(file) {
    const formData = new FormData();
    formData.append("image", file, file.name);
    return uploadImageToServer(formData);
  }

  const handleItemNameChange = idx => evt => {
    const newItems = items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, name: evt.target.value };
    });
    setItems(newItems);
  };

  const handleItemPriceChange = idx => evt => {
    const newItems = items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, price: evt.target.value };
    });
    setItems(newItems);
  };

  const handleItemImageChange = idx => async evt => {
    setLoading(idx, true)
    const newItems = items.map(async (item, sidx) => {
      if (idx !== sidx) return item;
      let imageData = await uploadImage(evt.target.files[0])
      return { ...item, image: imageData.url };
    });
    setItems(await Promise.all(newItems));
    setLoading(idx, false)
  };

  function setLoading(idx, value) {
    const newLoadings = loadings.map((loading, sidx) => {
      if (idx !== sidx) return loading;
      return value
    });
    setLoadings[newLoadings];
  }

  async function handleSubmit() {
    await createMenuItems(items);
    f7router.back()
  };

  const handleAddItem = () => {
    setItems(items.concat([emptyItem]));
    setLoadings(loadings.concat[false])
  };

  // const handleRemoveShareholder = idx => () => {
  //   setState({
  //     shareholders: state.shareholders.filter((s, sidx) => idx !== sidx)
  //   });
  // };

  const handleImageClick = (idx) => () => {
    console.log('here')
    let el = document.getElementById(`image-${idx}`);
    console.log(el);
    el.click();
  };
  
  return (
    <Page name='form'>
      <Navbar title='Create Menu' backLink="back">
        <NavRight>
          <Link href='#' onClick={ handleSubmit }>Save</Link>
        </NavRight>
      </Navbar>
      <List noHairlinesMd>
        {items.map((item, idx) => (
          <List key={idx}>
            <ListInput 
              type="text"
              placeholder={'Name'}
              value={item.name}
              onChange={ handleItemNameChange(idx) }
            />
            <ListInput 
              type="text"
              placeholder={'Price'}
              value={item.price}
              onChange={ handleItemPriceChange(idx) }
            />
            <div
              style={{
                backgroundImage: `url(${items[idx].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "300px",
                height: "300px",
                border: "1px solid black",
                cursor: "pointer",
              }}
              onClick={handleImageClick(idx)}>
              <input
                type="file"
                accept="image/*"
                id={`image-${idx}`}
                style={{ display: "none" }}
                onChange={ handleItemImageChange(idx) }
              />
              {/* { loadings[idx] ? <Progressbar infinite /> : '' } */}
            </div>
          </List>
        ))}
        <Block strong>
          <Row tag='p'>
            <Button className='col' large fill raised color='black' onClick={handleAddItem}>
              Add Item
            </Button>
          </Row>
        </Block>
      </List>
    </Page>
  )
}

export default CreateMenuItemsPage;
