import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
    disableFilters: true
    // sticky: 'left'
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
    disableFilters: true

    // sticky: 'left'
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
    disableFilters: true

    // sticky: 'left'
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    Filter: ColumnFilter,
    // cell - controls what is rendered in the UI.It is method. value - row value of each column.
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
    disableFilters: true
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    Filter: ColumnFilter,
    disableFilters: true
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    Filter: ColumnFilter,
    disableFilters: true
  }
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id"
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
      }
    ]
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth"
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country"
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
      }
    ]
  }
];
