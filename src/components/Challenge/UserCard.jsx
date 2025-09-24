import React from "react";

// Reusable Social Icon Component
const SocialIcon = ({ icon: Icon, className }) => (
  <div
    className={`${className} text-2xl p-2 rounded hover:bg-gray-200 cursor-pointer`}
  >
    <Icon />
  </div>
);

// Reusable Stat Item Component
const StatItem = ({ icon: Icon, count, className }) => (
  <div className="flex items-center gap-2">
    <Icon className={`text-xl ${className}`} />
    <span>{count}k</span>
  </div>
);

// Main UserCard Component
const UserCard = ({ user }) => {
  if (!user) return null;
  const { name, role, profileImage, socialMedia, stats, buttons } = user;

  return (
    <div className="flex justify-center items-center bg-gray-400 mx-auto min-h-[300px] p-5">
      {/* Left Section */}
      <div className="flex items-center p-5 min-h-[400px]">
        <div className="border-l-8 border-solid border-blue-700 mr-4 h-80"></div>
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
            src={profileImage}
            alt={name}
            className="rounded-full w-40 h-40 object-cover border-4 border-white shadow-lg -mb-20 z-10"
          />
        </div>

        <div className="bg-white rounded min-h-[300px] pt-20">
          <h3 className="text-center font-bold text-2xl mb-2">{name}</h3>
          <p className="text-center text-sm mb-2">{role}</p>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 p-1">
            {socialMedia.map(({ name, icon, className }) => (
              <SocialIcon key={name} icon={icon} className={className} />
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex justify-center gap-4">
            {buttons.map((btn, index) => (
              <button
                key={index}
                onClick={btn.onClick}
                className="bg-blue-700 text-amber-100 rounded-[10px] p-1 px-4"
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-5 flex justify-center gap-8 text-gray-700 font-semibold p-4">
            {stats.map(({ name, icon, count, className }) => (
              <StatItem
                key={name}
                icon={icon}
                count={count}
                className={className}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
