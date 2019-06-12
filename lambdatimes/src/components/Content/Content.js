import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import { tabData, cardData } from "../../data";

function Content() {
  const [tabs, setTabs] = useState(tabData);
  const [cards, setCards] = useState(cardData);
  let [selected, setSelected] = useState("all");

  useEffect(() => {
    setTabs(tabData);
    setCards(cardData);
  }, []);

  const changeSelected = tab => {
    setSelected(tab);
    setTabs(tabData);
    setCards(cardData);
  };

  const selectTabHandler = e => {
    changeSelected(e.target.innerText.toLowerCase());
  };

  const filterCards = () => {
    return selected === "all"
      ? cards
      : cards.filter(card => {
          return card.tab === selected;
        });
  };

  return (
    <div className="content-container">
      <Tabs
        tabs={tabs}
        selectedTab={selected}
        selectTabHandler={selectTabHandler}
      />
      <Cards cards={filterCards()} />
    </div>
  );
}

export default Content;
