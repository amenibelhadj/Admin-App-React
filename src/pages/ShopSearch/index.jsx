import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { Button, CheckBox, Img, Input, Line, SeekBar, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

const ShopSearchPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");
  const [framefourvalue, setFramefourvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1538px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="text-bluegray-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                Shopping centre
              </Text>
              <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[31px] sm:px-5 rounded shadow-bs w-[272px]">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                    <Text
                      className="text-bluegray-900 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Categories
                    </Text>
                    <Accordion
                      preExpanded={[0]}
                      className="flex flex-col gap-5 w-full"
                    >
                      {[...Array(4)].map((item, index) => (
                        <AccordionItem uuid={index} key={Math.random()}>
                          <div className="flex flex-col items-center justify-start pb-[21px] w-full">
                            <div className="flex flex-col gap-5 items-start justify-start w-full">
                              <AccordionItemHeading className="w-full">
                                <AccordionItemButton>
                                  <AccordionItemState>
                                    {({ expanded }) => (
                                      <div className="flex flex-row items-center justify-between w-full">
                                        <Text
                                          className="text-base text-bluegray-800 w-auto"
                                          size="txtInterMedium16"
                                        >
                                          Clothes
                                        </Text>
                                        {expanded && (
                                          <Img
                                            className="h-5 w-5"
                                            src="images/img_arrowup_bluegray_900.svg"
                                            alt="arrowup"
                                          />
                                        )}
                                        {!expanded && (
                                          <Img
                                            className="h-5 w-5"
                                            src="images/img_arrowdown_bluegray_900.svg"
                                            alt="arrowdown"
                                          />
                                        )}
                                      </div>
                                    )}
                                  </AccordionItemState>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel className="w-full ">
                                <div className="flex flex-col items-center justify-start mx-auto w-full">
                                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                                    <Text
                                      className="text-base text-bluegray-800 w-full"
                                      size="txtInterMedium16"
                                    >
                                      T-shirts
                                    </Text>
                                    <Text
                                      className="text-base text-bluegray-800 w-full"
                                      size="txtInterMedium16"
                                    >
                                      Jeans
                                    </Text>
                                    <Text
                                      className="text-base text-bluegray-800 w-full"
                                      size="txtInterMedium16"
                                    >
                                      Jackets
                                    </Text>
                                  </div>
                                </div>
                              </AccordionItemPanel>
                            </div>
                          </div>
                          <Line className="self-center h-px bg-indigo-50 w-full" />
                        </AccordionItem>
                      ))}
                    </Accordion>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-base text-bluegray-800 w-full"
                        size="txtInterMedium16"
                      >
                        Price
                      </Text>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <SeekBar
                          inputValue={[0]}
                          trackColors={["", "#e2e8ed"]}
                          thumbClassName="h-[undefinedpx] w-[undefinedpx] flex justify-center items-center rounded-[50%] outline-none"
                          className="flex h-3.5 w-full"
                          trackClassName="h-1 flex w-full"
                        />{" "}
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-bluegray-400 text-xs"
                            size="txtInterMedium12"
                          >
                            $0
                          </Text>
                          <Text
                            className="text-bluegray-400 text-right text-xs w-auto"
                            size="txtInterMedium12"
                          >
                            $10,000
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-base text-bluegray-800 w-full"
                        size="txtInterMedium16"
                      >
                        Rating
                      </Text>
                      <div className="flex flex-row items-center justify-between w-full">
                        <CheckBox
                          className="font-medium text-bluegray-800 text-left text-sm"
                          inputClassName="mr-[5px]"
                          name="remember"
                          id="remember"
                          label="5 Stars"
                        ></CheckBox>
                        <Img
                          className="h-[11px] md:h-auto object-cover w-[77px]"
                          src="images/img_frame.png"
                          alt="frame"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <CheckBox
                          className="font-medium text-bluegray-800 text-left text-sm"
                          inputClassName="mr-[5px]"
                          name="remember_One"
                          id="remember_One"
                          label="4 Stars"
                        ></CheckBox>
                        <Img
                          className="h-[11px] md:h-auto object-cover w-[61px]"
                          src="images/img_frame_11x61.png"
                          alt="frame_One"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <CheckBox
                          className="font-medium text-bluegray-800 text-left text-sm"
                          inputClassName="mr-[5px]"
                          name="remember_Two"
                          id="remember_Two"
                          label="3 Stars"
                        ></CheckBox>
                        <Img
                          className="h-[11px] md:h-auto object-cover w-[45px]"
                          src="images/img_frame_11x45.png"
                          alt="frame_Two"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <CheckBox
                          className="font-medium text-bluegray-800 text-left text-sm"
                          inputClassName="mr-[5px]"
                          name="remember_Three"
                          id="remember_Three"
                          label="2 Stars"
                        ></CheckBox>
                        <Img
                          className="h-[11px] md:h-auto object-cover w-7"
                          src="images/img_frame_11x28.png"
                          alt="frame_Three"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between w-full">
                        <CheckBox
                          className="font-medium text-bluegray-800 text-left text-sm"
                          inputClassName="mr-[5px]"
                          name="remember_Four"
                          id="remember_Four"
                          label="1 Star"
                        ></CheckBox>
                        <Img
                          className="h-[11px] md:h-auto object-cover w-3"
                          src="images/img_vector_11x12.png"
                          alt="vector_One"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-base text-bluegray-800 w-full"
                        size="txtInterMedium16"
                      >
                        Color
                      </Text>
                      <div className="flex flex-col items-start justify-center w-full">
                        <div className="flex flex-row gap-2 items-center justify-start w-[73%] md:w-full">
                          <Img
                            className="h-6 w-6"
                            src="images/img_icon.svg"
                            alt="icon"
                          />
                          <div className="bg-light_blue-A700 flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
                            <div className="bg-white-A700 h-3 rounded-[50%] w-3"></div>
                          </div>
                          <div className="bg-pink-400 h-6 rounded-[50%] w-6"></div>
                          <div className="bg-amber-302 h-6 rounded-[50%] w-6"></div>
                          <div className="bg-pink-A100 h-6 rounded-[50%] w-6"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Button
                        className="bg-deep_orange-300 cursor-pointer flex h-12 items-center justify-center px-[35px] py-3.5 rounded-[24px] w-full"
                        rightIcon={
                          <Img
                            className="h-5 ml-[15px]"
                            src="images/img_plus_white_a700.svg"
                            alt="plus"
                          />
                        }
                      >
                        <div className="font-semibold sm:px-5 text-center text-sm text-white-A700">
                          Apply filter
                        </div>
                      </Button>
                      <Button
                        className="bg-gray-50 cursor-pointer flex h-12 items-center justify-center px-[35px] py-3.5 rounded-[24px] w-full"
                        rightIcon={
                          <Img
                            className="h-5 ml-[27px]"
                            src="images/img_trash_bluegray_900.svg"
                            alt="trash"
                          />
                        }
                      >
                        <div className="font-semibold sm:px-5 text-bluegray-900 text-center text-sm">
                          Clear all
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <Input
                      name="frame_Four"
                      placeholder="Seach name, type,..."
                      value={framefourvalue}
                      onChange={(e) => setFramefourvalue(e)}
                      className="p-0 placeholder:text-bluegray-400 sm:px-5 text-base text-bluegray-400 text-left w-full"
                      wrapClassName="bg-white-A700 flex px-8 py-4 rounded shadow-bs w-full"
                      prefix={
                        <Img
                          className="cursor-pointer h-6 mr-4 my-auto"
                          src="images/img_search_bluegray_900.svg"
                          alt="search"
                        />
                      }
                      suffix={
                        <CloseSVG
                          className="cursor-pointer h-6 my-auto"
                          onClick={() => setFramefourvalue("")}
                          fillColor="#828fa2"
                          style={{
                            visibility:
                              framefourvalue?.length <= 0
                                ? "hidden"
                                : "visible",
                          }}
                          height={24}
                          width={24}
                          viewBox="0 0 24 24"
                        />
                      }
                    ></Input>
                    <div className="gap-5 grid grid-cols-1 items-start min-h-[auto] w-full">
                      <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              src="images/img_3427408800611.png"
                              alt="3427408800611"
                            />
                            <div className="absolute flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center right-[7%] top-[6%] w-[188px]">
                              <Button
                                className="bg-red-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[11px] my-px"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                }
                              >
                                <div className="text-left text-red-600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[13px] my-px"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                }
                              >
                                <div className="text-indigo-400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-8 h-[230px] md:h-auto items-center justify-center w-full">
                            <div className="flex flex-col gap-4 items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-bluegray-900 text-center text-sm w-full"
                                  size="txtInterMedium14"
                                >
                                  Avo T-Shirt
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-center w-full">
                                  <Text
                                    className="text-bluegray-900 text-lg w-auto"
                                    size="txtInterBold18"
                                  >
                                    $120.0
                                  </Text>
                                  <Text
                                    className="line-through text-bluegray-400 text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[11px] md:h-auto object-cover w-[77px] sm:w-full"
                                src="images/img_frame.png"
                                alt="frame"
                              />
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center w-full">
                              <Button className="bg-deep_orange-300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus"
                                />
                              </Button>
                              <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_buttonprimary.svg"
                                  alt="buttonprimary"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              src="images/img_3427408800611_353x272.png"
                              alt="3427408800611_One"
                            />
                            <div className="absolute flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center right-[7%] top-[6%] w-[188px]">
                              <Button
                                className="bg-red-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[11px] my-px"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                }
                              >
                                <div className="text-left text-red-600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[13px] my-px"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                }
                              >
                                <div className="text-indigo-400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-8 h-[230px] md:h-auto items-center justify-center w-full">
                            <div className="flex flex-col gap-4 items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-bluegray-900 text-center text-sm w-full"
                                  size="txtInterMedium14"
                                >
                                  Basic T-Shirt
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-center w-full">
                                  <Text
                                    className="text-bluegray-900 text-lg w-auto"
                                    size="txtInterBold18"
                                  >
                                    $120.0
                                  </Text>
                                  <Text
                                    className="line-through text-bluegray-400 text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[11px] md:h-auto object-cover w-[77px] sm:w-full"
                                src="images/img_frame.png"
                                alt="frame_One"
                              />
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center w-full">
                              <Button className="bg-deep_orange-300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus_One"
                                />
                              </Button>
                              <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_buttonprimary.svg"
                                  alt="buttonprimary_One"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              src="images/img_3427408800611_1.png"
                              alt="3427408800611_Two"
                            />
                            <div className="absolute flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center right-[7%] top-[6%] w-[188px]">
                              <Button
                                className="bg-red-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[11px] my-px"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                }
                              >
                                <div className="text-left text-red-600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[13px] my-px"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                }
                              >
                                <div className="text-indigo-400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-8 h-[230px] md:h-auto items-center justify-center w-full">
                            <div className="flex flex-col gap-4 items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-bluegray-900 text-center text-sm w-full"
                                  size="txtInterMedium14"
                                >
                                  Trendy Polo
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-center w-full">
                                  <Text
                                    className="text-bluegray-900 text-lg w-auto"
                                    size="txtInterBold18"
                                  >
                                    $120.0
                                  </Text>
                                  <Text
                                    className="line-through text-bluegray-400 text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[11px] md:h-auto object-cover w-[77px] sm:w-full"
                                src="images/img_frame.png"
                                alt="frame_Two"
                              />
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center w-full">
                              <Button className="bg-deep_orange-300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus_Two"
                                />
                              </Button>
                              <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_buttonprimary.svg"
                                  alt="buttonprimary_Two"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              src="images/img_3427408800611_353x273.png"
                              alt="3427408800611"
                            />
                            <div className="absolute flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center right-[7%] top-[6%] w-[188px]">
                              <Button
                                className="bg-red-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[11px] my-px"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                }
                              >
                                <div className="text-left text-red-600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[13px] my-px"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                }
                              >
                                <div className="text-indigo-400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-8 h-[230px] md:h-auto items-center justify-center w-full">
                            <div className="flex flex-col gap-4 items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-bluegray-900 text-center text-sm w-full"
                                  size="txtInterMedium14"
                                >
                                  Polo Shirt
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-center w-full">
                                  <Text
                                    className="text-bluegray-900 text-lg w-auto"
                                    size="txtInterBold18"
                                  >
                                    $120.0
                                  </Text>
                                  <Text
                                    className="line-through text-bluegray-400 text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[11px] md:h-auto object-cover w-[77px] sm:w-full"
                                src="images/img_frame.png"
                                alt="frame"
                              />
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center w-full">
                              <Button className="bg-deep_orange-300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus"
                                />
                              </Button>
                              <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_buttonprimary.svg"
                                  alt="buttonprimary"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              src="images/img_3427408800611_2.png"
                              alt="3427408800611_One"
                            />
                            <div className="absolute flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center right-[7%] top-[6%] w-[188px]">
                              <Button
                                className="bg-red-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[11px] my-px"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                }
                              >
                                <div className="text-left text-red-600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[13px] my-px"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                }
                              >
                                <div className="text-indigo-400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-8 h-[230px] md:h-auto items-center justify-center w-full">
                            <div className="flex flex-col gap-4 items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-bluegray-900 text-center text-sm w-full"
                                  size="txtInterMedium14"
                                >
                                  Bomber
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-center w-full">
                                  <Text
                                    className="text-bluegray-900 text-lg w-auto"
                                    size="txtInterBold18"
                                  >
                                    $120.0
                                  </Text>
                                  <Text
                                    className="line-through text-bluegray-400 text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[11px] md:h-auto object-cover w-[77px] sm:w-full"
                                src="images/img_frame.png"
                                alt="frame_One"
                              />
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center w-full">
                              <Button className="bg-deep_orange-300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus_One"
                                />
                              </Button>
                              <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_buttonprimary.svg"
                                  alt="buttonprimary_One"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-start justify-start w-full">
                          <div className="h-[353px] relative w-full">
                            <Img
                              className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                              src="images/img_3427408800611_3.png"
                              alt="3427408800611_Two"
                            />
                            <div className="absolute flex flex-row gap-2 h-[30px] md:h-auto items-center justify-center right-[7%] top-[6%] w-[188px]">
                              <Button
                                className="bg-red-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[82px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[11px] my-px"
                                    src="images/img_airplane.svg"
                                    alt="airplane"
                                  />
                                }
                              >
                                <div className="text-left text-red-600 text-xs">
                                  Feature
                                </div>
                              </Button>
                              <Button
                                className="bg-indigo-400_19 cursor-pointer flex h-[30px] items-center justify-center px-2 py-[7px] rounded w-[98px]"
                                rightIcon={
                                  <Img
                                    className="h-3 ml-[13px] my-px"
                                    src="images/img_offer.svg"
                                    alt="offer"
                                  />
                                }
                              >
                                <div className="text-indigo-400 text-left text-xs">
                                  Flash sale
                                </div>
                              </Button>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col gap-8 h-[230px] md:h-auto items-center justify-center w-full">
                            <div className="flex flex-col gap-4 items-center justify-center w-full">
                              <div className="flex flex-col gap-2 items-center justify-center w-full">
                                <Text
                                  className="text-bluegray-900 text-center text-sm w-full"
                                  size="txtInterMedium14"
                                >
                                  Over Shirt
                                </Text>
                                <div className="flex flex-row gap-0.5 items-center justify-center w-full">
                                  <Text
                                    className="text-bluegray-900 text-lg w-auto"
                                    size="txtInterBold18"
                                  >
                                    $120.0
                                  </Text>
                                  <Text
                                    className="line-through text-bluegray-400 text-sm w-auto"
                                    size="txtPoppinsRegular14"
                                  >
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                className="h-[11px] md:h-auto object-cover w-[77px] sm:w-full"
                                src="images/img_frame.png"
                                alt="frame_Two"
                              />
                            </div>
                            <div className="flex flex-row gap-4 items-center justify-center w-full">
                              <Button className="bg-deep_orange-300 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_plus_white_a700.svg"
                                  alt="plus_Two"
                                />
                              </Button>
                              <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded-[50%] w-12">
                                <Img
                                  className="h-5"
                                  src="images/img_buttonprimary.svg"
                                  alt="buttonprimary_Two"
                                />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="gap-2 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-center justify-center w-full">
                    <div className="border border-indigo-50 border-solid flex flex-1 flex-col h-8 md:h-auto items-start justify-start p-1 w-[32]">
                      <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowleft_bluegray_400.svg"
                          alt="arrowleft"
                        />
                      </div>
                    </div>
                    <Button className="border border-bluegray-900 border-solid cursor-pointer flex-1 font-medium h-8 min-w-[32px] py-[7px] text-bluegray-900 text-center text-sm w-[32]">
                      1
                    </Button>
                    <Button className="border border-indigo-50 border-solid cursor-pointer flex-1 font-medium h-8 min-w-[32px] py-[7px] text-bluegray-800 text-center text-sm w-[32]">
                      2
                    </Button>
                    <Button className="border border-indigo-50 border-solid cursor-pointer flex-1 font-medium h-8 min-w-[32px] py-[7px] text-bluegray-800 text-center text-sm w-[32]">
                      ...
                    </Button>
                    <Button className="border border-indigo-50 border-solid cursor-pointer flex-1 font-medium h-8 min-w-[32px] py-[7px] text-bluegray-800 text-center text-sm w-[32]">
                      9
                    </Button>
                    <Button className="border border-indigo-50 border-solid flex flex-1 h-8 items-center justify-center p-2.5 w-[32]">
                      <Img
                        src="images/img_arrowright_bluegray_400_32x32.svg"
                        alt="arrowright"
                      />
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

export default ShopSearchPage;
