const Blog3 = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          Explain My Code
        </div>
        <div className="collapse-content">
          <h2 className="font-bold">Cetegory Sections</h2>
          <p>
            Import Statements: You are importing necessary dependencies from
            various libraries, including React, react-tabs, and Axios. Component
            Definition: You define a functional component Cetegary. State
            Initialization: You use the useState hook to initialize state
            variables. totalData is initialized as an empty array, and tabData
            is initialized with the default value On Site Job. Data Fetching:
            You use the useEffect hook to make an asynchronous request to
            http://localhost:5000/api/v1/cetegorys when the component mounts.
            The fetched data is then set using setTotalData. Tab Handling: You
            set up a tab system using react-tabs. There are five tabs: On Site
            Job, Remote Job, Hybrid,Part Time, and All Job. Each tab has an
            onClick handler (handleClick), which sets the tabData state to the
            corresponding tab value. Filtering Data: You filter the totalData
            based on the selected tab value using the filterData variable.
            Rendering: The component renders a series of tabs and a grid of
            CetegoryCard components based on the filtered data or the total data
            if no tab is selected. Console Logs: There are commented-out
            console.log statements for debugging purposes, which can be
            uncommented to see the values of totalData, tabData, and filterData.
            HTML Structure: The JSX structure includes a container div with
            tabs, a grid of cards, and a heading displaying Jobs Board. It seems
            like you are building a job board where users can filter jobs based
            on different categories like On Site Job, Remote Job, etc. The data
            is fetched from an API, and the UI is dynamically updated based on
            the selected tab.
          </p>
          <h2 className="font-bold">All Jobs Sections</h2>
          <p>
            Import Statements: You import Link from react-router-dom for
            creating navigation links, and Helmet from react-helmet-async for
            managing the document head. Component Definition: You define a
            functional component AllJobTable that takes a prop data as input.
            Destructuring Data: You destructure relevant properties from the
            data prop (presumably representing a job post) such as _id,
            posted_the_job, Job_Title, Posting_Date, Application_Deadline, and
            Salary_range. Document Head Update: You use the Helmet component to
            dynamically update the document title to JobBuzz | All Job Title.
            Table Structure: You create an HTML table structure with headers for
            various job details: Name, Job, Salary Range, Posting Date,
            Deadline, and Details.
          </p>
          <h2 className="font-bold">Add Job Sections</h2>
          <p>
            Import Statements: You import various dependencies including React,
            useState, DatePicker for date input, Helmet for managing the
            document head, toast for displaying notifications, and a custom hook
            useAuth for handling authentication-related information. Component
            Definition: You define a functional component AddJob.
            Authentication: You use the useAuth hook to get information about
            the current user. Form Handling: There is a handleAddJob function
            that is triggered when the form is submitted. It prevents the
            default form submission behavior, extracts values from the form
            fields, creates a newJob object, and then sends a POST request to
            the server using fetch. State Initialization: Two state variables
            startDate and endDate are initialized using the useState hook to
            manage the start and end dates for date pickers. HTML Structure: The
            JSX structure includes a form with various input fields for user
            details, job title, category, salary range, posting date, deadline,
            application number, job description, and photo URL. The form has
            date pickers for posting date and deadline, and the selected dates
            are managed by the state variables startDate and endDate. The form
            includes a submit button to add a new job. Helmet for SEO: The
            Helmet component is used to dynamically set the document title for
            better SEO. Styling and UI: The form and its elements have styling
            classes applied for layout and appearance. Fetch Request: A POST
            request is made to http://localhost:5000/api/v1/cetegorys with the
            newJob data. Upon successful addition, a success toast notification
            is displayed. In summary, this component is responsible for
            rendering a form that allows users to input job details, and it uses
            fetch to send this information to the server for storage. It also
            provides a nice user interface with date pickers and notifications
            for a better user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
