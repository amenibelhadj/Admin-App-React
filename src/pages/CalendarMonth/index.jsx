import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const CalendarMonthPage = () => {
  const tableData = React.useRef([
    {
      frameSeven: "9",
      frameEight: "10",
      frameNine: "11",
      frameTen: "8:10 am",
      frameEleven: "13",
      frameTwelve: "14",
      frameThirteen: "15",
    },
    {
      frameSeven: "16",
      frameEight: "17",
      frameNine: "18",
      frameTen: "8:10 am",
      frameEleven: "13",
      frameTwelve: "14",
      frameThirteen: "22",
    },
    {
      frameSeven: "23",
      frameEight: "24",
      frameNine: "25",
      frameTen: "8:10 am",
      frameEleven: "27",
      frameTwelve: "28",
      frameThirteen: "29",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("frameSeven", {
        cell: (info) => (
          <Text
            className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            2
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameEight", {
        cell: (info) => (
          <Text
            className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            3
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameNine", {
        cell: (info) => (
          <Text
            className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            4
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameTen", {
        cell: (info) => (
          <div className="flex flex-1 md:flex-1 flex-col gap-2 h-[100px] md:h-auto items-end justify-start outline outline-[0.5px] outline-indigo-50 p-4 md:w-full">
            <Text
              className="text-base text-bluegray-800 w-auto"
              size="txtInterRegular16Bluegray800"
            >
              12
            </Text>
            <Button className="bg-indigo-400 cursor-pointer font-medium py-1.5 rounded text-center text-sm text-white-A700 w-full">
              {info?.getValue()}
            </Button>
          </div>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 text-center"
            size="txtInterRegular16Bluegray800"
          >
            5
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameEleven", {
        cell: (info) => (
          <Text
            className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            6
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameTwelve", {
        cell: (info) => (
          <Text
            className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            7
          </Text>
        ),
      }),
      tableColumnHelper.accessor("frameThirteen", {
        cell: (info) => (
          <Text
            className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 h-[100px] min-w-[114px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800"
            size="txtInterRegular16Bluegray800"
          >
            8
          </Text>
        ),
      }),
    ];
  }, []);

  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Sidebar1 className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[950px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-6 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
              <Text
                className="text-bluegray-900 text-xl w-full"
                size="txtPoppinsMedium20"
              >
                Calendar
              </Text>
              <div className="flex md:flex-col flex-row font-inter gap-5 items-start justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs w-[273px]">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="leading-[22.00px] max-w-[209px] md:max-w-full text-bluegray-400 text-sm"
                        size="txtInterRegular14Bluegray400"
                      >
                        Click in the calendar to create event
                      </Text>
                      <Button
                        className="bg-deep_orange-300 cursor-pointer flex items-center justify-center min-w-[208px] px-8 py-3.5 rounded-[24px]"
                        rightIcon={
                          <Img
                            className="h-5 ml-[5px]"
                            src="images/img_plus_white_a700.svg"
                            alt="plus"
                          />
                        }
                      >
                        <div className="font-semibold sm:px-5 text-center text-sm text-white-A700">
                          Create new event
                        </div>
                      </Button>
                    </div>
                    <List
                      className="flex flex-col gap-5 items-start w-full"
                      orientation="vertical"
                    >
                      <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 w-full">
                        <div className="bg-green-700 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-base text-bluegray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          New Event
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 w-full">
                        <div className="bg-indigo-400 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-base text-bluegray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          My Event Only
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 w-full">
                        <div className="bg-amber-300 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-base text-bluegray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Meeting
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-row gap-2 items-center justify-start my-0 w-full">
                        <div className="bg-red-600 h-2 rounded-[50%] w-2"></div>
                        <Text
                          className="flex-1 text-base text-bluegray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Error
                        </Text>
                      </div>
                    </List>
                    <Line className="bg-indigo-50 h-px w-full" />
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <Text
                        className="text-bluegray-400 text-sm w-full"
                        size="txtInterRegular14Bluegray400"
                      >
                        Team members
                      </Text>
                      <List
                        className="flex flex-col gap-5 items-start w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-[37px] items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-[22px] md:h-auto object-cover w-[18px]"
                              src="images/img_.png"
                              alt="Two"
                            />
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              @Avo
                            </Text>
                          </div>
                          <Button className="bg-gray-104 cursor-pointer font-medium min-w-[102px] py-1.5 rounded text-center text-indigo-400 text-xs">
                            Lead design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row gap-6 items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-[22px] md:h-auto object-cover w-[18px]"
                              src="images/img__22x18.png"
                              alt="Three"
                            />
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              @Nhun
                            </Text>
                          </div>
                          <Button className="bg-gray-104 cursor-pointer font-medium min-w-[101px] py-1.5 rounded text-center text-indigo-400 text-xs">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-[22px] md:h-auto object-cover w-[18px]"
                              src="images/img__1.png"
                              alt="Four"
                            />
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              @Riri
                            </Text>
                          </div>
                          <Button className="bg-gray-104 cursor-pointer font-medium min-w-[101px] py-1.5 rounded text-center text-indigo-400 text-xs">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row gap-[34px] items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-[22px] md:h-auto object-cover w-[18px]"
                              src="images/img__2.png"
                              alt="Five"
                            />
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              @Juki
                            </Text>
                          </div>
                          <Button className="bg-gray-104 cursor-pointer font-medium min-w-[101px] py-1.5 rounded text-center text-indigo-400 text-xs">
                            Product design
                          </Button>
                        </div>
                        <div className="flex flex-1 flex-row gap-[29px] items-center justify-between my-0 w-full">
                          <div className="flex flex-row gap-2 items-center justify-start w-auto">
                            <Img
                              className="h-[22px] md:h-auto object-cover w-[18px]"
                              src="images/img__3.png"
                              alt="Six"
                            />
                            <Text
                              className="text-base text-bluegray-900 w-auto"
                              size="txtInterMedium16Bluegray900"
                            >
                              @Nobi
                            </Text>
                          </div>
                          <Button className="bg-gray-104 cursor-pointer font-medium min-w-[101px] py-1.5 rounded text-center text-indigo-400 text-xs">
                            Product design
                          </Button>
                        </div>
                      </List>
                    </div>
                    <Button
                      className="bg-transparent cursor-pointer flex items-center justify-center min-w-[209px] pr-[35px]"
                      leftIcon={
                        <Img
                          className="h-6 mr-2"
                          src="images/img_plus_deep_orange_300.svg"
                          alt="plus"
                        />
                      }
                    >
                      <div className="sm:pr-5 text-base text-deep_orange-300 text-left">
                        Add member
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center sm:px-5 px-[30px] py-[26px] rounded shadow-bs w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-center w-full">
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-[35px] items-center justify-start w-auto">
                        <Text
                          className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl w-auto"
                          size="txtInterBold24Bluegray900"
                        >
                          <span className="text-bluegray-900 font-inter text-left font-bold">
                            January{" "}
                          </span>
                          <span className="text-indigo-400 font-inter text-left font-bold">
                            2022
                          </span>
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-start w-auto">
                          <Button className="bg-gray-50 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
                            <Img
                              className="h-5"
                              src="images/img_arrowdown_bluegray_900.svg"
                              alt="arrowleft"
                            />
                          </Button>
                          <Button className="bg-gray-50 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
                            <Img
                              className="h-5"
                              src="images/img_arrowright_bluegray_900.svg"
                              alt="arrowright"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-start w-auto">
                        <Button className="border border-indigo-50 border-solid cursor-pointer font-semibold py-[11px] rounded-[20px] text-bluegray-800 text-center text-sm w-[75px]">
                          Day
                        </Button>
                        <Button className="border border-indigo-50 border-solid cursor-pointer font-semibold py-[11px] rounded-[20px] text-bluegray-800 text-center text-sm w-[75px]">
                          Week
                        </Button>
                        <Button className="bg-bluegray-900 cursor-pointer font-semibold py-[11px] rounded-[20px] text-center text-sm text-white-A700 w-[75px]">
                          Month
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Sun
                        </Button>
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Mon
                        </Button>
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Tue
                        </Button>
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Wed
                        </Button>
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Thu
                        </Button>
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Fri
                        </Button>
                        <Button className="cursor-pointer flex-1 font-semibold h-12 outline outline-[0.5px] outline-indigo-50 py-3.5 text-base text-bluegray-800 text-center w-full">
                          Sa
                        </Button>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-400 w-full"
                          size="txtInterRegular16"
                        >
                          26
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-400 w-full"
                          size="txtInterRegular16"
                        >
                          27
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-400 w-full"
                          size="txtInterRegular16"
                        >
                          28
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-400 w-full"
                          size="txtInterRegular16"
                        >
                          29
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-400 w-full"
                          size="txtInterRegular16"
                        >
                          30
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-[18px] text-base text-bluegray-400 w-full"
                          size="txtInterRegular16"
                        >
                          31
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          1
                        </Text>
                      </div>
                      <div className="overflow-auto w-full">
                        <ReactTable
                          columns={tableColumns}
                          data={tableData.current}
                          rowClass={""}
                          headerClass=""
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          30
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-[17px] pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          1
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          2
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          3
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          4
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          5
                        </Text>
                        <Text
                          className="flex-1 h-[100px] outline outline-[0.5px] outline-indigo-50 pb-[35px] sm:pl-5 pl-[35px] pr-4 pt-[18px] text-base text-bluegray-800 w-full"
                          size="txtInterRegular16Bluegray800"
                        >
                          6
                        </Text>
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

export default CalendarMonthPage;
