export default function getView(role: string) {
    if (role === "admin") return "ADMIN"
    else if (role === "data entry") return "DATA ENTRY"
    else return "auth"
}