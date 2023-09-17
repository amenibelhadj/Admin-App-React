import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter gap-px items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar1 className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-start justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="text-bluegray-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                File Management
              </Text>
              <div className="flex md:flex-col flex-row font-inter gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-auto">
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-[273px]">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Accordion
                        preExpanded={[0]}
                        className="flex flex-col font-inter gap-6 w-auto"
                      >
                        {[...Array(3)].map((item, index) => (
                          <AccordionItem uuid={index} key={Math.random()}>
                            <div className="flex flex-col gap-4 items-center justify-start w-auto">
                              <AccordionItemHeading className="w-full">
                                <AccordionItemButton>
                                  <AccordionItemState>
                                    {({ expanded }) => (
                                      <div className="flex flex-row items-center justify-between w-[209px]">
                                        <div className="flex flex-row gap-[13px] items-start justify-start w-[105px]">
                                          <Img
                                            className="h-6 w-6"
                                            src="images/img_television.svg"
                                            alt="television"
                                          />
                                          <Text
                                            className="text-base text-bluegray-900 text-center w-auto"
                                            size="txtInterMedium16Bluegray900"
                                          >
                                            Main File
                                          </Text>
                                        </div>
                                        {expanded && (
                                          <Img
                                            className="h-6 w-6"
                                            src="images/img_arrowup_bluegray_400.svg"
                                            alt="arrowup"
                                          />
                                        )}
                                        {!expanded && (
                                          <Img
                                            className="h-6 w-6"
                                            src="images/img_arrowup_bluegray_400.svg"
                                            alt="arrowup_One"
                                          />
                                        )}
                                      </div>
                                    )}
                                  </AccordionItemState>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel className="w-full ">
                                <div className="flex flex-col font-poppins gap-4 items-start justify-start mx-auto sm:pl-5 pl-[37px] w-full">
                                  <Text
                                    className="text-base text-bluegray-400 w-full"
                                    size="txtPoppinsRegular16"
                                  >
                                    Product Design
                                  </Text>
                                  <Text
                                    className="text-base text-bluegray-400 w-full"
                                    size="txtPoppinsRegular16"
                                  >
                                    Outsource
                                  </Text>
                                  <Text
                                    className="text-base text-bluegray-400 w-full"
                                    size="txtPoppinsRegular16"
                                  >
                                    Graphics
                                  </Text>
                                  <Text
                                    className="text-base text-bluegray-400 w-full"
                                    size="txtPoppinsRegular16"
                                  >
                                    Empty states
                                  </Text>
                                </div>
                              </AccordionItemPanel>
                            </div>
                          </AccordionItem>
                        ))}
                      </Accordion>
                      <Button
                        className="bg-red-51 cursor-pointer flex h-12 items-center justify-center pl-[35px] pr-[31px] py-[13px] rounded-[24px] w-[209px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[13px] my-px"
                            src="images/img_plus_deep_orange_300.svg"
                            alt="plus"
                          />
                        }
                      >
                        <div className="font-bold font-poppins sm:px-5 text-center text-deep_orange-300 text-sm">
                          Add new folder
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[23px] py-4 rounded shadow-bs w-[272px]">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-end w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_close_bluegray_400.svg"
                          alt="close"
                        />
                      </div>
                      <div className="flex flex-col gap-11 items-center justify-start w-full">
                        <div className="flex flex-col gap-8 items-center justify-start w-full">
                          <Img
                            className="h-[81px] md:h-auto object-cover w-[81px]"
                            src="images/img_document1.png"
                            alt="documentOne"
                          />
                          <div className="flex flex-col gap-2 items-center justify-start w-full">
                            <Text
                              className="text-base text-bluegray-800 text-center w-full"
                              size="txtInterBold16"
                            >
                              Upgrade Features
                            </Text>
                            <Text
                              className="leading-[22.00px] max-w-[226px] md:max-w-full text-bluegray-800 text-center text-sm"
                              size="txtInterRegular14Bluegray800"
                            >
                              Upgrade account to access multiple features
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="bg-transparent cursor-pointer flex items-center justify-center px-[35px] w-full"
                          rightIcon={
                            <Img
                              className="h-6 ml-2.5"
                              src="images/img_forward.svg"
                              alt="forward"
                            />
                          }
                        >
                          <div className="font-bold sm:px-5 text-center text-deep_orange-300 text-sm">
                            Upgrade now
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[31px] py-[26px] rounded shadow-bs w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Main File
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <Button className="bg-gray-50 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
                            <Img
                              className="h-5"
                              src="images/img_search_bluegray_900.svg"
                              alt="search"
                            />
                          </Button>
                          <Button className="bg-gray-50 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
                            <Img
                              className="h-5"
                              src="images/img_overflowmenu.svg"
                              alt="overflowmenu"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="gap-5 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-5 rounded w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_folder_indigo_400.svg"
                                alt="folder"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_user_bluegray_400.svg"
                                alt="user"
                              />
                            </div>
                            <div className="flex flex-row gap-6 items-end justify-start w-full">
                              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                                <Text
                                  className="text-base text-bluegray-800 w-full"
                                  size="txtInterBold16"
                                >
                                  Product Design
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  12 Files
                                </Text>
                              </div>
                              <Text
                                className="text-bluegray-400 text-right text-sm w-auto"
                                size="txtInterMedium14Bluegray400"
                              >
                                3GB
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-5 rounded w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_folder_indigo_400.svg"
                                alt="folder"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_user_bluegray_400.svg"
                                alt="user"
                              />
                            </div>
                            <div className="flex flex-row gap-6 items-end justify-start w-full">
                              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                                <Text
                                  className="text-base text-bluegray-800 w-full"
                                  size="txtInterBold16"
                                >
                                  Outsource
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  12 Files
                                </Text>
                              </div>
                              <Text
                                className="text-bluegray-400 text-right text-sm w-auto"
                                size="txtInterMedium14Bluegray400"
                              >
                                3GB
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-5 rounded w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_folder_indigo_400.svg"
                                alt="folder"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_user_bluegray_400.svg"
                                alt="user"
                              />
                            </div>
                            <div className="flex flex-row gap-6 items-end justify-start w-full">
                              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                                <Text
                                  className="text-base text-bluegray-800 w-full"
                                  size="txtInterBold16"
                                >
                                  Graphics
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  12 Files
                                </Text>
                              </div>
                              <Text
                                className="text-bluegray-400 text-right text-sm w-auto"
                                size="txtInterMedium14Bluegray400"
                              >
                                3GB
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-indigo-50 border-solid flex flex-1 flex-col gap-8 items-start justify-start p-5 rounded w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                className="h-6 w-6"
                                src="images/img_folder_indigo_400.svg"
                                alt="folder"
                              />
                              <Img
                                className="h-6 w-6"
                                src="images/img_user_bluegray_400.svg"
                                alt="user"
                              />
                            </div>
                            <div className="flex flex-row gap-6 items-end justify-start w-full">
                              <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                                <Text
                                  className="text-base text-bluegray-800 w-full"
                                  size="txtInterBold16"
                                >
                                  Empty States
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  12 Files
                                </Text>
                              </div>
                              <Text
                                className="text-bluegray-400 text-right text-sm w-auto"
                                size="txtInterMedium14Bluegray400"
                              >
                                3GB
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Recent files
                        </Text>
                        <div className="flex flex-row gap-2 items-center justify-start w-auto">
                          <Text
                            className="text-bluegray-800 text-right text-sm w-auto"
                            size="txtInterMedium14Bluegray800"
                          >
                            View all
                          </Text>
                          <Img
                            className="h-5 w-5"
                            src="images/img_arrowright.svg"
                            alt="arrowright"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <List
                          className="sm:flex-col flex-row sm:gap-5 grid sm:grid-cols-1 grid-cols-3 justify-start w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center sm:ml-[0] px-4 py-2.5 w-full">
                            <div className="flex flex-col items-end justify-end">
                              <Text
                                className="mr-[17px] text-base text-bluegray-400 text-center"
                                size="txtInterRegular16"
                              >
                                Name
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center sm:ml-[0] px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Date motified
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center sm:ml-[0] px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Size
                            </Text>
                          </div>
                        </List>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-start w-[117px]">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_bluegray_900.svg"
                                alt="file_One"
                              />
                              <Text
                                className="flex-1 text-base text-bluegray-900 text-center w-auto"
                                size="txtInterRegular16Bluegray900"
                              >
                                index.html
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer flex-1 h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            10.10.2021, 09:45
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            09 KB
                          </Button>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-4 items-start justify-start w-[120px]">
                              <Img
                                className="h-6 w-6"
                                src="images/img_image.svg"
                                alt="image"
                              />
                              <Text
                                className="flex-1 text-base text-bluegray-900 text-center w-auto"
                                size="txtInterRegular16Bluegray900"
                              >
                                image.png
                              </Text>
                            </div>
                          </div>
                          <List
                            className="sm:flex-1 sm:flex-col flex-row gap-px grid grid-cols-2 w-[67%] sm:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                              <Text
                                className="text-base text-bluegray-800 text-center w-full"
                                size="txtInterRegular16Bluegray800"
                              >
                                10.10.2021, 09:45
                              </Text>
                            </div>
                            <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                              <Text
                                className="text-base text-bluegray-800 text-center w-full"
                                size="txtInterRegular16Bluegray800"
                              >
                                110 KB
                              </Text>
                            </div>
                          </List>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3.5 items-start justify-start w-[141px]">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_bluegray_900_24x24.svg"
                                alt="file_Two"
                              />
                              <Text
                                className="flex-1 text-base text-bluegray-900 text-center w-auto"
                                size="txtInterRegular16Bluegray900"
                              >
                                Document.txt
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer flex-1 h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            10.10.2021, 09:45
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            10 KB
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start p-8 sm:px-5 rounded shadow-bs w-auto">
                  <Text
                    className="text-bluegray-900 text-lg w-full"
                    size="txtInterBold18"
                  >
                    Storage
                  </Text>
                  <div className="h-[190px] relative w-[190px]">
                    <div className="!w-[190px] border-solid h-[190px] m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[190px] border-solid h-[190px] m-auto overflow-visible"
                        value={16}
                        strokeWidth={1}
                        styles={{
                          trail: { strokeWidth: 1, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(-90deg)",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                    <div className="absolute flex flex-col gap-1.5 inset-x-[0] items-center justify-start mx-auto top-[32%]">
                      <Text
                        className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl"
                        size="txtInterBold24Bluegray800"
                      >
                        25Gb
                      </Text>
                      <Text
                        className="text-bluegray-400 text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        Used of 50GB
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-5 items-start w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_image_indigo_400.svg"
                        alt="image"
                      />
                      <div className="flex flex-1 flex-row gap-6 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterBold16"
                          >
                            Image
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 files
                          </Text>
                        </div>
                        <Text
                          className="text-bluegray-400 text-right text-sm w-auto"
                          size="txtInterMedium14Bluegray400"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-indigo-50 w-full" />
                    <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_play.svg"
                        alt="play"
                      />
                      <div className="flex flex-1 flex-row gap-6 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterBold16"
                          >
                            Videos
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 files
                          </Text>
                        </div>
                        <Text
                          className="text-bluegray-400 text-right text-sm w-auto"
                          size="txtInterMedium14Bluegray400"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-indigo-50 w-full" />
                    <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_music_amber_300.svg"
                        alt="music"
                      />
                      <div className="flex flex-1 flex-row gap-6 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterBold16"
                          >
                            Muscics
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 files
                          </Text>
                        </div>
                        <Text
                          className="text-bluegray-400 text-right text-sm w-auto"
                          size="txtInterMedium14Bluegray400"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-indigo-50 w-full" />
                    <div className="flex flex-1 flex-row gap-4 items-center justify-start my-0 w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_computer_green_700.svg"
                        alt="computer"
                      />
                      <div className="flex flex-1 flex-row gap-6 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterBold16"
                          >
                            Others
                          </Text>
                          <Text
                            className="text-bluegray-400 text-sm w-full"
                            size="txtInterRegular14Bluegray400"
                          >
                            23 files
                          </Text>
                        </div>
                        <Text
                          className="text-bluegray-400 text-right text-sm w-auto"
                          size="txtInterMedium14Bluegray400"
                        >
                          3GB
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="border-2 border-indigo-50 border-solid flex flex-col items-start justify-start md:px-10 sm:px-5 px-[69px] py-3 rounded w-full">
                    <div className="flex flex-col gap-3 items-center justify-start w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_download_bluegray_400.svg"
                        alt="download"
                      />
                      <Text
                        className="text-bluegray-400 text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        Import file
                      </Text>
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

export default FileManagementDefaultPage;
