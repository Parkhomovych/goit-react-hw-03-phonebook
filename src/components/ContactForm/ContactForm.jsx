import { Component } from 'react';
import { Btn, MyForm, MyLabel, MyField } from './ContactForm.style';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const initialValues = {
  name: 'Example Name ',
  number: '0689534111',
};
const SignupSchema = yup.object().shape({
  name: yup.string().min(4, Notify.info('Введіть більше 4 букв')).required(),
  number: yup
    .string()
    .min(9, Notify.info('Номер має складатись з 10 цифр'))
    .required(),
});
export class ContactForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={this.props.submit}
      >
        <MyForm>
          <MyLabel placeholder="Name" htmlFor="name">
            Name
            <MyField type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </MyLabel>
          <MyLabel placeholder="Number" htmlFor="number">
            Number
            <MyField type="tel" name="number" />
            <ErrorMessage name="number" component="div" />
          </MyLabel>
          <Btn type="submit">Add contact</Btn>
        </MyForm>
      </Formik>
    );
  }
}
