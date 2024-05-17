import React from "react";
import { ReactComponent as NoRecords } from "../../assets/img/NoRecords.svg";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  Columns3,
  Filter,
  SearchIcon,
} from "lucide-react";
import { useTable, useSortBy } from "react-table";
import {
  Popover,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Checkbox,
  Label,
} from "flowbite-react";

type ColumnProps = {
  Header: string;
  accessor: string;
  className?: string;
  cellClassName?: string;
  headerClassName?: string;
  alignment?: string;
};

type TableProps = {
  columns: ColumnProps[];
  data: any[];
  sort?: any;
  setSort?: any;
  hiddenColumns?: string[];
  setHiddenColumns?: any;
  className?: string;
  searchPlaceholder?: string;
  searchFunction?: (search: string) => void;
  NoRecordsTitle?: string;
  createAction?: () => void;
  rowCount?: number;
  pageNumber?: number;
  totalRecords?: number;
  setPageNumber?: any;
  setRowCount?: any;

};

function DataGrid({
  columns,
  data,
  sort = {},
  setSort = () => {},
  hiddenColumns = [],
  setHiddenColumns = () => {},
  className = "",
  searchPlaceholder = "Search",
  searchFunction = () => {},
  NoRecordsTitle = "No Records Found",
  createAction = () => {},
  rowCount = 5,
  pageNumber = 1,
  totalRecords = 0,
  setPageNumber = () => {},
  setRowCount = () => {},
}: TableProps) {
  const memoizedColumns = React.useMemo(() => columns, []);
  const memoizedData = React.useMemo(() => data, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: memoizedColumns,
        data: memoizedData,
      },
      useSortBy
    );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchFunction(e.target.value);
  };

  return (
    <div className="h-[calc(100dvh-9rem)]">
      {/* <!-- Data-grid container with filter & search field bar  --> */}

      <div className="mt-5">
        {/* <!-- filter & search text input field bar --> */}

        <div className="flex items-center justify-between mb-4 gap-5">
          {/* <!-- filter and column  --> */}

          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center text-sm py-2 px-4 text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
              <span className="mr-2 font-bold">Filter</span>
              <Filter width={16} height={16} />
            </button>
            <Popover
              content={
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                      id="filter1"
                      className="mr-2 focus:ring-0 cursor-pointer"
                      color={"primary"}
                      checked={hiddenColumns.length === 0}
                      onChange={(e) => {
                        e.target.checked
                          ? setHiddenColumns([])
                          : setHiddenColumns(
                              columns.map((column) => column.accessor)
                            );
                      }}
                    />
                    <Label htmlFor="filter1" className="cursor-pointer">
                      All
                    </Label>
                  </div>
                  {columns.map((column) => (
                    <div
                      key={column.accessor}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <Checkbox
                        id={column.accessor}
                        checked={!hiddenColumns.includes(column.accessor)}
                        className="mr-2 focus:ring-0 cursor-pointer"
                        color={"primary"}
                        onChange={(e) => {
                          e.target.checked
                            ? setHiddenColumns(
                                hiddenColumns.filter(
                                  (item) => item !== column.accessor
                                )
                              )
                            : setHiddenColumns([
                                ...hiddenColumns,
                                column.accessor,
                              ]);
                        }}
                      />
                      <Label
                        htmlFor={column.accessor}
                        className="cursor-pointer"
                      >
                        {column.Header}
                      </Label>
                    </div>
                  ))}
                </div>
              }
            >
              <button className="flex items-center justify-center text-sm py-2 px-4 text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                <span className="mr-2 font-bold">Columns</span>
                <Columns3 width={16} height={16} />
              </button>
            </Popover>
          </div>

          {/* <!-- Search text input field --> */}

          <div className="w-48">
            <form className="max-w-md mx-auto">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full h-3 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                  onBlur={handleSearch}
                />
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* <!-- Data-grid container  --> */}

        <div className="relative overflow-auto border border-gray-300 sm:rounded-lg w-full max-h-[calc(100dvh-18rem)]">
          {/* <!-- Table to list all table headings  --> */}

          <Table
            hoverable
            {...getTableProps()}
            className="w-full text-md overflow-auto h-ful"
          >
            {headerGroups.map((headerGroup) => (
              <TableHead
                {...headerGroup.getHeaderGroupProps()}
                className="text-xs capitalize bg-gray-200 sticky top-0"
              >
                {headerGroup.headers.map((column: any) => (
                  <TableHeadCell
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={`px-6 py-4 text-nowrap ${hiddenColumns.includes(column.id) ? "hidden" : ""}`}
                  >
                    <div className="flex items-center">
                      {column.render("Header")}
                      <ChevronsUpDown className="w-3 h-3 ms-1.5" />
                    </div>
                  </TableHeadCell>
                ))}
              </TableHead>
            ))}
            <TableBody
              {...getTableBodyProps()}
              className="divide-y h-full max-h-[calc(100dvh-18rem)] overflow-auto"
            >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <TableRow
                    {...row.getRowProps()}
                    className="text-xs bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    {row.cells.map((cell) => {
                      return (
                        <TableCell
                          {...cell.getCellProps()}
                          className={` px-6 py-2 ${hiddenColumns.includes(cell.column.id) ? "hidden" : ""} whitespace-nowrap font-medium text-gray-900 dark:text-white`}
                        >
                          <div className="max-w-40 text-ellipsis whitespace-nowrap overflow-hidden">
                            <span title={cell.value}>
                              {cell.render("Cell")}
                            </span>
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>

          {/* <!-- Empty state container  --> */}

          {data.length === 0 && (
            <div className="w-full h-full flex items-center justify-center flex-col gap-5 my-5">
              {/* <!-- svg empty state  --> */}

              <NoRecords className="w-40 h-40" />

              {/* <!-- empty state text  --> */}

              <h2 className="text-2xl md:text-3xl">{NoRecordsTitle}</h2>

              {/* <!-- CTA button  --> */}

              <button
                type="button"
                onClick={createAction}
                className="text-sm py-2 px-4 text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-gray-100"
              >
                Create
              </button>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Track number of rows & pagination container  --> */}

      <div className="flex items-center justify-between mt-5 h-10">
        {/* <!-- Track number of rows --> */}

        <div>
        <span className="text-sm text-gray-900 dark:text-white">
              Page: &nbsp; {pageNumber} of {Math.ceil(totalRecords / rowCount)}
            </span>
        </div>

        {/* <!-- Pagination container --> */}

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1">
            <span>Show per page:</span>
            <select
              className="text-sm text-gray-900 bg-white border border-gray-200 rounded-lg px-2 py-1"
              onChange={(e) => setRowCount(e.target.value)}
              value={rowCount}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="flex items-center mr-1 cursor-pointer"
            onClick={() => {
              pageNumber > 1 &&
              setPageNumber(pageNumber - 1)
            }}
            >
              <span>
                <ChevronLeft className="w-5 h-5 stroke-icon-default hover:stroke-icon-primary" />
              </span>
              <span className="hover:text-primary-500 text-sm">Prev</span>
            </div>
            {
              // add page number buttons first last and next prev and current page numbers

              <>
                <div className="flex items-center ml-1"
                onClick={() => setPageNumber(1)}
                >
                  <span className="hover:text-primary-500 text-sm">1</span>
                </div>
                {
                  pageNumber > 2 &&
                <div className="flex items-center ml-1"
                onClick={() => setPageNumber(pageNumber - 1)}
                >
                  <span className="hover:text-primary-500 text-sm">
                    {pageNumber - 1}
                  </span>
                </div>
                }
                &nbsp;
                {
                  pageNumber > 1 &&
                <div className="flex items-center ml-1"
                >
                  <span className="text-primary-500 text-sm font-bold">{pageNumber}</span>
                </div>
                }
                &nbsp;
                {
                  pageNumber < Math.ceil(totalRecords / rowCount) - 1 &&
                <div className="flex items-center ml-1"
                onClick={() => setPageNumber(pageNumber + 1)}
                >
                  <span className="hover:text-primary-500 text-sm">
                    {pageNumber + 1}
                  </span>
                </div>
                }
                {
                  pageNumber < Math.ceil(totalRecords / rowCount) &&
                <div className="flex items-center ml-1"
                onClick={() => setPageNumber(Math.ceil(totalRecords / rowCount))}
                >
                  <span className="hover:text-primary-500 text-sm">
                    {Math.ceil(totalRecords / rowCount)}
                  </span>
                </div>
                }
              </>
            }
            <div className="flex items-center ml-1"
            onClick={() => {
              pageNumber < Math.ceil(totalRecords / rowCount) &&
              setPageNumber(pageNumber + 1)
            }}
            >
              <span className="hover:text-primary-500 text-sm">Next</span>
              <span>
                <ChevronRight className="w-5 h-5 stroke-icon-default hover:stroke-icon-primary" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataGrid;
