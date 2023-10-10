document.addEventListener('DOMContentLoaded', () => {
    const slots = document.querySelectorAll('.slot');
    const modal = document.getElementById('scheduleModal');
    const scheduleForm = document.getElementById('scheduleForm');
    const scheduleList = document.querySelector('.schedule-list');

    let selectedTime = '';

    slots.forEach(slot => {
        slot.addEventListener('click', () => {
            const availableSlotsElement = slot.querySelector('.available-slots');
            const availableSlots = parseInt(availableSlotsElement.innerText);
            
            if (availableSlots > 0) {
                selectedTime = slot.dataset.time;
                modal.style.display = 'block';
            } else {
                alert('No available slots for this timing!');
            }
        });
    });

    scheduleForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = e.target.querySelector('#name').value;
        const email = e.target.querySelector('#email').value;

        const scheduledItem = document.createElement('div');
        scheduledItem.innerHTML = `
            <strong>${selectedTime}</strong> - 
            ${name} (${email}) 
            <button onclick="cancelMeeting(this, '${selectedTime}')">Cancel</button>
        `;

        scheduleList.appendChild(scheduledItem);

        // Decrease the available slot count
        const slotElement = [...slots].find(slot => slot.dataset.time === selectedTime);
        const availableSlotsElement = slotElement.querySelector('.available-slots');
        const availableSlots = parseInt(availableSlotsElement.innerText);
        
        if (availableSlots === 1) {
            slotElement.style.display = 'none'; // Hide slot when no available slots
        }

        availableSlotsElement.innerText = `${availableSlots - 1} available`;

        // Reset form and hide modal
        e.target.reset();
        modal.style.display = 'none';
    });
});

function cancelMeeting(buttonElement, time) {
    const slotElement = document.querySelector(`.slot[data-time="${time}"]`);
    const availableSlotsElement = slotElement.querySelector('.available-slots');
    const availableSlots = parseInt(availableSlotsElement.innerText);
    
    if (availableSlots === 0) {
        slotElement.style.display = 'inline-block'; // Show slot when it has available slots
    }
    
    availableSlotsElement.innerText = `${availableSlots + 1} available`;

    buttonElement.parentElement.remove();
}