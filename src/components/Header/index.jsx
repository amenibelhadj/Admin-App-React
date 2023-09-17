import React from "react";

import { Img, Input, Text } from "components";

import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row gap-3 items-center justify-start w-full">
          <div className="header-row mt-[22px] mb-5">
            <Text
              className="flex-1 text-bluegray-800 text-sm"
              size="txtInterMedium14Bluegray800"
            >
              Welcomback, Team!
            </Text>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col sm:hidden items-start justify-start p-2.5 w-auto sm:w-full">
            <Input
              name="searchbox"
              placeholder="Search..."
              value={searchboxvalue}
              onChange={(e) => setSearchboxvalue(e)}
              className="font-inter font-medium p-0 placeholder:text-bluegray-400 sm:pr-5 text-bluegray-400 text-left text-xs w-full"
              wrapClassName="bg-white-A700 border border-bluegray-200 border-solid flex pl-4 pr-[35px] py-2.5 rounded w-full"
              prefix={
                <Img
                  className="cursor-pointer h-5 mr-2 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#828fa2"
                  className="cursor-pointer h-5 my-auto"
                  onClick={() => setSearchboxvalue("")}
                  style={{
                    visibility:
                      searchboxvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={20}
                  width={20}
                  viewBox="0 0 20 20"
                />
              }
            ></Input>
          </div>
          <div className="flex flex-1 flex-row gap-6 sm:hidden items-center justify-end w-full">
            <Img
              className="h-6 w-6"
              src="images/img_shoppingbag.svg"
              alt="shoppingbag"
            />
            <Img
              className="h-6 w-6"
              src="images/img_notification.svg"
              alt="notification"
            />
            <div className="flex flex-row gap-[13px] items-center justify-start w-auto">
              <Text
                className="text-base text-gray-500 w-auto"
                size="txtInterRegular16Gray500"
              >
                <span className="text-gray-500 font-inter text-left font-normal">
                  Hello,
                </span>
                <span className="text-bluegray-900 font-inter text-left font-normal">
                  {" "}
                </span>
                <span className="text-bluegray-900 font-inter text-left font-medium">
                  Sam
                </span>
              </Text>
              <div className="flex flex-col h-10 items-center justify-start rounded-[50%] w-10">
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src="images/img_sherlocktoyfacelow.png"
                  alt="sherlocktoyface"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
