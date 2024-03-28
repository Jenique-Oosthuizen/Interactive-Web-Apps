import { createOrderHtml, html, updateDraggingHtml, moveToColumn, } from './view.js'
import { createOrderData, updateDragging, state, COLUMNS, } from './data.js'
const { add, other, edit, help, columns } = html;
//Drag Over Event Handler for Column Area Detection and Update
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}
//----------------------------------------------------------------------------//
//Drag Start Event Handler
/**
 * Handles the drag start event for an element.
 * 
 * @param {Event} event - The drag start event.
 * @returns {void}
 */
const handleDragStart = (event) => {
    const orderId = event.target.dataset.id
    updateDragging({ source: orderId })
}
//----------------------------------------------------------------------------//
/**
 * Handles the drag end event.
 * 
 * @returns {void}
 */
const handleDragEnd = () => {
    updateDragging({ source: null, over: null })
}
//----------------------------------------------------------------------------//
/**
 * Toggles the visibility of the help overlay.
 * 
 * @returns {void}
 */
const handleHelpToggle = (event) => {
    const { target } = event;
    const isCancel = target === help.cancel;
  
    if (isCancel) {
      help.overlay.open = false;
    } else {
      help.overlay.open = true;
    }
  
    other.add.focus();
  };
//----------------------------------------------------------------------------//
/**
 * Toggles the visibility of the add overlay and resets its form if closed.
 * 
 * @returns {void}
 */
// if else satement, .reset, .focus
const handleAddToggle = () => {
const addButton = html.add.overlay
const isOpen = addButton.hasAttribute('open')
    if (isOpen) {
    addButton.removeAttribute('open')
    html.add.form.reset()
    } else {
        addButton.setAttribute('open', '')
        const firstInput = html.add.form.querySelector('input')
        if (firstInput) firstInput.focus()
    }
}
//----------------------------------------------------------------------------//
/**
 * Handles the form submission for adding a new order.
 * 
 * @param {Event} event - The form submission event.
 * @returns {void}
 */
const handleAddSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    const { title, table } = Object.fromEntries(formData)
    const newOrder = createOrderData({ title, table, column: 'ordered' })
    state.orders[newOrder.id] = newOrder

    const htmlOrder = createOrderHtml(newOrder)
    html.columns[newOrder.column].appendChild(htmlOrder)
    html.add.form.reset()

    html.add.overlay.open = false
    html.other.add.focus()
}
//----------------------------------------------------------------------------//
/**
 * Toggles the visibility of the edit overlay and populates its fields with order data.
 * 
 * @param {Event} event - The triggering event.
 * @returns {void}
 */
const handleEditToggle = (event) => {
    const orderId = event.target.closest('.order').dataset.id
    const order = state.orders[orderId]
    if (!order) return

    html.edit.title.value = order.title
    html.edit.table.value = order.table
    html.edit.column.value = order.column
    html.edit.id.value = orderId

    html.edit.overlay.open = !html.edit.overlay.open
}
//----------------------------------------------------------------------------//
/**
 * Handles the form submission for editing an existing order.
 * 
 * @param {Event} event - The form submission event.
 * @returns {void}
 */
const handleEditSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)

    const { title, table, column, id } = Object.fromEntries(formData)
    const order = state.orders[id]
    if (!order) return

    order.title = title
    order.table = table
    order.column = column

    const htmlOrder = document.querySelector(`[data-id="${id}"]`)
    if (htmlOrder) {
        htmlOrder.querySelector('[data-order-title]').textContent = title
        htmlOrder.querySelector('[data-order-table]').textContent = table
    }

    html.edit.overlay.open = false
}
//----------------------------------------------------------------------------//
/**
 * Deletes an order from the state and removes its corresponding HTML element.
 * 
 * @returns {void}
 */
const handleDelete = () => {
    const orderId = html.edit.id.value
    delete state.orders[orderId]
    const htmlOrder = document.querySelector(`[data-id="${orderId}"]`)
    if (htmlOrder) htmlOrder.remove()
    html.edit.overlay.open = false
}
//----------------------------------------------------------------------------//

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

help.cancel.addEventListener('click', handleHelpToggle)
other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}
//---------------------...ooo000 END OF FILE 000ooo...------------------------//