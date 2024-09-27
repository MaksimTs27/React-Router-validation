import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function FormikForm() {
  const validateSchema = Yup.object({
    name: Yup.string().required('Name required!').min(2, 'Name must has as minimum 2 characters'),
    email: Yup.string().email('Incorrect email!').required('Email requried'),
  });

  return (
    <>
      <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div>
            <br />
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </>
  );
}
export default FormikForm;
