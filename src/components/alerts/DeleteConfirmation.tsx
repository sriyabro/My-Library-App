import React from "react";
import {Button, Modal} from "react-bootstrap";

type DeleteConfirmationProps = {
    show: boolean,
    type: string,
    item: string,
    handleDelete: () => void,
    handleClose: () => void
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = (props) => {
    const  {show, type, item, handleDelete, handleClose} = props;

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                  <Modal.Title>Delete {type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete {item}?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteConfirmation;