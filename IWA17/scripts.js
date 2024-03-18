// scripts.js
//Array of Months
//----------------------------------------------------------------------------//
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
//Function to Get the Number of Days in a Month
//----------------------------------------------------------------------------//
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 
//Function to create an Array of Sequential Numbers up to a Given Length
//----------------------------------------------------------------------------//
const createArray = (length) => {
    const result = []

    for (let i = 0; i <= MONTHS.length - 1; i++) {
        result.push(i)
    }

    return result
}
//Function to Generate Data Structure Representing Calendar Weeks with Days of the Month
//----------------------------------------------------------------------------//
const createData = () => {
    const current = new Date()
    current.setDate(1) // Set the date to the first day of the month

    const startDay = current.getDay() // Get the day of the week for the first day
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)// Array of weeks
    const days = createArray(7) // Array of days
    const result = []

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

            for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
            const day = (dayIndex - startDay) + (weekIndex * 7) + 1
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : '',
            })
        }
    }

    return result
}
//Function to Generate HTML Table Cell with Class and Value
//----------------------------------------------------------------------------//
const addCell = (existing, classString, value) => {
    const result = /* html */ `
        <td ${existing}></td>
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}
//Function to Generate HTML Table Rows Based on Data
//----------------------------------------------------------------------------//
const createHtml = (data) => {
    let result = ''

    for (const { week, days } of data) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
        for (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7 // 1, 7
            const isAlternate = week % 2 === 0
            
			let classString = 'table__cell'

            if (isToday) classString += ' table__cell_today'
            if (isWeekend) classString += ' table__cell_weekend'
            if (isAlternate) classString += ' table__cell_alternate'
            inner = addCell(inner, classString, value)
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above
//Code to Update HTML Content Dynamically Based on Current Date and Generated Data
//----------------------------------------------------------------------------//
const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)
//---------------------...ooo000 END OF FILE 000ooo...------------------------//