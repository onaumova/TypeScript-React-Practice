/* 
Build a tabs component that displays one panel of content at a time depending on the active tab element.
Some HTML is provided for you as example contents.

Requirements
Clicking on a tab makes it the active tab. Add a visual indication (e.g. using blue text color) for 
the active tab to differentiate it from the non-active tabs.
At all times, only one panel's contents should be displayed — the one corresponding to the active tab's.

 nNotes
The focus of this question is on functionality, not the styling. There's no need to write any 
custom CSS except for highlighting the active tab.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc) 
and use client-side rendering instead.
You may want to think about ways to improve the user experience of the application and 
implement them (you get bonus credit for doing that during interviews).
*/
import { useState } from "react";

interface TabProps {
  currentTab: string;
  tabData: Tab[];
}
interface Tab {
  name: string;
  text: string;
}
const tabData: Tab[] = [
  {
    name: "HTML",
    text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    name: "CSS",
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    name: "JavaScript",
    text: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

function Tab({ currentTab, tabData }: TabProps) {
  return tabData.map((data) => {
    if (currentTab === data.name) {
      return <p>{data.text}</p>;
    }
  });
}
export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<string>("HTML");

  function handleTabClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target.value === "HTML") {
      setCurrentTab("HTML");
    } else if (target.value === "CSS") {
      setCurrentTab("CSS");
    } else {
      setCurrentTab("JavaScript");
    }
  }
  return (
    <div>
      <div>
        {tabData.map((data) => {
          return (
            <button
              key={data.name}
              value={data.name}
              className={
                data.name === currentTab ? "selected button" : "button"
              }
              onClick={handleTabClick}
            >
              {data.name}
            </button>
          );
        })}
      </div>
      <div>
        <Tab currentTab={currentTab} tabData={tabData} />
      </div>
    </div>
  );
}
