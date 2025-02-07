document.addEventListener("DOMContentLoaded", () => {
    // Sample player reviews
    const reviews = [
        "🔥 Amazing game! The AI is super realistic.",
        "⚽ Best career mode ever! I love building my team.",
        "🎮 Online play is so smooth! Highly recommended."
    ];

    const reviewsContainer = document.getElementById("reviews-container");
    reviewsContainer.innerHTML = reviews.map(review => `<p>${review}</p>`).join("");

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("response-message").innerText = "Thank you for your message!";
    });
});
