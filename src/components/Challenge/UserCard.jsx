import React from "react";

// CHALLENGE 1:

// https://www.codingnepalweb.com/wp-content/uploads/2022/12/Top-2010-20Profile-20Card-20Template-20Designs-20in-20HTML-20-amp-20CSS.jpg

// Objective: Develop a responsive React application displaying user profiles.

//     1. Component Creation: Build a reusable UserCard component.

//     2. Dynamic Content: Ensure the component is dynamic by accepting user data through props.

//     3. Layout: Implement a grid layout to display multiple user cards.

//     Optional - Best Practice: To improve code readability and scalability, create a JSON data structure for user information and render the user cards by mapping through this data.

// Technical Requirements:

//     Styling: All styling must be done using Tailwind CSS.

//     Responsiveness: The layout should be fully responsive across different screen sizes.
const UserCard = () => {
  return (
    <div className="flex justify-center items-center bg-gray-400 mx-auto min-h-[300px]">
      {/* Left Section */}
      <div className="flex items-center p-5 min-h-[400px]">
        <div class="border-l-8 border-solid border-blue-700  mr-4 h-80"></div>

        {/* Title */}
        <div className="flex flex-col justify-center items-start text-blue-700">
          <h2 className="text-4xl font-extrabold">Profile</h2>
          <h2 className="text-4xl font-extrabold">Card</h2>
          <h2 className="text-4xl font-extrabold">UI Design</h2>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col p-5 relative">
        <div className="flex justify-center items-center rounded bg-blue-700 p-5">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image 1"
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg -mb-20 z-10"
          />
        </div>
        <div className="bg-white rounded min-h-[300px] pt-20">
          <h3 className="text-center font-bold text-2xl mb-2">CodingLab</h3>
          <p className="text-center text-sm mb-2">YouTuber & Blogger</p>
          <div className="flex justify-center gap-3 p-1">
            {/* Social Icons */}
            <div>fbIcon</div>
            <div>twitterIcon</div>
            <div>instaIcon</div>
            <div>youtubeIcon</div>
          </div>
          <div className="mt-5 flex justify-center gap-4">
            <button className="bg-blue-700 text-amber-100 rounded-[10px] p-1 px-4">
              Subscribe
            </button>
            <button className="bg-blue-700 text-amber-100 rounded-[10px] p-1 px-4">
              Message
            </button>
          </div>
          <div className="mt-5 flex justify-center gap-4">
            <div>60.4k</div>
            <div>20k</div>
            <div>12.4k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
