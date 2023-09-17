import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import Header from "components/Header";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const idCardOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShippingInfoPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-105 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[990px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-end justify-start md:px-5 w-full">
          <Header className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Checkout
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
                  </span>
                  <span className="text-bluegray-400 font-inter font-normal">
                    Product detail/
                  </span>
                  <span className="text-bluegray-800 font-inter font-normal">
                    {" "}
                    Checkout
                  </span>
                </Text>
              </div>
              <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-12 items-center justify-start w-full">
                    <div className="flex flex-col gap-2 items-center justify-center w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-full"
                        size="txtInterBold18"
                      >
                        Shipping information
                      </Text>
                      <Text
                        className="text-bluegray-900 text-sm w-full"
                        size="txtInterRegular14Bluegray900"
                      >
                        Fill form below
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Name
                        </Text>
                        <Input
                          name="frame18249"
                          placeholder="Enter your name"
                          className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-3 pt-[19px] rounded w-full"
                          type="text"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Email address
                          </Text>
                          <Input
                            name="frame18249_One"
                            placeholder="Enter your email"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-3 pt-[19px] rounded w-full"
                            type="email"
                          ></Input>
                        </div>
                        <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Phone number
                          </Text>
                          <Input
                            name="frame18249_Two"
                            placeholder="Enter your phone number"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-3 pt-[19px] rounded w-full"
                            type="number"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Your address
                        </Text>
                        <Input
                          name="frame18249_Three"
                          placeholder="Enter full address"
                          className="md:h-auto p-0 placeholder:text-bluegray-400 sm:h-auto text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-[35px] pl-5 pr-3 pt-[18px] rounded w-full"
                        ></Input>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Country
                          </Text>
                          <SelectBox
                            className="bg-white-A700 border border-indigo-50 border-solid font-medium px-5 py-[17px] rounded text-base text-bluegray-800 text-left w-full"
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
                            options={idCardOptionsList}
                            isSearchable={false}
                            placeholder="ID Card"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-bluegray-800 text-sm w-full"
                          size="txtInterMedium14Bluegray800"
                        >
                          Note
                        </Text>
                        <Input
                          name="frame18249_Four"
                          placeholder="Write something for us..."
                          className="md:h-auto p-0 placeholder:text-bluegray-400 sm:h-auto sm:pr-5 text-base text-bluegray-400 text-left w-full"
                          wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-[35px] pl-5 pr-[35px] pt-[19px] rounded w-full"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-1 flex-col gap-8 items-center justify-start w-[370px] sm:w-full">
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <div className="flex flex-row gap-6 items-center justify-start w-full">
                        <Img
                          className="h-[118px] md:h-auto max-h-[118px] object-cover"
                          src="images/img_rectangle_118x110.png"
                          alt="rectangle"
                        />
                        <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-full">
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
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text
                              className="text-bluegray-400 text-sm w-auto"
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
                      <Line className="bg-indigo-50 h-px w-full" />
                      <Input
                        name="frame18328"
                        placeholder="Enter reffered code"
                        className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                        wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-3 py-[18px] rounded-lg w-full"
                      ></Input>
                      <Line className="bg-indigo-50 h-px w-full" />
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
                            className="text-base text-bluegray-800 text-right w-auto"
                            size="txtInterMedium16"
                          >
                            $10.0
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-indigo-50 h-px w-full" />
                      <div className="flex flex-row gap-2 h-7 md:h-auto items-center justify-between w-full">
                        <Text
                          className="text-base text-bluegray-400 w-auto"
                          size="txtInterRegular16"
                        >
                          Total
                        </Text>
                        <Text
                          className="text-bluegray-800 text-lg text-right w-auto"
                          size="txtInterBold18Bluegray800"
                        >
                          $130.0
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
                        className="leading-[22.00px] max-w-[306px] md:max-w-full text-bluegray-400 text-center text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        By clicking “Purchase” button, I agree with RiriBa Term
                        and Policy
                      </Text>
                    </div>
                  </div>
                  <Button
                    className="bg-transparent cursor-pointer flex items-center justify-center min-w-[370px] pr-[35px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-4"
                        src="images/img_arrowleft_indigo_400_24x24.svg"
                        alt="arrow_left"
                      />
                    }
                  >
                    <div className="font-medium sm:pr-5 text-base text-indigo-400 text-left">
                      Back to shopping cart
                    </div>
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

export default ShippingInfoPage;
