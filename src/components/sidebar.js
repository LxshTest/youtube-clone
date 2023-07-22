import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },

      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        onClick={() => setSelectedCategory(category.name)}
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#ffa31a",
          color: "	white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "	#ffa31a",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
