const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const RowComponent = props => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.id), /*#__PURE__*/React.createElement("td", {
    style: props.rowStyle
  }, props.title));
};

const IssueTable = () => {
  const rowStyle = {
    border: "1px solid"
  };
  const issues = [{
    id: 5,
    title: "This is the fifth issue"
  }, {
    id: 6,
    title: "This is the sixth issue"
  }];
  const issueRows = issues.map(issue => /*#__PURE__*/React.createElement(RowComponent, {
    rowStyle: rowStyle,
    id: issue.id,
    title: issue.title
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "This is placeholder for IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "ID"), /*#__PURE__*/React.createElement("th", {
    style: rowStyle
  }, "Title"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "1"), /*#__PURE__*/React.createElement("td", {
    style: rowStyle
  }, "This is First Issue")), /*#__PURE__*/React.createElement(RowComponent, {
    rowStyle: rowStyle,
    id: 2,
    title: "This is second issue."
  }), /*#__PURE__*/React.createElement(RowComponent, {
    rowStyle: rowStyle,
    id: 3,
    title: "This is third issue."
  }), /*#__PURE__*/React.createElement(RowComponent, {
    rowStyle: rowStyle,
    id: 4,
    title: "This is fourth issue."
  }), issueRows)));
};

const AddIssue = () => {
  return /*#__PURE__*/React.createElement("h1", null, "This is placeholder for AddIssue");
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, null)));