import "./styles.css";
import motchDatas from "./motchDatas";
import ItemBtn from "./ItemBtn";
import { useEffect, useState } from "react";
import { KeyboardBackspace } from "@mui/icons-material";

export default function App() {
  const [currentName, setCurrentName] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    const elementCurrent = document.querySelector(
      isOpen ? ".submenu" : ".mainmenu"
    );
    setCurrentHeight(elementCurrent?.clientHeight);
  }, [isOpen]);

  const toggleOpen = ({ menu, name }) => {
    if (!menu) return;
    setCurrentName(name);
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="wrapper" style={{ height: `${currentHeight}px` }}>
        <div className={`mainmenu ${isOpen ? "open" : ""}`}>
          {motchDatas.map((item, index) => {
            return (
              <>
                <ItemBtn
                  item={item}
                  key={index}
                  toggleOpen={() => toggleOpen(item)}
                />
                {item.menu && item.name === currentName && (
                  <div className="submenu">
                    <ItemBtn
                      item={{ ...item, icon: <KeyboardBackspace /> }}
                      isBtnClose
                      toggleOpen={() => toggleOpen(item)}
                    />
                    {item.menu.map((itemSub, index) => (
                      <ItemBtn item={itemSub} key={index} />
                    ))}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
