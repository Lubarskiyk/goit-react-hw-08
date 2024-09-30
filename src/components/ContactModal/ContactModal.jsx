import { Dialog, Card, CardBody } from "@material-tailwind/react";
import HeaderCard from "../HeaderCard/HeaderCard.jsx";
import { Formik } from "formik";
import { ValidationContactSchema } from "./ValidationContactSchema.js";
import { useDispatch, useSelector } from "react-redux";
import Label from "../Label/Label.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import SubmitButton from "../SubmitButton/SubmitButton.jsx";
import { addContact, editContact } from "../../redux/contacts/operations.js";
import {
  openCloseModal,
  selectModal,
  selectModalItems,
} from "../../redux/modalContact/slice.js";

export function AddContactDialog() {
  const dispatch = useDispatch();
  const open = useSelector(selectModal);
  const items = useSelector(selectModalItems);
  const text = !items.name ? "Add contact" : "Edit contact";
  function handleSubmit(values, actions) {
    if (!items.name) {
      dispatch(addContact(values));
    } else {
      values.id = items.id;
      dispatch(editContact(values));
    }
    handle();
    actions.resetForm();
  }
  function handle() {
    dispatch(openCloseModal(items));
  }
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handle}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <HeaderCard text={text} />
          <CardBody className="p-6 pt-2 flex flex-col gap-4">
            <Formik
              initialValues={{
                name: items.name,
                number: items.number,
              }}
              onSubmit={handleSubmit}
              validationSchema={ValidationContactSchema}
            >
              {({
                handleBlur,
                handleChange,
                values,
                handleSubmit,
                touched,
                errors,
              }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
                  <div>
                    <Label htmlFor="name" text="Contact Name" />
                    <TextInput
                      id="name"
                      type="name"
                      name="name"
                      label="Contact Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      error={errors.name && touched.name}
                      success={!errors.name && touched.name}
                      text={errors.name}
                    />
                  </div>
                  <div>
                    <Label htmlFor="number" text="Contact Number" />
                    <TextInput
                      id="number"
                      type="text"
                      name="number"
                      label="Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.number}
                      error={errors.number && touched.number}
                      success={!errors.number && touched.number}
                      text={errors.number}
                    />
                  </div>
                  <SubmitButton text={text} />
                </form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
