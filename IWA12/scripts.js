// Object for html buttons
//----------------------------------------------------------------------------//
const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
//Book 1
//----------------------------------------------------------------------------//
const book1 = {
    status: document.querySelector('#book1 .status'),
    reserve: document.querySelector('#book1 .reserve'),
    checkout: document.querySelector('#book1 .checkout'),
    checkin: document.querySelector('#book1 .checkin'),
}

//Book 2
//----------------------------------------------------------------------------//
const book2 = {
    status: document.querySelector('#book2 .status'),
    reserve: document.querySelector('#book2 .reserve'),
    checkout: document.querySelector('#book2 .checkout'),
    checkin: document.querySelector('#book2 .checkin'),
}

//Book 3
//----------------------------------------------------------------------------//
const book3 = {
    status: document.querySelector('#book3 .status'),
    reserve: document.querySelector('#book3 .reserve'),
    checkout: document.querySelector('#book3 .checkout'),
    checkin: document.querySelector('#book3 .checkin'),
}

//Enable or disable buttons based on the status/properties in the STATUS_MAP object
//----------------------------------------------------------------------------//
book1.status.style.color = STATUS_MAP.overdue.color
book1.reserve = STATUS_MAP.overdue.canReserve ? 'enabled' : 'disabled'
book1.checkout = STATUS_MAP.overdue.canCheckout ? 'enabled' : 'disabled'
book1.checkin = STATUS_MAP.overdue.canCheckIn ? 'enabled' : 'disabled'

book2.status.style.color = STATUS_MAP.reserved.color,
book2.reserve = STATUS_MAP.reserved.canReserve ? 'enabled' : 'disabled'
book2.checkout = STATUS_MAP.reserved.canCheckout ? 'enabled' : 'disabled'
book2.checkin = STATUS_MAP.reserved.canCheckIn ? 'enabled' : 'disabled'

book3.status.style.color = STATUS_MAP.shelf.color,
book3.reserve = STATUS_MAP.shelf.canReserve ? 'enabled' : 'disabled'
book3.checkout = STATUS_MAP.shelf.canCheckout ? 'enabled' : 'disabled'
book3.checkin = STATUS_MAP.shelf.canCheckIn ? 'enabled' : 'disabled'

//Changing buttons color
//----------------------------------------------------------------------------//
book1.reserve.style.color = 'black'
book1.checkout.style.color = 'black'
book1.checkin.style.color = 'grey'

book2.reserve.style.color = 'black'
book2.checkout.style.color = 'black'
book2.checkin.style.color = 'grey'

book3.reserve.style.color = 'black'
book3.checkout.style.color = 'black'
book3.checkin.style.color = 'grey'

//---------------------...ooo000 END OF FILE 000ooo...------------------------//

/*
book1.status.style.color = STATUS_MAP.overdue.color;
book1.reserve.disabled = !STATUS_MAP.overdue.canReserve;
book1.checkout.disabled = !STATUS_MAP.overdue.canCheckout;
book1.checkin.disabled = !STATUS_MAP.overdue.canCheckIn;
*/