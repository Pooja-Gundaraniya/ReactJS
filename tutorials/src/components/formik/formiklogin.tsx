import { useFormik } from 'formik';
import React from 'react';
import "./formik.css"
interface Errors  {
    email?: string;
    password?: string;
}
const FormikLogin = () => {
    const validate = (values: any) => {
        const errors: Errors = {}
        if (!values.email) {
            errors.email = 'required'
        } else if (values.email.length < 4) {
            errors.email = "must be 5 characters or more"
        }

        if (!values.password) {
            errors.password = 'required'
        } else if (values.password.length < 4) {
            errors.password = "must be 5 characters or more"
        } else if (values.password === '12345678') {
            errors.password = "must be not 123456789"
        }

        if (!values.repassword) {
            errors.password = 'required'
        } else if (values.repassword !== values.password) {
            errors.password = "second password doesnot match with first one"
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repassword: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} /><br />
                {formik.touched.email && formik.errors.email?<div>{formik.errors.email}</div>:null}
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/><br />
                {formik.touched.password && formik.errors.password?<div>{formik.errors.password}</div>:null}
                <label htmlFor="repassword">repassword</label>
                <input type="password" name="repassword" id="repasswprd" onChange={formik.handleChange} value={formik.values.repassword} onBlur={formik.handleBlur}/><br />
                {formik.touched.repassword &&formik.errors.repassword?<div>{formik.errors.repassword}</div>:null}
                <button type="submit">Login</button>
            </form>
        </>
    )
}
export default FormikLogin;