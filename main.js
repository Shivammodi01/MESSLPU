const modal = document.getElementById('successModal');
const scannerModal = document.getElementById('scannerModal');
const closeBtns = document.querySelectorAll('.close');
let scanner = null; // Global scanner variable

function showModal(modal) {
    modal.style.display = 'flex';
}

function hideModal(modal) {
    modal.style.display = 'none';
}

// Function to initialize QR scanner
function initScanner() {
    // Stop any existing scanner instance
    if (scanner) {
        scanner.stop().catch(err => console.log('Error stopping scanner:', err));
    }
    scanner = new Html5Qrcode("scanner");
    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        (decodedText) => {
            // Update success modal with scanned data
            const successMessage = document.querySelector('#successModal h2');
            successMessage.textContent = `Successfully Mess Enrolled! Scanned: ${decodedText}`;
            scanner.stop();
            scanner = null;
            hideModal(scannerModal);
            showModal(modal);
        },
        (error) => {
            console.log(`QR Code scanning error: ${error}`);
        }
    ).catch(err => {
        alert(`Unable to start scanning: ${err}. Please ensure camera access is allowed.`);
        console.log(`Unable to start scanning: ${err}`);
    });
}

// Show scanner modal on meal button click
document.querySelectorAll('.meal-btn').forEach(button => {
    button.addEventListener('click', () => {
        showModal(scannerModal);
        initScanner();
    });
});

// Close modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalToClose = btn.closest('.modal');
        hideModal(modalToClose);
        if (scanner) {
            scanner.stop().catch(err => console.log('Error stopping scanner:', err));
            scanner = null;
        }
    });
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) hideModal(modal);
    if (event.target === scannerModal) {
        hideModal(scannerModal);
        if (scanner) {
            scanner.stop().catch(err => console.log('Error stopping scanner:', err));
            scanner = null;
        }
    }
});


// document.addEventListener("DOMContentLoaded", () => {
//     let scanner;
//     const scannerModal = document.getElementById('scannerModal');
//     const successModal = document.getElementById('successModal');
//     const closeModalButtons = document.querySelectorAll('.close');

//     // Function to show modal
//     function showModal(modal) {
//         modal.style.display = 'block';
//     }

//     // Function to close modals
//     closeModalButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             if (scanner) {
//                 scanner.stop().catch(err => console.log('Error stopping scanner:', err));
//             }
//             modal.style.display = 'none';
//         });
//     });

//     // Initialize QR code scanner
//     function initScanner() {
//         if (scanner) {
//             scanner.stop().catch(err => console.log('Error stopping scanner:', err));
//         }

//         // Create a new scanner instance
//         scanner = new Html5Qrcode("scanner");
//         scanner.start(
//             { facingMode: "environment" },
//             {
//                 fps: 10,
//                 qrbox: 250
//             },
//             (decodedText) => {
//                 console.log(`QR Code detected: ${decodedText}`);
//                 showModal(successModal);  // Show success modal
//                 scanner.stop().catch(err => console.log('Error stopping scanner:', err));
//             },
//             (error) => {
//                 console.log(`QR Code scan error: ${error}`);
//             }
//         ).catch(err => console.log('Scanner initialization error:', err));
//     }

//     // Start scanner on button click
//     document.querySelectorAll('.meal-btn').forEach(button => {
//         button.addEventListener('click', () => {
//             showModal(scannerModal);
//             initScanner();
//         });
//     });
// });
