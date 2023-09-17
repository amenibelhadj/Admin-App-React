import React from "react";

import { Button, Img, Input, Line, SelectBox, Switch, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const paypalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SettingsPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[870px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-start justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="text-bluegray-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                Settings
              </Text>
              <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-full"
                          size="txtInterBold18"
                        >
                          Account info.
                        </Text>
                        <Text
                          className="text-bluegray-900 text-sm w-full"
                          size="txtInterRegular14Bluegray900"
                        >
                          <span className="text-bluegray-900 font-inter text-left font-normal">
                            Verify your information to proctect your account.{" "}
                          </span>
                          <span className="text-deep_orange-300 font-inter text-left font-semibold">
                            Verify now
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterMedium14Bluegray800"
                            >
                              Username
                            </Text>
                            <Input
                              name="frame18249"
                              placeholder="Sam"
                              className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                              wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterMedium14Bluegray800"
                            >
                              Email address
                            </Text>
                            <Input
                              name="email"
                              placeholder="xyz@gmail.com"
                              className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                              wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-[35px] pt-[19px] rounded w-full"
                              type="email"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterMedium14Bluegray800"
                            >
                              First name
                            </Text>
                            <Input
                              name="frame18249_One"
                              placeholder="Sam"
                              className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                              wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterMedium14Bluegray800"
                            >
                              Last name
                            </Text>
                            <Input
                              name="frame18249_Two"
                              placeholder="Brown"
                              className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                              wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-[35px] py-[17px] rounded w-full"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[21px] items-start justify-start w-full">
                    <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-full"
                          size="txtInterBold18"
                        >
                          Password Reset
                        </Text>
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterMedium14Bluegray800"
                            >
                              Current password
                            </Text>
                            <Input
                              name="password"
                              placeholder="************"
                              className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                              wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-5 pl-5 pr-[35px] pt-[15px] rounded w-full"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterMedium14Bluegray800"
                            >
                              New password
                            </Text>
                            <Input
                              name="password_One"
                              placeholder="************"
                              className="font-semibold p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                              wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-5 pl-5 pr-[35px] pt-[15px] rounded w-full"
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-80 md:h-auto items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                      <div className="flex flex-col gap-[42px] items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-900 text-lg w-full"
                            size="txtInterBold18"
                          >
                            Notifications
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            Open notification to receive our news fastly
                          </Text>
                        </div>
                        <div className="flex flex-col gap-8 items-start justify-start w-full">
                          <div className="flex flex-row gap-6 items-start justify-start w-full">
                            <Switch
                              onColor="#018df0"
                              offColor="#c0c7d0"
                              onHandleColor="#ffffff"
                              offHandleColor="#ffffff"
                              value={true}
                              className="w-[16%]"
                            />
                            <Text
                              className="flex-1 text-base text-bluegray-800 w-auto"
                              size="txtInterRegular16Bluegray800"
                            >
                              Send notification to mail
                            </Text>
                          </div>
                          <div className="flex flex-row gap-6 items-start justify-start w-full">
                            <Switch
                              onColor="#018df0"
                              offColor="#c0c7d0"
                              onHandleColor="#ffffff"
                              offHandleColor="#ffffff"
                              value={true}
                              className="w-[16%]"
                            />
                            <Text
                              className="flex-1 text-base text-bluegray-800 w-auto"
                              size="txtInterRegular16Bluegray800"
                            >
                              Send new promotion
                            </Text>
                          </div>
                          <div className="flex flex-row gap-6 items-start justify-start w-full">
                            <Switch
                              onColor="#018df0"
                              offColor="#c0c7d0"
                              onHandleColor="#ffffff"
                              offHandleColor="#ffffff"
                              value={false}
                              className="w-[16%]"
                            />
                            <Text
                              className="flex-1 text-base text-bluegray-800 w-auto"
                              size="txtInterRegular16Bluegray800"
                            >
                              Notice my balance
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-[370px] sm:w-full">
                  <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                      <div className="flex flex-col gap-8 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-full"
                          size="txtInterBold18"
                        >
                          Payment
                        </Text>
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <SelectBox
                            className="bg-white-A700 border border-indigo-50 border-solid font-semibold px-5 py-[17px] rounded text-base text-bluegray-800 text-left w-full"
                            placeholderClassName="text-bluegray-800"
                            indicator={
                              <Img
                                className="h-5 w-5"
                                src="images/img_arrowdown_bluegray_900.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group_One"
                            options={paypalOptionsList}
                            isSearchable={false}
                            placeholder="Paypal"
                          />
                          <div className="bg-indigo-400 flex flex-col md:gap-10 gap-[110px] justify-start p-5 rounded w-full">
                            <Img
                              className="h-3 md:ml-[0] ml-[225px]"
                              src="images/img_group_white_a700.svg"
                              alt="group_Two"
                            />
                            <Text
                              className="mr-[104px] text-base text-white-A700"
                              size="txtInterMedium16WhiteA700"
                            >
                              1234 **** 4567 8901{" "}
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Type your email
                          </Text>
                          <Input
                            name="email_One"
                            placeholder="user@gmail.com"
                            className="font-medium p-0 placeholder:text-bluegray-800 sm:pr-5 text-base text-bluegray-800 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-[35px] pt-[19px] rounded w-full"
                            type="email"
                          ></Input>
                        </div>
                      </div>
                      <Text
                        className="leading-[22.00px] text-bluegray-400 text-center text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        <>
                          Please make sure that all your <br />
                          information precisely
                        </>
                      </Text>
                    </div>
                    <Button className="bg-deep_orange-300 cursor-pointer font-bold py-[15px] rounded-[24px] text-center text-sm text-white-A700 w-full">
                      Save change
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
