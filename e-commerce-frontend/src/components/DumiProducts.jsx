import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function DummiProducts() {
    let products=[{imageSrc:"https://media.istockphoto.com/id/1492815833/photo/vintage-theatrical-clothes-in-dressing-room.jpg?s=612x612&w=0&k=20&c=NmNUraqyUHN62LrLcEhiy33OZuYDq2p1NIQOs5FllqA=", title:"Fashion"},

        {
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyoiUEpRMTKnIxdFn5_G55FK9lm3sSHopBzw&s", title:"Laptops"
        },
        {
            imageSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSK8_BdPpbzhlPqJTQBXUofFwDAyrUceBwTg&s", title:"Mobile"
        }
    ];
  return (
    <Row xs={1} md={3} className="g-4">
      {products.map((item,idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={item.imageSrc} height="290px" width="190px" />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <button className="btn btn-warning">Add to cart</button>
              <button className="btn btn-success mx-2" >Buy</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default DummiProducts;