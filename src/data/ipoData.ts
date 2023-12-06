import {
  CompanyFinanceType,
  IpoDetailsType,
  ReviewsType,
} from "../types";

export const initialIpoData: IpoDetailsType = {
  id: "",
  name: "",
  series: "",
  description: "",
  face_value: 0,
  min_price: 0,
  max_price: 0,
  total_issues: 0,
  fresh_issues: 0,
  issue_type: "",
  listing_at: ["", ""],
  gen_holding_pre: 0,
  gen_holding_post: 0,
  opening_date: new Date(),
  closing_date: new Date(),
  basis_date: new Date(),
  init_refunds: new Date(),
  shares_to_demat: new Date(),
  listing_date: new Date(),
  promoter_holding_pre: 0,
  promoter_holding_post: 0,
  anchor_bid_date: new Date(),
  anchor_lockin_half: new Date(),
  anchor_lockin_rest: new Date(),
  pe: 0,
  market_cap: 0,
  roe: 0,
  roce: 0,
  eps: 0,
  ronw: 0,
  bse_code: "",
  bse_url: "",
  nse_code: "",
  nse_url: "",
  final_price: 0,
  pre_open_nse: "",
  pre_open_bse: "",
  company_address: "",
  company_phone: "",
  company_email: "",
  company_website: "",
  company_logo: "",
  registrar_address: "",
  registrar_phone: "",
  registrar_email: "",
  registrar_website: "",
  registrar_name: "",
  drhp: "",
  rhp: "",
  anchor_list: ["", ""],
  shares_in_lot: 0,
  dayend_price: 0,
  cutoffmandate: 0,
  defunct: false,
  retail_discount: 0,
  employee_discount: 0,
  anchor_portion: 0,
  debt: 0,
  priceband: 0,
  ofs: 0,
  allotment_date: new Date(),
  credit_of: "",
  time_upf: "",
  min_retail: 0,
  max_retail: 0,
  min_shni: 0,
  max_shni: 0,
  min_bhni: 0,
  max_bhni: 0,
  qib: "",
  nii_snii: 0,
  nii_bnii: 0,
  retail: 0,
  anchor_shares_offerred: 0,
  qib_shares_offerred: 0,
  nil_shares_offerred: 0,
  retail_shares_offerred: 0,
  objectIssueData: ""
}

export const initialCompanyFinance: CompanyFinanceType = {
    ipo_id: "",
    y2024: {
      assets: 0,
      revenue: 0,
      profit_after_tax: 0,
      networth: 0,
      reserves: 0,
      borrowing: 0,
    },
    y2023: {
      assets: 0,
      revenue: 0,
      profit_after_tax: 0,
      networth: 0,
      reserves: 0,
      borrowing: 0,
    },
    y2022: {
      assets: 0,
      revenue: 0,
      profit_after_tax: 0,
      networth: 0,
      reserves: 0,
      borrowing: 0,
    },
    y2021: {
      assets: 0,
      revenue: 0,
      profit_after_tax: 0,
      networth: 0,
      reserves: 0,
      borrowing: 0,
    },
    y2020: {
      assets: 0,
      revenue: 0,
      profit_after_tax: 0,
      networth: 0,
      reserves: 0,
      borrowing: 0,
    },
    y2019: {
      assets: 0,
      revenue: 0,
      profit_after_tax: 0,
      networth: 0,
      reserves: 0,
      borrowing: 0,
    }
}
  
export const initReview: ReviewsType = {
  ipo_id: "",
  review: ""
}

export const ipoTableFormat: string[] = [
  "id",
  "name",
  "series",
  "facevalue",
  "min_price",
  "max_price",
  "total_issue",
  "fresh_issue",
  "issue_type",
  "listing_at",
  "gen_holding_pre_issue",
  "gen_holding_post_issue",
  "opening_date",
  "closing_date",
  "basis_date",
  "initiation_of_refunds",
  "shares_to_demat",
  "listing_date",
  "promoter_holdings_preissue",
  "promoter_holdings_postissue",
  "anchor_bid_date",
  "anchor_lockinhalf",
  "anchor_lockinrest",
  "pe",
  "marketcap",
  "roe",
  "roce",
  "eps",
  "ronw",
  "bse_script_code",
  "nse_symbol",
  "final_price",
  "preopen_nse",
  "preopen_bse",
  "company_address",
  "company_phone",
  "company_email",
  "company_website",
  "registrar_address",
  "registrar_phone",
  "registrar_email",
  "registrar_website",
  "registrar_name",
  "drhp",
  "rhp",
  "anchor_list",
  "market_maker_portion",
  "share_in_lot",
];