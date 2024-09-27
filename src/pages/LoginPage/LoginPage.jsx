// @components
import { Card, CardBody } from "@material-tailwind/react";
import { Formik } from "formik";
import HeaderCard from "../../components/HeaderCard/HeaderCard.jsx";
import SubmitButton from "../../components/SubmitButton/SubmitButton.jsx";
import TextInput from "../../components/TextInput/TextInput.jsx";
import Label from "../../components/Label/Label.jsx";
import { logIn } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";
import { ValidationLoginSchema } from "./ValidationLogIn.js";

export default function LoginPage() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }, actions) {
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    actions.resetForm();
  }
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
          validationSchema={ValidationLoginSchema}
          onSubmit={handleSubmit}
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
                <Label htmlFor="email" text="Your Email" />

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
                  text={errors.email}
                />
              </div>
              <div>
                <Label htmlFor="password" text="Your Password" />

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
