export const statusColor = (status) => {
    console.log(status);
    if (status === "Pending" || status === "Pending")
        return "orange";
    else if (status === "Confirm" || status === "confirm")
        return "green";
    else if (status === "completed" || status === "Completed")
        return "blue";
    else if (status === "Cancelled" || status === "Cancelled")
        return "red";
    else
        return "cyan"

}