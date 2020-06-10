import React from "react";
import appLogo from "../../icons/logo-app.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      //This is create so one thing will need to be changed instead of fixing all pages
      <div>
         <img src={appLogo} width="32px" alt="White Bear logo" />
         <h3 className="d-inline text-brand text-dark ml-1">White Bear</h3>
         <Link to="/" className=" btn btn-link float-right">
            Log out
         </Link>
         <div className="clearfix"></div>
      </div>
   );
}