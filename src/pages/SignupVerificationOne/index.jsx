import React from "react";

import { Button, Img, Text } from "components";

const SignupVerificationOnePage = () => {
  return (
    <>
      <div className="bg-red-50 flex flex-col font-inter items-center justify-center mx-auto md:px-10 sm:px-5 px-[446px] py-[124px] w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start px-12 md:px-5 py-[59px] rounded-[20px] shadow-bs1 w-[548px] sm:w-full">
          <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-12 items-center justify-start w-full">
                <Img
                  className="h-[182px] w-[168px]"
                  src="images/img_group_gray_50.svg"
                  alt="group"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                    size="txtInterBold24Bluegray800"
                  >
                    2-Step Vertification
                  </Text>
                  <Text
                    className="leading-[22.00px] max-w-[452px] md:max-w-full text-bluegray-800 text-center text-sm"
                    size="txtInterRegular14Bluegray800"
                  >
                    We sent a vertìication code to your email. Enter the code
                    from the email in the field below
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-center justify-center w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-center w-full">
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
                <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                  VERIFY OTP
                </Button>
                <Text
                  className="text-center text-indigo-400 text-sm w-auto"
                  size="txtInterMedium14Indigo400"
                >
                  You haven’t received it? Resend a new code
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupVerificationOnePage;
