import React from "react";

const Notfound = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="p-8 rounded-lg shadow-md text-center bg-white">
        <h2 text-2xl font-bold text-gray-800>404</h2>
        <p className="text-gray-600">ページが見つかりませんでした</p>
        {/* <Link href="/">Return Home</Link> */}
      </div>
    </div>
  );
};

export default Notfound;
