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
  face_value: number;
  min_price: number;
  max_price: number;
  total_issue: number;
  fresh_issue: number;
  issue_type: string;
  listing_at: string[];
  gen_holding_pre: number;
  gen_holding_post: number;
  opening_date: Date;
  closing_date: Date;
  basis_date: Date;
  init_refunds: Date;
  shares_to_demat: Date;
  listing_date: Date;
  promoter_holding_pre: number;
  promoter_holding_post: number;
  anchor_bid_date: Date;
  anchor_lockin_half: Date;
  anchor_lockin_rest: Date;
  pe: number;
  market_cap: number;
  roe: number;
  roce: number;
  eps: number;
  ronw: number;
  bse_code: string;
  bse_url: string;
  nse_code: string;
  nse_url: string;
  final_price: number;
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
  shares_in_lot: number;
  dayend_price: number;
  cutoffmandate: Date;
  defunct: boolean;
  retail_discount: number;
  employee_discount: number;
  anchor_portion: number;
  debt: number;
  priceband: number;
  ofs: number;
  allotment_date: Date;
  credit_of: string;
  time_upf: Date;
  min_retail_lots: number;
  max_retail_lots: number;
  min_shni_lots: number;
  max_shni_lots: number;
  min_bhni_lots: number;
  max_bhni_lots: number;
  min_retail_shares: number;
  max_retail_shares: number;
  min_shni_shares: number;
  max_shni_shares: number;
  min_bhni_shares: number;
  max_bhni_shares: number;
  min_retail_price: number;
  max_retail_price: number;
  min_shni_price: number;
  max_shni_price: number;
  min_bhni_price: number;
  max_bhni_price: number;
  qib: string;
  nii_snii: number;
  nii_bnii: number;
  retail: number;
  anchor_shares_offerred: number;
  qib_shares_offerred: number;
  nil_shares_offerred: number;
  retail_shares_offerred: number;
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
