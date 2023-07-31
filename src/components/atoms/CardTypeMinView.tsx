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
      className="rounded-xl cardTypeViewMinWrapper inline-flex flex-col items-center justify-between lg:w-[178px] lg:h-[278px] lg:mr-[26px] lg:mt-[40px] w-full h-[278px] mx-[10px] mt-[30px] py-2"
      onClick={onClickHandler}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-[157px] h-[188px] rounded-xl object-cover"
      />
      <div className="text-white text-14 font-bold mt-5">{name}</div>
      <div className="flex gap-5 py-3">
        <PlayArrow className="text-white text-20 cursor-pointer" />
        <AddCircleOutline className="text-white text-20 cursor-pointer" />
      </div>
    </div>
  );
};

export default CardTypeMinView;
