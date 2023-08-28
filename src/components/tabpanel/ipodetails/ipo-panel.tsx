import React, { useEffect, useState } from "react";
import SearchBar from "./search-bar";
import IpoTable from "./ipo-table";
import PanelButtons from "./panel-buttons";
import { useSelector, useDispatch } from "react-redux";
import {
  AdditionalDetailsType,
  CompanyFinancesType,
  IpoDetailsType,
  IpoLotSizeType,
  IpoLotsType,
  IpoReducerType,
  IpoReservationType,
  SubscriptionsType,
} from "../../../types";
import { resetIpoData, searchIpo } from "../../../reducers/ipo-reducer";
import IpoLots from "./ipolots-table";
import CompanyFinances from "./company-finances";
import Subscriptions from "./subscriptions";
import IpoReservation from "./ipo-reservation";
import IpoLotSize from "./ipo-lotsize";
import AdditionalDetails from "./ipo-addDetails";

export default function IpoPanel() {
  const dispatch = useDispatch();

  const {
    ipoDetails,
    ipoLotsDetails,
    companyFinances,
    subscriptions,
    reservations,
    ipolotsize,
    additionalDetails,
  } = useSelector((state: IpoReducerType) => state.ipo);

  const [ipo, setIpo] = useState({
    table: ipoDetails,
    lots: ipoLotsDetails,
    companyFin: companyFinances,
    subscriptions: subscriptions,
    reservations,
    ipolotsize,
    additionalDetails,
  });

  useEffect(() => {
    setIpo({
      table: ipoDetails,
      lots: ipoLotsDetails,
      companyFin: companyFinances,
      subscriptions: subscriptions,
      reservations,
      ipolotsize,
      additionalDetails,
    });
  }, [
    ipoDetails,
    ipoLotsDetails,
    companyFinances,
    subscriptions,
    reservations,
    ipolotsize,
    additionalDetails,
  ]);

  const Search = (ipoName: string) => {
    //   write async logic
    dispatch(searchIpo({ ipoName: ipoName }));
  };

  const reset = () => {
    // setData(initialIpoData);
    dispatch(resetIpoData({}));
  };

  const save = () => {
    //logic to save data
    // 1. create a json of all data
    // 2. Axios request or thunk request
    // 3. Show processing
    // 4. Show status
    alert("API integration pending");
  };

  const modify = () => {
    //logic to modify data
    // 1. create a json of all data
    // 2. Axios request or thunk request
    // 3. Show processing
    // 4. Show status
    alert("API integration pending");
  };

  return (
    <div
      className="flex flex-wrap justify-center items-start w-[100vw] 
    h-[88vh] bg-white overflow-hidden border border-primary"
    >
      <section className="w-[50%] flex justify-center items-start">
        <section className="h-[87vh] w-[55%] border">
          <SearchBar Search={Search} />
          <IpoTable
            data={ipo.table}
            callback={(data: IpoDetailsType) => {
              setIpo({
                ...ipo,
                table: data,
              });
            }}
          />
        </section>

        <section className="h-[87vh] w-[45%] border">
          <IpoLots
            data={ipo.lots}
            callback={(data: IpoLotsType) => {
              setIpo({
                ...ipo,
                lots: data,
              });
            }}
          />

          <CompanyFinances
            data={ipo.companyFin}
            callback={(data: CompanyFinancesType) => {
              setIpo({
                ...ipo,
                companyFin: data,
              });
            }}
          />

          <Subscriptions
            data={ipo.subscriptions}
            callback={(data: SubscriptionsType) => {
              setIpo({
                ...ipo,
                subscriptions: data,
              });
            }}
          />
        </section>
      </section>

      <section className="w-[50%] overflow-hidden">
        <section className="w-[100%] flex justify-center items-start">
          <section className="h-[80vh] w-[50%]">
            <IpoReservation
              data={ipo.reservations}
              callback={(data: IpoReservationType) => {
                setIpo({
                  ...ipo,
                  reservations: data,
                });
              }}
            />

            <IpoLotSize
              data={ipo.ipolotsize}
              callback={(data: IpoLotSizeType) => {
                setIpo({
                  ...ipo,
                  ipolotsize: data,
                });
              }}
            />
          </section>

          <section className="h-[80vh] w-[50%]">
            <AdditionalDetails
              data={ipo.additionalDetails}
              callback={(data: AdditionalDetailsType) => {
                setIpo({
                  ...ipo,
                  additionalDetails: data,
                });
              }}
            />
          </section>
        </section>
        <PanelButtons save={save} modify={modify} reset={reset} />
      </section>
    </div>
  );
}
