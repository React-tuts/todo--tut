import React, { useState } from "react";
import "./App.css";
import { Logo } from "./Components/Logo/Logo";
import { Form } from "./Components/Form/Form";
import { PackingList } from "./Components/PackingList/PackingList";
import { Stats } from "./Components/Stats/Stats";
import { PackingListData } from "./Data/PackingListData";
import { PackingListItem } from "./Components/PackingList/PackingList.types";

/**
 * Main App component - Entry point for the travel packing list application
 * Renders the complete layout including logo, form, packing list, and statistics
 */
function App() {
  const [packingList, setPackingList] =
    useState<PackingListItem[]>(PackingListData);
  return (
    <div className="app">
      {/* Main application title/logo */}
      <Logo />
      {/* Form to add new items to the packing list */}
      <Form packingList={packingList} setPackingList={setPackingList} />
      {/* List of packing items with their state */}
      <PackingList packingList={packingList} />
      {/* Statistics showing total items and packed count */}
      <Stats />
    </div>
  );
}

export default App;
