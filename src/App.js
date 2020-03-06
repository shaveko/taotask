import React from "react";
import "./App.css";
import ListComponent from "./components/ListComponent";
import ApiUserDataProvider from "./data/ApiUserDataProvider";
import JsonUserDataProvider from "./data/JsonUserDataProvider";

function App() {
  let userColumnConfigApi = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" }
  ];

  //uncomment this line to use usercolumn config for user from json file (prop names are diferent with API vession)
  //let userColumnConfigJson = [{key: 'firstname', label: 'First Name'}, {key: 'lastname', label: 'Last Name'},]

  return (
    <div className="App">
      <ListComponent
        dataProvider={ApiUserDataProvider}
        columnConfig={userColumnConfigApi}
        header={"List of Users"}
      />
      {/*

        You can change  dataProvider to other. Here we get users just from json file
      
      <ListComponent dataProvider={ApiUserDataProvider} columnConfig={userColumnConfigJson}  header={"List of Users"}/>
      
      */}
    </div>
  );
}

export default App;
