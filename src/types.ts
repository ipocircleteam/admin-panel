export type UserReducerType = {
    user: {
    email: string
    role: string
    view: string
    }
}

export type IpoDetailsType = {
    id: string
    name: string
    series: string
    facevalue: number
    min_price: number
    max_price: number
    total_issue: number
    fresh_issue: number
    issue_type: string
    listing_at: string
    gen_holding_pre_issue: number
    gen_holding_post_issue: number
    opening_date: string
    closing_date: string
    basis_date: string
    initiation_of_refunds: string
    shares_to_demat: string
    listing_date: string
    promoter_holdings_preissue: number
    promoter_holdings_postissue: number
    anchor_bid_date: string
    anchor_lockinhalf: string
    anchor_lockinrest: string
    share_offerred_anchor: number
    portion_offerred_anchor: number
    pe: number
    marketcap: number
    roe: number
    roce: number
    eps: number
    ronw: number
    bse_script_code: string
    nse_symbol: string
    final_price: number
    preopen_nse: string
    preopen_bse: string
    company_address: string
    company_phone: string
    company_email: string
    company_website: string
    registrar_address: string
    registrar_phone: string
    registrar_email: string
    registrar_website: string
    registrar_name: string
    drhp: string
    rhp: string
    anchor_list: string
    market_maker_portion: number
    share_in_lot: number
}

export type IpoReducerType = {
    ipo: {
        ipoDetails: IpoDetailsType
        ipoLotsDetails: IpoLotsType
        companyFinances: CompanyFinancesType
        subscriptions: SubscriptionsType
        status: string
        message: string
        error: boolean
    }
}

export type IpoLotsType = {
    ipo_id: number
    category: string
    lots_min: number
    lots_max: number
}

export type CompanyFinancesType = {
    ipo_id: number
    period: string
    assets: number
    revenue: number
    profit_after_tax: number
    net_worth: number
    reserves: number
    borrowing: number
}

export type SubscriptionsType = {
    ipo_id: number
    category: string
    shares_offered: number
    shares_bid: number
    updated_at: string
}