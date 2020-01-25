import * as yup from 'yup'; // for everything

export default yup.object().shape({
  name: yup.string().required(),
  lat: yup.number().min(-180).max(180).required(),
  lng: yup.number().min(-180).max(180).required(),
  date: yup.date().required()
})