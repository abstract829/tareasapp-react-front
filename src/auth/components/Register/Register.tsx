import { ErrorMessage, Field, Formik,Form } from "formik"
import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import * as Yup from 'yup'
import '../Login/styles.css'
import { useAuth } from "../../context/useAuth"


export const Register = () => {
    const {crearUsuario} = useAuth()
    return (
        <div className="auth_container">
            <div className="navigate_auth">
                <NavLink to="/auth/login">Login</NavLink>
                <NavLink to="/auth/register">Register</NavLink>
            </div>
            <Formik
            initialValues={{
                name:'',
                email: '',
                password: '',
            }}
            onSubmit={(values) => crearUsuario(values)}
            validationSchema={Yup.object({
                name: Yup.string()
                        .min(5, 'Debe tener minimo 5 caracteres')
                        .required('Campo obligatorio')
                        .max(50, 'No debe superar los 50 caracteres'),
                email : Yup.string()
                            .required('Debe ingresar el email')
                            .email('Email invalido'),
                password : Yup.string()
                            .required('Debe ingresar la password')
                            .min(6,'Debe tener minimo 6 caracteres')
            })}>
                {
                    (formik) => (
                        <Form>
                        <label htmlFor="name">Nombre:</label>
                        <Field type="text" name="name"/>
                        <ErrorMessage name="name" component="span"/>

                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="span"/>

                        <Button type="submit">Registrarme</Button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
