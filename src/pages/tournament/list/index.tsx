import Link from "next/link";
import React from "react";

const ListTournaments = () => {
  return (
    <Link
      href="/tournaments/team"
      className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            Hei pro league
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="max-w-[40ch] text-sm text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
          illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">Start time</dt>
          <dd className="text-xs text-gray-500">31st June, 2023</dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">End time</dt>
          <dd className="text-xs text-gray-500">15th July, 2023</dd>
        </div>
      </dl>
    </Link>
  );
};

export default ListTournaments;
