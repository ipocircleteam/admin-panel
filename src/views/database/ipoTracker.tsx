import React, { useEffect, useState } from "react";

import { IpolistType } from "../../types";
import { initialCompanyFinance, initialIpoData } from "../../data/ipoData";

import DatabaseNavigation from "../../components/database/navigation";
import IpoList from "../../components/tabpanel/ipodetails/ipolist";

import { toast } from "react-toastify";
import axios from "axios";

import ValidateIpoDetails from "../../utils/data-validator/addIpodetails";
import { Sectors } from "../../data/sectorData";

export default function IpoTrackerDatabase() {
  const [tracker, setTracker] = useState({
    id: "",
    company_name: "",
    sector: "",
    listing_price: 0,
    current_price: 0,
    dayend_price: 0,
    issue_price: 0,
    year: "",
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

  const getTrackerFromId = async (id: string) => {
    toast.loading("Wait, Fetching Tracker Details...");
    Reset();
    try {
      const ipoRes = await axios
        .get(`http://localhost:6969/api/admin/v1/tracker/details?id=${id}`)
        .catch((error) => {
          toast.dismiss();
          toast.info(error.response.data.msg);
        });
       console.log(ipoRes);
       
      const resdata = ipoRes?.data.data[0];
      
      setTracker({
        id: resdata.id,
        issue_price: resdata.issue_price,
        current_price: resdata.current_price,
        listing_price: resdata.listing_price,
        dayend_price: resdata.dayend_price,
        year: resdata.year,
        sector: resdata.sector,
        company_name: resdata.company_name
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
    setTracker({
      id: "",
      company_name: "",
      sector: "",
      listing_price: 0,
      current_price: 0,
      dayend_price: 0,
      issue_price: 0,
      year: "",
    });
  };

  async function loadIpoList() {
    setLoading(true);
    toast.loading("Fetching IPO List...");
    try {
      const segData = await axios.get(
        `https://api.ipocircle.com/api/v1/ipo/ipolist?series=&segregated=true`
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
    if (tracker.sector === 'Select sector') {
      toast.error("Please select sector !")
      return
    }
    toast.loading("Wait, modifying tracker details...");

    await axios
      .patch(`https://api.ipocircle.com/api/admin/v1/tracker/update`, tracker)
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

  return (
    <div className="mt-[50px]">
      <div className="flex justify-between text-center h-[40px]">
        <label className="text-[30px] h-[30px] font-bold text-center text-primary px-[10px]">
          Update Ipo Tracker Details
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
                console.log(id);
                
                getTrackerFromId(id);
              }}
            />
          </div>
        </div>

        <div className="w-[70%]">
          <div className="p-1 ">
            {/* ADD TRACKER FORM */}

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">Name : </label>
              <input
                type="text"
                autoComplete="off"
                className="mx-1 px-1 border border-gray-300 w-[300px] "
                value={tracker.company_name}
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    company_name: e.target.value,
                  });
                }}
              />
            </div>

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">Sector : </label>
              <select
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    sector: e.target.value,
                  });
                }}
                value={tracker.sector}
                className="mx-1 px-1 border border-gray-300 w-[300px] "
              >
                <option>Select here</option>
                {Sectors.map((item) => {
                  return (
                    <option className="bg-white border h-[50px]" key={item}>{ item }</option>
                  )
                })}
              </select>
            </div>

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">
                Current Price (fetched from API, cannot edit) :{" "}
              </label>
              <input
                type="text"
                autoComplete="off"
                disabled
                className="mx-1 px-1 border border-gray-500 w-[300px] "
                value={tracker.current_price}
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    current_price: Number(e.target.value),
                  });
                }}
              />
            </div>

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">
                Dayend Price :{" "}
              </label>
              <input
                type="text"
                autoComplete="off"
                className="mx-1 px-1 border border-gray-300 w-[300px] "
                value={tracker.dayend_price}
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    dayend_price: Number(e.target.value),
                  });
                }}
              />
            </div>

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">
                Listing Price :{" "}
              </label>
              <input
                type="text"
                autoComplete="off"
                className="mx-1 px-1 border border-gray-300 w-[300px] "
                value={tracker.listing_price}
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    listing_price: Number(e.target.value),
                  });
                }}
              />
            </div>

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">
                Issue Price :{" "}
              </label>
              <input
                type="number"
                autoComplete="off"
                className="mx-1 px-1 border border-gray-300 w-[300px] "
                value={tracker.issue_price}
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    issue_price: Number(e.target.value),
                  });
                }}
              />
            </div>

            <div
              className=" flex justify-between items-center w-[auto] h-[60px] 
        border-gray-200 overflow-hidden border p-3"
            >
              <label className="mx-1 text-[0.9rem] font-bold ">Year : </label>
              <input
                type="text"
                autoComplete="off"
                className="mx-1 px-1 border border-gray-300 w-[300px] "
                value={tracker.year}
                onChange={(e) => {
                  setTracker({
                    ...tracker,
                    year: e.target.value,
                  });
                }}
              />
            </div>
          </div>

          <div className="shadow-3xl border-t-2 border-secondary flex justify-center items-start h-[10vh]">
            <button
              onClick={modify}
              className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl boder-primary shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
            >
              Update
            </button>

            <button
              onClick={Reset}
              className=" w-[150px] border-2 hover:bg-blue-100 h-[50px] mx-4 mt-2 shadow-2xl shadow-blue-100 border-secondary rounded-md text-[20px] font-semibold"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
