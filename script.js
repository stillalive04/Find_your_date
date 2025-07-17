// Image paths
const images = {
    weekend: 'WhatsApp Image 2025-07-17 at 12.01.59 (2).jpeg',
    sundayEvening: 'WhatsApp Image 2025-07-17 at 12.01.59 (3).jpeg',
    weekday: [
        'WhatsApp Image 2025-07-17 at 12.01.59.jpeg',
        'WhatsApp Image 2025-07-17 at 12.01.59 (1).jpeg'
    ]
};

// Messages for different times
const messages = {
    weekend: "Weekend vibes! Time to relax and enjoy together! 💕",
    sundayEvening: "Sunday evening magic - the perfect time for romance! ✨",
    weekday: [
        "Monday motivation: Starting the week with love! 💖",
        "Tuesday thoughts: You make every day special! 🌟",
        "Wednesday wisdom: Halfway through the week, but my love for you is full! 💝",
        "Thursday thrill: Almost weekend, but my love for you never ends! 💕"
    ]
};

// Get modal elements
const modal = document.getElementById('dateModal');
const currentDateElement = document.getElementById('currentDate');
const dateImageElement = document.getElementById('dateImage');
const dateMessageElement = document.getElementById('dateMessage');

// Function to format date
function formatDate(date) {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
}

// Function to get current time period
function getTimePeriod() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = now.getHours();
    
    // Friday (5) or Saturday (6)
    if (day === 5 || day === 6) {
        return 'weekend';
    }
    
    // Sunday evening (6 PM onwards) or Monday morning (before 12 PM)
    if ((day === 0 && hour >= 18) || (day === 1 && hour < 12)) {
        return 'sundayEvening';
    }
    
    // Monday to Thursday
    if (day >= 1 && day <= 4) {
        return 'weekday';
    }
    
    // Default to weekday for other times
    return 'weekday';
}

// Function to get random image from weekday array
function getRandomWeekdayImage() {
    const randomIndex = Math.floor(Math.random() * images.weekday.length);
    return images.weekday[randomIndex];
}

// Function to get random weekday message
function getRandomWeekdayMessage() {
    const randomIndex = Math.floor(Math.random() * messages.weekday.length);
    return messages.weekday[randomIndex];
}

// Function to show date popup
function showDatePopup() {
    const now = new Date();
    const timePeriod = getTimePeriod();
    
    // Set current date
    currentDateElement.textContent = formatDate(now);
    
    // Set image based on time period
    let selectedImage;
    let selectedMessage;
    
    switch (timePeriod) {
        case 'weekend':
            selectedImage = images.weekend;
            selectedMessage = messages.weekend;
            break;
        case 'sundayEvening':
            selectedImage = images.sundayEvening;
            selectedMessage = messages.sundayEvening;
            break;
        case 'weekday':
            selectedImage = getRandomWeekdayImage();
            selectedMessage = getRandomWeekdayMessage();
            break;
        default:
            selectedImage = getRandomWeekdayImage();
            selectedMessage = getRandomWeekdayMessage();
    }
    
    // Set image and message
    dateImageElement.src = selectedImage;
    dateMessageElement.textContent = selectedMessage;
    
    // Show modal with animation
    modal.style.display = 'block';
    
    // Add some sparkle effect
    addSparkleEffect();
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to add sparkle effect
function addSparkleEffect() {
    const sparkles = ['✨', '💖', '💕', '💝', '💗', '💓'];
    const modalContent = document.querySelector('.modal-content');
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.position = 'absolute';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.fontSize = '2rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1001';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            
            modalContent.appendChild(sparkle);
            
            // Remove sparkle after animation
            setTimeout(() => {
                sparkle.remove();
            }, 1000);
        }, i * 200);
    }
}

// Add sparkle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Add some interactive effects to the button
document.addEventListener('DOMContentLoaded', function() {
    const dateButton = document.querySelector('.date-button');
    
    // Add click sound effect (optional)
    dateButton.addEventListener('click', function() {
        // Create a subtle ripple effect
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        
        dateButton.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle); 