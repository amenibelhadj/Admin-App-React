import React from "react";

import { Img, Text } from "components";

const CartemptyPage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col h-[430px] md:h-auto items-start justify-start px-12 md:px-5 py-[52px] w-[491px] sm:w-full">
          <div className="flex flex-col md:gap-10 gap-[77px] items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl w-auto"
                size="txtInterBold24Bluegray800"
              >
                My Cart
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_plus_bluegray_900.svg"
                alt="plus"
              />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center w-full">
              <Img
                className="h-[152px] w-[200px]"
                src="images/img_20.svg"
                alt="Twenty"
              />
              <Text
                className="text-base text-bluegray-400 text-center w-full"
                size="txtInterRegular16"
              >
                No item. Add more
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartemptyPage;
