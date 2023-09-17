import React from "react";

import { Button, Img, Input, SelectBox, Text } from "components";

const dataProjectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const CreateEventPopupPage = () => {
  return (
    <>
      <div className="bg-bluegray-900_ad flex flex-col font-inter items-center justify-between mx-auto md:px-10 sm:px-5 px-[497px] py-[382px] w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-center justify-start w-[90%]">
          <div className="flex flex-col gap-[15px] items-start justify-start w-auto sm:w-full">
            <Img
              className="h-10 w-full"
              src="images/img_xcircle.svg"
              alt="frame18158"
            />
            <div className="bg-white-A700 flex flex-col items-start justify-start p-8 sm:px-5 rounded shadow-bs1 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-800 sm:text-xl w-full"
                    size="txtInterBold24Bluegray800"
                  >
                    Create new event
                  </Text>
                  <Text
                    className="text-bluegray-800 text-sm w-full"
                    size="txtInterRegular14Bluegray800"
                  >
                    Add new event in the calendar
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <div className="flex flex-col gap-2 h-[86px] md:h-auto items-start justify-start w-full">
                    <Text
                      className="text-bluegray-800 text-sm w-full"
                      size="txtInterMedium14Bluegray800"
                    >
                      Event name
                    </Text>
                    <Input
                      name="frame18178"
                      placeholder="Type name"
                      className="p-0 placeholder:text-bluegray-400 sm:pr-5 text-base text-bluegray-400 text-left w-full"
                      wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-[35px] pt-[19px] rounded w-full"
                      type="text"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-bluegray-800 text-sm w-full"
                      size="txtInterMedium14Bluegray800"
                    >
                      Select category
                    </Text>
                    <SelectBox
                      className="bg-white-A700 border border-indigo-50 border-solid font-semibold px-5 py-[17px] rounded text-base text-bluegray-800 text-left w-full"
                      placeholderClassName="text-bluegray-800"
                      indicator={
                        <Img
                          className="h-5 w-5"
                          src="images/img_arrowdown_bluegray_900.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="frame18180"
                      options={dataProjectOptionsList}
                      isSearchable={false}
                      placeholder="Data project"
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start justify-start w-full">
                  <Button className="bg-deep_orange-300 cursor-pointer flex-1 font-bold py-[19px] rounded-[28px] text-center text-sm text-white-A700 w-full">
                    Create now
                  </Button>
                  <Button className="bg-gray-50 cursor-pointer flex-1 font-semibold py-[19px] rounded-[28px] text-bluegray-800 text-center text-sm w-full">
                    Cancel
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

export default CreateEventPopupPage;
