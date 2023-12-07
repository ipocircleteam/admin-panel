import React from "react";
import { IpoDetailsType } from "../../../types";
import Input from "./input-field";

export default function IpoTable(props: {
  data: IpoDetailsType;
  callback: (data: IpoDetailsType) => void;
  selectcallback: (data: IpoDetailsType) => void
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.callback({
      ...props.data,
      [e.target.name]: e.target.value,
    });
  };

  

  return (
    <div
      className="grid grid-cols-1 gap-0 border-2  
    w-[100%] h-[80vh]  "
    >
      <div className="overflow-scroll overflow-x-hidden overflow-y-scroll p-4">
        <Input
          value={props.data.name}
          function={handleChange}
          text="Name"
          name="name"
        />
        {/* <div
      className=" flex justify-between items-center h-[60px] 
        border-gray-200 overflow-hidden border p-2"
    >
      <label className="mx-1 text-[0.9rem] font-bold ">Series : </label>
          <select className="mx-1 px-1 border border-gray-300 w-[200px]" name="series" onChange={(e) => {
            props.selectcallback({
              ...props.data,
              [e.target.name]: e.target.value,
            });
          }}>
          <option>sme</option>
          <option>eq</option>
        </select>
        </div> */}
        
        <Input
          value={props.data.series}
          function={handleChange}
          text="Series (inputs: 'sme' or 'eq')"
          name="series"
        />
        
        <Input
          value={props.data.description}
          function={handleChange}
          text="Description"
          name="description"
        />
        <Input
          value={props.data.face_value}
          function={handleChange}
          text="Face Value"
          name="face_value"
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
          text="Listing At (eg input: ['BSE', 'NSE']"
          name="listing_at"
        />
        <Input
          value={props.data.gen_holding_pre}
          function={handleChange}
          text="Gen Holding Pre Issue"
          name="gen_holding_pre"
        />
        <Input
          value={props.data.gen_holding_post}
          function={handleChange}
          text="Gen Holding Post Issue"
          name="gen_holding_post"
        />
        <Input
          value={String(props.data.opening_date)}
          function={handleChange}
          text="Opening Date (YYYY-MM-DD)"
          name="opening_date"
        />
        <Input
          value={String(props.data.closing_date)}
          function={handleChange}
          text="Closing Date (YYYY-MM-DD)"
          name="closing_date"
        />
        <Input
          value={String(props.data.basis_date)}
          function={handleChange}
          text="Basis Date (YYYY-MM-DD)"
          name="basis_date"
        />
        <Input
          value={String(props.data.init_refunds)}
          function={handleChange}
          text="Initiation of refunds (YYYY-MM-DD)"
          name="init_refunds"
        />
        <Input
          value={String(props.data.shares_to_demat)}
          function={handleChange}
          text="Shares to Demat (YYYY-MM-DD)"
          name="shares_to_demat"
        />
        <Input
          value={String(props.data.listing_date)}
          function={handleChange}
          text="Listing Date (YYYY-MM-DD)"
          name="listing_date"
        />
        <Input
          value={props.data.promoter_holding_pre}
          function={handleChange}
          text="Promoter holdings preissue"
          name="promoter_holding_pre"
        />
        <Input
          value={props.data.promoter_holding_post}
          function={handleChange}
          text="Promoter holdings postissue"
          name="promoter_holding_post"
        />
        <Input
          value={String(props.data.anchor_bid_date)}
          function={handleChange}
          text="Anchor Bid Date (YYYY-MM-DD)"
          name="anchor_bid_date"
        />
        <Input
          value={String(props.data.anchor_lockin_half)}
          function={handleChange}
          text="Anchor Lockinhalf (YYYY-MM-DD)"
          name="anchor_lockin_half"
        />
        <Input
          value={String(props.data.anchor_lockin_rest)}
          function={handleChange}
          text="Anchor Lockinrest (YYYY-MM-DD)"
          name="anchor_lockin_rest"
        />
        <Input
          value={props.data.pe}
          function={handleChange}
          text="PE"
          name="pe"
        />
        <Input
          value={props.data.market_cap}
          function={handleChange}
          text="Market Cap"
          name="market_cap"
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
          value={props.data.bse_code}
          function={handleChange}
          text="BSE Script Code"
          name="bse_code"
        />
        <Input
          value={props.data.bse_url}
          function={handleChange}
          text="BSE URL"
          name="bse_url"
        />
        <Input
          value={props.data.nse_code}
          function={handleChange}
          text="NSE Script Code"
          name="nse_code"
        />
        <Input
          value={props.data.nse_url}
          function={handleChange}
          text="NSE URL"
          name="nse_url"
        />
        <Input
          value={props.data.final_price}
          function={handleChange}
          text="Final Price"
          name="final_price"
        />
        <Input
          value={props.data.pre_open_nse}
          function={handleChange}
          text="Preopen NSE"
          name="pre_open_nse"
        />
        <Input
          value={props.data.pre_open_bse}
          function={handleChange}
          text="Preopen BSE"
          name="pre_open_bse"
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
          value={props.data.company_logo}
          function={handleChange}
          text="Company Logo"
          name="company_logo"
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
          name="registrar_website"
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
          text="Anchor List (eg input ['ABC Fund', 'XYZ Capital'])"
          name="anchor_list"
        />
        <Input
          value={props.data.shares_in_lot}
          function={handleChange}
          text="Share in lot"
          name="shares_in_lot"
        />
        <Input
          value={props.data.dayend_price}
          function={handleChange}
          text="Dayend Price"
          name="dayend_price"
        />
        <Input
          value={String(props.data.cutoffmandate)}
          function={handleChange}
          text="Cutoffmandate (YYYY-MM-DD)"
          name="cutoffmandate"
        />
        <Input
          value={String(props.data.defunct)}
          function={handleChange}
          text="Defunct"
          name="defunct"
        />
        <Input
          value={props.data.retail_discount}
          function={handleChange}
          text="Retail Discount"
          name="retail_discount"
        />
        <Input
          value={props.data.employee_discount}
          function={handleChange}
          text="Employee Discount"
          name="employee_discount"
        />
        <Input
          value={props.data.anchor_portion}
          function={handleChange}
          text="Anchor Portion"
          name="anchor_portion"
        />
        <Input
          value={props.data.debt}
          function={handleChange}
          text="Debt"
          name="debt"
        />
        <Input
          value={props.data.priceband}
          function={handleChange}
          text="Priceband"
          name="priceband"
        />
        <Input
          value={props.data.ofs}
          function={handleChange}
          text="OFS"
          name="ofs"
        />
        <Input
          value={String(props.data.allotment_date)}
          function={handleChange}
          text="Allotment Date (YYYY-MM-DD)"
          name="allotment_date"
        />
        <Input
          value={props.data.credit_of}
          function={handleChange}
          text="Credit of"
          name="credit_of"
        />
        <Input
          value={String(props.data.time_upf)}
          function={handleChange}
          text="Time UPF (YYYY-MM-DD)"
          name="time_upf"
        />
        <Input
          value={props.data.min_retail_lots}
          function={handleChange}
          text="Min Retail Lots"
          name="min_retail_lots"
        />
        <Input
          value={props.data.max_retail_lots}
          function={handleChange}
          text="Max Retail Lots"
          name="max_retail_lots"
        />
        <Input
          value={props.data.min_shni_lots}
          function={handleChange}
          text="Min Shni Lots"
          name="min_shni_lots"
        />
        <Input
          value={props.data.max_shni_lots}
          function={handleChange}
          text="Max Shni Lots"
          name="max_shni_lots"
        />
        <Input
          value={props.data.min_bhni_lots}
          function={handleChange}
          text="Min Bhni Lots"
          name="min_bhni_lots"
        />
        <Input
          value={props.data.max_bhni_lots}
          function={handleChange}
          text="Max Bhni Lots"
          name="max_bhni_lots"
        />
        <Input
          value={props.data.min_retail_shares}
          function={handleChange}
          text="Min Retail Shares"
          name="min_retail_shares"
        />
        <Input
          value={props.data.max_retail_shares}
          function={handleChange}
          text="Max Retail Shares"
          name="max_retail_shares"
        />
        <Input
          value={props.data.min_shni_shares}
          function={handleChange}
          text="Min Shni Shares"
          name="min_shni_shares"
        />
        <Input
          value={props.data.max_shni_shares}
          function={handleChange}
          text="Max Shni Shares"
          name="max_shni_shares"
        />
        <Input
          value={props.data.min_bhni_shares}
          function={handleChange}
          text="Min Bhni Shares"
          name="min_bhni_shares"
        />
        <Input
          value={props.data.max_bhni_shares}
          function={handleChange}
          text="Max Bhni Shares"
          name="max_bhni_shares"
        />
        <Input
          value={props.data.min_retail_price}
          function={handleChange}
          text="Min Retail Price"
          name="min_retail_price"
        />
        <Input
          value={props.data.max_retail_price}
          function={handleChange}
          text="Max Retail Price"
          name="max_retail_price"
        />
        <Input
          value={props.data.min_shni_price}
          function={handleChange}
          text="Min Shni Price"
          name="min_shni_price"
        />
        <Input
          value={props.data.max_shni_price}
          function={handleChange}
          text="Max Shni Price"
          name="max_shni_price"
        />
        <Input
          value={props.data.min_bhni_price}
          function={handleChange}
          text="Min Bhni Price"
          name="min_bhni_price"
        />
        <Input
          value={props.data.max_bhni_price}
          function={handleChange}
          text="Max Bhni Price"
          name="max_bhni_price"
        />
        <Input
          value={props.data.qib}
          function={handleChange}
          text="QIB"
          name="qib"
        />
        <Input
          value={props.data.nii_snii}
          function={handleChange}
          text="NII SNII"
          name="nii_snii"
        />
        <Input
          value={props.data.nii_bnii}
          function={handleChange}
          text="NII BNII"
          name="nii_bnii"
        />
        <Input
          value={props.data.retail}
          function={handleChange}
          text="Retail"
          name="retail"
        />
        <Input
          value={props.data.anchor_shares_offerred}
          function={handleChange}
          text="Anchor Shares Offerred"
          name="anchor_shares_offerred"
        />
        <Input
          value={props.data.qib_shares_offerred}
          function={handleChange}
          text="QIB Shares Offerred"
          name="qib_shares_offerred"
        />
        <Input
          value={props.data.nil_shares_offerred}
          function={handleChange}
          text="NIL Shares Offerred"
          name="nil_shares_offerred"
        />
        <Input
          value={props.data.retail_shares_offerred}
          function={handleChange}
          text="Retail Shares Offerred"
          name="retail_shares_offerred"
        />

        <Input
          value={props.data.objectIssueData}
          function={handleChange}
          text="Object of the issue"
          name="objectIssueData"
        />
      </div>
    </div>
  );
}
