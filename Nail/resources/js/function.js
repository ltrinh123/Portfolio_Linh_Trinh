// Create References to the Dropdown's
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['---', 'Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
    ' Dec'
];
const days = ['---', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
    '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
    '30', '31'
];

// Months are always the same
(function poplateMonths() {
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    monthSelect.value = "---";
})();
// Months are always the same
(function poplateDays() {
    for (let i = 0; i < days.length; i++) {
        const option = document.createElement('option');
        option.textContent = days[i];
        daySelect.appendChild(option);
    }
    daySelect.value = "---";
})();

// let previousDay;

// function poplateDays(month) {
//     // Delete all of the children of the day dropdown
//     // If they do exist
//     while (daySelect.firstChild) {
//         daySelect.removeChild(daySelect.firstChild);
//     }
//     // Holds the number of days in the month
//     let dayNum;

//     if (month === "January" || month === 'March' || month === 'May' || month === 'July' ||
//         month === 'August' || month === 'October' || month === 'December') {
//         dayNum = 31;
//     } else if (month === 'April' || month === 'June' || month === 'September' || month === 'November') {
//         dayNum = 30;
//     } else {
//         // Check for a leap year
//         if (new Date(year, 1, 29).getMonth() === 1) {
//             dayNum = 29;
//         } else {
//             dayNum = 28;
//         }
//     }


//     // Insert the correct days into the day <select>
//     for (let i = 1; i <= dayNum; i++) {
//         const option = document.createElement("option");
//         option.textContent = i;
//         daySelect.appendChild(option);
//     }
//     if (previousDay) {
//         daySelect.value = previousDay;
//         if (daySelect.value === "") {
//             daySelect.value = previousDay - 1;
//         }
//         if (daySelect.value === "") {
//             daySelect.value = previousDay - 2;
//         }
//         if (daySelect.value === "") {
//             daySelect.value = previousDay - 3;
//         }
//     }
// }

// function populateYears() {
//     // Get the current year as a number
//     let year = new Date().getFullYear();

//     // Make the previous 100 years be an option
//     for (let i = 0; i < 101; i++) {
//         const option = document.createElement("option");
//         option.textContent = year - i;
//         yearSelect.appendChild(option);
//     }
// }

// poplateDays(monthSelect.value);

// monthSelect.onchange = function() {
//     poplateDays(monthSelect.value);
// }

// daySelect.onchange = function() {
//     previousDay = daySelect.value;
// }

// When the user scrolls down 20px from the top of the document, slide down the navbar
// select.onscroll = function() { scrollFunction() };

// function scrollFunction() {
//     if (document.select.scrollTop > 10 || document.documentElement.scrollTop > 20) {
//         document.getElementById("select").style.top = "0";
//     } else {
//         document.getElementById("select").style.top = "-50px";
//     }
// }