import React from "react";
import {Button} from "react-bootstrap";

type FormButtonProps = {
    updateClicked: boolean
}
const FormButton: React.FC<FormButtonProps> = (props) => {
    const {updateClicked} = props;

    return (
        <Button className="form-button float-right mt-2 py-1 px-4" type="submit">
            {updateClicked? 'Update' : 'Create'}
        </Button>
    );
}

export default FormButton;