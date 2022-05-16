import React from 'react'
import Layout from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input/index';

/**
* @author
* @function Signin
**/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{margin:'50px'}}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
            <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => { }}
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => { }}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )

}

export default Signin;