import React from "react";

const sizeClasses = {
  txtInterMedium14Indigo400: "font-inter font-medium",
  txtInterBold24Bluegray900: "font-bold font-inter",
  txtInterBold28: "font-bold font-inter",
  txtInterRegular14Bluegray900: "font-inter font-normal",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtInterBold18Bluegray800: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtInterMedium14Bluegray800: "font-inter font-medium",
  txtInterMedium14WhiteA700: "font-inter font-medium",
  txtInterBold28Bluegray800: "font-bold font-inter",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtInterRegular16Bluegray900: "font-inter font-normal",
  txtInterBold18: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterBold16: "font-bold font-inter",
  txtInterMedium16: "font-inter font-medium",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium16Indigo400: "font-inter font-medium",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterBold12: "font-bold font-inter",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium16Bluegray900: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtPlusJakartaSansMedium1048: "font-medium font-plusjakartasans",
  txtPoppinsBold16: "font-bold font-poppins",
  txtInterRegular16Gray500: "font-inter font-normal",
  txtInterBold24Bluegray800: "font-bold font-inter",
  txtPoppinsBold18: "font-bold font-poppins",
  txtInterRegular14Bluegray402: "font-inter font-normal",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtInterSemiBold16Bluegray900: "font-inter font-semibold",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterRegular14Bluegray800: "font-inter font-normal",
  txtInterMedium14Deeporange300: "font-inter font-medium",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsMedium18: "font-medium font-poppins",
  txtInterRegular16Bluegray800: "font-inter font-normal",
  txtInterSemiBold14Bluegray800: "font-inter font-semibold",
  txtPlusJakartaSansSemiBold1048: "font-plusjakartasans font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtPoppinsRegular14Bluegray800: "font-normal font-poppins",
  txtPlusJakartaSansMedium898: "font-medium font-plusjakartasans",
  txtInterBold16Bluegray900: "font-bold font-inter",
  txtInterSemiBold16: "font-inter font-semibold",
  txtPlusJakartaSansSemiBold1048Bluegray200:
    "font-plusjakartasans font-semibold",
  txtInterMedium16Bluegray400: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
