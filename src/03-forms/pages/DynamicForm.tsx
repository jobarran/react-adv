
import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredField: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[ input.name ] = input.value;

    //* Si tiene validaciones
    if ( !input.validations ) continue;

    let schema = Yup.string()

    //* Por cada una de ellas
    for (const rule of input.validations ) {
        if (rule.type === 'required' ) {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 1, `Debe tener al menos ${ (rule as any).value } caracteres`)
        }
        if (rule.type === 'email' ) {
            schema = schema.email('Debes introducir un correo')
        }
    }
    requiredField[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredField })

export const DynamicForm = () => {


  return (

    <div>

        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ (values) => {
                console.log(values)
            } }
            >
            { (formik) => (
                <Form>
                    
                    { formJson.map( ({ type, name, placeholder, label, options}) => {

                        if ( type === 'input' || type === 'password' || type === 'email') {

                        return <MyTextInput
                                    key={ name }
                                    type={( type as any)}
                                    name={ name }
                                    label={ label }
                                    placeholder={ placeholder }
                                />

                        } else if ( type === 'select') {
                            return (
                                <MySelect
                                    key={ name }
                                    label={ label }
                                    name={ name }
                                >
                                    <option value="">Select an option</option>
                                    {
                                        options?.map( opt => (
                                            <option key={ opt.id } value={ opt.id }>{ opt.label }</option>
                                        ))
                                    }
                                </MySelect>
                            )
                        }

                        throw new Error('El type no es soportable')

                    }) }

                    <button type='submit'>Sbmit</button>

                </Form>
            )}
        </Formik>

    </div>

  )
}
