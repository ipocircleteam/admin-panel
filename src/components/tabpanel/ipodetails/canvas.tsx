import React from "react";
import { IpoDetailsType} from "../../../types";
import { ipoTableFormat } from "../../../data/ipoData";

export default function Canvas(props: {
    details: IpoDetailsType
}) {
  return (
    <div className="m-1 bg-[white] p-2 rounded-lg w-[100%] h-[77vh] overflow-x-hidden overflow-y-scroll">
      <table className="w-[95%] border mx-auto">
        <thead className="font-semibold">
          <tr>
            <td className="px-2 border w-[50%]">Particulars</td>
            <td className="px-2 border w-[50%]">Value</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[0]}</td>
            <td className="px-2 border w-[50%]">{props.details.id}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[1]}</td>
            <td className="px-2 border w-[50%]">{props.details.name}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[2]}</td>
            <td className="px-2 border w-[50%]">{props.details.series}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[3]}</td>
            <td className="px-2 border w-[50%]">{props.details.facevalue}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[4]}</td>
            <td className="px-2 border w-[50%]">{props.details.min_price}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[5]}</td>
            <td className="px-2 border w-[50%]">{props.details.max_price}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[6]}</td>
            <td className="px-2 border w-[50%]">{props.details.total_issue}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[7]}</td>
            <td className="px-2 border w-[50%]">{props.details.fresh_issue}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[8]}</td>
            <td className="px-2 border w-[50%]">{props.details.issue_type}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[9]}</td>
            <td className="px-2 border w-[50%]">{props.details.listing_at}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[10]}</td>
            <td className="px-2 border w-[50%]">{props.details.gen_holding_pre_issue}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[11]}</td>
            <td className="px-2 border w-[50%]">{props.details.gen_holding_post_issue}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[12]}</td>
            <td className="px-2 border w-[50%]">{props.details.opening_date}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[13]}</td>
            <td className="px-2 border w-[50%]">{props.details.closing_date}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[14]}</td>
            <td className="px-2 border w-[50%]">{props.details.basis_date}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[15]}</td>
            <td className="px-2 border w-[50%]">{props.details.initiation_of_refunds}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[16]}</td>
            <td className="px-2 border w-[50%]">{props.details.shares_to_demat}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[17]}</td>
            <td className="px-2 border w-[50%]">{props.details.listing_date}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[18]}</td>
            <td className="px-2 border w-[50%]">{props.details.promoter_holdings_preissue}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[19]}</td>
            <td className="px-2 border w-[50%]">{props.details.promoter_holdings_postissue}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[20]}</td>
            <td className="px-2 border w-[50%]">{props.details.anchor_bid_date}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[21]}</td>
            <td className="px-2 border w-[50%]">{props.details.anchor_lockinhalf}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[22]}</td>
            <td className="px-2 border w-[50%]">{props.details.anchor_lockinrest}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[23]}</td>
            <td className="px-2 border w-[50%]">{props.details.pe}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[24]}</td>
            <td className="px-2 border w-[50%]">{props.details.marketcap}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[25]}</td>
            <td className="px-2 border w-[50%]">{props.details.roe}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[26]}</td>
            <td className="px-2 border w-[50%]">{props.details.roce}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[27]}</td>
            <td className="px-2 border w-[50%]">{props.details.eps}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[28]}</td>
            <td className="px-2 border w-[50%]">{props.details.ronw}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[29]}</td>
            <td className="px-2 border w-[50%]">{props.details.bse_script_code}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[30]}</td>
            <td className="px-2 border w-[50%]">{props.details.nse_symbol}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[31]}</td>
            <td className="px-2 border w-[50%]">{props.details.final_price}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[32]}</td>
            <td className="px-2 border w-[50%]">{props.details.preopen_nse}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[33]}</td>
            <td className="px-2 border w-[50%]">{props.details.preopen_bse}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[34]}</td>
            <td className="px-2 border w-[50%]">{props.details.company_address}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[35]}</td>
            <td className="px-2 border w-[50%]">{props.details.company_phone}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[36]}</td>
            <td className="px-2 border w-[50%]">{props.details.company_email}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[37]}</td>
            <td className="px-2 border w-[50%]">{props.details.company_website}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[38]}</td>
            <td className="px-2 border w-[50%]">{props.details.registrar_address}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[39]}</td>
            <td className="px-2 border w-[50%]">{props.details.registrar_phone}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[40]}</td>
            <td className="px-2 border w-[50%]">{props.details.registrar_email}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[41]}</td>
            <td className="px-2 border w-[50%]">{props.details.registrar_website}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[42]}</td>
            <td className="px-2 border w-[50%]">{props.details.registrar_name}</td>
          </tr>

          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[43]}</td>
            <td className="px-2 border w-[50%]">{props.details.drhp}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[44]}</td>
            <td className="px-2 border w-[50%]">{props.details.rhp}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[45]}</td>
            <td className="px-2 border w-[50%]">{props.details.anchor_list}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[46]}</td>
            <td className="px-2 border w-[50%]">{props.details.market_maker_portion}</td>
          </tr>
          <tr>
            <td className="px-2 border w-[50%]">{ipoTableFormat[47]}</td>
            <td className="px-2 border w-[50%]">{props.details.share_in_lot}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
