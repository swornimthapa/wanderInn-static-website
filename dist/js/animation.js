let t1 = gsap.timeline();
t1.from("#logo , #navbar ul li, #chat , #user", {
  y: -60,
  duration: 0.3,
  delay: 0.2,
  stagger: 0.2,
});

t1.to(".line", {
  duration: 0.5,
  width: "5rem",
});
t1.set(".reveal.up.search .parent", { overflow: "visible" }).to(
  ".reveal.up.search .parent .child",
  {
    duration: 0.2,
    y: "0%",
    ease: Circ.easeInOut,
  }
);

reveal("home-page", "home-page");
reveal("popular-destinations", "popular-destinations");
revealNav("popular-destinations", "popular-destinations");
reveal("photo-grid", "photo-grid");
reveal("featured-section", "featured-section");
revealNav("featured-section", "featured-section");
reveal("testimonials1", "testimonials1");
reveal("testimonials2", "testimonials2");

function reveal(containerClass, triggerClass) {
  gsap.to(`.${containerClass} .reveal.up .parent .child `, {
    duration: 0.6,
    y: "0%",
    ease: Circ.easeInOut,
    stagger: 0.1,
    scrollTrigger: {
      trigger: `.${triggerClass}`,
      scroller: "body",
    },
  });
}
function revealNav(containerClass, triggerClass) {
  gsap.from(`.${containerClass} ul li`, {
    y: -60,
    duration: 0.3,
    delay: 0.2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: `.${triggerClass}`,
      scroller: "body",
    },
  });
}
let allImages = document.querySelectorAll(".zoom");

for (let temp of allImages) {
  temp.addEventListener("mouseover", () => {
    gsap.to(temp, {
      duration: 0.3,
      scale: 1.04,
    });
  });

  temp.addEventListener("mouseleave", () => {
    gsap.to(temp, {
      duration: 0.3,
      scale: 1,
    });
  });
}
