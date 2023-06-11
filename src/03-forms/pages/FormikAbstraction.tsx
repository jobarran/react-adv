import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelect, MyCheckbox } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Basic Tutorial</h1>

        <Formik 
            initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
            }}
            onSubmit={ (values) => {
                console.log(values)
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                    .max(15, 'Debe tener menos de 15 caracteres')
                                    .required('Requerido'),
                    lastName: Yup.string()
                                    .max(10, 'Debe tener menos de 10 caracteres')
                                    .required('Requerido'),
                    email: Yup.string()
                                    .email('Debe ser un email')
                                    .required('Requerido'),
                    terms: Yup.boolean()
                                    .oneOf([true], 'Debe aceptar las conficiones'),
                    jobType: Yup.string()
                                    .notOneOf([ 'it-junior' ], 'Esta opción no es permitida')
                                    .required('Requerido')
                })
            }>

            { (formik) => (
                <Form>
                    <MyTextInput
                        label='First Name'
                        name='firstName'
                        placeholder='First Name'
                    />

                    <MyTextInput
                        label='Last Name'
                        name='lastName'
                        placeholder='Last Name'
                    />

                    <MyTextInput
                        label='Email'
                        name='email'
                        placeholder='email'
                    />

                    <MySelect label='Job type' name='jobType'>
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-junior'>IT Junior</option>
                    </MySelect>

                    <MyCheckbox label='Terms & Conditions' name='terms' />
        
                    <button type='submit'>Submit</button>
                </Form>
            )}

        </Formik>



    </div>
  )
}
