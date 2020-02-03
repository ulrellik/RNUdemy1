import React, {useState} from 'react';

import {MenuButton} from "../navigation/HeaderButtons";
import LabeledSwitch from "../components/LabeledSwitch";
import {MealList} from "../components/Meals";
import {MEALS} from "../dummy-data";

export default function Filters() {
  const [isVegetarian, setVegetarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);

  const meals = MEALS.filter(meal =>
    (!isVegetarian || meal.isVegetarian) &&
    (!isVegan || meal.isVegan) &&
    (!isGlutenFree || meal.isGlutenFree) &&
    (!isLactoseFree || meal.isLactoseFree)
  );

  return (
    <>
      <LabeledSwitch label="Vegetarian" value={isVegetarian} onChange={setVegetarian}/>
      <LabeledSwitch label="Vegan" value={isVegan} onChange={setVegan}/>
      <LabeledSwitch label="Gluten Free" value={isGlutenFree} onChange={setGlutenFree}/>
      <LabeledSwitch label="Lactose Free" value={isLactoseFree} onChange={setLactoseFree}/>
      <MealList meals={meals}/>
    </>
  );
};

Filters.navigationOptions = ({navigation}) => ({
  headerLeft: () => <MenuButton navigation={navigation}/>,
});
