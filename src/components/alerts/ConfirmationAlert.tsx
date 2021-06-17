import React, {useEffect, useState} from "react";
import {IAlert} from "../../types/Types";
import {Check} from "react-feather";
import {Alert, Col} from "react-bootstrap";

type AlertProps = {
    content: IAlert | null,
    showAlertMessage: boolean
}
const ConfirmationAlert: React.FC<AlertProps> = (props) => {
    const {content, showAlertMessage} = props;

    const [alertMessage, setAlertMessage] = useState<IAlert | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    useEffect(() => {
        if (content) {
            setAlertMessage(content);
            setShowAlert(showAlertMessage);
        }
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);

    }, [content, showAlertMessage])

    return (
        <React.Fragment>
            {showAlert && alertMessage &&
                <Col xs={12} className="text-center">
                    <Alert variant={alertMessage.variant} >
                               <h6 className="mb-0"><Check size={20} className="mr-2"/>{alertMessage.message}</h6>
                </Alert>
                </Col>

            }
        </React.Fragment>
    );
}

export default ConfirmationAlert;
