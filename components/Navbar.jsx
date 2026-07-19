"use client";

import { Trophy, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Trophy />
        <span>Crickrate</span>
      </div>

      <div className="menu">
        <a>Home</a>
        <a>Live Scores</a>
        <a>Matches</a>
        <a>Teams</a>
        <a>Players</a>
      </div>

      <Search />

    </nav>
  );
}
