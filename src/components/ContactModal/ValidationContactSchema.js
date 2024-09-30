import * as Yup from "yup";
export const ValidationContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Неправильний формат номера телефону. Введіть у форматі 123-45-67"
    )
    .min(9, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
});
