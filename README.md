### 1. Add Employee API - API to add a single Employee to the application .

1. Employee will have the following details

   - Employee name (get from input of the API)
   - Employee ID (Auto generated)
   - E-mail (get from input of the API)
   - Mobile number (get from input of the API)
   - Joining Date (get from input of the API)
   - Role (get from input of the API)

2. Store the Employee into Elasticsearch

### 2. List Employee API - API to List employee with pagination

1. API should have atleast following input
   - from (basically page number)
   - offset (page size)
   - sortby (field name to sort the table)
2. API should return Array of employees and the total count of employee in the Application

### 3. Add attendance -API for marking attendance of an employee

1. store attendance details in a separate index
2. Each document should contain following details
   - Employee ID
   - Date
   - present (boolean) :- Optional

### 4. View attendance -API for listing attendance details of an employee sorted by date and pagination included

1. API input
   - Employee ID
   - from (basically page number)
   - offset (page size)
   - sortby (field name to sort the table)
2. API should return Array of attendance details of Employee

### 5. List attendance - API for listing attendance of all employees

1. API Input
   Date
2. The api should return the attendance of all employees on the date

### 6. Search API - To Search the Employee

1. API Input
   Search text

2. The api should return the list of employees based on the search text
