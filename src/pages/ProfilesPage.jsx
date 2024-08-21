import { Outlet, NavLink } from 'react-router-dom';
export default function ProfilesPage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-8 border-2 m-8 border-red-900 px-4 py-2 justify-between items-center rounded-md">
      <div className="flex flex-col gap-4">
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            className={({ isActive }) => {
              return isActive ? 'text-red-500 font-extrabold underline' : 'text-blue-600';
            }}
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
