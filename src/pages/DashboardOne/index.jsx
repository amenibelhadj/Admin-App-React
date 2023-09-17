import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardOnePage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1175px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-center justify-center sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-center text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Overview
                </Text>
                <div className="flex flex-row font-inter gap-3 items-center justify-between w-[17%]">
                  <Button className="bg-white-A700 flex items-center justify-center p-[13px] rounded">
                    <Img
                      className="h-5"
                      src="images/img_download.svg"
                      alt="download"
                    />
                  </Button>
                  <SelectBox
                    className="bg-white-A700 font-medium px-4 py-3.5 rounded text-bluegray-800 text-center text-sm w-[70%] sm:w-full"
                    placeholderClassName="text-bluegray-800"
                    indicator={
                      <Img
                        className="h-5 w-5"
                        src="images/img_arrowdown_bluegray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdown"
                    options={dropdownOptionsList}
                    isSearchable={false}
                    placeholder="Last week"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row font-inter gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[38px] py-[22px] rounded shadow-bs w-full">
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[26px] max-h-[26px]"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-full">
                        <Text
                          className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-bluegray-800 w-auto"
                          size="txtInterBold28Bluegray800"
                        >
                          $10.000
                        </Text>
                        <Button
                          className="bg-green-700_19 cursor-pointer flex items-center justify-center min-w-[62px] px-1 py-0.5 rounded"
                          leftIcon={
                            <Img
                              className="h-4 mr-1 my-px"
                              src="images/img_arrowup.svg"
                              alt="arrow_up"
                            />
                          }
                        >
                          <div className="font-semibold text-green-700 text-left text-sm">
                            0.2%
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                        <div className="bg-indigo-401 h-1.5 rounded-[50%] w-1.5"></div>
                        <Text
                          className="flex-1 text-bluegray-400 text-sm w-auto"
                          size="txtInterRegular14Bluegray400"
                        >
                          Total income
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[38px] py-[22px] rounded shadow-bs w-full">
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[26px] max-h-[26px]"
                      src="images/img_group_red_600.svg"
                      alt="group"
                    />
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-full">
                        <Text
                          className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-bluegray-800 w-auto"
                          size="txtInterBold28Bluegray800"
                        >
                          $10.000
                        </Text>
                        <Button
                          className="bg-red-600_19 cursor-pointer flex items-center justify-center min-w-[62px] px-1 py-0.5 rounded"
                          leftIcon={
                            <Img
                              className="h-4 mr-1 my-px"
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                        >
                          <div className="font-semibold text-left text-red-600 text-sm">
                            0.2%
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                        <div className="bg-indigo-401 h-1.5 rounded-[50%] w-1.5"></div>
                        <Text
                          className="flex-1 text-bluegray-400 text-sm w-auto"
                          size="txtInterRegular14Bluegray400"
                        >
                          Total Expenses
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[38px] py-[22px] rounded shadow-bs w-full">
                  <div className="flex flex-row gap-5 items-center justify-start w-full">
                    <Img
                      className="h-[26px] max-h-[26px]"
                      src="images/img_group.svg"
                      alt="group"
                    />
                    <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                      <div className="flex flex-row gap-1 items-center justify-start w-full">
                        <Text
                          className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-bluegray-800 w-auto"
                          size="txtInterBold28Bluegray800"
                        >
                          $10.000
                        </Text>
                        <Button
                          className="bg-green-700_19 cursor-pointer flex items-center justify-center min-w-[62px] px-1 py-0.5 rounded"
                          leftIcon={
                            <Img
                              className="h-4 mr-1 my-px"
                              src="images/img_arrowup.svg"
                              alt="arrow_up"
                            />
                          }
                        >
                          <div className="font-semibold text-green-700 text-left text-sm">
                            0.2%
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                        <div className="bg-indigo-401 h-1.5 rounded-[50%] w-1.5"></div>
                        <Text
                          className="flex-1 text-bluegray-400 text-sm w-auto"
                          size="txtInterRegular14Bluegray400"
                        >
                          Total Revenue
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-start max-w-[761px] sm:px-5 px-8 py-[26px] rounded shadow-bs w-full">
                    <div className="flex flex-col gap-[31px] h-[343px] md:h-auto items-center justify-center w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Statistics
                        </Text>
                        <Button
                          className="bg-white-A700 border border-bluegray-200 border-solid cursor-pointer flex items-center justify-center min-w-[172px] px-[15px] py-2.5 rounded shadow-bs"
                          leftIcon={
                            <Img
                              className="h-5 mr-2.5"
                              src="images/img_calendar_bluegray_900.svg"
                              alt="calendar"
                            />
                          }
                        >
                          <div className="font-semibold text-bluegray-800 text-center text-sm">
                            13 Aug - 20 Aug
                          </div>
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[45px] items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-auto">
                          <div className="flex flex-row gap-2 items-center justify-start w-[70px]">
                            <div className="bg-indigo-400 h-1.5 rounded-[50%] w-1.5"></div>
                            <Text
                              className="flex-1 text-bluegray-400 text-xs w-auto"
                              size="txtInterMedium12"
                            >
                              Income
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-[70px]">
                            <div className="bg-amber-300 h-1.5 rounded-[50%] w-1.5"></div>
                            <Text
                              className="flex-1 text-bluegray-400 text-xs w-auto"
                              size="txtInterMedium12"
                            >
                              Expenses
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 sm:flex-col flex-row gap-[23px] items-start justify-between w-[84%] md:w-full">
                          <div className="flex flex-col gap-4 h-60 md:h-auto items-end justify-start w-[31px]">
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              1,400
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              1,200
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              1,000
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              800
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              600
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              400
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              200
                            </Text>
                            <Text
                              className="text-bluegray-400 text-right text-xs w-auto"
                              size="txtInterRegular12"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex flex-col font-poppins gap-[22px] items-start justify-start sm:mt-0 mt-[9px] w-[527px] sm:w-full">
                            <div className="md:h-[225px] h-[226px] relative w-full">
                              <Img
                                className="absolute h-full inset-[0] m-auto w-[527px]"
                                src="images/img_frame_bluegray_900.svg"
                                alt="frame"
                              />
                              <div className="absolute bottom-[0] flex flex-row h-[206px] md:h-auto inset-x-[0] items-end justify-between mx-auto w-[449px] sm:w-full">
                                <Img
                                  className="h-[77px] w-[18px]"
                                  src="images/img_arrowdown_amber_300.svg"
                                  alt="arrowdown"
                                />
                                <div className="flex h-[206px] justify-end relative w-[37%]">
                                  <Img
                                    className="absolute bottom-[0] h-[49px] left-[0] w-[18px]"
                                    src="images/img_arrowdown_amber_300.svg"
                                    alt="arrowdown_One"
                                  />
                                  <Img
                                    className="h-[58px] mt-auto mx-auto w-[18px]"
                                    src="images/img_arrowdown_amber_300.svg"
                                    alt="arrowdown_Two"
                                  />
                                  <div className="absolute h-[206px] inset-[0] justify-center m-auto w-full">
                                    <Img
                                      className="absolute h-[206px] inset-y-[0] my-auto right-[0] w-[18px]"
                                      src="images/img_frame_indigo_400.svg"
                                      alt="frame_One"
                                    />
                                    <div
                                      className="absolute bg-cover bg-no-repeat md:h-[45px] h-[84px] inset-y-[0] left-[0] my-auto p-[7px] shadow-bs2 w-[95%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group_white_a700_84x153.svg')",
                                      }}
                                    >
                                      <div className="absolute flex flex-row gap-[7px] items-center justify-start left-[8%] top-[18%] w-[31%]">
                                        <Img
                                          className="h-1.5 w-1.5"
                                          src="images/img_close.svg"
                                          alt="close"
                                        />
                                        <Text
                                          className="text-bluegray-900 text-xs"
                                          size="txtPoppinsSemiBold12"
                                        >
                                          200.0
                                        </Text>
                                      </div>
                                      <div className="absolute flex flex-col items-center justify-start left-[8%] top-[19%] w-[74%]">
                                        <div className="flex flex-col gap-3 justify-start w-full">
                                          <div className="flex flex-row gap-[7px] items-start justify-end md:ml-[0] ml-[65px] w-[42%] md:w-full">
                                            <Img
                                              className="h-1.5 mt-1 w-1.5"
                                              src="images/img_close_amber_300.svg"
                                              alt="close_One"
                                            />
                                            <Text
                                              className="text-bluegray-900 text-xs"
                                              size="txtPoppinsSemiBold12"
                                            >
                                              2,000
                                            </Text>
                                          </div>
                                          <Text
                                            className="mr-5 text-[10px] text-bluegray-400"
                                            size="txtPoppinsMedium10"
                                          >
                                            21 September, 2021
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-end justify-between w-[36%]">
                                  <Img
                                    className="h-[91px] mt-2 w-[18px]"
                                    src="images/img_arrowdown_amber_300.svg"
                                    alt="arrowdown_Three"
                                  />
                                  <Img
                                    className="h-[99px] w-[18px]"
                                    src="images/img_arrowdown_amber_300.svg"
                                    alt="arrowdown_Four"
                                  />
                                  <Img
                                    className="h-[77px] mt-[22px] w-[18px]"
                                    src="images/img_arrowdown_amber_300.svg"
                                    alt="arrowdown_Five"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row font-inter gap-[46px] items-start justify-start sm:px-5 px-9 w-full">
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                Mon
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                Tue
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                Wed
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                Thu
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs"
                                size="txtInterRegular12"
                              >
                                Fri
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                Sat
                              </Text>
                              <Text
                                className="flex-1 text-bluegray-400 text-center text-xs w-auto"
                                size="txtInterRegular12"
                              >
                                Sun
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[395px] md:h-auto items-start justify-start w-auto">
                  <div className="bg-deep_orange-300 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[85px] py-[5px] rounded-tl rounded-tr shadow-bs w-[370px] sm:w-full">
                    <Img
                      className="h-[200px] md:h-auto object-cover w-full"
                      src="images/img_messagenotification.png"
                      alt="messagenotifica"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-col h-[185px] md:h-auto items-start justify-center p-6 sm:px-5 rounded-bl rounded-br w-[370px] sm:w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-lg w-full"
                          size="txtInterBold18Bluegray800"
                        >
                          Subcrible us
                        </Text>
                        <Text
                          className="leading-[24.00px] max-w-[322px] md:max-w-full text-base text-bluegray-400"
                          size="txtInterRegular16"
                        >
                          To make friend with others in our community
                        </Text>
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start w-full">
                        <Button className="bg-deep_orange-300 cursor-pointer flex-1 font-semibold py-[15px] rounded-[24px] text-center text-sm text-white-A700 w-full">
                          Subcrible now
                        </Button>
                        <Button className="bg-gray-50 cursor-pointer flex-1 font-semibold py-[15px] rounded-[24px] text-bluegray-800 text-center text-sm w-full">
                          skip
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-auto"
                        size="txtInterBold18"
                      >
                        My card
                      </Text>
                      <Img
                        className="h-8 w-8"
                        src="images/img_user_bluegray_400.svg"
                        alt="user_One"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row gap-[51px] items-center justify-start w-full">
                      <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
                        <SelectBox
                          className="border border-indigo-50 border-solid font-medium px-4 py-[9px] rounded text-bluegray-800 text-left text-sm w-full"
                          placeholderClassName="text-bluegray-800"
                          indicator={
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowdown_bluegray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isSearchable={false}
                          placeholder="1234 **** 4567 8901 "
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                className="h-[30px] mr-[7px] w-[30px]"
                                src="images/img_file.svg"
                                alt="file"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          name="language"
                          isMulti={false}
                          options={languageOptionsList}
                        />
                        <div className="bg-indigo-400 flex flex-col md:gap-10 gap-[110px] justify-start p-5 rounded w-full">
                          <Img
                            className="h-3 md:ml-[0] ml-[238px]"
                            src="images/img_group_white_a700.svg"
                            alt="group_One"
                          />
                          <Text
                            className="mr-[120px] text-base text-white-A700"
                            size="txtInterMedium16WhiteA700"
                          >
                            1234 **** 4567 8901{" "}
                          </Text>
                        </div>
                        <Button
                          className="bg-white-A700 cursor-pointer flex items-center justify-center px-[35px] py-3.5 rounded w-full"
                          rightIcon={
                            <Img
                              className="h-5 ml-[13px]"
                              src="images/img_plus_deep_orange_300.svg"
                              alt="plus"
                            />
                          }
                        >
                          <div className="font-semibold sm:px-5 text-center text-deep_orange-300 text-sm">
                            Add new card
                          </div>
                        </Button>
                      </div>
                      <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Card Type
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Visa
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Card holder
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            Utillia
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Card number
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            1234 **** 4567 8901{" "}
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Expired
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            21/09
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            CVV
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            ***
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Total balance
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 w-auto"
                            size="txtInterMedium16"
                          >
                            $0.0
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start px-4 py-8 rounded shadow-bs w-auto">
                  <div className="flex flex-col gap-8 items-start justify-start w-[338px]">
                    <Text
                      className="text-bluegray-900 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Transactions
                    </Text>
                    <div className="flex flex-row gap-[31px] items-start justify-start w-full">
                      <List
                        className="flex flex-1 flex-col gap-4 items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[57px] items-center justify-start my-0 w-full">
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_robototoyfacefinal2.png"
                                alt="robototoyfacefi"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterSemiBold16"
                              >
                                Ackerman
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-bluegray-900 w-auto"
                            size="txtInterMedium16Bluegray900"
                          >
                            -$12.0
                          </Text>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="flex flex-1 flex-row gap-[43px] items-center justify-start my-0 w-full">
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_punktoyface1.png"
                                alt="punktoyfaceOne"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterSemiBold16"
                              >
                                Blanker{" "}
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-bluegray-900 w-auto"
                            size="txtInterMedium16Bluegray900"
                          >
                            +$100.0
                          </Text>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="flex flex-1 flex-row gap-[57px] items-center justify-start my-0 w-full">
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_vangoghbyamrit1.png"
                                alt="vangoghbyamritOne"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterSemiBold16"
                              >
                                Lee Ri
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-bluegray-900 w-auto"
                            size="txtInterMedium16Bluegray900"
                          >
                            -$12.0
                          </Text>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="flex flex-1 flex-row gap-14 items-center justify-start my-0 w-full">
                          <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
                            <div className="flex flex-col h-[46px] items-center justify-start rounded-[50%] w-[46px]">
                              <Img
                                className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                                src="images/img_rarepepenakamototoyface.png"
                                alt="rarepepenakamot"
                              />
                            </div>
                            <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-base text-bluegray-800 w-full"
                                size="txtInterSemiBold16"
                              >
                                Jackson
                              </Text>
                              <Text
                                className="text-bluegray-400 text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text
                            className="text-base text-bluegray-900 w-auto"
                            size="txtInterMedium16Bluegray900"
                          >
                            -$10.0
                          </Text>
                        </div>
                      </List>
                      <div className="bg-gray-50 flex flex-col h-[296px] md:h-auto items-start justify-start rounded-sm w-auto">
                        <Line className="bg-deep_orange-300 h-[134px] w-1" />
                      </div>
                    </div>
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

export default DashboardOnePage;
