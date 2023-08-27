import React from "react";
import { IpoDetailsType } from "../../../types";
import Input from "./input-field";

export default function IpoTable(props: {
  data: IpoDetailsType;
  callback: (data: IpoDetailsType) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.callback({
      ...props.data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-scroll custom-scrollbar grid grid-cols-1 gap-0 border-r-2 
    w-[100%] h-[80vh] overflow-x-hidden overflow-y-scroll">
      <label className="text-[1.2rem] bg-gray-200 h-[30px] text-primary px-[10px] border-b-2">
        IPO Details
      </label>
      <Input
        value={props.data.id}
        function={handleChange}
        text="ID"
        name="id"
      />
      <Input
        value={props.data.name}
        function={handleChange}
        text="Name"
        name="name"
      />
      <Input
        value={props.data.series}
        function={handleChange}
        text="Series"
        name="series"
      />
      <Input
        value={props.data.facevalue}
        function={handleChange}
        text="Face Value"
        name="facevalue"
      />
      <Input
        value={props.data.min_price}
        function={handleChange}
        text="Min Price"
        name="min_price"
      />
      <Input
        value={props.data.max_price}
        function={handleChange}
        text="Max Price"
        name="max_price"
      />
      <Input
        value={props.data.total_issue}
        function={handleChange}
        text="Total Issue"
        name="total_issue"
      />
      <Input
        value={props.data.fresh_issue}
        function={handleChange}
        text="Fresh Issue"
        name="fresh_issue"
      />
      <Input
        value={props.data.issue_type}
        function={handleChange}
        text="Issue Type"
        name="issue_type"
      />
      <Input
        value={props.data.listing_at}
        function={handleChange}
        text="Listing At"
        name="listing_at"
      />
      <Input
        value={props.data.gen_holding_pre_issue}
        function={handleChange}
        text="Gen Holding Pre Issue"
        name="gen_holding_pre_issue"
      />
      <Input
        value={props.data.gen_holding_post_issue}
        function={handleChange}
        text="Gen Holding Post Issue"
        name="gen_holding_post_issue"
      />
      <Input
        value={props.data.opening_date}
        function={handleChange}
        text="Opening Date"
        name="opening_date"
      />
      <Input
        value={props.data.closing_date}
        function={handleChange}
        text="Closing Date"
        name="closing_date"
      />
      <Input
        value={props.data.basis_date}
        function={handleChange}
        text="Basis Date"
        name="basis_date"
      />
      <Input
        value={props.data.initiation_of_refunds}
        function={handleChange}
        text="Initiation of refunds"
        name="initiation_of_refunds"
      />
      <Input
        value={props.data.shares_to_demat}
        function={handleChange}
        text="Shares to Demat"
        name="shares_to_demat"
      />
      <Input
        value={props.data.listing_date}
        function={handleChange}
        text="Listing Date"
        name="listing_date"
      />
      <Input
        value={props.data.promoter_holdings_preissue}
        function={handleChange}
        text="Promoter holdings preissue"
        name="promoter_holdings_preissue"
      />
      <Input
        value={props.data.promoter_holdings_postissue}
        function={handleChange}
        text="Promoter holdings postissue"
        name="promoter_holdings_postissue"
      />
      <Input
        value={props.data.anchor_bid_date}
        function={handleChange}
        text="Anchor Bid Date"
        name="anchor_bid_date"
      />
      <Input
        value={props.data.anchor_lockinhalf}
        function={handleChange}
        text="Anchor Lockinhalf"
        name="anchor_lockinhalf"
      />
      <Input
        value={props.data.anchor_lockinrest}
        function={handleChange}
        text="Anchor Lockinrest"
        name="anchor_lockinrest"
      />
      <Input
        value={props.data.share_offerred_anchor}
        function={handleChange}
        text="Share offerred to anchor"
        name="share_offerred_anchor"
      />
      <Input
        value={props.data.portion_offerred_anchor}
        function={handleChange}
        text="Portion offerred to anchor"
        name="portion_offerred_anchor"
      />
      <Input
        value={props.data.pe}
        function={handleChange}
        text="PE"
        name="pe"
      />
      <Input
        value={props.data.marketcap}
        function={handleChange}
        text="Market Cap"
        name="marketcap"
      />
      <Input
        value={props.data.roe}
        function={handleChange}
        text="ROE"
        name="roe"
      />
      <Input
        value={props.data.roce}
        function={handleChange}
        text="ROCE"
        name="roce"
      />
      <Input
        value={props.data.eps}
        function={handleChange}
        text="EPS"
        name="eps"
      />
      <Input
        value={props.data.ronw}
        function={handleChange}
        text="RONW"
        name="ronw"
      />
      <Input
        value={props.data.bse_script_code}
        function={handleChange}
        text="BSE Script Code"
        name="bse_script_code"
      />
      <Input
        value={props.data.nse_symbol}
        function={handleChange}
        text="NSE Symbol"
        name="nse_symbol"
      />
      <Input
        value={props.data.final_price}
        function={handleChange}
        text="Final Price"
        name="final_price"
      />
      <Input
        value={props.data.preopen_nse}
        function={handleChange}
        text="Preopen NSE"
        name="preopen_nse"
      />
      <Input
        value={props.data.preopen_bse}
        function={handleChange}
        text="Preopen BSE"
        name="preopen_bse"
      />
      <Input
        value={props.data.company_address}
        function={handleChange}
        text="Company Address"
        name="company_address"
      />
      <Input
        value={props.data.company_phone}
        function={handleChange}
        text="Company Phone"
        name="company_phone"
      />
      <Input
        value={props.data.company_email}
        function={handleChange}
        text="Company Email"
        name="company_email"
      />
      <Input
        value={props.data.company_website}
        function={handleChange}
        text="Company Website"
        name="company_website"
      />
      <Input
        value={props.data.registrar_address}
        function={handleChange}
        text="Registrar Address"
        name="registrar_address"
      />
      <Input
        value={props.data.registrar_phone}
        function={handleChange}
        text="Registrar Phone"
        name="registrar_phone"
      />
      <Input
        value={props.data.registrar_email}
        function={handleChange}
        text="Registrar Email"
        name="registrar_email"
      />
      <Input
        value={props.data.registrar_website}
        function={handleChange}
        text="Registrar Website"
        name="registrae_website"
      />
      <Input
        value={props.data.registrar_name}
        function={handleChange}
        text="Registrar Name"
        name="registrar_name"
      />
      <Input
        value={props.data.drhp}
        function={handleChange}
        text="DRHP"
        name="drhp"
      />
      <Input
        value={props.data.rhp}
        function={handleChange}
        text="RHP"
        name="rhp"
      />
      <Input
        value={props.data.anchor_list}
        function={handleChange}
        text="Anchor List"
        name="anchor_list"
      />
      <Input
        value={props.data.market_maker_portion}
        function={handleChange}
        text="Market Maker Portion"
        name="market_maker_portion"
      />
      <Input
        value={props.data.share_in_lot}
        function={handleChange}
        text="Share in lot"
        name="share_in_lot"
      />
    </div>
  );
}
