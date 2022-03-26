import { KeyboardArrowDown } from "@mui/icons-material";

const ItemBtn = ({ item, isBtnClose, toggleOpen }) => {
  return (
    <button className="item-btn" onClick={toggleOpen}>
      <span className="item-btn-icon">{item.icon}</span>
      <span className="item-btn-name">{item.name}</span>
      {item.menu && !isBtnClose && (
        <span className="item-btn-back">
          <KeyboardArrowDown />
        </span>
      )}
    </button>
  );
};

export default ItemBtn;
