const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const RowComponent = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.id), /*#__PURE__*/React.createElement("td", null, props.title), /*#__PURE__*/React.createElement("td", null, props.owner), /*#__PURE__*/React.createElement("td", null, props.created.toDateString()), /*#__PURE__*/React.createElement("td", null, props.due.toDateString()), /*#__PURE__*/React.createElement("td", null, props.status));
};

const IssueTable = () => {
  const tempIssues = [{
    id: 1,
    owner: "Person-A",
    created: new Date("2022-09-19"),
    due: new Date("2022-09-25"),
    status: "Assigned",
    title: "This is the First issue"
  }, {
    id: 2,
    owner: "Person-B",
    created: new Date("2022-09-17"),
    due: new Date("2022-09-22"),
    status: "Resolved",
    title: "This is the Second issue"
  }];
  const [issues, setIssues] = React.useState([]);
  setTimeout(() => {
    setIssues(tempIssues);
  }, 2000);
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(RowComponent, {
    key: issue.id,
    owner: issue.owner,
    status: issue.status,
    created: issue.created,
    due: issue.due,
    id: issue.id,
    title: issue.title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "TITLE"), /*#__PURE__*/React.createElement("th", null, "OWNER"), /*#__PURE__*/React.createElement("th", null, "CREATED"), /*#__PURE__*/React.createElement("th", null, "DUE"), /*#__PURE__*/React.createElement("th", null, "STATUS"))), /*#__PURE__*/React.createElement("tbody", null, issueRows)));
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h1", null, "This is placeholder for AddIssue");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null)));