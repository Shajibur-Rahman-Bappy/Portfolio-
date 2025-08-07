$(document).ready(function () {
  // Smooth scroll
  $("nav a").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top }, 500);
  });

  // Back to top button
  $("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Form submission (mock)
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    alert("Thanks for your message!");
    this.reset();
  });
});
