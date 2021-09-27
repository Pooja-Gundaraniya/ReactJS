import React from "react";
import { Formik, Form, Field,FieldArray } from "formik";

interface Regi {
    name?: string,
    phone?: number,
    password?: string,
    gender?: string,
    date?: string,
    earning?: string,
    about?: string,
    facebook?: string,
    twitter?: string,
    hobbies?:any
}
const initialValues =
    { name: "", password: "", phone: "", gender: "", date: "", earning: "", about: "", social: { facebook: '', twitter: "" } ,hobbies:[]}


const Yup = () => {
    return (
        <>
            <Formik initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                    {({values})=>(<Form>
                    <label>Name : </label>
                    <Field name="name" type="text" /><br /><br />
                    <label>password : </label>
                    <Field name="password" type="password" /><br /><br />
                    <label>phone : </label>
                    <Field name="phone" type="number" /><br /><br />
                    <label>Gender : </label>
                    <br />
                    <label>male : </label>
                    <Field name="gender" type="radio" value="male" />
                    <label>female : </label>
                    <Field name="gender" type="radio" value="female" /><br /><br />
                    <label>date : </label>
                    <Field name="date" type="date" /><br /><br />
                    <label>Earnings : </label>
                    <Field name="earning" as="select">
                        <option value="0">Rs 0</option>
                        <option value="10000">Rs 10000</option>
                        <option value="20000">Rs 20000</option>
                    </Field><br /><br />
                    <label>about : </label>
                    <Field name="about" as="textarea" /><br /><br />
                    <label>social : </label><br />
                    <label>twitter : </label>
                    <Field name="social.twitter" type="text" /><br /><br />
                    <label>facebook : </label>
                    <Field name="social.facebook" type="text" /><br /><br />

                    <FieldArray
                        name="hobbies"
                        render={arrayHelpers => (
                            <div>
                                {values.hobbies && values.hobbies.length > 0 ? (
                                    values.hobbies.map((hobby:any, index:any) => (
                                        <div key={index}>
                                            <Field name={`hobbies.${index}`} />
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                            >
                                                -
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <button type="button" onClick={() => arrayHelpers.push('')}>
                                        Add a hobby
                                    </button>
                                )}
                            </div>
                        )}
                    />
                    <button type="submit">submit</button>
                </Form>)}


                
            </Formik>
        </>
    )
}
export default Yup