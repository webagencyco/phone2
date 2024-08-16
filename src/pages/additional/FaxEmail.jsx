import { Link } from "react-router-dom";

const FaxToEmail = () => {
    return (
      <div className="w-full bg-lavender flex h-[50vh] justify-center items-center">
        <div className="w-11/12 font-sans bg-white border border-gray-300 rounded-lg">
          <ul>
            <li>
              <h3 className="text-indigo-900 m-6 text-lg">Fax-To-Email</h3>
            </li>
            <li>
              <p className="m-6 -mt-2">
                To view faxes received or to make changes to one of your fax numbers,
                select the number from the drop down and select "View/Edit".
              </p>
            </li>
            <li>
              <p className="mx-6">
                The Fax to email service can added to an existing number, via the
                <Link to="/admin" className="text-blue-600 hover:underline"> "Number administration" section.</Link>
              </p>
            </li>
            <li>
              <p className="m-6 pb-4">
                You do not currently have any fax-to-email services.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default FaxToEmail;