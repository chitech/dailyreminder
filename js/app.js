//Set variables array to hold reminders
let reminders = [];

//Target the HTML id for reminders entered
const reminderList = document.querySelector('#reminders');

//Target Reminder Input
let reminderInput = document.querySelector('#inputReminderText');

//Target Reminder Add Button
const reminderAddBtn = document.querySelector('#add');

//Target Plus icon
const showEnterReminderInput = document.querySelector('#showEnterReminder');

const  enterReminder = document.querySelector('#enterReminder');

//Function to show reminder input
function showReminderInput() {
    enterReminder.style.display = 'block';
}
showEnterReminderInput.addEventListener('click', showReminderInput);

//Create function to add reminder
function addReminder (e) {
    e.preventDefault();
    //Get current value of input
    let reminderValue = reminderInput.value;
    reminders.push(reminderValue);
    reminderList.innerHTML = ''; 
    //Show reminders
    renderReminders();
    reminderInput.value = '';
    enterReminder.style.display = 'none';
   
}

//When button clicked run addReminder function
reminderAddBtn.addEventListener('click', addReminder);

//Load Reminders 
function renderReminders () {
    //Loop thru reminders
    reminders.forEach((reminder, i) => {
        let currentHTML = reminderList.innerHTML;
        let newHTML = (
            `<div class="reminderItem">
            <p> ${i + 1}. ${reminder}</p>
            <div class="actions">
            <i onclick = "editReminder(${i})" class="fa-regular fa-pen-to-square"></i>
            <i onclick = "removeReminder(${i})" class="fa-solid fa-trash"></i>
            </div>
            </div>`

        )
        let updatedHTML = currentHTML + newHTML;
        reminderList.innerHTML = updatedHTML;
    })

}
//Run reminder on page load
renderReminders();

//Remove reminder 
function removeReminder(index) {
    //Find index of current item
    reminders = reminders.filter((reminder, i) => {
        return i === index ? false : true
    })

    reminderList.innerHTML = '';
    renderReminders();
    reminderInput.value = '';
}

//Edit reminder
function editReminder(index) {
    const currElementText = document.querySelector(`#reminders div:nth-child(${index + 1}) p`).innerText;
    const splicedText = currElementText.slice(3); //get rid of the number before item
    removeReminder(index);
    showReminderInput();
    reminderInput.value = splicedText;
   
    
 
}