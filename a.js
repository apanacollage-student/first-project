
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const shopName = document.getElementById('shop-name').value;
    const message = document.getElementById('message').value;
    
    // Demo alert; integrate with email service for real use.
    alert(`Thanks, ${name}! We'll reach out soon for "${shopName}".`);
    
    this.reset();
});