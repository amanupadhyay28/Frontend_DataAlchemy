const data = {
    "Table": {
      "name": "employees",
      "columns": ["id", "name", "department", "salary"],
      "rows": [
        {"id": 1, "name": "John Doe", "department": "IT", "salary": 60000},
        {"id": 2, "name": "Jane Smith", "department": "HR", "salary": 55000},
        {"id": 3, "name": "Alice Johnson", "department": "Finance", "salary": 65000}
      ]
    },
    "graph": {
      "graphData": {
        "x": ["IT", "HR", "Finance"],
        "y": [60000, 55000, 65000],
        "type": "bar"
      },
      "layout": {
        "title": "Salaries by Department",
        "xaxis": {
          "title": "Department"
        },
        "yaxis": {
          "title": "Salary"
        }
      }
    },
    "query": {
      "sql": "SELECT * FROM employees WHERE department = 'IT'",
      "description": "Retrieve all employees from the IT department"
    }
  };
  export default data;