import React from "react";

import { Button, Img, Text } from "components";

const DeletePopupPage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-center w-[478px] sm:w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-center sm:px-5 px-8 py-[29px] rounded shadow-bs1 w-full">
            <div className="flex flex-col gap-12 items-center justify-center w-full">
              <div className="flex flex-col gap-[35px] items-center justify-center w-full">
                <Img
                  className="h-[234px] w-[298px]"
                  src="images/img_emptybox11.svg"
                  alt="emptyboxEleven"
                />
                <div className="flex flex-col gap-4 items-center justify-center w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                    size="txtInterBold24Bluegray800"
                  >
                    Are you sure to delete item?
                  </Text>
                  <Text
                    className="text-bluegray-800 text-center text-sm w-full"
                    size="txtInterRegular14Bluegray800"
                  >
                    This item will be delete from your cart
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <Button className="bg-red-600 cursor-pointer font-bold min-w-[199px] py-[19px] rounded-[28px] text-center text-sm text-white-A700">
                  Yes, Delete item
                </Button>
                <Button className="bg-gray-50 cursor-pointer font-semibold min-w-[199px] py-[19px] rounded-[28px] text-bluegray-800 text-center text-sm">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePopupPage;
