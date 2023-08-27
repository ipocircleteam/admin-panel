import React, { useState } from "react";
import SearchBar from "./search-bar";
import Canvas from "./canvas";
import PanelForm from "./panel-form";
import PanelButtons from "./panel-buttons";

export default function IpoPanel() {
  const [details, setDetails] = useState({
    id: "",
    name: "",
    series: "",
    facevalue: 0,
    min_price: 0,
    max_price: 0,
    total_issue: 0,
    fresh_issue: 0,
    issue_type: "",
    listing_at: "",
    gen_holding_pre_issue: 0,
    gen_holding_post_issue: 0,
    opening_date: "",
    closing_date: "",
    basis_date: "",
    initiation_of_refunds: "",
    shares_to_demat: "",
    listing_date: "",
    promoter_holdings_preissue: 0,
    promoter_holdings_postissue: 0,
    anchor_bid_date: "",
    anchor_lockinhalf: "",
    anchor_lockinrest: "",
    pe: 0,
    marketcap: 0,
    roe: 0,
    roce: 0,
    eps: 0,
    ronw: 0,
    bse_script_code: "",
    nse_symbol: "",
    final_price: 0,
    preopen_nse: "",
    preopen_bse: "",
    company_address: "",
    company_phone: "",
    company_email: "",
    company_website: "",
    registrar_address: "",
    registrar_phone: "",
    registrar_email: "",
    registrar_website: "",
    registrar_name: "",
    drhp: "",
    rhp: "",
    anchor_list: "",
    market_maker_portion: 0,
    share_in_lot: 0,
  });

  return (
    <div className="flex justify-center items-center w-[100vw] p-2">
      <section className="w-[60%]">
        <PanelForm />
        <PanelButtons />
      </section>

      <section className="w-[40%] border-l-2 border-gray-400 p-2 overflow-hidden">
        <SearchBar />
        <Canvas details={details} />
      </section>
    </div>
  );
}
