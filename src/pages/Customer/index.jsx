import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const CustomerPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar11 className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <Line className="bg-indigo-50 h-[750px] md:h-px md:w-full w-px" />
          <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
            <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
            <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <Text
                  className="text-bluegray-900 text-xl w-full"
                  size="txtPoppinsMedium20"
                >
                  Customer
                </Text>
                <div className="bg-white-A700 flex flex-col font-inter items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-auto"
                        size="txtInterBold18"
                      >
                        Customer List
                      </Text>
                      <div className="flex flex-row gap-6 items-start justify-start w-auto">
                        <Img
                          className="h-6 w-6"
                          src="images/img_search_bluegray_900.svg"
                          alt="search"
                        />
                        <Img
                          className="h-6 w-6"
                          src="images/img_plus_bluegray_900.svg"
                          alt="plus"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 h-11 md:h-auto items-start justify-start w-full">
                        <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                          <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                            <CheckBox
                              className=""
                              inputClassName="bg-bluegray-400 mr-[5px]"
                              name="file_One"
                              id="file_One"
                            ></CheckBox>
                          </div>
                        </div>
                        <List
                          className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[88%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col h-11 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Customer
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Address
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Phone
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Order No.
                            </Text>
                          </div>
                          <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              Status
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col h-11 md:h-auto items-center justify-center px-4 py-2.5 w-auto">
                          <Text
                            className="text-base text-bluegray-400 w-auto"
                            size="txtInterRegular16"
                          >
                            Action
                          </Text>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_robototoyfacefinal2_24x24.png"
                                  alt="robototoyfacefi"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Jack
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-[217px]">
                            2371 Reppert Coal Road
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-center text-indigo-400 w-full">
                            123-456-7890
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file3"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Fort Myers
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="text-base text-bluegray-800 w-full"
                              size="txtInterMedium16"
                            >
                              2371 Reppert Coal Road
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterMedium16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 text-center w-full"
                              size="txtInterMedium16"
                            >
                              #21033
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file4"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1_24x24.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                <Text
                                  className="text-base text-bluegray-800"
                                  size="txtInterMedium16"
                                >
                                  Benjamin
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-[217px]">
                            2371 Reppert Coal Road
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-center text-indigo-400 w-full">
                            123-456-7890
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file5"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Flanagan
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="text-base text-bluegray-800 w-full"
                              size="txtInterMedium16"
                            >
                              2371 Reppert Coal Road
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterMedium16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 text-center w-full"
                              size="txtInterMedium16"
                            >
                              #21033
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-red-600 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Error
                            </Button>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file6"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1_24x24.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Nicoletti
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-[217px]">
                            2371 Reppert Coal Road
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-center text-indigo-400 w-full">
                            123-456-7890
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file7"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Robert
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="text-base text-bluegray-800 w-full"
                              size="txtInterMedium16"
                            >
                              2371 Reppert Coal Road
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterMedium16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 text-center w-full"
                              size="txtInterMedium16"
                            >
                              #21033
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file8"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1_24x24.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Rankin
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-[217px]">
                            2371 Reppert Coal Road
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-center text-indigo-400 w-full">
                            123-456-7890
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-amber-300 cursor-pointer font-medium py-1.5 rounded text-bluegray-800 text-center text-sm w-full">
                              Pending
                            </Button>
                          </div>
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file9"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_fidenza978toyface.png"
                                  alt="fidenza978toyfa"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Clementine
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[217px]">
                            <Text
                              className="text-base text-bluegray-800 w-full"
                              size="txtInterMedium16"
                            >
                              2371 Reppert Coal Road
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-center text-indigo-400 w-full"
                              size="txtInterMedium16Indigo400"
                            >
                              123-456-7890
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Text
                              className="text-base text-bluegray-800 text-center w-full"
                              size="txtInterMedium16"
                            >
                              #21033
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-14">
                            <div className="flex flex-col h-5 items-center justify-end w-5 sm:w-full">
                              <CheckBox
                                className=""
                                inputClassName="bg-bluegray-400 mr-[5px]"
                                name="file"
                                id="file10"
                              ></CheckBox>
                            </div>
                          </div>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-start justify-center px-4 py-2.5 w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-full">
                              <div className="flex flex-col h-6 items-center justify-start rounded-[50%] w-6">
                                <Img
                                  className="h-6 md:h-auto rounded-[50%] w-6"
                                  src="images/img_vangoghbyamrit1_24x24.png"
                                  alt="vangoghbyamritOne"
                                />
                              </div>
                              <Text
                                className="text-base text-bluegray-800 w-auto"
                                size="txtInterMedium16"
                              >
                                Mitchell
                              </Text>
                            </div>
                          </div>
                          <Button className="bg-gray-50 cursor-pointer font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-[217px]">
                            2371 Reppert Coal Road
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-center text-indigo-400 w-full">
                            123-456-7890
                          </Button>
                          <Button className="bg-gray-50 cursor-pointer flex-1 font-medium h-16 py-[22px] text-base text-bluegray-800 text-center w-full">
                            #21033
                          </Button>
                          <div className="bg-gray-50 flex flex-1 flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-full">
                            <Button className="bg-green-700 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
                              Paid
                            </Button>
                          </div>
                          <div className="bg-gray-50 flex flex-col h-16 md:h-auto items-center justify-center px-4 py-2.5 w-[120px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_user_bluegray_400.svg"
                              alt="user"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <div className="border border-indigo-50 border-solid flex flex-col h-8 items-center justify-start p-1 w-8">
                          <div className="flex flex-col h-6 items-center justify-start p-0.5 w-6">
                            <Img
                              className="h-5 w-5"
                              src="images/img_arrowleft_bluegray_400.svg"
                              alt="arrowleft"
                            />
                          </div>
                        </div>
                        <Button className="border border-bluegray-900 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-900 text-center text-sm w-8">
                          1
                        </Button>
                        <Button className="border border-indigo-50 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-800 text-center text-sm w-8">
                          2
                        </Button>
                        <Button className="border border-indigo-50 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-800 text-center text-sm w-8">
                          ...
                        </Button>
                        <Button className="border border-indigo-50 border-solid cursor-pointer font-medium h-8 py-[7px] text-bluegray-800 text-center text-sm w-8">
                          9
                        </Button>
                        <Button className="border border-indigo-50 border-solid flex h-8 items-center justify-center p-2.5 w-8">
                          <Img
                            src="images/img_arrowright_bluegray_400_32x32.svg"
                            alt="arrowright"
                          />
                        </Button>
                      </div>
                      <Text
                        className="text-bluegray-400 text-right text-sm w-auto"
                        size="txtInterMedium14Bluegray400"
                      >
                        9 of 200 data
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

export default CustomerPage;
