import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const selectTypeOfCardOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EKYCScanIDCardPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
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
              <div className="bg-white-A700 flex flex-col items-center justify-center sm:px-5 px-8 py-12 rounded shadow-bs w-full">
                <div className="flex flex-col gap-10 items-center justify-start w-full">
                  <div className="flex flex-col gap-10 items-center justify-start w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-col gap-4 items-center justify-center w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                          size="txtInterBold24Bluegray900"
                        >
                          Scan ID Card
                        </Text>
                        <Text
                          className="text-bluegray-400 text-center text-sm w-full"
                          size="txtInterRegular14Bluegray400"
                        >
                          Please ensure that the image that you uploaded is
                          clear and not blurred
                        </Text>
                      </div>
                      <SelectBox
                        className="bg-white-A700 border border-indigo-50 border-solid font-medium pb-4 pt-[19px] px-5 rounded text-base text-bluegray-800 text-left w-full"
                        placeholderClassName="text-bluegray-800"
                        indicator={
                          <Img
                            className="h-1.5 w-[11px]"
                            src="images/img_arrowdown_bluegray_900.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group_One"
                        options={selectTypeOfCardOptionsList}
                        isSearchable={false}
                        placeholder="Select type of Card"
                      />
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-[23px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                      orientation="horizontal"
                    >
                      <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col h-[359px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[193px] py-[108px] rounded w-full">
                        <div className="flex flex-col gap-[52px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-bluegray-800 text-center w-full"
                            size="txtInterSemiBold16"
                          >
                            Front
                          </Text>
                          <div className="flex flex-col gap-6 items-center justify-start w-auto">
                            <Button className="bg-red-52 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                              <Img
                                className="h-5"
                                src="images/img_plus_deep_orange_300.svg"
                                alt="plus"
                              />
                            </Button>
                            <Text
                              className="leading-[22.00px] max-w-[146px] md:max-w-full text-bluegray-400 text-center text-sm"
                              size="txtInterRegular14Bluegray400"
                            >
                              Drag or click to upload image
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col h-[359px] md:h-auto items-center justify-center md:px-10 sm:px-5 px-[193px] py-[108px] rounded w-full">
                        <div className="flex flex-col gap-[52px] items-center justify-start w-auto">
                          <Text
                            className="text-base text-bluegray-800 text-center w-full"
                            size="txtInterSemiBold16"
                          >
                            Back
                          </Text>
                          <div className="flex flex-col gap-6 items-center justify-start w-auto">
                            <Button className="bg-red-52 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                              <Img
                                className="h-5"
                                src="images/img_plus_deep_orange_300.svg"
                                alt="plus"
                              />
                            </Button>
                            <Text
                              className="leading-[22.00px] max-w-[146px] md:max-w-full text-bluegray-400 text-center text-sm"
                              size="txtInterRegular14Bluegray400"
                            >
                              Drag or click to upload image
                            </Text>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[270px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                    Next Step
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

export default EKYCScanIDCardPage;
