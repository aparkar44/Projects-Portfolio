const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const RowComponent = (props) => {
  return (
    <tr>
      <td style={props.rowStyle}>{props.id}</td>
      <td style={props.rowStyle}>{props.title}</td>
    </tr>
  );
};

const IssueTable = () => {
  const rowStyle = { border: "1px solid" };
  const issues = [
    {
      id: 5,
      title: "This is the fifth issue",
    },
    {
      id: 6,
      title: "This is the sixth issue",
    },
  ];

  const issueRows = issues.map(issue => (
    <RowComponent rowStyle = {rowStyle} id={issue.id} title = {issue.title} />
  ))
  return (
    <div>
      <h2>This is placeholder for IssueTable</h2>
      <table>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={rowStyle}>1</td>
            <td style={rowStyle}>This is First Issue</td>
          </tr>
          <RowComponent
            rowStyle={rowStyle}
            id={2}
            title={"This is second issue."}
          />
          <RowComponent
            rowStyle={rowStyle}
            id={3}
            title={"This is third issue."}
          />
          <RowComponent
            rowStyle={rowStyle}
            id={4}
            title={"This is fourth issue."}
          />
          {issueRows}
        </tbody>
      </table>
    </div>
  );
};

const AddIssue = () => {
  return <h1>This is placeholder for AddIssue</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <IssueFilter />
    <hr />
    <IssueTable />
    <hr />
    <AddIssue />
  </React.StrictMode>
);
