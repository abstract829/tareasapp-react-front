import { Form, Formik, Field, ErrorMessage } from 'formik'
import { Button } from 'react-bootstrap'
import * as Yup from 'yup'
import './styles.css'
import { useTareas } from '../../hooks/useTareas';

export const CrearTarea = () => {
    const {crearTarea} = useTareas()
    return (
        <div className='container'>
            <Formik
                initialValues={{
                    title:'',
                    desc:'',
                }}
                onSubmit={ ({title,desc}) => crearTarea(title,desc)}
                validationSchema={Yup.object({
                    title: Yup.string()
                            .min(5, 'Debe tener minimo 5 caracteres')
                            .required('Campo obligatorio'),
                    desc: Yup.string()
                                .required('Campo obligatorio')
                                .min(10, 'Debe tener como minimo 10 caracteres')
                                .max(200, 'Debe tener como maximo 200 caracteres')
                })}>
                    {
                        () => (
                            <Form>
                                <label htmlFor="title">Titulo: </label>
                                <Field type="text" name="title"/>
                                <ErrorMessage name="title" component="span" className='error-msg'/>

                                <label htmlFor="desc">Descripcion:</label>
                                <Field as="textarea" type="email" name="desc"/>
                                <ErrorMessage name="desc" component="span" className='error-msg'/>

                                <Button type="submit">Agregar</Button>
                            </Form>
                        )
                    }
                </Formik>
        </div>
    )
}
