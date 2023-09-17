import React from "react";

import { Button, Img, Text } from "components";

const SignupVerificationPage = () => {
  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-center justify-start mx-auto py-[120px] w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-[33px] items-start justify-start px-12 md:px-5 py-[53px] rounded-[20px] shadow-bs1 w-auto sm:w-full">
          <Img
            className="h-6 w-6"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <div className="flex flex-col md:gap-10 gap-[62px] items-center justify-start w-full">
            <Img
              className="h-[182px]"
              src="images/img_group_gray_50.svg"
              alt="group"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[22px] items-center justify-start pt-[3px] w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl"
                  size="txtInterBold24Bluegray800"
                >
                  2-Step Vertification
                </Text>
                <Text
                  className="leading-[22.00px] text-bluegray-800 text-center text-sm w-full"
                  size="txtInterRegular14Bluegray800"
                >
                  We sent a vertìication code to your email. Enter the code from
                  the email in the field below
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between mt-[124px] w-[92%] md:w-full">
                <Img
                  className="h-20 w-20"
                  src="images/img_videocamera.svg"
                  alt="videocamera"
                />
                <Img
                  className="h-20 w-20"
                  src="images/img_videocamera.svg"
                  alt="videocamera_One"
                />
                <Img
                  className="h-20 w-20"
                  src="images/img_videocamera.svg"
                  alt="videocamera_Two"
                />
                <Img
                  className="h-20 w-20"
                  src="images/img_videocamera.svg"
                  alt="videocamera_Three"
                />
              </div>
              <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[414px] sm:min-w-full mt-[103px] py-[19px] rounded-[28px] text-center text-sm text-white-A700">
                VERIFY OTP
              </Button>
              <Text
                className="mt-[50px] text-center text-indigo-400 text-sm"
                size="txtInterMedium14Indigo400"
              >
                You haven’t received it? Resend a new code
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupVerificationPage;
