import React from "react";

import { Button, Img, Line, List, Text } from "components";

const CartPage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-start justify-start px-12 md:px-5 py-[52px] w-[491px] sm:w-full">
          <div className="flex flex-col gap-12 items-start justify-start w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Text
                className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl w-auto"
                size="txtInterBold24Bluegray800"
              >
                My Cart
              </Text>
              <Img
                className="h-8 w-8"
                src="images/img_plus_bluegray_900.svg"
                alt="plus"
              />
            </div>
            <div className="flex flex-col gap-[33px] items-start justify-start w-full">
              <List
                className="flex flex-col gap-[33px] items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 sm:flex-col flex-row gap-6 items-center justify-start w-full">
                  <Img
                    className="h-[118px] md:h-auto max-h-[118px] object-cover sm:w-[]"
                    src="images/img_rectangle_118x110.png"
                    alt="rectangle"
                  />
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-bluegray-900 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Polo Shirt
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_pagedisabled.svg"
                            alt="minus"
                          />
                        </div>
                        <Text
                          className="text-bluegray-400 text-sm w-full"
                          size="txtInterRegular14Bluegray400"
                        >
                          Color: Grey, S
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                        <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                          <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                            <Img
                              className="h-5 w-5"
                              src="images/img_plus_bluegray_900.svg"
                              alt="plus"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[93px] items-center justify-start w-full">
                      <Text
                        className="flex-1 text-bluegray-400 text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-bluegray-800 text-right text-sm w-auto"
                        size="txtInterSemiBold14Bluegray800"
                      >
                        $120.0
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-px bg-indigo-50 w-full" />
                <div className="flex flex-1 sm:flex-col flex-row gap-6 items-center justify-start w-full">
                  <Img
                    className="h-[118px] md:h-auto max-h-[118px] object-cover sm:w-[]"
                    src="images/img_rectangle_3.png"
                    alt="rectangle"
                  />
                  <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-bluegray-900 text-lg w-auto"
                            size="txtInterBold18"
                          >
                            Basic T-shirt
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_pagedisabled.svg"
                            alt="minus"
                          />
                        </div>
                        <Text
                          className="text-bluegray-400 text-sm w-full"
                          size="txtInterRegular14Bluegray400"
                        >
                          Color: Grey, S
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                        <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                          <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                            <Img
                              className="h-5 w-5"
                              src="images/img_plus_bluegray_900.svg"
                              alt="plus"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[93px] items-center justify-start w-full">
                      <Text
                        className="flex-1 text-bluegray-400 text-sm w-auto"
                        size="txtInterRegular14Bluegray400"
                      >
                        Price
                      </Text>
                      <Text
                        className="text-bluegray-800 text-right text-sm w-auto"
                        size="txtInterSemiBold14Bluegray800"
                      >
                        $120.0
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
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
                  $240.0
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[189px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                  Purchase now
                </Button>
                <Button className="bg-deep_orange-50 cursor-pointer font-bold min-w-[189px] py-[15px] rounded-[24px] text-center text-deep_orange-300 text-sm">
                  Add to cart
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_computer_bluegray_900.svg"
                  alt="computer"
                />
                <div className="flex flex-1 flex-col gap-1 items-start justify-center w-full">
                  <Text
                    className="text-base text-bluegray-900 w-full"
                    size="txtInterBold16Bluegray900"
                  >
                    Free nationwide shipping
                  </Text>
                  <Text
                    className="text-bluegray-900 text-sm w-full"
                    size="txtInterRegular14Bluegray900"
                  >
                    (For order begin $100.0)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
