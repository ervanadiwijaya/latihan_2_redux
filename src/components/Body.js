import React, { useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes, fetchNotes } from '../features/noteSlice';


const Body = () => {

    const dispatch = useDispatch();
    const notes = useSelector(getAllNotes);
    const notesStatus = useSelector((state) => state.notes.status);
    const error = useSelector((state) => state.notes.error);
    useEffect(() => {
        if (notesStatus === 'idle') {
            dispatch(fetchNotes());
        }
    }, [notesStatus, dispatch]);
    let content;
    if (notesStatus === 'loading') {
        content = <div>Loading...</div>;
    } else if (notesStatus === 'succeeded') {
        content = (
            <Row>
                {notes.map(note => {
                    return (
                        <Col xs={12} md={4} key={note.id}>
                            <Card bg="dark" text="white" border="light" className="p-3" key="">
                                <Card.Body className="mx-0 px-0">
                                    <Card.Title>{note.title}</Card.Title>
                                    <Card.Text>
                                        {note.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        // <ListItem key={note._id}>
                        //     <h4>
                        //         <Link to={`/edit/${note._id}`}>{note.title}</Link>
                        //     </h4>
                        //     <p>{note.note.slice(0, 101)}</p>
                        //     <Separator />
                        // </ListItem>
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
                    <p className="mb-0 pb-0"><i>Baca yang ingin kamu baca, Cari yang ingin kamu cari</i></p>
                    <small className="mt-0 pt-0"><i>- Ervan Adi Wijaya</i></small>
                </Col>
            </Row>

            <Row>
                {content}
            </Row >
        </Container >
    )
}



export default Body;