import React, { useEffect } from "react";
import DataGrid from "../../components/DataGrid/DataGrid";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { Delete, Edit, Trash2, User } from "lucide-react";

type Props = {
  data: any;
  error: any;
  isLoading: boolean;
  editValueData: any;
  toggleEditValue: any;
  setEditValueData: any;
  deleteEvent: any;
  createActivityToogle: any;
  searchOperation: any;
  rowCount: number;
  setRowCount: any;
  pageNumber: number;
  setPageNumber: any;
};

function EventsTable({
  data = {},
  error = null,
  isLoading = false,
  editValueData = {},
  toggleEditValue = () => {},
  setEditValueData = () => {},
  deleteEvent = () => {},
  createActivityToogle = () => {},
  searchOperation = () => {},
  rowCount = 5,
  setRowCount = () => {},
  pageNumber = 1,
  setPageNumber = () => {},
}: Props) {
  const [hiddenColumns, setHiddenColumns] = React.useState(["id"]);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Activity Type Name",
      accessor: "name",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Created on",
      accessor: "createdOn",
    },
    {
      Header: "Created by",
      accessor: "createdBy",
    },
    {
      Header: "Modified on",
      accessor: "modifiedOn",
    },
    {
      Header: "Modified by",
      accessor: "modifiedBy",
    },
    {
      Header: "Actions",
      accessor: "actions",
      Cell: ({ row }: any) => (
        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={() => {
              setEditValueData({
                id: row.original.id,
                name: row.original.name,
                description: row.original.description,
              });
              toggleEditValue();
            }}
            className="p-2 text-blue-500 rounded-md"
          >
            <Edit size={20} />
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="p-2 text-red-500 rounded-md"
          >
            <Trash2 size={20} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-full">
      <DataGrid
        data={data?.data || []}
        columns={columns}
        hiddenColumns={hiddenColumns}
        setHiddenColumns={setHiddenColumns}
        NoRecordsTitle="No Activity Types Created Yet"
        createAction={createActivityToogle}
        searchFunction={searchOperation}
        rowCount={rowCount}
        setRowCount={setRowCount}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalRecords={data?.totalRecords || 0}
      />
      <Modal
        title="Delete Event"
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      >
        <ModalHeader className="border-0">
          <h2>Delete Activity Type</h2>
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this activity type?</p>
        </ModalBody>
        <ModalFooter className="border-0">
          <div className="flex items-center space-x-4 justify-end w-full mr-4">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-transparent text-xs mr-2 py-2 px-4 tracking-wide rounded-full w-20 border border-sysNeutral-200"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setShowDeleteModal(false);
                deleteEvent({
                  version: "1",
                  body: [editValueData.id],
                  UserId: "1",
                });
              }}
              className="bg-red-500 text-xs mr-2 py-2 px-4 tracking-wide rounded-full w-20 text-white disabled:bg-sysNeutral-200"
            >
              Delete
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EventsTable;
