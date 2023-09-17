import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar11 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-7 mb-[960px] mt-9 mx-auto w-[88px]"
          src="images/img_logo.svg"
          alt="logo"
        />
        <div className="flex flex-col gap-8 items-start justify-start mb-[522px] mt-[100px] mx-auto w-[177px]">
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <Img className="h-5 w-5" src="images/img_grid.svg" alt="grid" />
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              Dashboard
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <Img className="h-5 w-5" src="images/img_user.svg" alt="user" />
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              Customer
            </Text>
          </div>
          <div className="flex flex-row gap-2 items-center justify-start w-full">
            <div className="flex flex-1 flex-row gap-4 items-center justify-start w-full">
              <Img
                className="h-5 w-5"
                src="images/img_menu_deep_orange_300.svg"
                alt="menu"
              />
              <Text
                className="flex-1 text-bluegray-900 text-sm w-auto"
                size="txtInterMedium14"
              >
                Message
              </Text>
            </div>
            <Text
              className="bg-red-600 flex h-6 items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-6"
              size="txtInterBold12"
            >
              3
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <Img className="h-5 w-5" src="images/img_folder.svg" alt="folder" />
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              File
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full">
            <Img
              className="h-5 w-5"
              src="images/img_calendar.svg"
              alt="calendar"
            />
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              Calender
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-full">
            <Img
              className="h-5 w-5"
              src="images/img_trash_bluegray_400.svg"
              alt="trash"
            />
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              Shop
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <Img className="h-5 w-5" src="images/img_mail.svg" alt="mail" />
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              Cart
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-center justify-start w-full">
            <div className="bg-white-A700 flex flex-col h-5 items-center justify-start w-5">
              <div className="bg-bluegray-400 h-[18px] rounded-[50%] w-[18px]"></div>
            </div>
            <Text
              className="flex-1 text-bluegray-400 text-sm w-auto"
              size="txtInterMedium14Bluegray400"
            >
              Settings
            </Text>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
