import React from 'react';

import { MEALS } from "../dummy-data";
import { MealList } from "../components/Meals";

export default function Favorites() {
  return (
    <MealList meals={MEALS} />
  );
};
