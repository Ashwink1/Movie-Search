import React from "react";
import { PlayArrow, AddCircleOutline } from "@mui/icons-material";

interface CardTypeMinViewProps {
  imageUrl: string;
  name: string;
  onClickHandler: () => void;
}

const CardTypeMinView: React.FC<CardTypeMinViewProps> = ({
  imageUrl,
  name,
  onClickHandler,
}) => {
  return (
    <div
      className="w-[178px] h-[278px] rounded-xl cardTypeViewMinWrapper inline-flex flex-col items-center justify-between mr-[26px] mt-[40px]"
      onClick={onClickHandler}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-[157px] h-[188px] rounded-8 object-cover"
      />
      <div className="text-white text-14 font-bold mt-5">{name}</div>
      <div className="flex gap-5">
        <PlayArrow className="text-white text-20 cursor-pointer" />
        <AddCircleOutline className="text-white text-20 cursor-pointer" />
      </div>
    </div>
  );
};

export default CardTypeMinView;
