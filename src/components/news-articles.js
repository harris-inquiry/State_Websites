import React, { useState } from "react"
import { Card, Col, Row, Collapse,  } from "react-bootstrap"


function getArticleText(shownText, hiddenText, openVariable, openVariableSetter) {
  return (
    <Card.Text>
      {shownText}
      <Collapse in={openVariable}>
        <div>
          <span>{hiddenText}</span>
        </div>
      </Collapse>
      <button onClick={() => openVariableSetter(!openVariable)}>
        {openVariable ? " ...Close" : " ...Read More"}
      </button>
    </Card.Text>
  )
}


const NewsArticles = () => {

  const [openArticle1, setOpenArticle1] = useState(false);
  const [openArticle3, setOpenArticle3] = useState(false);

  return (
    <div id="news-articles" className="container">
      <h2 className="news-title">In the News</h2>
      <Row>

        <Col lg>
          <Card>
            <Card.Body>
              <Card.Title>Georgia's Republican secretary of state shoots down Republican senators' call for his resignation</Card.Title>
              <Card.Subtitle>Gwinnett Daily Post, Nov 9, 2020</Card.Subtitle>
              {getArticleText(
                "Earlier Monday afternoon, Republicans Loeffler and Perdue called for Raffensperger's resignation in a joint statement",
                " that bemoaned the state's election process without offering any specific evidence to back their claims... \"Earlier today Senators Loeffler and Perdue called for my resignation,\" Raffensperger, who is also a Republican, said in a statement: \"Let me start by saying that is not going to happen. The voters of Georgia hired me, and the voters will be the one to fire me. As Secretary of State, I'll continue to fight every day to ensure fair elections in Georgia, that every legal vote counts, and that illegal votes don't count.",
                openArticle1,
                setOpenArticle1
              )}
            </Card.Body>
          </Card>
        </Col>

        <Col lg>
          <Card>
            <Card.Body>
              <Card.Title>U.S. Sen. Kelly Loeffler faces scrutiny, criticism as reports of stock sales during COVID-19 crisis emerge</Card.Title>
              <Card.Subtitle>Gwinnett Daily Post, March 21, 2020</Card.Subtitle>
              <Card.Text>GA Sen. Perdue is also under scrutiny for possible insider trading related to Covid-19</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg>
          <Card>
            <Card.Body>
              <Card.Title>Georgia Republican Sen. David Perdue declines to debate opponent ahead of January 5 runoff</Card.Title>
              <Card.Subtitle>Gwinnett Daily Post, Nov. 15, 2020</Card.Subtitle>
              {getArticleText(
                "Democrat Jon Ossoff has already accepted the invitation from the Atlanta Press Club to debate on Dec. 6. Why is Sen. Perdue unwilling to defend his record in a fair debate?",
                " The Atlanta Press Club said invitations have also been sent to Republican Senator Loeffler’s campaign and her challenger, Rev. Raphael Warnock, to participate in a separate debate on the same day. Warnock's campaign has tentatively agreed, while Loeffler's campaign has yet to respond.",
                openArticle3,
                setOpenArticle3
              )}
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </div>
  )
}

export default NewsArticles
