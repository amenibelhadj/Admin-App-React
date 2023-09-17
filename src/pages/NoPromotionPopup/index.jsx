import React from "react";

import { Button, Img, Text } from "components";

const NoPromotionPopupPage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-center w-[478px] sm:w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-center sm:px-5 px-8 py-[29px] rounded shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-center w-full">
              <div className="flex flex-col gap-[35px] items-center justify-center w-full">
                <div className="bg-white-A700 flex flex-col h-[298px] items-center justify-end p-[47px] md:px-10 sm:px-5 w-[298px]">
                  <Img
                    className="h-[194px] mt-2"
                    src="images/img_group_bluegray_900_194x146.svg"
                    alt="group"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                    size="txtInterBold24Bluegray800"
                  >
                    No promotion
                  </Text>
                  <Text
                    className="text-bluegray-800 text-center text-sm w-full"
                    size="txtInterRegular14Bluegray800"
                  >
                    Follow us to review lattest promotion
                  </Text>
                </div>
              </div>
              <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[199px] py-[19px] rounded-[28px] text-center text-sm text-white-A700">
                Yes, I understand
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPromotionPopupPage;
