import { ErrorMessage, Field, Formik, Form } from "formik"
import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import * as Yup from 'yup'
import { useAuth } from "../../context/useAuth"
import './styles.css'
export const Login = () => {
    const {logearUsuario} = useAuth()
    return (
        <div className="auth_container">
            <div className="navigate_auth">
                <NavLink to="/auth/login">Login</NavLink>
                <NavLink to="/auth/register">Register</NavLink>
            </div>
            <Formik
            initialValues={{
                email: 'user1@email.com',
                password: '123456',
            }}
            onSubmit={({email,password}) => logearUsuario(email,password)}
            validationSchema={Yup.object({
                email : Yup.string()
                            .required('Debe ingresar el email')
                            .email('Email invalido'),
                password : Yup.string()
                            .required('Debe ingresar la password')
            })}>
                {
                    (formik) => (
                        <Form>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email"/>
                        <ErrorMessage name="email" component="span"/>

                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component="span"/>
                        <Button type="submit">Iniciar sesion</Button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
