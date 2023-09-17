import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const AddProduct = React.lazy(() => import("pages/AddProduct"));
const NoPromotionPopup = React.lazy(() => import("pages/NoPromotionPopup"));
const DeletePopup = React.lazy(() => import("pages/DeletePopup"));
const CartProductList = React.lazy(() => import("pages/CartProductList"));
const CheckoutSuccessful = React.lazy(() => import("pages/CheckoutSuccessful"));
const Checkoutinprocess = React.lazy(() => import("pages/Checkoutinprocess"));
const PaymentInfo = React.lazy(() => import("pages/PaymentInfo"));
const ShippingInfo = React.lazy(() => import("pages/ShippingInfo"));
const Cart = React.lazy(() => import("pages/Cart"));
const Cartempty = React.lazy(() => import("pages/Cartempty"));
const ShopReviews = React.lazy(() => import("pages/ShopReviews"));
const ShopSearch = React.lazy(() => import("pages/ShopSearch"));
const EKYCSuccessful = React.lazy(() => import("pages/EKYCSuccessful"));
const EKYCSignature = React.lazy(() => import("pages/EKYCSignature"));
const EKYCIntroductionStepFour = React.lazy(() =>
  import("pages/EKYCIntroductionStepFour"),
);
const EKYCConfirmInformation = React.lazy(() =>
  import("pages/EKYCConfirmInformation"),
);
const EKYCIntroductionStepThree = React.lazy(() =>
  import("pages/EKYCIntroductionStepThree"),
);
const EKYCScanFace = React.lazy(() => import("pages/EKYCScanFace"));
const EKYCIntroductionStepTwo = React.lazy(() =>
  import("pages/EKYCIntroductionStepTwo"),
);
const EKYCScanIDCardAddimage = React.lazy(() =>
  import("pages/EKYCScanIDCardAddimage"),
);
const EKYCScanIDCard = React.lazy(() => import("pages/EKYCScanIDCard"));
const EKYCIntroductionStepOne = React.lazy(() =>
  import("pages/EKYCIntroductionStepOne"),
);
const EKYCBegin = React.lazy(() => import("pages/EKYCBegin"));
const Customer = React.lazy(() => import("pages/Customer"));
const Settings = React.lazy(() => import("pages/Settings"));
const Profile = React.lazy(() => import("pages/Profile"));
const Conversation = React.lazy(() => import("pages/Conversation"));
const Tracktasks = React.lazy(() => import("pages/Tracktasks"));
const FileManagementDefault = React.lazy(() =>
  import("pages/FileManagementDefault"),
);
const CreateEventPopup = React.lazy(() => import("pages/CreateEventPopup"));
const CalendarWeek = React.lazy(() => import("pages/CalendarWeek"));
const CalendarDay1Event = React.lazy(() => import("pages/CalendarDay1Event"));
const CalendarDayNoevent = React.lazy(() => import("pages/CalendarDayNoevent"));
const CalendarMonth = React.lazy(() => import("pages/CalendarMonth"));
const DashboardPaymentsuccessful = React.lazy(() =>
  import("pages/DashboardPaymentsuccessful"),
);
const DashboardRechargemoney = React.lazy(() =>
  import("pages/DashboardRechargemoney"),
);
const DashboardSubcrible = React.lazy(() => import("pages/DashboardSubcrible"));
const DashboardThree = React.lazy(() => import("pages/DashboardThree"));
const DashboardTwo = React.lazy(() => import("pages/DashboardTwo"));
const DashboardOne = React.lazy(() => import("pages/DashboardOne"));
const SignupVerificationOne = React.lazy(() =>
  import("pages/SignupVerificationOne"),
);
const SignupVerification = React.lazy(() => import("pages/SignupVerification"));
const SignupDefault = React.lazy(() => import("pages/SignupDefault"));
const SigninResetPasswordSuccessful = React.lazy(() =>
  import("pages/SigninResetPasswordSuccessful"),
);
const SigninResetPassword = React.lazy(() =>
  import("pages/SigninResetPassword"),
);
const SigninDefault = React.lazy(() => import("pages/SigninDefault"));
const ShopDetailitem = React.lazy(() => import("pages/ShopDetailitem"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<ShopDetailitem />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/signindefault" element={<SigninDefault />} />
          <Route
            path="/signinresetpassword"
            element={<SigninResetPassword />}
          />
          <Route
            path="/signinresetpasswordsuccessful"
            element={<SigninResetPasswordSuccessful />}
          />
          <Route path="/signupdefault" element={<SignupDefault />} />
          <Route path="/signupverification" element={<SignupVerification />} />
          <Route
            path="/signupverificationone"
            element={<SignupVerificationOne />}
          />
          <Route path="/dashboardone" element={<DashboardOne />} />
          <Route path="/dashboardtwo" element={<DashboardTwo />} />
          <Route path="/dashboardthree" element={<DashboardThree />} />
          <Route path="/dashboardsubcrible" element={<DashboardSubcrible />} />
          <Route
            path="/dashboardrechargemoney"
            element={<DashboardRechargemoney />}
          />
          <Route
            path="/dashboardpaymentsuccessful"
            element={<DashboardPaymentsuccessful />}
          />
          <Route path="/calendarmonth" element={<CalendarMonth />} />
          <Route path="/calendardaynoevent" element={<CalendarDayNoevent />} />
          <Route path="/calendarday1event" element={<CalendarDay1Event />} />
          <Route path="/calendarweek" element={<CalendarWeek />} />
          <Route path="/createeventpopup" element={<CreateEventPopup />} />
          <Route
            path="/filemanagementdefault"
            element={<FileManagementDefault />}
          />
          <Route path="/tracktasks" element={<Tracktasks />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/ekycbegin" element={<EKYCBegin />} />
          <Route
            path="/ekycintroductionstepone"
            element={<EKYCIntroductionStepOne />}
          />
          <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
          <Route
            path="/ekycscanidcardaddimage"
            element={<EKYCScanIDCardAddimage />}
          />
          <Route
            path="/ekycintroductionsteptwo"
            element={<EKYCIntroductionStepTwo />}
          />
          <Route path="/ekycscanface" element={<EKYCScanFace />} />
          <Route
            path="/ekycintroductionstepthree"
            element={<EKYCIntroductionStepThree />}
          />
          <Route
            path="/ekycconfirminformation"
            element={<EKYCConfirmInformation />}
          />
          <Route
            path="/ekycintroductionstepfour"
            element={<EKYCIntroductionStepFour />}
          />
          <Route path="/ekycsignature" element={<EKYCSignature />} />
          <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
          <Route path="/shopsearch" element={<ShopSearch />} />
          <Route path="/shopreviews" element={<ShopReviews />} />
          <Route path="/cartempty" element={<Cartempty />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shippinginfo" element={<ShippingInfo />} />
          <Route path="/paymentinfo" element={<PaymentInfo />} />
          <Route path="/checkoutinprocess" element={<Checkoutinprocess />} />
          <Route path="/checkoutsuccessful" element={<CheckoutSuccessful />} />
          <Route path="/cartproductlist" element={<CartProductList />} />
          <Route path="/deletepopup" element={<DeletePopup />} />
          <Route path="/nopromotionpopup" element={<NoPromotionPopup />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
