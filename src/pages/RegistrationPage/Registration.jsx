// @components
import { Card, CardBody } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import HeaderCard from "../../components/HeaderCard/HeaderCard.jsx";
import SubmitButton from "../../components/SubmitButton/SubmitButton.jsx";
import TextInput from "../../components/TextInput/TextInput.jsx";
import Label from "../../components/Label/Label.jsx";
import { register } from "../../redux/auth/operations.js";
import { validationSinginSchema } from "./ValidationSingin.js";

export default function Registration() {
  const dispatch = useDispatch();
  function handleSubmit({ email, userName, password }, actions) {
    dispatch(
      register({
        name: userName,
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
      <HeaderCard text="Phone Book Registration" />
      <CardBody className="min-w-80">
        <Formik
          initialValues={{
            userName: "",
            email: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={validationSinginSchema}
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
                <Label htmlFor="userName" text="Your Name" />
                <TextInput
                  id="userName"
                  type="text"
                  name="userName"
                  label="Your Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                  error={errors.userName && touched.userName}
                  success={!errors.userName && touched.userName}
                  text={errors.userName}
                />
              </div>
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
                <Label htmlFor="password" text="New Password" />
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
              <div>
                <Label htmlFor="passwordConfirmation" text="Confirm Password" />
                <TextInput
                  id="passwordConfirmation"
                  type="password"
                  name="passwordConfirmation"
                  label="passwordConfirmation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                  error={
                    errors.passwordConfirmation && touched.passwordConfirmation
                  }
                  success={
                    !errors.passwordConfirmation && touched.passwordConfirmation
                  }
                  text={errors.passwordConfirmation}
                />
              </div>
              <SubmitButton text="Registered" />
            </form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}
