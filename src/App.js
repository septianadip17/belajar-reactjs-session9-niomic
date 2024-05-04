import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  FormControl,
  OverlayTrigger,
  Row,
  Col,
  Popover,
  Pagination,
  ProgressBar,
  Table,
  Tabs,
  Tab,
  Carousel,
  Collapse,
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: true,
    };
  }

  render() {
    const munculPopover = (
      <Popover title="informasi">Selamat Kamu Berhasil</Popover>
    );

    return (
      <Container>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Menu</Navbar.Brand>
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Info</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex ">
            <FormControl type="text" placeholder="silakan cari" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Tabs defaultActivekey="info">
          <Tab eventKey="home" title="home">
            <p>Contoh Halaman Home</p>
          </Tab>
          <Tab eventKey="info" title="info">
            <p>Contoh Halaman Info</p>
          </Tab>
        </Tabs>

        <Carousel>
          <Carousel.Item>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg"
              alt="travel1"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Pesawat Tiket Murah 1</h3>
              <p>Dapatkan Promo Tiket Pesawat Murah 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png"
              alt="travel2"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Pesawat Tiket Murah 2</h3>
              <p>Dapatkan Promo Tiket Pesawat Murah 2</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg"
              alt="travel3"
              className="d-block w-100"
            />
            <Carousel.Caption>
              <h3>Pesawat Tiket Murah 3</h3>
              <p>Dapatkan Promo Tiket Pesawat Murah 3</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="m-2">
          <Col>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={munculPopover}
            >
              <Button variant="success">Munculkan Overlay</Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <Pagination>
              <Pagination.Item>1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item active>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
            </Pagination>
          </Col>
          <Col>
            <ProgressBar now={75} label="75%" />
          </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Menu</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dila</td>
              <td>Sate</td>
              <td>20.000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ardi</td>
              <td>Soto</td>
              <td>15.000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Ardi</td>
              <td>Soto</td>
              <td>15.000</td>
            </tr>
          </tbody>
        </Table>

        <Button
          variant="primary"
          onClick={() => this.setState({ buka: !this.state.buka })}
        >
          Tampilkan
        </Button>
        <Collapse in={this.state.buka}>
          <p>Menampilkan Pesan Sesuai Tampilan</p>
        </Collapse>
      </Container>
    );
  }
}

export default App;
