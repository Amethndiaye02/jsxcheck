
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductImage from "./Component/image";
import Name from './Component/name';
import Price from './Component/price';
import Description from './Component/description';
import product from './product';

const firstName = 'Ameth Abdoulaye';

const App = () => {
  return (
    <Container>
       
      <Card style={{ width: '18rem', height:"90vh" }}>
      
      <img src={product.imageURL}  />
      < Name name={product.name}/>
      < Description description={product.description}/>
      < Price price={product.price}/> 
      
      </Card>

      <Row>
        <Col>
        
          
          
          <p>Hello, {firstName ? firstName : 'there'}!</p>
          <>
      
          </>
          
        </Col>
      </Row>
    </Container>
  );
};

export default App;
