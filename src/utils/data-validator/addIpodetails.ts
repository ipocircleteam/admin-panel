import { CompanyFinanceType, IpoDetailsType } from "../../types"

export default async function ValidateIpoDetails(activeIpo: {
    ipodetails: IpoDetailsType,
    companyFinances: CompanyFinanceType
}) {
    activeIpo.ipodetails.opening_date = new Date(activeIpo.ipodetails.opening_date)
    activeIpo.ipodetails.closing_date = new Date(activeIpo.ipodetails.closing_date)
    activeIpo.ipodetails.basis_date = new Date(activeIpo.ipodetails.basis_date)
    activeIpo.ipodetails.init_refunds = new Date(activeIpo.ipodetails.init_refunds)
    activeIpo.ipodetails.shares_to_demat = new Date(activeIpo.ipodetails.shares_to_demat)
    activeIpo.ipodetails.listing_date = new Date(activeIpo.ipodetails.listing_date)
    activeIpo.ipodetails.anchor_bid_date = new Date(activeIpo.ipodetails.anchor_bid_date)
    activeIpo.ipodetails.anchor_lockin_half = new Date(activeIpo.ipodetails.anchor_lockin_half)
    activeIpo.ipodetails.anchor_lockin_rest = new Date(activeIpo.ipodetails.anchor_lockin_rest)
    activeIpo.ipodetails.allotment_date = new Date(activeIpo.ipodetails.allotment_date)
    activeIpo.ipodetails.cutoffmandate = new Date(activeIpo.ipodetails.cutoffmandate)
    activeIpo.ipodetails.time_upf = new Date(activeIpo.ipodetails.time_upf)


    return activeIpo
}