import { object, string } from 'yup'

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

let personalInfoSchema = object().shape({
  name: string().required('Name is required.'),
  email: string().email('Email must be valid.').required('Email is required.'),
  phone: string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone is required.'),
})

export default personalInfoSchema
