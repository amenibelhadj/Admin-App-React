import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const EKYCConfirmInformationPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  eKYC
                </Text>
                <Text
                  className="text-base text-bluegray-400 text-right w-auto"
                  size="txtInterRegular16"
                >
                  <span className="text-bluegray-400 font-inter font-normal">
                    Setting/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                    eKYC
                  </span>
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[227px] py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-12 items-center justify-start w-full">
                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                      size="txtInterBold24Bluegray900"
                    >
                      Confirm Information
                    </Text>
                    <Text
                      className="text-bluegray-400 text-center text-sm w-full"
                      size="txtInterRegular14Bluegray400"
                    >
                      Make sure that all your information are precise
                    </Text>
                  </div>
                  <div className="flex flex-col gap-9 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            <span className="text-bluegray-800 font-inter text-left font-medium">
                              Full name{" "}
                            </span>
                            <span className="text-red-600 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frame18249"
                            placeholder="Mustermann Galer"
                            className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            <span className="text-bluegray-800 font-inter text-left font-medium">
                              ID number{" "}
                            </span>
                            <span className="text-red-600 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frame18249_One"
                            placeholder="12345678"
                            className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                            type="number"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            <span className="text-bluegray-800 font-inter text-left font-medium">
                              Gender{" "}
                            </span>
                            <span className="text-red-600 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="gender_One"
                            placeholder="Female"
                            className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            <span className="text-bluegray-800 font-inter text-left font-medium">
                              Nationality{" "}
                            </span>
                            <span className="text-red-600 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frame18249_Two"
                            placeholder="Deitsch"
                            className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            <span className="text-bluegray-800 font-inter text-left font-medium">
                              Date of birth{" "}
                            </span>
                            <span className="text-red-600 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frame18249_Three"
                            placeholder="12.08.1983"
                            className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            <span className="text-bluegray-800 font-inter text-left font-medium">
                              Place of birth{" "}
                            </span>
                            <span className="text-red-600 font-inter text-left font-medium">
                              *
                            </span>
                          </Text>
                          <Input
                            name="frame18249_Four"
                            placeholder="Berlin"
                            className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <CheckBox
                      className="sm:pr-5 text-bluegray-400 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="remember"
                      id="remember"
                      label="By clicking button ‘Confirm’, I take all responsibility of the information above"
                    ></CheckBox>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EKYCConfirmInformationPage;
