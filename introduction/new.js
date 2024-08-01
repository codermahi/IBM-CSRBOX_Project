document.getElementById('learn-more').addEventListener('click', function() {
    window.location.href = '#about';
});

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    this.reset();
});
