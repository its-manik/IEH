import React, { useEffect } from "react";
import {
  FloatingLabel,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import deepEqual from "../../utils/deepEqual";
import MultiSelect from "../../components/MultiSelect/MultiSelect";

type Props = {
  value: boolean;
  toggleValue: () => void;
  initialValues?: any;
  isNew?: boolean;
  onSubmit: (values: any) => void;
  isMultiSelect:boolean
};

function ActivityTypesForm({
  value,
  toggleValue,
  initialValues = {},
  isNew = true,
  onSubmit,
  isMultiSelect
}: Props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .max(200, "Name must be at most 200 characters"),
    description: Yup.string()
      .required("Description is required")
      .max(500, "Description must be at most 500 characters"),
  });

  return (
    <Modal show={value} onClose={() => toggleValue()}>
      <ModalHeader className="border-0">
        <div className="flex flex-col">
          <div className="text-2xl">
            {isNew ? "Create Webhook" : "Edit Webhook"}
          </div>
          <div className="text-sm mt-1 font-light text-sysNeutral-800">
            {isNew
              ? "Let's create and configure your webhook in the easiest possible way"
              : "Edit your activity type details"}
          </div>
        </div>
      </ModalHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <Form onSubmit={handleSubmit}>
            <ModalBody className="overflow-visible">
              <div className="flex flex-col space-y-4">
                <FloatingLabel
                  name="name"
                  variant="outlined"
                  label="Activity type name"
                  helperText="Enter a descriptive name for your webhook (200 characters max)"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched("name", true)}
                  color={errors.name && touched.name ? "error" : "default"}
                />

                <FloatingLabel
                  name="description"
                  variant="outlined"
                  label="Description"
                  helperText="Enter a description for your webhook (500 characters max)"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={() => setFieldTouched("description", true)}
                  color={
                    errors.description && touched.description
                      ? "error"
                      : "default"
                  }
                />
                {isMultiSelect && (
                  <MultiSelect/>
                )}
              </div>
            </ModalBody>
            <ModalFooter className="border-0 float-right mt-20">
              <button
                className="bg-transparent text-xs mr-2 py-2 px-4 tracking-wide rounded-full w-20 border border-sysNeutral-200 "
                onClick={() => toggleValue()}
              >
                Cancel
              </button>
              <button
                className="bg-primary-500 text-xs mr-2 py-2 px-4 tracking-wide rounded-full w-20 text-white disabled:bg-sysNeutral-200"
                type="submit"
                disabled={
                  (Object.keys(errors).length > 0 || (!isNew && deepEqual(initialValues, values)) )
                }
              >
                {isNew ? "Create" : "Save"}
              </button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default ActivityTypesForm;
