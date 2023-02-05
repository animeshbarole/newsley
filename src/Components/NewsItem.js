import React  from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const NewsItem  = (props)=> {

    let { title, description, imgUrl, newsUrl, author, date, source } =  props;
    return (
      <div className="my-3">
        <Card>
          <div style={{
            display : "flex",
            justifyContent : "flex-end",
            position : "absolute",
            right :"0",
          }}>
          <Badge
            className=" badge rounded-pill"
          
            bg="success"
          >
            {source}
          </Badge>
          <span className="visually-hidden">unread messages</span>
          </div>
          <Card.Img
            variant="top"
            src={
              !imgUrl
                ? "https://c.ndtvimg.com/2023-01/fr5i5slc_taiwan-evergreen-bloomberg_625x300_09_January_23.jpg"
                : imgUrl
            }
          />

          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button href={newsUrl} target="_blank" size="sm" variant="dark">
              More Details
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </Card.Footer>
        </Card>
      </div>
    );
 
}

export default NewsItem