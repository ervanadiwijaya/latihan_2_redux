import React, { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes, fetchNotes } from '../features/noteSlice';


const Body = () => {

    const dispatch = useDispatch();
    const notes = useSelector(getAllNotes);
    // console.log(notes)
    const notesStatus = useSelector((state) => state.notes.status);
    const error = useSelector((state) => state.notes.error);
    useEffect(() => {
        if (notesStatus === 'idle') {
            dispatch(fetchNotes(""));
        }
    }, [notesStatus, dispatch]);
    let content;
    if (notesStatus === 'loading') {
        content = <div>Loading...</div>;
    } else if (notesStatus === 'succeeded') {
        content = (
            <Row>
                {notes.data.map(note => {
                    return (
                        <Col xs={12} md={6} key={note.id} className="my-2">
                            <Card bg="light" text="dark" border="light" className="px-3  h-100" key="">
                                <Card.Body className="mx-0 px-0">
                                    <Card.Title>{note.title}</Card.Title>
                                    <Card.Text>
                                        {note.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        );
    } else if (notesStatus === 'failed') {
        content = <div>{error}</div>;
    }

    return (
        <Container>
            <Row>
                <Col className="text-center my-2">
                    <h2>Artikel</h2>
                    <p className="mb-0 pb-0"><i>Baca yang ingin kamu baca, Cari yang ingin kamu cari</i></p>
                    <hr></hr>
                    {/* <small className="mt-0 pt-0"><i>- Ervan Adi Wijaya</i></small> */}
                </Col>
            </Row>

            <Row>
                {content}
            </Row >
        </Container >
    )
}



export default Body;