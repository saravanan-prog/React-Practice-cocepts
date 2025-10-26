export const getApicall = async (setList) => {
  let url = `http://localhost:5173/employeeList1.json`;
  let response = await fetch(url);
  let responseData = await response.json();
  if (response && responseData) {
    setList(responseData);
  }
};

export const handleUpdate = (profileIndex, list, setList) => {
  const updatedList = list.map((value, index) => {
    if (profileIndex == index) {
      (value.empid = 5555),
        (value.emp_name = "jayaRaj"),
        (value.designation = "Super Manager"),
        (value.workLocation = "Mumbai");
    }

    return value;
  });

  setList(updatedList);
};

export const handleDelete = (profileIndex,list,setList) => {
  const afterDeletelist = list.filter((value, index) => {
    return index != profileIndex;
  });
  setList(afterDeletelist);
};


 export const addRecord = (formData,list,setList) => {
    setList([...list, formData]);
 };

 export  const handleSearch = (list,searchText,setList) => {
    const afterSearchNewList = list.filter((value) => {
      return value.empid == searchText ||
        value.emp_name == searchText ||
        value.designation == searchText ||
        value.workLocation == searchText
        ? value
        : null;
    });
    setList(afterSearchNewList);
  };