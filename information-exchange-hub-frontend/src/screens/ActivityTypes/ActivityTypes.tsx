import React, { useState } from "react";


import { Plus } from "lucide-react";

import useToggle from "../../hooks/useToggle";
import ActivityTypesForm from "./ActivityTypesForm";

type Props = {};

function ActivityTypes(props: Props) {
  const [value, toggleValue] = useToggle(false);
  const [editValue, toggleEditValue] = useToggle(false);
  const [editValueData, setEditValueData] = useState({});

  return (
    <div className="h-full w-full">
      <div className="w-full flex justify-between items-center p-5">
        <div className="flex flex-col">
          <div className="text-2xl">Activity Types</div>
          <div className="text-sm mt-1">Manage your activity types</div>
        </div>
        <div className="flex items-center">
          <button className="flex justify-between items-center px-4 py-2 border-primary-500 border rounded" onClick={() => toggleValue()}>
              <Plus size={14} className="mr-2 text-primary-500" />
              <span className="font-semibold">
                Create new
              </span>
          </button>
          <button className="ml-2" onClick={() => {
            setEditValueData({
              name: 'Activity Type 1',
              description: 'This is a description for Activity Type 1',
            });
            toggleEditValue();
          }}>
            <div className="flex justify-between items-center px-4 py-2 border-primary-500 border rounded">
              <Plus size={14} className="mr-2 text-primary-500" />
              <span className="font-semibold" >
                Edit
              </span>
            </div>
          </button>
        </div>
      </div>
      <ActivityTypesForm
        value={value}
        toggleValue={toggleValue}
        onSubmit={(values) => console.log('create api call', values)}
      />
      <ActivityTypesForm
        value={editValue}
        toggleValue={toggleEditValue}
        onSubmit={(values) => console.log('edit api call',values)}
        isNew={false}
        initialValues={editValueData}
      />
    </div>
  );
}

export default ActivityTypes;
