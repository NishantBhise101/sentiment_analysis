/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/* function selectPlatform(platformElement) {
    const selectedPlatform = platformElement.getAttribute("data-name");
    document.getElementById("selectedPlatform").textContent = `Selected Platform: ${selectedPlatform}`;
    
    // Optionally, you can add a visual indication of selection
    const platforms = document.querySelectorAll('.svg_name');
    platforms.forEach(platform => platform.style.border = 'none'); // Reset border
    
    // platformElement.style.border = '2px solid #007BFF'; // Highlight selected platform
}*/

let selectedPlatformElement = null; // Variable to store the currently selected platform

function selectPlatform(platformElement) {
    // Deselect the currently selected platform if it exists
    if (selectedPlatformElement) {
        selectedPlatformElement.classList.remove('selected');
    }

    // Get the selected platform's name and display it
    const selectedPlatform = platformElement.getAttribute("data-name");
    
    // Update the display with the platform name in a different color
    document.getElementById("selectedPlatform").innerHTML = `Selected Platform: <span class="platform-name">${selectedPlatform}</span>`;

    // Highlight the newly selected platform
    platformElement.classList.add('selected');
    selectedPlatformElement = platformElement; // Update the selected platform
}

// Add click event listeners to platforms
document.querySelectorAll('.platform').forEach(platform => {
    platform.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from bubbling up
        selectPlatform(this); // Select the clicked platform
    });
});

