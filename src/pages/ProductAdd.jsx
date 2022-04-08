import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, } from 'semantic-ui-react';
import MustafaTextInput from '../utilities/customFormControls/MustafaTextInput';

export default function ProductAdd() {
    const initialValues = { product: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunludur")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <MustafaTextInput name="productName" placeholder="Ürün Adı" />
                    <MustafaTextInput name="unitPrice" placeholder="Ürün Fiyatı" />
                    <Button color='green' type='submit'>EKLE</Button>
                </Form>
            </Formik>
        </div>
    )
}
