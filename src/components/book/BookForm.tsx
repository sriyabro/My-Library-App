import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select from "react-select";
import {IAuthor, IBook, ISelector} from "../../types/Types";
import {customStyles, selectorBorderColorValue} from "../../constants/constsants";
import {ValueType} from "react-select";
import NumberFormat from 'react-number-format';

type BookFormProps = {
  authors: IAuthor[] | null,
  closeButtonClicked: () => void
  updateClicked: boolean
  createBookSubmit: (newBook: IBook) => void
  bookToUpdate: IBook | null
  updateBookSubmit: (updatedBook: IBook) => void
}

const BookForm: React.FC<BookFormProps> = (props) => {
  const {authors, closeButtonClicked, updateClicked, createBookSubmit, bookToUpdate, updateBookSubmit} = props;

  const [bookName, setBookName] = useState<string>('');
  const [bookISBN, setBookISBN] = useState<string>('');
  const [booKPrice, setBookPrice] = useState<string>('');
  const [selectedAuthor, setSelectedAuthor] = useState<IAuthor | null>(null);
  const [formValidate, setFormValidate] = useState<boolean>(false);
  const [selectorValidate, setSelectorValidate] = useState<boolean>(false);
  const [selectorOptions, setSelectorOptions] = useState<ISelector[] | null>(null);
  const [selectorBorderColor, setSelectorBorderColor] = useState<string>(selectorBorderColorValue);

  const clearFormValues = () => {
    setBookName('');
    setBookISBN('');
    setBookPrice('');
    setSelectedAuthor(null);
  }

  const handleCloseButtonClick = () => {
    clearFormValues();
    closeButtonClicked();
  }

  const handleBookNameChange = (e: ChangeEvent<HTMLInputElement>) => setBookName(e.target.value);
  const handleISBNChange = (e: ChangeEvent<HTMLInputElement>) => setBookISBN(e.target.value);
  const handleOnPriceChange = (e: ChangeEvent<HTMLInputElement>) => setBookPrice(e.target.value);
  const handleBookAuthorChange = (option: ValueType<ISelector, false>) => {
    if (option) {
      setSelectedAuthor(option.value);
      if (selectorValidate) {
        setSelectorBorderColor('#5cb85c');
      }
    } else {
      setSelectedAuthor(null);
      if (selectorValidate) {
        setSelectorBorderColor('#d9534f');
      }
    }
  }

  useEffect(() => {
    if (!authors) {
      return;
    }
    let options: ISelector[] | null = [];
    authors.forEach((author: IAuthor) => {
      options?.push({
        label: author.name,
        value: author
      })
    })
    if (!options) return;
    setSelectorOptions(options);
  }, [authors]);

  useEffect(() => {
    if (bookToUpdate === null) return;
    setBookName(bookToUpdate?.name);
    setBookISBN(bookToUpdate?.ISBN);
    setBookPrice(bookToUpdate?.price);
    setSelectedAuthor(bookToUpdate?.author);
  }, [bookToUpdate]);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (selectedAuthor === null || bookName === '' || !bookName || bookISBN === '' || !bookISBN) {
      setFormValidate(true);
      setSelectorValidate(true);
      return;
    }
    if (!updateClicked) {
      const newBook: IBook = {
        name: bookName,
        ISBN: bookISBN,
        price: booKPrice,
        author: selectedAuthor
      };
      createBookSubmit(newBook);
      clearFormValues();
      closeButtonClicked();

    } else {
      const updatedBook: IBook = {
        name: bookName,
        ISBN: bookISBN,
        price: booKPrice,
        author: selectedAuthor
      };
      updateBookSubmit(updatedBook);
      clearFormValues();
      closeButtonClicked();
    }
  }

  return (
    <Col xs={12} lg={9} className="form mt-4 px-0">
      <Col xs={12}>
        <Row className="form-title">
          <Col xs={9} className="p-0">
            <h5><label>{updateClicked ? 'Update' : 'Create'} Book</label></h5>
          </Col>
          <Col xs={3} className="text-right px-0">
            <XCircle size={22} onClick={handleCloseButtonClick}/>
          </Col>
        </Row>
      </Col>
      <Col xs={12} lg={{span: 11, offset: 1}} className="px-0">
        <Form noValidate validated={formValidate} onSubmit={handleOnSubmit}>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0 ml-1">Title of the Book</Form.Label>
            <Form.Control size="sm" type="text"
                          onChange={handleBookNameChange}
                          autoFocus
                          value={bookName}
                          required/>
            <Form.Control.Feedback type="invalid">Please Enter the Title of the Book</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className=" mb-0 ml-1">ISBN</Form.Label>
            <NumberFormat className="form-control input-field"
                          displayType={'input'}
                          format="###-#-##-######-#"
                          onChange={handleISBNChange}
                          value={bookISBN}
                          required/>
            <Form.Control.Feedback type="invalid">Please Enter a Valid ISBN</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label className="mb-0 ml-1">Price</Form.Label>
            <NumberFormat className="form-control input-field"
                          displayType={'input'}
                          thousandSeparator={true}
                          prefix={'$'}
                          onChange={handleOnPriceChange}
                          value={booKPrice}
                          required/>
            <Form.Control.Feedback type="invalid">Please Enter the Price</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className=" mb-0 ml-1">Author</Form.Label>
            <Select className="select-control" classNamePrefix="select-control"
                    isSearchable
                    isClearable
                    placeholder={null}
                    noOptionsMessage={() => ("No options here, Please Create an Author")}
                    options={!selectorOptions ? [] : selectorOptions}
                    styles={customStyles}
                    onChange={handleBookAuthorChange}
                    value={selectorOptions?.filter(option => option.label === selectedAuthor?.name)}
            />
            {selectorValidate &&
            <small className="invalid-feedback text-danger" style={{'display': 'block'}}>Please Select an
                Author Name</small>}
          </Form.Group>
          <Button className="form-button float-right mt-2 py-1 px-4" type="submit">
            {updateClicked ? 'Update' : 'Create'}
          </Button>
        </Form>
      </Col>
    </Col>
  );
}

export default BookForm;