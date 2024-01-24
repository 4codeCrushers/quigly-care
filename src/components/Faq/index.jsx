import Accordion from 'react-bootstrap/Accordion';
import faqData from '../../data/faqData.json';
import './style.css';
import React from 'react';

function Faq() {
  return (
    <div class="faq-container">
        <h2 className="faq-section-heading">Frequently Asked Questions</h2>
        <div className="accordian-container">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionOne.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionOne.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionTwo.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionTwo.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionThree.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                        <p dangerouslySetInnerHTML={{ __html: faqData.questionThree.answer }} />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionFour.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionFour.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionFive.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                        <p dangerouslySetInnerHTML={{ __html: faqData.questionFive.answer}} />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionSix.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionSix.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionSeven.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionSeven.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionEight.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionEight.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionNine.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionNine.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                    <Accordion.Header>
                        <div className="accordian-heading">
                            {faqData.questionTen.question}
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <div className="accordian-body">
                            {faqData.questionTen.answer}
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  );
}

export default Faq;