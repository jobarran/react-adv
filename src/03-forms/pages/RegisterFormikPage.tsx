import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput } from '../components';


export const RegisterFormikPage = () => {

    return (

        <div>
            <h1>Register Formik Page</h1>

        <Formik 
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    name: Yup.string()
                                    .min(2, 'Debe tener al menos 2 caracteres')
                                    .max(15, 'Debe tener menos de 15 caracteres')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Debe ser un email')
                                    .required('Requerido'),
                    password1: Yup.string()
                                    .min(6, 'Debe tener al menos 6 caracteres')
                                    .required('Requerido'),
                    password2: Yup.string()
                                    .oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales')
                                    .required('Requerido'),
                })
            }>

            { (formik) => (
                <Form>
                    <MyTextInput
                        label='Name'
                        name='name'
                        placeholder='Name'
                    />
                    <MyTextInput
                        label='Email'
                        name='email'
                        placeholder='Email'
                    />
                    <MyTextInput
                        label='Password'
                        name='password1'
                        placeholder='******'
                        type='password'
                    />
                    <MyTextInput
                        label='Repeat password'
                        name='password2'
                        placeholder='******'
                        type='password'
                    />
        
                    <button type='submit'>Submit</button>
                    <button type='button' onClick={() => formik.resetForm()}>Reset</button>
                </Form>
            )}

        </Formik>

        </div>
    )
}
