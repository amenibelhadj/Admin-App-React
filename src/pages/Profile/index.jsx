import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

const ProfilePage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] bg-white-A700 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1038px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-[25px] items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-[31px] items-start justify-start w-full">
              <Text
                className="text-bluegray-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                Profile
              </Text>
              <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                <div className="flex sm:flex-1 flex-col gap-[21px] items-start justify-start w-[370px] sm:w-full">
                  <div className="bg-white-A700 flex flex-col h-[578px] md:h-auto items-start justify-center rounded shadow-bs w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-col relative w-full">
                        <Img
                          className="h-[136px] mx-auto object-cover w-full"
                          src="images/img_imglibimg15.png"
                          alt="imglibimgFifteen"
                        />
                        <div className="flex flex-col h-[120px] items-center justify-start mt-[-60px] mx-auto rounded-[50%] w-[120px] z-[1]">
                          <Img
                            className="h-[120px] md:h-auto rounded-[50%] w-[120px]"
                            src="images/img_sherlocktoyfacelow_120x120.png"
                            alt="sherlocktoyface_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 items-center justify-center w-full">
                        <div className="flex flex-col gap-10 items-center justify-center w-full">
                          <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <div className="flex flex-col gap-2 items-center justify-center w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-bluegray-900 text-center sm:text-xl w-full"
                                size="txtInterBold24Bluegray900"
                              >
                                Sam Brown
                              </Text>
                              <Text
                                className="text-bluegray-400 text-center text-sm w-full"
                                size="txtInterRegular14Bluegray400"
                              >
                                xyz@gmail.com
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                              <Img
                                className="h-5 w-5"
                                src="images/img_globe.svg"
                                alt="globe"
                              />
                              <Text
                                className="text-bluegray-800 text-center text-sm w-auto"
                                size="txtInterMedium14Bluegray800"
                              >
                                xyzxsdsfg.com
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 items-center justify-start w-full">
                            <Button
                              className="bg-red-600 cursor-pointer flex items-center justify-center min-w-[146px] px-[30px] py-3.5 rounded-[24px]"
                              rightIcon={
                                <Img
                                  className="h-5 ml-4"
                                  src="images/img_cut.svg"
                                  alt="cut"
                                />
                              }
                            >
                              <div className="font-bold sm:px-5 text-center text-sm text-white-A700">
                                Logout
                              </div>
                            </Button>
                            <Img
                              className="h-5 w-[108px]"
                              src="images/img_socialicons.svg"
                              alt="socialicons"
                            />
                          </div>
                        </div>
                        <Line className="bg-indigo-50 h-px w-[83%]" />
                        <Text
                          className="text-bluegray-400 text-center text-sm w-full"
                          size="txtInterRegular14Bluegray400"
                        >
                          Member since 2021
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-8 py-6 rounded shadow-bs4 w-full">
                    <div className="flex flex-col gap-7 items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          Personal info.
                        </Text>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user_One"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Full name
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 text-right w-auto"
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
                            Mobile
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 text-right w-auto"
                            size="txtInterMedium16"
                          >
                            123-456-7890
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[38px] items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            E-mail
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 text-right w-auto"
                            size="txtInterMedium16"
                          >
                            xyz@gmail.com
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-base text-bluegray-400 text-center w-auto"
                            size="txtInterRegular16"
                          >
                            Location
                          </Text>
                          <Text
                            className="text-base text-bluegray-800 text-right w-auto"
                            size="txtInterMedium16"
                          >
                            Hanoi, Vietnam
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                  <List
                    className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs4 w-full">
                      <div className="flex flex-row gap-5 items-center justify-start w-full">
                        <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                          <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded w-12">
                            <Img
                              className="h-5"
                              src="images/img_file_deep_orange_300.svg"
                              alt="file"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterRegular14Bluegray800"
                            >
                              Completed tasks
                            </Text>
                            <Text
                              className="text-bluegray-800 text-lg w-full"
                              size="txtInterBold18Bluegray800"
                            >
                              125
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs4 w-full">
                      <div className="flex flex-row gap-5 items-center justify-start w-full">
                        <div className="flex flex-1 flex-row gap-5 items-center justify-start w-full">
                          <Button className="bg-gray-50 flex h-12 items-center justify-center p-3.5 rounded w-12">
                            <Img
                              className="h-5"
                              src="images/img_file_deep_orange_300.svg"
                              alt="file"
                            />
                          </Button>
                          <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                            <Text
                              className="text-bluegray-800 text-sm w-full"
                              size="txtInterRegular14Bluegray800"
                            >
                              Total Revenue
                            </Text>
                            <Text
                              className="text-bluegray-800 text-lg w-full"
                              size="txtInterBold18Bluegray800"
                            >
                              $10,000
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-8 w-8"
                          src="images/img_user_bluegray_400.svg"
                          alt="user"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs4 w-full">
                    <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                      <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                        <Text
                          className="text-bluegray-900 text-lg w-auto"
                          size="txtInterBold18"
                        >
                          My projects
                        </Text>
                        <div className="flex flex-row gap-6 items-start justify-start w-auto">
                          <Img
                            className="h-8 w-8"
                            src="images/img_search_bluegray_400.svg"
                            alt="search"
                          />
                          <Img
                            className="h-8 w-8"
                            src="images/img_user_bluegray_400.svg"
                            alt="user_Two"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-16 items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-center p-2.5 w-14">
                            <Text
                              className="text-base text-bluegray-400 w-auto"
                              size="txtInterRegular16"
                            >
                              No
                            </Text>
                          </div>
                          <List
                            className="md:flex-1 sm:flex-col flex-row gap-px grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[92%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-center justify-center p-2.5 w-full">
                              <Text
                                className="text-base text-bluegray-400 w-auto"
                                size="txtInterRegular16"
                              >
                                Projects
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2.5 w-full">
                              <Text
                                className="text-base text-bluegray-400 w-auto"
                                size="txtInterRegular16"
                              >
                                Start
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2.5 w-full">
                              <Text
                                className="text-base text-bluegray-400 w-auto"
                                size="txtInterRegular16"
                              >
                                Deadline
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-center p-2.5 w-full">
                              <Text
                                className="text-base text-bluegray-400 w-auto"
                                size="txtInterRegular16"
                              >
                                Budget
                              </Text>
                            </div>
                          </List>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="h-16 w-[9%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                        </div>
                        <div className="h-16 w-full"></div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="h-16 w-[9%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                        </div>
                        <div className="h-16 w-full"></div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="h-16 w-[9%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                        </div>
                        <div className="h-16 w-full"></div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                          <div className="h-16 w-[9%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                          <div className="flex-1 h-16 w-[23%]"></div>
                        </div>
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

export default ProfilePage;
