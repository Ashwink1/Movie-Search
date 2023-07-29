import { useEffect, useState, useCallback, ChangeEvent } from "react";
import { IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import "./SearchBox.css";

const debounce = <T extends (...args: any[]) => void>(fn: T, time: number) => {
  let clearTime: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<T>): void {
    const context = this;
    clearTimeout(clearTime);
    clearTime = setTimeout(() => {
      fn.apply(context, args);
    }, time);
  };
};

export default function SearchBox({handleCallBack}) {
  const [data, setData] = useState<string>("");
  const [expanded, setExpanded] = useState(false);

  const handleSearchClick = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    if (!data) {
      setExpanded(false);
    }
  };

  const setValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData(value);
  };

  const debouncedHandleInputChange = useCallback(debounce(setValue, 1000), []);

  useEffect(() => {
    handleCallBack(data)
  }, [data]);

  return (
    <div
      className={`flex items-center justify-start h-55px rounded-lg container ${expanded ? "w-[567px]" : "w-[40px]"
        }`}
      onClick={handleSearchClick}
    >
      <div className="search-container">
        <IconButton style={{ color: "#D4D7DD" }}>
          <SearchIcon />
        </IconButton>
      </div>
      {
        expanded && (
          <input type='text' className='w-full h-full bg-transparent text-base font-medium text-white' onBlur={handleBlur} onChange={debouncedHandleInputChange} />
        )
      }
    </div>
  );
}
