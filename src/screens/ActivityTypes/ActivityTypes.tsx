import React, { useEffect, useState } from "react";

import { Plus } from "lucide-react";

import useToggle from "../../hooks/useToggle";
import ActivityTypesForm from "./ActivityTypesForm";
// import ActivityTypesForm from "../../components/Form/Form";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";

import {
  useGetApiVbyVersionActivityTypeActivityTypeQuery,
  usePostApiVbyVersionActivityTypeActivityTypeMutation,
  usePatchApiVbyVersionActivityTypeAndActivityTypeIdMutation,
  useDeleteApiVbyVersionActivityTypeActivityTypeMutation,
  usePostApiVbyVersionActivityTypeSearchMutation,
} from "../../store/APIs";
import ActivityTypesTable from "./ActivityTypesTable";

type Props = {};

function ActivityTypes(props: Props) {
  const [createModal, toggleCreateModal] = useToggle(false);
  const [editModal, toggleEditmodal] = useToggle(false);
  const [editValueData, setEditValueData] = useState({
    id: "",
    name: "",
    description: "",
  });

  const [rowCount, setRowCount] = React.useState(1);
  const [pageNumber, setPageNumber] = React.useState(1);

  const [createActivityType] =
    usePostApiVbyVersionActivityTypeActivityTypeMutation();
  const [editActivityType] =
    usePatchApiVbyVersionActivityTypeAndActivityTypeIdMutation();
  const [deleteActivityType] =
    useDeleteApiVbyVersionActivityTypeActivityTypeMutation();
  const [searchActivityType] = usePostApiVbyVersionActivityTypeSearchMutation();

  const {
    data: data1,
    error,
    isLoading,
  } = useGetApiVbyVersionActivityTypeActivityTypeQuery({
    version: "1",
    pageNumber: pageNumber,
    size: rowCount,
    sortBy: "id",
    sortOrder: "asc",
  });

  const searchOperation = (e: any) => {
    // "key:value"
    const [key, value] = e.split(":");
    searchActivityType({
      version: "1",
      body: {
        [key.trim()]: value.trim(),
      },
    });
  };

  const [data, setData] = useState({
    data: [
      {
        id: "538b662b-6cfd-427c-bb4c-064f1f071a7c",
        name: "A2",
        description: "Activity 2",
        isActive: true,
        createdBy: "Raju",
        createdOn: "2024-05-10T10:39:33.537",
        updatedBy: "testId",
        updatedOn: "2024-05-13T10:36:09.113",
      },
      {
        id: "202ce071-526a-4843-8a2f-07404bbce4c3",
        name: "TestUpdatev1",
        description: "Test",
        isActive: true,
        createdBy: "Rakesh",
        createdOn: "2024-05-10T10:40:11.183",
        updatedBy: "testId",
        updatedOn: "2024-05-13T10:36:09.133",
      },
      {
        id: "8f0853e7-33ab-4fe4-ba2b-091fd3e809d8",
        name: "A4",
        description: "Activity 4",
        isActive: true,
        createdBy: "Raju",
        createdOn: "2024-05-10T10:39:49.18",
        updatedBy: "testId",
        updatedOn: "2024-05-13T10:36:09.137",
      },
      {
        id: "62edfeee-0926-4ca7-b723-181e985f22e4",
        name: "NewActivity1",
        description: "Description of new activity 1",
        isActive: true,
        createdBy: "Creator",
        createdOn: "2024-05-10T10:57:51.36",
        updatedBy: null,
        updatedOn: null,
      },
      {
        id: "3c7562a3-e764-429a-82b1-185173a3c3d5",
        name: "A3",
        description: "Activity 3",
        isActive: true,
        createdBy: "Raju",
        createdOn: "2024-05-10T10:39:41.64",
        updatedBy: null,
        updatedOn: null,
      },
      {
        id: "b1381d81-94d6-4aad-bb21-1eab087e512b",
        name: "BIM360 activity",
        description: "Activity description",
        isActive: true,
        createdBy: "Raju",
        createdOn: "2024-05-10T10:38:51.5",
        updatedBy: null,
        updatedOn: null,
      },
      {
        id: "abc30784-7852-49c6-852c-20b7330f8ff3",
        name: "Activity Type 3",
        description: "V3",
        isActive: true,
        createdBy: "Ram",
        createdOn: "2024-05-10T10:37:39.67",
        updatedBy: null,
        updatedOn: null,
      },
      {
        id: "b76322bb-0a13-4d6e-8e8b-2619d1011764",
        name: "NewActivity3",
        description: "Description of new activity 1",
        isActive: true,
        createdBy: "Creator",
        createdOn: "2024-05-10T11:06:08.44",
        updatedBy: null,
        updatedOn: null,
      },
      {
        id: "75b41ca7-26e4-48e9-8fe0-29ed366fead6",
        name: "Activity Type 5",
        description: "V5",
        isActive: true,
        createdBy: "Ramesh",
        createdOn: "2024-05-10T10:37:58.933",
        updatedBy: null,
        updatedOn: null,
      },
      {
        id: "8bfc5dd2-0e19-49ad-9edb-2c181e58ff7a",
        name: "B5",
        description:
          "lorem ipsum lorem ipsum  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        isActive: true,
        createdBy: "Rakesh",
        createdOn: "2024-05-10T10:40:53.7",
        updatedBy: null,
        updatedOn: null,
      },
    ],
    totalRecords: 10,
  });

  return (
    <DashboardLayout
      title="Activity Types"
      description="Manage activity types"
      createAction={toggleCreateModal}
    >
      <ActivityTypesTable
        data={data}
        error={error}
        isLoading={isLoading}
        editValueData={editValueData}
        toggleEditValue={toggleEditmodal}
        setEditValueData={setEditValueData}
        deleteActivityType={deleteActivityType}
        createActivityToogle={toggleCreateModal}
        searchOperation={searchOperation}
        rowCount={rowCount}
        setRowCount={setRowCount}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <ActivityTypesForm
        value={createModal}
        toggleValue={toggleCreateModal}
        onSubmit={(values) =>
          createActivityType({
            version: "1",
            activityTypeDto: {
              name: values.name,
              description: values.description,
              createdBy: "admin",
            },
          })
        }
        isMultiSelect={false}
        formTexts={{
          formTitle: "Activity Types",
          formSub:
            "Let's create and configure your activity type in the easiest possible way",
          helperText:
            "Enter a descriptive name for your activity type (200 characters max)",
          nameInput: "Activity Types Name",
          helperTextDescription:
            "Enter a descriptive name for your activity type (500 characters max)",
          descriptionInput: "Description",
        }}
      />
      <ActivityTypesForm
        value={editModal}
        toggleValue={toggleEditmodal}
        onSubmit={(values) => {
          editActivityType({
            version: "1",
            activityTypeId: editValueData?.id,
            activityTypeDto: {
              name: values.name,
              description: values.description,
              createdBy: "admin",
            },
          });
        }}
        isNew={false}
        isMultiSelect={false}
        initialValues={editValueData}
        formTexts={{
          formTitle: "Activity Types",
          formSub:
            "Let's create and configure your activity types in the easiest possible way",
          helperText:
            "Enter a descriptive name for your activity types (200 characters max)",
            helperTextDescription:
            "Enter a descriptive name for your activity type (500 characters max)",
          nameInput: "Activity Type Name",
          descriptionInput: "Description",
        }}
      />
    </DashboardLayout>
  );
}

export default ActivityTypes;
