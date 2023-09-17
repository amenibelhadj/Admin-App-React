import React from "react";

import { Img, Input, Text } from "components";

const DashboardSubcriblePage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-start justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-4 h-[260px] md:h-auto items-end justify-start p-4 md:px-5 rounded shadow-bs1 w-auto sm:w-full">
          <Img
            className="h-6 w-full"
            src="images/img_frame18146.svg"
            alt="frame18146"
          />
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl w-full"
                size="txtInterBold24Bluegray800"
              >
                Subcrible
              </Text>
              <Text
                className="text-bluegray-800 text-sm w-full"
                size="txtInterRegular14Bluegray800"
              >
                Subcribe our newletter and get notification to stay update
              </Text>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-bluegray-800 text-sm w-full"
                size="txtInterMedium14Bluegray800"
              >
                Email
              </Text>
              <Input
                name="email_One"
                placeholder="xyz@gmail.com"
                className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                wrapClassName="bg-white-A700 border border-indigo-50 border-solid flex pl-5 pr-[35px] py-[17px] rounded w-full"
                type="email"
                prefix={
                  <Img
                    className="mt-auto mb-px h-5 mr-4"
                    src="images/img_mail_bluegray_800.svg"
                    alt="mail"
                  />
                }
              ></Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSubcriblePage;
