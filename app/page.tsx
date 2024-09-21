import React from 'react';
import Home from "@/Components/Home"; // Home component

export default function Page() {
  return (
    <div>
      <Home /> {/* Home component is displayed only on the home page */}
    </div>
  );
}
