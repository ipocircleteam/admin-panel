import React, { useEffect, useState } from "react";

import {
  CompanyFinanceType,
  IpoDetailsType,
  IpolistType,
} from "../../utils/types";
import { initialCompanyFinance, initialIpoData } from "../../data/ipoData";

import CompanyFinances from "../tabpanel/ipodetails/company-finances";
import IpoTable from "../tabpanel/ipodetails/ipo-table";
import DatabaseNavigation from "./navigation";
import IpoList from "../tabpanel/ipodetails/ipolist";

import { toast } from "react-toastify";
import axios from "axios";

import ValidateIpoDetails from "../../utils/data-validator/addIpodetails";

const API_URL ="https://api.ipocircle.com/"
const lAPI_URL ="http://localhost:6969/"

export default function UpdateAndDeleteIpo() {
  const [ipo, setIpo] = useState({
    ipodetails: initialIpoData,
    companyFinances: initialCompanyFinance,
  });

  const [searchQuery, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const [ipoList, setList] = useState({
    all: [],
    main: [],
    sme: [],
  });

  const [refList, setRefList] = useState({
    all: ipoList.all,
    main: ipoList.main,
    sme: ipoList.sme,
  });

  const [viewList, setView] = useState(ipoList.all);

  const continuousSearch = () => {
    const filteredList = refList.all.filter((item: IpolistType) => {
      const query = searchQuery.toLowerCase().replace(/\s/g, "");
      const name = item.name.toLowerCase().replace(/\s/g, "");
      return name.includes(query);
    });
    setView(filteredList);
  };

  useEffect(() => {
    continuousSearch();
  }, [searchQuery]);

  // load ipo list on first load
  useEffect(() => {
    loadIpoList();
  }, []);

  const getIpoFromId = async (id: string) => {
    toast.loading("Wait, Fetching IPO Details...");
    Reset();
    try {
      const ipoRes = await axios
        .get(`${API_URL}api/admin/v1/ipo/details?ipoId=${id}`)
        .catch((error) => {
          console.log(error);
          toast.dismiss();
          toast.info(error.response.data.msg);
        });
      if (!ipoRes?.data.success) {
        toast.error("didn't received data");
        return;
      }
      const resdata = ipoRes?.data.data;
      const formattedData = {
        ipodetails: resdata.ipodetails[0],
        companyFinance: resdata.companyFinance[0],
      };
      setIpo({
        ipodetails: formattedData.ipodetails,
        companyFinances: formattedData.companyFinance,
      });

      toast.dismiss();
      toast.success("Details fetched");
    } catch (error: any) {
      console.log(error);
      toast.dismiss();
      toast.error(error.response.data.msg);
    }
  };

  const Reset = () => {
    setIpo({
      ipodetails: initialIpoData,
      companyFinances: initialCompanyFinance,
    });
  };

  async function loadIpoList() {
    setLoading(true);
    toast.loading("Fetching IPO List...");
    try {
      const segData = await axios.get(
        `${API_URL}api/v1/ipo/ipolist?series=&segregated=true`
      );

      toast.dismiss();
      setList({
        all: segData.data.data.all,
        main: segData.data.data.main,
        sme: segData.data.data.sme,
      });
      setRefList({
        all: segData.data.data.all,
        main: segData.data.data.main,
        sme: segData.data.data.sme,
      });
      setView(segData.data.data.all);
    } catch (error: any) {
      toast.dismiss();
      toast.error("Some error occurred");
    }
    setLoading(false);
  }

  const modify = async () => {
    toast.loading("Wait, modifying ipo...");
    const activeIpo = await ValidateIpoDetails(ipo);
    const body = {
      ipodetails: activeIpo.ipodetails,
      companyFinance: activeIpo.companyFinances,
    };
    await axios
      .patch(`${API_URL}api/admin/v1/ipo/update`, body)
      .then((res) => {
        toast.dismiss();
        toast.success("Data updated successfully");
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Some error occurred");
        console.log(error);
        console.log(`Error fetching ipo list, ${error}`);
      });
  };

  const deleteIpo = async () => {
    if (ipo.ipodetails.id.length === 0 || ipo.ipodetails.id === "") {
      toast.info("Please select an IPO from list!");
      return;
    }
    window.confirm(
      `Are you sure you want to delete ipo: ${ipo.ipodetails.name}?`
    );
    toast.loading("Wait, deleting ipo...");
    await axios
      .delete(
        `${API_URL}api/admin/v1/ipo/delete?id=${ipo.ipodetails.id}`
      )
      .then((res) => {
        toast.dismiss();
          toast.success("Data deleted successfully");
          loadIpoList()
      })
      .catch((error) => {
        toast.dismiss();
        toast.error("Some error occurred");
        console.log(error);
        console.log(`Error deleting ipo, ${error}`);
      });
  };

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between text-center h-[40px]">
        <label className="text-[30px] h-[30px] font-bold text-center text-primary px-[10px]">
          Update or Delete Ipo Details
        </label>
        <DatabaseNavigation />
      </div>
      <div className="flex justify-center items-start">
        <div className="w-[30%]">
          <div className="w-[100%] border-2 h-[50px] flex justify-center items-center">
            <input
              type="text"
              className="h-[100%] border w-[100%] p-2"
              placeholder="type to search ..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={searchQuery}
              name="search-query"
            />
          </div>

          <div className="h-[50px] w-[100%] grid grid-cols-3 border-2">
            <button
              className="h-[100%] bg-blue-100"
              onClick={() => {
                setView(refList.all);
              }}
            >
              All IPOs {`(${ipoList.all.length})`}
            </button>
            <button
              className="h-[100%] bg-green-100"
              onClick={() => {
                setView(refList.main);
              }}
            >
              Main IPOs {`(${ipoList.main.length})`}
            </button>
            <button
              className="h-[100%] bg-red-100"
              onClick={() => {
                setView(refList.sme);
              }}
            >
              SME IPOs {`(${ipoList.sme.length})`}
            </button>
          </div>

          <div className="h-[600px] bg-gray-100 mt-[10px] py-5  overflow-x-hidden overflow-y-scroll">
            {loading && (
              <p className="text-center w-[100%]">Loading data ...</p>
            )}
            <IpoList
              data={viewList}
              populateData={(id) => {
                getIpoFromId(id);
              }}
            />
          </div>
        </div>

        <div className="w-[70%]">
          <div className=" flex justify-center items-start">
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
              onClick={modify}
              className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl boder-primary shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
            >
              Update Ipo
            </button>

            <button
              onClick={() => {
                deleteIpo();
              }}
              className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl boder-primary shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
            >
              Delete Ipo
            </button>

            <button
              onClick={Reset}
              className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
            >
              Reset Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
