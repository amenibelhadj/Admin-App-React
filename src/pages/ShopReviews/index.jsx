import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

const ShopReviewsPage = () => {
  const navigate = useNavigate();

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1979px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[1151px] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-bluegray-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Shopping centre
                  </Text>
                  <Text
                    className="text-base text-bluegray-400 text-right w-auto"
                    size="txtInterRegular16"
                  >
                    <span className="text-bluegray-400 font-inter font-normal">
                      Shop Central/
                    </span>
                    <span className="text-bluegray-800 font-inter font-normal">
                      {" "}
                      Product detail
                    </span>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start sm:px-5 px-8 py-[30px] rounded shadow-bs w-full">
                  <div className="flex flex-col gap-12 items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-full">
                      <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
                        <List
                          className="flex flex-col gap-5 items-start w-auto"
                          orientation="vertical"
                        >
                          <Img
                            className="h-[126px] md:h-auto my-0 object-cover w-[116px] sm:w-full"
                            src="images/img_rectangle.png"
                            alt="rectangle"
                          />
                          <Img
                            className="h-[126px] md:h-auto my-0 object-cover w-[116px] sm:w-full"
                            src="images/img_rectangle_126x116.png"
                            alt="rectangle"
                          />
                          <Img
                            className="h-[126px] md:h-auto my-0 object-cover w-[116px] sm:w-full"
                            src="images/img_rectangle_1.png"
                            alt="rectangle"
                          />
                          <Img
                            className="h-[126px] md:h-auto my-0 object-cover w-[116px] sm:w-full"
                            src="images/img_rectangle_2.png"
                            alt="rectangle"
                          />
                        </List>
                        <Img
                          className="flex-1 md:flex-none h-[564px] sm:h-auto max-h-[564px] object-cover sm:w-[]"
                          src="images/img_rectangle_564x387.png"
                          alt="rectangle"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-8 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-bluegray-900 w-full"
                            size="txtInterBold28"
                          >
                            Polo Shirt
                          </Text>
                          <div className="flex flex-row gap-[18px] items-center justify-start w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Code: #1230
                            </Text>
                            <Img
                              className="h-3.5 md:h-auto object-cover w-[90px]"
                              src="images/img_frame.png"
                              alt="frame"
                            />
                          </div>
                        </div>
                        <Text
                          className="text-2xl md:text-[22px] text-indigo-400 sm:text-xl w-full"
                          size="txtInterBold24"
                        >
                          $120.0
                        </Text>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterMedium16"
                          >
                            Choose color
                          </Text>
                          <Img
                            className="h-6 w-full"
                            src="images/img_frame_gray_400.svg"
                            alt="frame_One"
                          />
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterMedium16"
                          >
                            Choose quantity
                          </Text>
                          <div className="flex flex-row gap-3 items-center justify-start w-full">
                            <Button className="border border-indigo-50 border-solid flex h-8 items-center justify-center p-[9px] w-8">
                              <Img
                                src="images/img_pagedisabled.svg"
                                alt="pagedisabled"
                              />
                            </Button>
                            <Text
                              className="text-bluegray-900 text-center text-sm w-[5px]"
                              size="txtInterMedium14"
                            >
                              1
                            </Text>
                            <Button className="border border-indigo-50 border-solid flex h-8 items-center justify-center p-[9px] w-8">
                              <Img
                                className="h-[13px]"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="text-base text-bluegray-800 w-full"
                            size="txtInterMedium16"
                          >
                            Choose size
                          </Text>
                          <div className="flex flex-row gap-2 items-start justify-start w-full">
                            <Button className="border border-indigo-50 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-800 text-center text-sm w-8">
                              S
                            </Button>
                            <Button className="border border-indigo-50 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-800 text-center text-sm w-8">
                              M
                            </Button>
                            <Button className="border border-indigo-50 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-800 text-center text-sm w-8">
                              L
                            </Button>
                          </div>
                          <Text
                            className="text-indigo-400 text-sm w-full"
                            size="txtInterRegular14"
                          >
                            How to find your size?
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                          <Button
                            className="common-pointer bg-deep_orange-300 cursor-pointer font-bold min-w-[253px] py-[15px] rounded-[24px] text-center text-sm text-white-A700"
                            onClick={() => navigate("/shippinginfo")}
                          >
                            Purchase now
                          </Button>
                          <Button className="bg-deep_orange-50 cursor-pointer font-bold min-w-[253px] py-[15px] rounded-[24px] text-center text-deep_orange-300 text-sm">
                            Add to cart
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row gap-10 items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-auto">
                        <Text
                          className="text-base text-bluegray-400 w-auto"
                          size="txtInterRegular16"
                        >
                          Product Detail
                        </Text>
                        <div className="flex flex-row gap-3 items-center justify-start w-[331px]">
                          <div className="bg-indigo-400 h-0.5 w-[13%]"></div>
                          <Text
                            className="flex-1 text-base text-indigo-400 w-auto"
                            size="txtInterMedium16Indigo400"
                          >
                            Reviews
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex flex-1 flex-col gap-5 items-start w-full"
                        orientation="vertical"
                      >
                        <div className="border border-indigo-50 border-solid flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 rounded w-full">
                          <div className="flex flex-col gap-9 items-end justify-start w-full">
                            <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start w-full">
                              <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_tintin22_48x48.png"
                                    alt="tintinTwentyTwo"
                                  />
                                </div>
                                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                                  <Text
                                    className="text-bluegray-800 text-lg w-full"
                                    size="txtInterBold18Bluegray800"
                                  >
                                    Jimo
                                  </Text>
                                  <Text
                                    className="text-base text-bluegray-800 w-full"
                                    size="txtInterRegular16Bluegray800"
                                  >
                                    <>
                                      Nice T-Shirt, I have a soft spot for
                                      buying this stuff &lt;3 &lt;3
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="text-base text-bluegray-400 text-right w-auto"
                                size="txtInterRegular16"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-start justify-end w-full">
                              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_refresh_bluegray_800.svg"
                                  alt="refresh"
                                />
                                <Text
                                  className="text-base text-bluegray-800 w-auto"
                                  size="txtInterRegular16Bluegray800"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_favorite.svg"
                                  alt="favorite"
                                />
                                <Text
                                  className="text-base text-bluegray-800 w-auto"
                                  size="txtInterRegular16Bluegray800"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="border border-indigo-50 border-solid flex flex-1 flex-col items-start justify-start my-0 p-8 sm:px-5 rounded w-full">
                          <div className="flex flex-col gap-9 items-end justify-start w-full">
                            <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start w-full">
                              <div className="flex flex-1 sm:flex-col flex-row gap-5 items-center justify-start w-full">
                                <div className="flex flex-col h-12 items-center justify-start rounded-[50%] w-12">
                                  <Img
                                    className="h-12 md:h-auto rounded-[50%] w-12"
                                    src="images/img_indiahigh.png"
                                    alt="indiahigh"
                                  />
                                </div>
                                <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                                  <Text
                                    className="text-bluegray-800 text-lg w-full"
                                    size="txtInterBold18Bluegray800"
                                  >
                                    Ackerman_lhn
                                  </Text>
                                  <Text
                                    className="leading-[24.00px] max-w-[434px] md:max-w-full text-base text-bluegray-800"
                                    size="txtInterRegular16Bluegray800"
                                  >
                                    Oh my god, i am really addicted to this
                                    brand a lot. I define myself as a big fan
                                  </Text>
                                </div>
                              </div>
                              <Text
                                className="text-base text-bluegray-400 text-right w-auto"
                                size="txtInterRegular16"
                              >
                                20 mins ago
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[30px] items-start justify-end w-full">
                              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_refresh_bluegray_800.svg"
                                  alt="refresh"
                                />
                                <Text
                                  className="text-base text-bluegray-800 w-auto"
                                  size="txtInterRegular16Bluegray800"
                                >
                                  10 comments
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_favorite.svg"
                                  alt="favorite"
                                />
                                <Text
                                  className="text-base text-bluegray-800 w-auto"
                                  size="txtInterRegular16Bluegray800"
                                >
                                  200
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-poppins gap-8 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-bluegray-900 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    Related product
                  </Text>
                  <div className="flex flex-row font-inter gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-bluegray-400 text-right w-auto"
                      size="txtInterMedium16Bluegray400"
                    >
                      See all
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_bluegray_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row font-inter gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
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
                  <div className="flex flex-1 flex-col items-center justify-center w-full">
                    <div className="h-[353px] relative w-full">
                      <Img
                        className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                        src="images/img_3427408800611_1.png"
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
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopReviewsPage;
