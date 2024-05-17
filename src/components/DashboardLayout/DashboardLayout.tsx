import { Plus } from 'lucide-react';
import React from 'react'

type Props = {
    children: React.ReactNode,
    title: string,
    description: string,
    createAction: () => void
}

function DashboardLayout({
    children,
    title,
    description,
    createAction
}: Props) {
  return (
    <div className="h-full w-full">
    <div className="w-full flex justify-between items-center p-5 pl-0 h-20">
      <div className="flex flex-col">
        <div className="text-2xl">{title}</div>
        <div className="text-sm mt-1">{description}</div>
      </div>
      <div className="flex items-center">
        <button
            className="flex justify-between items-center px-4 py-2 border-primary-500 border rounded"
            onClick={() => createAction()}
            >
            <Plus size={14} className="mr-2 text-primary-500" />
            <span className="font-semibold">
              Create new
            </span>
        </button>
      </div>
    </div>
    {children}
  </div>
  )
}

export default DashboardLayout