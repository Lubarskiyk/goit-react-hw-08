import * as Yup from "yup";

export const validationSinginSchema = Yup.object({
  userName: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .max(40)
    .min(4)
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Include at least one Uppercase, Lowercase, Number and a special character"
    ),
  passwordConfirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
