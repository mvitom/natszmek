
/*$(window).on("scroll", function() {
    if ($(this).scrollTop() <= 425) {}
84eedda8-da22-4b47-914c-84a0ac73b4bb*/
function sendEmail(){
  Email.send({
      SecureToken :'34cad3d4-02ea-42ae-a2bf-426d2a55e8a3',
      To : 'natalieszmekov@gmail.com',
      From : 'natalieszmekov@gmail.com',
      Subject : "New Contact Form",
      Body : 
        'jméno: '+document.getElementById('name').value +
        '<br/>email: '+ document.getElementById('email').value +
        '<br/>telefon: '+ document.getElementById('phone').value +
        '<br/>zpráva: '+document.getElementById('message').value
  }).then(
  message => alert(message)
  );
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle('show', entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));










document.getElementById('produkt2').addEventListener('mouseenter', function() {
  this.classList.add('shadow');
});

// Optionally, you can remove the class on mouse leave
document.getElementById('produkt2').addEventListener('mouseleave', function() {
  this.classList.remove('shadow');
});
document.getElementById('produkt3').addEventListener('mouseenter', function() {
  this.classList.add('shadow');
});

// Optionally, you can remove the class on mouse leave
document.getElementById('produkt3').addEventListener('mouseleave', function() {
  this.classList.remove('shadow');
});
document.getElementById('produkt1').addEventListener('mouseenter', function() {
  this.classList.add('shadow');
});

// Optionally, you can remove the class on mouse leave
document.getElementById('produkt1').addEventListener('mouseleave', function() {
  this.classList.remove('shadow');
});