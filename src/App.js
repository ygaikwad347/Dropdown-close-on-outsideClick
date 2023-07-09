import { useState, useEffect, useRef } from "react";
function App() {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(null);

  const useSelector = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!useSelector.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const options = [
    "Select...",
    "Products",
    "Reports",
    "Transactions",
    "Sales",
    "Analytics"
  ];

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSelect = (option) => {
    setSelect(option);
  };

  const renderedOptions = options.map((el, ind) => {
    return (
      <div
        key={ind}
        onClick={() => handleSelect(el)}
        style={{ cursor: "pointer", border: "1px solid black" }}
      >
        {el}
      </div>
    );
  });

  return (
    <div>
      <div
        ref={useSelector}
        onClick={handleOpen}
        style={{ width: "200px", border: "1px solid gray", cursor: "pointer" }}
      >
        {select || "Select..."}
        <div>{open && renderedOptions}</div>
      </div>
    </div>
  );
}

export default App;
