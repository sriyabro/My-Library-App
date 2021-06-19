import React from "react";
import {Col} from 'react-bootstrap';

type LabelProps = {
  message: string
}

const NoItemsLabel: React.FC<LabelProps> = (props) => {
  return (
    <Col xs={12} className="mt-3 pl-0 no-items-label">
      <label className="font-italic">{props.message}</label>
    </Col>
  );
}

export default NoItemsLabel;