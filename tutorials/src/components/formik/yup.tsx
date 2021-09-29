import React from "react";
import { Formik, Form, Field,FieldArray } from "formik";
import * as yup from 'yup';
import KError from "./KErrorMessage";

const validationSchema = yup.object({
    name:yup.string().required("name is required!!!"),
    phone:yup.number().min(1000000000,"not a vaid number").max(9999999999,"not a valid number").required("number value is required"),
    password:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"    ).required(),
    gender:yup.string().required(),
    date:yup.date().required(),
    eaarning:yup.string().required(),
    about:yup.string().max(500,"too long").min(20,"too short ").required(),
    social:yup
    .array()
    .of(
        yup
        .string()
        .required("please enter value")
        )
    .min(1,"atleast one social media is required")
    .required("plese enter"),
    hobbies:yup
    .array()
    .of(
        yup
        .string()
        .required("please enter value")
        )
    .min(1,"atleast one hobby is required")
    .required("plese enter")
    
});

// interface Regi {
//     name?: string,
//     phone?: number,
//     password?: string,
//     gender?: string,
//     date?: string,
//     earning?: string,
//     about?: string,
//     facebook?: string,
//     social?:string,
//     twitter?: string,
//     hobbies?:string
// }
const initialValues =
    { name: "", password: "", phone: "", gender: "", date: "", earning: "", about: "", social: [] ,hobbies:[]}

const Yups = () => {
    return (
        <>
            <Formik 
            validationSchema={validationSchema}
            initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                    {({values})=>(<Form>
                    <label>Name : </label>
                    <Field name="name" type="text" /><br />
                    <KError name="name"/>
                    <label>password : </label>
                    <Field name="password" type="password" /><br />
                    <KError name="password"/>

                    <label>phone : </label>
                    <Field name="phone" type="number" /><br />
                    <KError name="phone"/>

                    <label>Gender : </label>
                    <br />
                    <label>male : </label>
                    <Field name="gender" type="radio" value="male" />
                    <label>female : </label>
                    <Field name="gender" type="radio" value="female" /><br />
                    <KError name="gender"/>

                    <label>date : </label>
                    <Field name="date" type="date" /><br />
                    <KError name="date"/>

                    <label>Earnings : </label>
                    <Field name="earning" as="select">
                        <option value="0">Rs 0</option>
                        <option value="10000">Rs 10000</option>
                        <option value="20000">Rs 20000</option>
                    </Field><br /><br />
                    <KError name="earning"/>

                    <label>about : </label>
                    <Field name="about" as="textarea" /><br />
                    <KError name="about"/>

                    <label>social : </label><br />
                    <KError name="social"/>
                    <label>twitter : </label>
                    <Field name="social[0]" type="text" /><br />
                    {/* <KError name="social.0"/> */}
                    <label>facebook : </label>
                    <Field name="social[1]" type="text" /><br />
                    {/* <KError name="social.1"/> */}


                    <FieldArray
                        name="hobbies"
                        render={arrayHelpers => (
                            <div>
                                {values.hobbies && values.hobbies.length > 0 ? (
                                    values.hobbies.map((hobby:string, index:any) => (
                                        <div key={index}>
                                            <Field name={`hobbies.${index}`} />
                                            <KError name={`hobbies.${index}`}/>
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
                    <KError name={`hobbies`}/>
                    <button type="submit">submit</button>
                </Form>)}


                
            </Formik>
        </>
    )
}
export default Yups;