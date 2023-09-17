import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

const CartProductListPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1071px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1151px] w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Cart
                </Text>
                <Text
                  className="text-base text-bluegray-400 text-right w-auto"
                  size="txtInterRegular16"
                >
                  <span className="text-bluegray-400 font-inter font-normal">
                    Ecommerce/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                    Cart
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-8 py-6 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                    <Text
                      className="text-bluegray-900 text-lg w-full"
                      size="txtInterBold18"
                    >
                      Product List
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pt-0.5 px-0.5 w-full">
                        <div className="flex sm:flex-1 flex-col h-5 items-center justify-end mb-0.5 md:ml-[0] ml-[18px] w-5 sm:w-full">
                          <CheckBox
                            className=""
                            inputClassName="bg-bluegray-400 mr-[5px]"
                            name="file_One"
                            id="file_One"
                          ></CheckBox>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[101px] text-base text-bluegray-400"
                          size="txtInterRegular16"
                        >
                          Product
                        </Text>
                        <Text
                          className="ml-40 md:ml-[0] text-base text-bluegray-400"
                          size="txtInterRegular16"
                        >
                          Price
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[73px] text-base text-bluegray-400"
                          size="txtInterRegular16"
                        >
                          Quantity
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[72px] text-base text-bluegray-400"
                          size="txtInterRegular16"
                        >
                          Total
                        </Text>
                      </div>
                      <List
                        className="flex flex-col gap-3 items-end w-full"
                        orientation="vertical"
                      >
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 px-5 py-2 w-full">
                          <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file"
                              ></CheckBox>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-[231px]">
                              <Img
                                className="h-[86px] md:h-auto object-cover w-20"
                                src="images/img_rectangle_118x110.png"
                                alt="rectangle"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Text
                                  className="text-bluegray-900 text-lg w-full"
                                  size="txtInterBold18"
                                >
                                  Polo Shirt
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  Color: Grey, S
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                            <div className="flex flex-row gap-3 items-center justify-start w-auto">
                              <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                                <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_menu_bluegray_900.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
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
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 px-5 py-2 w-full">
                          <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file3"
                              ></CheckBox>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-[231px]">
                              <Img
                                className="h-[86px] md:h-auto object-cover w-20"
                                src="images/img_rectangle_3.png"
                                alt="rectangle"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Text
                                  className="text-bluegray-900 text-lg w-full"
                                  size="txtInterBold18"
                                >
                                  Polo Shirt
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  Color: Grey, S
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                            <div className="flex flex-row gap-3 items-center justify-start w-auto">
                              <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                                <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_menu_bluegray_900.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
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
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 px-5 py-2 w-full">
                          <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file4"
                              ></CheckBox>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-[231px]">
                              <Img
                                className="h-[86px] md:h-auto object-cover w-20"
                                src="images/img_rectangle_86x80.png"
                                alt="rectangle"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Text
                                  className="text-bluegray-900 text-lg w-full"
                                  size="txtInterBold18"
                                >
                                  Polo Shirt
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  Color: Grey, S
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                            <div className="flex flex-row gap-3 items-center justify-start w-auto">
                              <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                                <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_menu_bluegray_900.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
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
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 px-5 py-2 w-full">
                          <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file5"
                              ></CheckBox>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-[231px]">
                              <Img
                                className="h-[86px] md:h-auto object-cover w-20"
                                src="images/img_rectangle_4.png"
                                alt="rectangle"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Text
                                  className="text-bluegray-900 text-lg w-full"
                                  size="txtInterBold18"
                                >
                                  Polo Shirt
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  Color: Grey, S
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                            <div className="flex flex-row gap-3 items-center justify-start w-auto">
                              <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                                <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_menu_bluegray_900.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
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
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 px-5 py-2 w-full">
                          <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file6"
                              ></CheckBox>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-[231px]">
                              <Img
                                className="h-[86px] md:h-auto object-cover w-20"
                                src="images/img_rectangle_5.png"
                                alt="rectangle"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Text
                                  className="text-bluegray-900 text-lg w-full"
                                  size="txtInterBold18"
                                >
                                  Polo Shirt
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  Color: Grey, S
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                            <div className="flex flex-row gap-3 items-center justify-start w-auto">
                              <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                                <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_menu_bluegray_900.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
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
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-indigo-50 w-full" />
                        <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start my-0 px-5 py-2 w-full">
                          <div className="flex md:flex-col flex-row gap-11 items-center justify-start w-full">
                            <div className="flex sm:flex-1 flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file7"
                              ></CheckBox>
                            </div>
                            <div className="flex flex-row gap-6 items-start justify-start w-[231px]">
                              <Img
                                className="h-[86px] md:h-auto object-cover w-20"
                                src="images/img_rectangle_6.png"
                                alt="rectangle"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-full">
                                <Text
                                  className="text-bluegray-900 text-lg w-full"
                                  size="txtInterBold18"
                                >
                                  Polo Shirt
                                </Text>
                                <Text
                                  className="text-bluegray-400 text-sm w-full"
                                  size="txtInterRegular14Bluegray400"
                                >
                                  Color: Grey, S
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                            <div className="flex flex-row gap-3 items-center justify-start w-auto">
                              <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                                <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                                  <Img
                                    className="h-5 w-5"
                                    src="images/img_menu_bluegray_900.svg"
                                    alt="menu"
                                  />
                                </div>
                              </div>
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
                            <Text
                              className="text-bluegray-800 text-sm w-auto"
                              size="txtInterSemiBold14Bluegray800"
                            >
                              $120.0
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[370px] sm:w-full">
                  <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-bluegray-800 text-sm w-full"
                        size="txtInterMedium14Bluegray800"
                      >
                        Promotion
                      </Text>
                      <Input
                        name="frame18341"
                        placeholder="Enter code"
                        className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                        wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-3 py-[17px] rounded w-full"
                      ></Input>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="images/img_offer.svg"
                        alt="offer"
                      />
                      <Text
                        className="flex-1 text-indigo-400 text-sm w-auto"
                        size="txtInterMedium14Indigo400"
                      >
                        Click to find Promotion
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-8 items-center justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Price
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 text-right w-auto"
                            size="txtInterMedium16"
                          >
                            $120.0
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Shipping fee
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 text-right"
                            size="txtInterMedium16"
                          >
                            $0
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-indigo-50 h-px w-full" />
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-base text-bluegray-400 text-center w-auto"
                          size="txtInterRegular16"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-bluegray-800 text-lg text-right w-auto"
                          size="txtInterBold18Bluegray800"
                        >
                          $120.0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[306px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                          Purchase now
                        </Button>
                        <Button className="bg-gray-50 cursor-pointer font-semibold min-w-[306px] py-[15px] rounded-[24px] text-bluegray-800 text-center text-sm">
                          Scan QR code
                        </Button>
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

export default CartProductListPage;
