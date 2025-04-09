import {createBrowserRouter} from "react-router-dom"

import Userlayout from "../layout/userlayout"
import Aboutpage from "../pages/user/Aboutpage"
import Eventpages from "../pages/user/Eventpages"
import Homepage from "../pages/user/homepage"
import Loginpage from "../pages/user/Loginpage"
import Signuppage from "../pages/user/Signuppage"
import Eventcard from "../components/user/eventcard"
import Eventdetailspage from "../pages/user/eventdetailspage"
import Adminpage from "../pages/admin/Adminloginpage"
import Admindashboard from "../pages/admin/Admindashboard"
import Adminlayout from "../layout/adminlayout"
import Adminloginpage from "../pages/admin/Adminloginpage"
import Adminevents from "../pages/admin/adminevents"
import Ticketspage from "../pages/admin/ticketspage"
import Createeventpage from "../pages/admin/createeventpage"
import Updateeventpage from "../pages/admin/updateeventpage"
import ContactUspage from "../pages/user/ContactUspage"
import Paymentsuccespage from "../pages/user/paymentsuccespage"
import UserBookingspage from "../pages/user/userBookingspage"
import Userlistingpage from "../pages/admin/userlistingpage"
//import Eventticketpage from "../pages/admin/eventticketpage"


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Userlayout/>,
        children:[
            {
                path:"",
                element:<Homepage/>,
        
            },
            {
                path:"about",
                element:<Aboutpage/>,
        
            },
            {
                path:"mybookings",
                element:<UserBookingspage/>,
        
            },
   
            {

            path:"events",
                element:<Eventpages/>,

            },
            {

            path:"details/:eventId",
            element:<Eventdetailspage/>,

        },
        {

            path:"checkout-succes",
            element:<Paymentsuccespage/>,

        },
            {

                path:"login",
                    element:<Loginpage/>
                },
                {

                    path:"signup",
                        element:<Signuppage/>
                    },
                {
                    path:"adminlogin",
                    element:<Adminloginpage/>
                },
                {
                    path:"Contact",
                    element:<ContactUspage/>
                },


 {
                    path:"admindashboard",
                    element:<Admindashboard/>
                },
  
        ]



        
    },
    {
        path:"/",
        element:<Adminlayout/>,
        children:[
            {
                path:"admin",
                element:<Admindashboard/>,
        
            },
            {
                path:"adminevents",
                element:<Adminevents/>,
        
            },
            {
                path:"ticket",
                element:<Ticketspage/>,
        
            },
            {
                path:"create",
                element:<Createeventpage/>,
        
            },
            {
                path:"update/:eventId",
                element:<Updateeventpage/>,
        
            },
            {
                path:"users",
                element:<Userlistingpage/>,
        
            },
        
        







        ]
    }
])