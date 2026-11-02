/* Animations for michaelzuzee.github.io
   Safe by design. If this script fails, the page still shows everything. */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Reading progress bar along the top of the page */
  var bar = document.createElement("div");
  bar.className = "mz-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  function updateBar() {
    var root = document.documentElement;
    var max = root.scrollHeight - root.clientHeight;
    var pct = max > 0 ? (root.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateBar, { passive: true });
  window.addEventListener("resize", updateBar);
  updateBar();

  if (reduce) { return; }

  /* 2. Sections fade up as they scroll into view */
  if ("IntersectionObserver" in window) {
    var targets = document.querySelectorAll(".page__content > *, .archive__item");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("mz-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });

    Array.prototype.forEach.call(targets, function (el, i) {
      el.classList.add("mz-reveal");
      el.style.transitionDelay = (Math.min(i % 6, 5) * 40) + "ms";
      el.addEventListener("transitionend", function clear() {
        el.style.transitionDelay = "";
        el.removeEventListener("transitionend", clear);
      });
      observer.observe(el);
    });
  }

  /* 3. Rotating keywords (only where the page contains #mz-rotator) */
  var rotator = document.getElementById("mz-rotator");
  if (rotator) {
    var words = (rotator.getAttribute("data-words") || "").split("|");
    var index = 0;
    if (words.length > 1) {
      setInterval(function () {
        rotator.classList.add("mz-out");
        setTimeout(function () {
          index = (index + 1) % words.length;
          rotator.textContent = words[index];
          rotator.classList.remove("mz-out");
        }, 350);
      }, 2800);
    }
  }
})();
