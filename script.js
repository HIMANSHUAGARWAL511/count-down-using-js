const endDate = "15 June 2024 1:28 PM"
document.getElementById("end-Date").innerText = endDate;

const EndDate = new Date(endDate)
console.log(EndDate)
const currDate = new Date();
console.log(currDate);
const diffe = EndDate - currDate
console.log("The remaing days is", Math.floor(diffe / 1000 / 3600 / 24))

console.log("The remaing hours is ", Math.floor(diffe / 1000 / 3600) % (24))
console.log("The remaing minutes is ", Math.floor((diffe / 1000 / 60) % (60)))
console.log("The remaing Seconds is ", Math.floor((diffe / 1000) % (60)))

function funct() {
    const EndDate = new Date(endDate)
    const currDate = new Date();

    const diff = EndDate - currDate;
    while (diff < 0) { return }
    document.getElementById("Day").value = Math.floor((diff / 1000) / (24 * 3600));

    document.getElementById("Hours").value = Math.floor((diff / 1000 / 3600) % (24));
    document.getElementById('Minutes').value = Math.floor((diff / 1000 / 60) % (60))
    document.getElementById('Seconds').value = Math.floor((diff / 1000) % (60))
}


funct();
setInterval(funct, 1000);

