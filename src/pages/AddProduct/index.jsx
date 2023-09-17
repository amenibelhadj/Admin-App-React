import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";
import ShopDetailItemHeader from "components/ShopDetailItemHeader";
import ShopDetailItemSidebar from "components/ShopDetailItemSidebar";

import { CloseSVG } from "../../assets/images";

const dataProjectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AddProductPage = () => {
  const [searchboxvalue, setSearchboxvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <ShopDetailItemSidebar className="!sticky !w-[241px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Line className="bg-indigo-50 h-[1071px] md:h-px md:w-full w-px" />
        <div className="flex flex-1 flex-col gap-8 items-center justify-start md:px-5 w-full">
          <ShopDetailItemHeader className="bg-white-A700 flex h-[60px] md:h-auto items-center justify-between sm:px-5 px-[23px] py-2.5 w-full" />
          <div className="flex flex-col items-center justify-start sm:px-5 px-6 w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-bluegray-900 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  Add Product
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
                    Add Product
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-8 sm:px-5 rounded shadow-bs w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <Text
                      className="text-bluegray-900 text-lg w-auto"
                      size="txtInterBold18"
                    >
                      Basic information
                    </Text>
                    <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-full">
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Product name
                          </Text>
                          <Input
                            name="frame18249"
                            placeholder="Enter product’s name"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-3 pt-[19px] rounded w-full"
                            type="text"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Branch
                          </Text>
                          <Input
                            name="frame18249_One"
                            placeholder="Enter branch"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-3 py-[17px] rounded w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Price
                          </Text>
                          <Input
                            name="frame18249_Two"
                            placeholder="Enter price"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-3 pt-[19px] rounded w-full"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Select category
                          </Text>
                          <SelectBox
                            className="bg-white-A700 border border-indigo-50 border-solid font-semibold pb-4 pt-[19px] px-5 rounded text-base text-bluegray-800 text-left w-full"
                            placeholderClassName="text-bluegray-800"
                            indicator={
                              <Img
                                className="h-1.5 w-[11px]"
                                src="images/img_arrowdown_bluegray_900.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="frame18352"
                            options={dataProjectOptionsList}
                            isSearchable={false}
                            placeholder="Data project"
                          />
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Product description
                          </Text>
                          <TextArea
                            className="bg-white-A700 border border-indigo-50 border-solid gap-2 h-[166px] px-5 py-4 rounded text-base placeholder:text-bluegray-400 text-bluegray-400 text-left w-full"
                            name="frame18354"
                            placeholder="Write something..."
                            name="frame18354"
                            placeholder="Write something..."
                          ></TextArea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-full">
                  <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-8 items-center justify-center w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-full"
                        size="txtInterBold18"
                      >
                        Product image
                      </Text>
                      <div className="border-2 border-indigo-50 border-solid flex flex-col items-center justify-center p-20 md:px-10 sm:px-5 rounded w-full">
                        <div className="flex flex-col gap-10 items-center justify-center w-full">
                          <Img
                            className="h-7 w-7"
                            src="images/img_image.svg"
                            alt="image"
                          />
                          <div className="flex flex-col gap-2 items-center justify-center w-full">
                            <Text
                              className="text-base text-bluegray-800 text-center w-full"
                              size="txtInterBold16"
                            >
                              Upload image
                            </Text>
                            <Text
                              className="text-bluegray-800 text-center text-sm w-full"
                              size="txtInterRegular14Bluegray800"
                            >
                              Drag or click to upload image
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-1 flex-col h-[406px] md:h-auto items-center justify-center p-8 sm:px-5 rounded shadow-bs w-full">
                    <div className="flex flex-col gap-8 items-start justify-start w-full">
                      <Text
                        className="text-bluegray-900 text-lg w-full"
                        size="txtInterBold18"
                      >
                        Add link
                      </Text>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Product Link
                          </Text>
                          <Input
                            name="frame18249_Three"
                            placeholder="Enter link"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pl-5 pr-3 py-[17px] rounded w-full"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <Text
                            className="text-bluegray-800 text-sm w-full"
                            size="txtInterMedium14Bluegray800"
                          >
                            Hashtag
                          </Text>
                          <Input
                            name="frame18249_Four"
                            placeholder="Enter tag"
                            className="p-0 placeholder:text-bluegray-400 text-base text-bluegray-400 text-left w-full"
                            wrapClassName="bg-white-A700 border border-indigo-50 border-solid pb-4 pl-5 pr-3 pt-[19px] rounded w-full"
                          ></Input>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-full">
                        <Button className="bg-deep_orange-300 cursor-pointer font-bold min-w-[242px] py-[15px] rounded-[24px] text-center text-sm text-white-A700">
                          Save
                        </Button>
                        <Button className="bg-gray-50 cursor-pointer font-semibold min-w-[242px] py-[15px] rounded-[24px] text-bluegray-800 text-center text-sm">
                          Cancel
                        </Button>
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

export default AddProductPage;
