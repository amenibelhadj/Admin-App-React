import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";

import { Button, Img, Input, Line, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const TracktasksPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A701 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
            <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
            <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-8 items-center justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-bluegray-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Product design
                  </Text>
                  <Text
                    className="text-base text-bluegray-400 text-right w-auto"
                    size="txtPoppinsRegular16"
                  >
                    <span className="text-bluegray-400 font-poppins font-normal">
                      File management/
                    </span>
                    <span className="text-bluegray-800 font-poppins font-normal">
                      {" "}
                      Product design
                    </span>
                  </Text>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-col gap-6 w-full"
                >
                  {[...Array(3)].map((item, index) => (
                    <AccordionItem uuid={index} key={Math.random()}>
                      <div className="bg-white-A700 flex flex-col items-start justify-start py-6 rounded shadow-bs w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-8 items-center justify-start sm:px-5 px-8 w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-full">
                              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                                <div className="flex flex-row font-poppins gap-4 items-start justify-start w-auto">
                                  <Img
                                    className="h-6 w-6"
                                    src="images/img_arrowup_bluegray_400.svg"
                                    alt="arrowup"
                                  />
                                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_television.svg"
                                      alt="television"
                                    />
                                    <Text
                                      className="text-base text-bluegray-900 text-center w-auto"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      In process (10)
                                    </Text>
                                  </div>
                                </div>
                                <Button className="bg-gray-50 cursor-pointer font-inter font-semibold py-[11px] rounded-[20px] text-bluegray-800 text-center text-sm w-[98px]">
                                  Edit{" "}
                                </Button>
                              </div>
                              <Line className="bg-indigo-50 h-px w-full" />
                            </div>
                            <div className="gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                              <div className="border-2 border-indigo-50 border-solid flex flex-1 flex-col items-center justify-center md:px-10 sm:px-5 px-[55px] py-[72px] rounded w-full">
                                <div className="flex flex-col gap-10 items-center justify-start w-full">
                                  <Button className="bg-red-52 flex h-14 items-center justify-center p-[18px] rounded-[50%] w-14">
                                    <Img
                                      className="h-5"
                                      src="images/img_plus_deep_orange_300.svg"
                                      alt="plus"
                                    />
                                  </Button>
                                  <div className="flex flex-col gap-2 items-center justify-center w-full">
                                    <Text
                                      className="text-base text-bluegray-800 text-center w-full"
                                      size="txtPoppinsBold16"
                                    >
                                      Add file
                                    </Text>
                                    <Text
                                      className="leading-[22.00px] max-w-[146px] md:max-w-full text-bluegray-800 text-center text-sm"
                                      size="txtPoppinsRegular14Bluegray800"
                                    >
                                      Add file to manage your vital task
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[31px] py-8 rounded shadow-bs w-full">
                                <div className="flex flex-col gap-6 items-start justify-start w-full">
                                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                                    <Text
                                      className="text-bluegray-900 text-lg w-full"
                                      size="txtPoppinsBold18"
                                    >
                                      LD presentation file
                                    </Text>
                                    <Text
                                      className="leading-[22.00px] text-bluegray-800 text-sm"
                                      size="txtPoppinsRegular14Bluegray800"
                                    >
                                      <>
                                        Introduction about LD
                                        <br />
                                        Project in detail
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      Process (80%)
                                    </Text>
                                    <Img
                                      className="h-px w-full"
                                      src="images/img_frame_indigo_50.svg"
                                      alt="frame"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      Members
                                    </Text>
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <div className="flex relative w-[54px]">
                                        <div className="flex flex-col h-8 items-center justify-start my-auto rounded-[50%] w-8">
                                          <Img
                                            className="h-8 md:h-auto rounded-[50%] w-8"
                                            src="images/img_robototoyfacefinal2_32x32.png"
                                            alt="robototoyfacefi"
                                          />
                                        </div>
                                        <div className="flex flex-col h-8 items-center justify-start ml-[-10px] my-auto rounded-[50%] w-8 z-[1]">
                                          <Img
                                            className="h-8 md:h-auto rounded-[50%] w-8"
                                            src="images/img_fidenza978toyface_32x32.png"
                                            alt="fidenza978toyfa"
                                          />
                                        </div>
                                      </div>
                                      <Button className="bg-gray-50 flex h-8 items-center justify-center p-1.5 rounded-[50%] w-8">
                                        <Img
                                          className="h-5"
                                          src="images/img_overflowmenu.svg"
                                          alt="overflowmenu"
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[31px] py-8 rounded shadow-bs w-full">
                                <div className="flex flex-col gap-6 items-start justify-start w-full">
                                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                                    <Text
                                      className="text-bluegray-900 text-lg w-full"
                                      size="txtPoppinsBold18"
                                    >
                                      Urgent Tasks
                                    </Text>
                                    <Text
                                      className="leading-[22.00px] text-bluegray-800 text-sm"
                                      size="txtPoppinsRegular14Bluegray800"
                                    >
                                      <>
                                        Introduction about LD
                                        <br />
                                        Project in detail
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      Process (10%)
                                    </Text>
                                    <Img
                                      className="h-px w-full"
                                      src="images/img_frame_indigo_50_1x194.svg"
                                      alt="frame_One"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      Members
                                    </Text>
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <div className="flex relative w-[54px]">
                                        <div className="flex flex-col h-8 items-center justify-start my-auto rounded-[50%] w-8">
                                          <Img
                                            className="h-8 md:h-auto rounded-[50%] w-8"
                                            src="images/img_robototoyfacefinal2_32x32.png"
                                            alt="robototoyfacefi_One"
                                          />
                                        </div>
                                        <div className="flex flex-col h-8 items-center justify-start ml-[-10px] my-auto rounded-[50%] w-8 z-[1]">
                                          <Img
                                            className="h-8 md:h-auto rounded-[50%] w-8"
                                            src="images/img_fidenza978toyface_32x32.png"
                                            alt="fidenza978toyfa_One"
                                          />
                                        </div>
                                      </div>
                                      <Button className="bg-gray-50 flex h-8 items-center justify-center p-1.5 rounded-[50%] w-8">
                                        <Img
                                          className="h-5"
                                          src="images/img_overflowmenu.svg"
                                          alt="overflowmenu_One"
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[31px] py-8 rounded shadow-bs w-full">
                                <div className="flex flex-col gap-6 items-start justify-start w-full">
                                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                                    <Text
                                      className="text-bluegray-900 text-lg w-full"
                                      size="txtPoppinsBold18"
                                    >
                                      Plan for 2022
                                    </Text>
                                    <Text
                                      className="leading-[22.00px] text-bluegray-800 text-sm"
                                      size="txtPoppinsRegular14Bluegray800"
                                    >
                                      <>
                                        Introduction about LD
                                        <br />
                                        Project in detail
                                      </>
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      Process (0%)
                                    </Text>
                                    <Img
                                      className="h-px w-full"
                                      src="images/img_frame_1x194.svg"
                                      alt="frame_Two"
                                    />
                                  </div>
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-900 w-full"
                                      size="txtPoppinsRegular16Bluegray900"
                                    >
                                      Members
                                    </Text>
                                    <div className="flex flex-row items-center justify-between w-full">
                                      <div className="flex flex-col h-8 items-center justify-start w-8">
                                        <div className="flex flex-col h-8 items-center justify-start rounded-[50%] w-8">
                                          <Img
                                            className="h-8 md:h-auto rounded-[50%] w-8"
                                            src="images/img_tintin22_32x32.png"
                                            alt="tintinTwentyTwo"
                                          />
                                        </div>
                                      </div>
                                      <Button className="bg-gray-50 flex flex-1 h-8 items-center justify-center p-1.5 rounded-[50%] w-8">
                                        <Img
                                          className="h-5"
                                          src="images/img_overflowmenu.svg"
                                          alt="overflowmenu_Two"
                                        />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TracktasksPage;
