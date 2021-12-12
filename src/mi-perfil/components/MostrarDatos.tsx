import { useContext } from 'react';
import { AuthContext } from '../../auth/context/AuthContext';
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './styles/styles.css'
import { Button } from 'react-bootstrap';
export const MostrarDatos = () => {
    const {logedUser} = useContext(AuthContext)
    return (
        <div className="perfil-container">
            <div className='datos-container'>
                <h2>Mis datos</h2>
                <p>Nombre : {logedUser.name}</p>
                <p>Email : {logedUser.email}</p>
            </div>
            <div className='form-container'>
                <Formik 
                initialValues={{
                    name:'',
                    email:'',
                }}
                onSubmit={ (values) => console.log(values)}
                validationSchema={Yup.object({
                    name: Yup.string()
                            .min(10, 'Debe tener minimo 10 caracteres')
                            .required('Campo obligatorio'),
                    email: Yup.string()
                                .email('Ingrese un email valido')
                                .required('Campo obligatorio')
                })}>
                    {
                        () => (
                            <Form>
                                <h3>Editar perfil</h3>

                                <label htmlFor="name">Nombre: </label>
                                <Field type="text" name="name"/>
                                <ErrorMessage name="name" component="span" className='error-msg'/>

                                <label htmlFor="email">Email:</label>
                                <Field type="email" name="email"/>
                                <ErrorMessage name="email" component="span" className='error-msg'/>

                                <Button>Enviar</Button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}
