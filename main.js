<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mess Coupon</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="header">
            <span class="back-arrow">←</span>
            <span class="title">Mess Coupon</span>
            <span class="meal-history">Meal History</span>
        </div>
        <div class="profile-card">
            <div class="profile-image">
                <img src="image.png" alt="Profile Picture">
            </div>
            <h2 class="name">Shivam Modi</h2>
            <div class="info">
                <p><strong>Father's Name</strong><br>Rajendra Kumar Barnwal (7398425856)</p>
                <p><strong>Mother's Name</strong><br>Chinta Devi (917398425856)</p>
                <p><strong>Program Name</strong><br>P132:B.Tech. (Computer Science and Engineering) (2023)</p>
                <p><strong>Hostel</strong><br>Boys Hostel-04- A516-Bed C (Std Non-AC 4 Seater)</p>
            </div>
        </div>
        <div class="meal-options">
            <p class="instruction">Tap on the meal name to scan and avail food.</p>
            <div class="buttons">
                <button class="meal-btn">Breakfast →</button>
                <button class="meal-btn">Lunch →</button>
                <button class="meal-btn">Dinner →</button>
            </div>
        </div>
    </div>

    <!-- Modal for scanning success -->
    <div id="successModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Successfully Mess Enrolled!</h2>
            <video class="success-gif" loop autoplay muted>
                <source src="gif.mp4" type="video/mp4">
            </video>
        </div>
    </div>

    <!-- Modal for QR scanner -->
    <div id="scannerModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Scan Your QR Code</h2>
            <!-- Updated: Use <div> instead of <video> for scanner -->
            <div id="scanner" class="scanner"></div>
        </div>
    </div>

    <!-- QR Code Library -->
    <script src="https://unpkg.com/html5-qrcode"></script>
    <!-- Main JavaScript -->
    <script src="main.js"></script>
</body>

</html>
