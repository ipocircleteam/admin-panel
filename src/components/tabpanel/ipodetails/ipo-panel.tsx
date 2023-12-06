import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SearchBar from "./search-bar";
import IpoTable from "./ipo-table";
import PanelButtons from "./panel-buttons";
import {
  CompanyFinanceType,
  IpoDetailsType,
  IpolistType,
  ReviewsType,
} from "../../../types";
import IpoList from "./ipolist";
import {
  initReview,
  initialCompanyFinance,
  initialIpoData,
} from "../../../data/ipoData";
import CompanyFinances from "./company-finances";

export default function IpoPanel() {
  const [ipoList, setIpoList] = useState<IpolistType[] | undefined>();
  const [referenceList, setReference] = useState<IpolistType[] | undefined>();
  const [activeIpo, setActiveIpo] = useState({
    ipodetails: initialIpoData,
    companyFinance: initialCompanyFinance,
    reviews: initReview,
  });

  function loadIpoList() {
    toast.loading("Fetching IPO List...");
    axios
      .get(`https://api.ipocircle.com/api/v1/ipo/ipolist`)
      .then((res) => {
        toast.dismiss();
        setIpoList(res.data.data);
        setReference(res.data.data);
      })
      .catch((error) => {
        toast.dismiss();
        toast.error(error.data.msg);
        console.log(`Error fetching ipo list, ${error}`);
      });
  }

  useEffect(() => {
    loadIpoList();
  }, []);

  const getIpoFromId = async (id: string) => {
    toast.loading("Wait, Fetching IPO Details...");
    Reset();
    try {
      const ipoRes = await axios
        .get(`https://api.ipocircle.com/api/admin/v1/ipo/details?ipoId=${id}`)
        .catch((error) => {
          console.log(error);
          toast.dismiss();
          toast.info(error.response.data.msg);
        });
      if (!ipoRes?.data.success) {
        toast.dismiss();
        toast.error("didn't received data");
        return;
      }
      const resdata = ipoRes?.data.data;
      const formattedData = {
        ipodetails: resdata.ipodetails[0],
        companyFinance: resdata.companyFinance[0],
        reviews: resdata.reviews[0],
      };
      setActiveIpo(formattedData);

      toast.dismiss();
      toast.success("Details fetched");
    } catch (error: any) {
      console.log(error);
      toast.dismiss();
      toast.error(error.response.data.msg);
    }
  };

  const Search = async (query: string) => {
    const filteredData = await ipoList?.filter((item) => {
      return item.name.includes(query);
    });
    setIpoList(filteredData);
  };

  const Reset = () => {
    setIpoList(referenceList);
    setActiveIpo({
      ipodetails: initialIpoData,
      companyFinance: initialCompanyFinance,
      reviews: initReview,
    });
  };

  const formatActiveIpo = async () => {
    activeIpo.ipodetails.opening_date = new Date(activeIpo.ipodetails.opening_date)
    activeIpo.ipodetails.closing_date = new Date(activeIpo.ipodetails.closing_date)
    activeIpo.ipodetails.basis_date = new Date(activeIpo.ipodetails.basis_date)
    activeIpo.ipodetails.init_refunds = new Date(activeIpo.ipodetails.init_refunds)
    activeIpo.ipodetails.shares_to_demat = new Date(activeIpo.ipodetails.shares_to_demat)
    activeIpo.ipodetails.listing_date = new Date(activeIpo.ipodetails.listing_date)
    activeIpo.ipodetails.anchor_bid_date = new Date(activeIpo.ipodetails.anchor_bid_date)
    activeIpo.ipodetails.anchor_lockin_half = new Date(activeIpo.ipodetails.anchor_lockin_half)
    activeIpo.ipodetails.anchor_lockin_rest = new Date(activeIpo.ipodetails.anchor_lockin_rest)
    activeIpo.ipodetails.allotment_date = new Date(activeIpo.ipodetails.allotment_date)
  }

  const save = async () => {
    console.log(activeIpo);
    toast.loading("Wait, adding ipo...");

    const newId = activeIpo.ipodetails.name + activeIpo.ipodetails.series;
    activeIpo.ipodetails.id = newId;
    activeIpo.companyFinance.ipo_id = newId;
    activeIpo.reviews.ipo_id = newId;
    await formatActiveIpo()

    await axios
      .post(`https://api.ipocircle.com/api/admin/v1/ipo/create`, activeIpo)
      .then((res) => {
        toast.dismiss();
        toast.success("Data created successfully");
        setIpoList(res.data.data);
        setReference(res.data.data);
        loadIpoList()
      })
      .catch((error) => {
        toast.dismiss();
        toast.error('Some error occurred');
        console.log(error);
        console.log(`Error fetching ipo list, ${error}`);
      });
  };

  const modify = async () => {
    console.log(activeIpo);
    toast.loading("Wait, modifying ipo...");
    await formatActiveIpo()
    await axios
      .patch(`https://api.ipocircle.com/api/admin/v1/ipo/update`, activeIpo)
      .then((res) => {
        toast.dismiss();
        toast.success("Data updated successfully");
        setIpoList(res.data.data);
        setReference(res.data.data);
        loadIpoList()
      })
      .catch((error) => {
        toast.dismiss();
        toast.error('Some error occurred');
        console.log(error);
        console.log(`Error fetching ipo list, ${error}`);
      });
  };

  return (
    <>
      <div className="hidden lg:flex flex-wrap justify-center items-start w-[100vw] h-[100vw] bg-white overflow-hidden border border-primary">
        <div className="w-[20%] border-r h-[100%] overlow-x-hidden overflow-y-scroll">
          <SearchBar Search={Search} />
          <p>Total IPOs: {ipoList?.length}</p>
          <IpoList
            data={ipoList}
            populateData={(id: string) => {
              getIpoFromId(id);
            }}
          />
        </div>

        <div className="w-[80%] overflow-hidden">
          <div className="grid grid-cols-3">
            <section className="border col-span-2">
              {/* <IpoTable
                data={activeIpo.ipodetails}
                callback={(data: IpoDetailsType) => {
                  setActiveIpo({
                    ...activeIpo,
                    ipodetails: data,
                  });
                }}
              /> */}
            </section>
            <section className="border col-span-1">
              <CompanyFinances
                data={activeIpo.companyFinance}
                callback={(data: CompanyFinanceType) => {
                  setActiveIpo({
                    ...activeIpo,
                    companyFinance: data,
                  });
                }}
              />
            </section>
          </div>
          <PanelButtons save={save} modify={modify} reset={Reset} />
        </div>
      </div>
    </>
  );
}
