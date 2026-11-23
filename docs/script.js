
document.addEventListener("DOMContentLoaded", function () {

  // نمایش تدریجی بخش‌های سایت هنگام پیمایش
  const elements = document.querySelectorAll(
    ".service-card, .about, .contact"
  );

  elements.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    elements.forEach(function (element) {
      observer.observe(element);
    });
  } else {
    elements.forEach(function (element) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
  }

  // نمایش سال جاری در پایین سایت
  const footerText = document.querySelector("footer p:first-child");

  if (footerText) {
    footerText.textContent =
      "© " + new Date().getFullYear() + " | تمامی حقوق این وب‌سایت محفوظ است.";
  }

});
