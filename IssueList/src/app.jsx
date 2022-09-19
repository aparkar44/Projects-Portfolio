const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const RowComponent = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.owner}</td>
      <td>{props.created.toDateString()}</td>
      <td>{props.due.toDateString()}</td>
      <td>{props.status}</td>
    </tr>
  );
};

const IssueTable = () => {

 
  const tempIssues = [
    {
      id: 1,
      owner: "Person-A",
      created: new Date("2022-09-19"),
      due: new Date("2022-09-25"),
      status: "Assigned",
      title: "This is the First issue",
    },
    {
      id: 2,
      owner: "Person-B",
      created: new Date("2022-09-17"),
      due: new Date("2022-09-22"),
      status: "Resolved",
      title: "This is the Second issue",
    },
  ];

  const [issues, setIssues] = React.useState([]);

  setTimeout(() => {
    setIssues(tempIssues);
  }, 2000)

  const issueRows = issues.map(issue => (
    <RowComponent key={issue.id} owner={issue.owner} status={issue.status} created={issue.created} due={issue.due} id={issue.id} title = {issue.title} />
  ))
  return (
    <div>
      <h2>This is placeholder for IssueTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>OWNER</th>
            <th>CREATED</th>
            <th>DUE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
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
