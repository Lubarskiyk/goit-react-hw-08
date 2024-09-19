// @components
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import * as Yup from "yup";
import HeaderCard from "../../components/HeaderCard/HeaderCard.jsx";
import SubmitButton from "../../components/SubmitButton/SubmitButton.jsx";
import TextInput from "../../components/TextInput/TextInput.jsx";

function handleSubmit2(values, actions) {
  // dispatch(addContact(values));
  console.log(values);
  actions.resetForm();
}

export default function LoginPage() {
  return (
    <Card
      shadow={false}
      className="md:px-24 md:py-14 py-8 border border-gray-300"
    >
      <HeaderCard text="Phone Book Login" />

      <CardBody className="min-w-80">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .required("Required")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Include at least one Uppercase, Lowercase, Number and a special character"
              ),
          })}
          onSubmit={handleSubmit2}
        >
          {({
            handleBlur,
            handleChange,
            values,
            handleSubmit,
            touched,
            errors,
          }) => (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 md:mt-12"
            >
              <div>
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Email
                  </Typography>
                </label>
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  label="name@mail.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email && touched.email}
                  success={!errors.email && touched.email}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="block font-medium mb-2"
                  >
                    Your Password
                  </Typography>
                </label>
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password && touched.password}
                  success={!errors.password && touched.password}
                  text={errors.password}
                />
              </div>
              <SubmitButton text="LogIn" />
            </form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}
