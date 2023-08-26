export default function getView(role: string) {
    if (role === "admin") return "admin"
    else if (role === "data entry") return "datafeed"
    else return "auth"
}