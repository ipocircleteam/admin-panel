export type UserReducerType = {
  user: {
    email: string;
    role: string;
    view: string;
  };
};

export type UserAuthData = {
  email: String;
  password: String;
  role: String;
};

export type IpoDetailsType = {
  id: string;
  name: string;
  series: string;
  description: string;
  face_value: string;
  min_price: string;
  max_price: string;
  total_issue: string;
  fresh_issue: string;
  issue_type: string;
  listing_at: string[];
  gen_holding_pre: string;
  gen_holding_post: string;
  opening_date: Date;
  closing_date: Date;
  basis_date: Date;
  init_refunds: Date;
  shares_to_demat: Date;
  listing_date: Date;
  promoter_holding_pre: string;
  promoter_holding_post: string;
  anchor_bid_date: Date;
  anchor_lockin_half: Date;
  anchor_lockin_rest: Date;
  pe: string;
  market_cap: string;
  roe: string;
  roce: string;
  eps: string;
  ronw: string;
  bse_code: string;
  bse_url: string;
  nse_code: string;
  nse_url: string;
  final_price: string;
  pre_open_nse: string;
  pre_open_bse: string;
  company_address: string;
  company_phone: string;
  company_email: string;
  company_website: string;
  company_logo: string;
  registrar_address: string;
  registrar_phone: string;
  registrar_email: string;
  registrar_website: string;
  registrar_name: string;
  drhp: string;
  rhp: string;
  anchor_list: string[];
  shares_in_lot: string;
  dayend_price: string;
  cutoffmandate: Date;
  defunct: boolean;
  retail_discount: string;
  employee_discount: string;
  anchor_portion: string;
  debt: string;
  priceband: string;
  ofs: string;
  allotment_date: Date;
  credit_of: string;
  time_upf: Date;
  min_retail_lots: string;
  max_retail_lots: string;
  min_shni_lots: string;
  max_shni_lots: string;
  min_bhni_lots: string;
  max_bhni_lots: string;
  min_retail_shares: string;
  max_retail_shares: string;
  min_shni_shares: string;
  max_shni_shares: string;
  min_bhni_shares: string;
  max_bhni_shares: string;
  min_retail_price: string;
  max_retail_price: string;
  min_shni_price: string;
  max_shni_price: string;
  min_bhni_price: string;
  max_bhni_price: string;
  qib: string;
  nii_snii: string;
  nii_bnii: string;
  retail: string;
  anchor_shares_offerred: string;
  qib_shares_offerred: string;
  nil_shares_offerred: string;
  retail_shares_offerred: string;
  objectIssueData: string;
};

interface CompFin_VALUE {
  assets: number;
  revenue: number;
  profit_after_tax: number;
  networth: number;
  reserves: number;
  borrowing: number;
}

export type CompanyFinanceType = {
  ipo_id: string;
  y2024: CompFin_VALUE;
  y2023: CompFin_VALUE;
  y2022: CompFin_VALUE;
  y2021: CompFin_VALUE;
  y2020: CompFin_VALUE;
  y2019: CompFin_VALUE;
};

export type ReviewsType = {
  ipo_id: string;
  review: string;
}

export type IpolistType = {
  name: string;
  id: string;
};
