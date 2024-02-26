// script.js

const html = {
    orders: {
//Order 1
//----------------------------------------------------------------------------//
        1: {
            root: document.querySelector('[data-key="order1"]'),
            biscuits: document.querySelector('[data-key="order1"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order1"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order1"] .pancakes .count'),
            status: document.querySelector('[data-key="order1"] .status dd'),
        },
//Order 2
//----------------------------------------------------------------------------//
        2: {
            root: document.querySelector('[data-key="order2"]'),
            biscuits: document.querySelector('[data-key="order2"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order2"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order2"] .pancakes .count'),
            status: document.querySelector('[data-key="order2"] .status dd'),
        },
//Order 3
//----------------------------------------------------------------------------//
        3: {
            root: document.querySelector('[data-key="order3"]'),
            biscuits: document.querySelector('[data-key="order3"] .biscuits .count'),
            donuts: document.querySelector('[data-key="order3"] .donuts .count'),
            pancakes: document.querySelector('[data-key="order3"] .pancakes .count'),
            status: document.querySelector('[data-key="order3"] .status dd'),
        }
    }
}

//----------------------------------------------------------------------------//
html.orders[1].biscuits.innerText = data[1].biscuits
html.orders[1].donuts.innerText = data[1].donuts
html.orders[1].pancakes.innerText = data[1].pancakes
html.orders[1].status === 'true' ? 'Delivered' : 'Pending'

html.orders[2].biscuits.innerText = data[2].biscuits
html.orders[2].donuts.innerText = data[2].donuts
html.orders[2].pancakes.innerText = data[2].pancakes
html.orders[2].status === 'true' ? 'Delivered' : 'Pending'

html.orders[3].biscuits.innerText = data[3].biscuits
html.orders[3].donuts.innerText = data[3].donuts
html.orders[3].pancakes.innerText = data[3].pancakes
html.orders[3].status === 'true' ? 'Delivered' : 'Pending'


//---------------------...ooo000 END OF FILE 000ooo...------------------------//