import React from "react";

import { Button, Img, Input, Text } from "components";

const SigninResetPasswordPage = () => {
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
                  className="h-[137px] w-[131px]"
                  src="images/img_group_bluegray_900.svg"
                  alt="group"
                />
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-800 text-center sm:text-xl w-full"
                    size="txtInterBold24Bluegray800"
                  >
                    Forgot Password
                  </Text>
                  <Text
                    className="leading-[22.00px] text-bluegray-800 text-center text-sm"
                    size="txtInterRegular14Bluegray800"
                  >
                    <>
                      Enter the email address you used when you joined and we’ll
                      send you instructions to reset your password.
                      <br />
                      For security reasons, we do NOT store your password. So
                      rest assured that we will never send your password via
                      email.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-full">
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
                    className="font-medium p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
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
                <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                  SEND RESET INSTRUCTIONS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninResetPasswordPage;
