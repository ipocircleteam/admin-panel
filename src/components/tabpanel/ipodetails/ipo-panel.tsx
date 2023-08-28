import React, { useEffect, useState } from "react";
import $ from "jquery";
import SearchBar from "./search-bar";
import Canvas from "./canvas";
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
import { setIpoData, searchIpo } from "../../../reducers/ipo-reducer";
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

  const [reviewCount, setReviewCount] = useState(0);
  const [ipo, setIpo] = useState({
    table: ipoDetails,
    lots: ipoLotsDetails,
    companyFin: companyFinances,
    subscriptions: subscriptions,
    reservations,
    ipolotsize,
    additionalDetails,
  });

  const Search = (ipoName: string) => {
    //   write async logic
    dispatch(searchIpo({ ipoName: ipoName }));
  };

  const review = () => {
    setReviewCount(reviewCount + 1);
    $("#modify").removeClass(" bg-gray-500");
    $("#modify").addClass(" bg-white");
    $("#save").removeClass(" bg-gray-500");
    $("#save").addClass(" bg-white");
    // dispatch to change data
    // dispatch(setIpoData({ ipodata: data }));
  };

  const reset = () => {
    // setData(initialIpoData);
    // dispatch(setIpoData({ ipodata: initialIpoData }));
  };

  const save = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to save data
    alert("API integration pending");
  };

  const modify = () => {
    if (reviewCount === 0) {
      alert("Please review details before proceeding");
      return;
    }
    //logic to modify data
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
        <PanelButtons
          save={save}
          review={review}
          modify={modify}
          reset={reset}
        />
      </section>
    </div>
  );
}
