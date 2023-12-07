import React, { useState } from "react";
import IpoTable from "../tabpanel/ipodetails/ipo-table";
import { CompanyFinanceType, IpoDetailsType } from "../../types";
import { initialCompanyFinance, initialIpoData } from "../../data/ipoData";
import CompanyFinances from "../tabpanel/ipodetails/company-finances";
import DatabaseNavigation from "./navigation";
import { toast } from "react-toastify";
import axios from "axios";
import ValidateIpoDetails from "../../utils/data-validator/addIpodetails";

const API_URL = "https://api.ipocircle.com/"
const lAPI_URL ="http://localhost:6969/"

export default function AddIpo() {
  const [ipo, setIpo] = useState({
    ipodetails: initialIpoData,
    companyFinances: initialCompanyFinance,
  });

  const save = async () => {
    toast.loading("Wait, adding ipo...");

    const newId = ipo.ipodetails.name + ipo.ipodetails.series;
    ipo.ipodetails.id = newId;
    ipo.companyFinances.ipo_id = newId;
      const activeIpo = await ValidateIpoDetails(ipo);
      const body = {
          "ipodetails": activeIpo.ipodetails,
          "companyFinance": activeIpo.companyFinances
      }


    await axios
      .post(`${lAPI_URL}api/admin/v1/ipo/create`, body)
      .then((res) => {
        toast.dismiss();
        toast.success("Data created successfully");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Some error occurred");
        console.log(error);
        console.log(`Error fetching ipo list, ${error}`);
      });
  };

  const resetForm = () => {
    setIpo({
      ipodetails: initialIpoData,
      companyFinances: initialCompanyFinance,
    });
  };

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between text-center h-[40px]">
        <label className="text-[30px] h-[30px] font-bold text-center text-primary px-[10px]">
          Add New Ipo Details
        </label>
        <DatabaseNavigation />
      </div>
      <div className="lg:flex justify-center items-start">
        <IpoTable
          data={ipo.ipodetails}
          callback={(data: IpoDetailsType) => {
            setIpo({
              ...ipo,
              ipodetails: data,
            });
          }}
          selectcallback={(data: IpoDetailsType) => {
            setIpo({
              ...ipo,
              ipodetails: data,
            });
          }}
        />
        <CompanyFinances
          data={ipo.companyFinances}
          callback={(data: CompanyFinanceType) => {
            setIpo({
              ...ipo,
              companyFinances: data,
            });
          }}
        />
      </div>

      <div className="shadow-3xl border-t-2 border-secondary flex justify-center items-start h-[10vh]">
        <button
          onClick={save}
          className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl boder-primary shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
        >
          Add Ipo
        </button>

        <button
          onClick={resetForm}
          className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
        >
          Reset Form
        </button>
      </div>
    </div>
  );
}
