import { useState } from "react";
import smilingKidsImg from "../../images/smiling-kids.jpg";
const Graffiti = (props: any) => {
  return (
    <>
      <div>
        <div className="bg-yellow-200 p-2 max-w-[50vw] overflow-hidden w-[20rem] h-[20rem] rounded-full">
            <img src={smilingKidsImg} alt="smiling kids" className="object-cover " />
        </div>
      </div>
    </>
  );
};
export default Graffiti;
