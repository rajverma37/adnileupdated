// mobile , destop , video adv

  const boxes = document.querySelectorAll('.ad-box');
  const sections = document.querySelectorAll('.content-section');

  // Scroll to section on click
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      document.getElementById(box.dataset.target).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Highlight active box while scrolling
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    boxes.forEach(box => {
      box.classList.remove('active');
      if (box.dataset.target === current) {
        box.classList.add('active');
      }
    });
  });


  // mobile destop video navigator
 
  // ----- Scroll on click -----
  const navBoxes = document.querySelectorAll('.nav-box');

  navBoxes.forEach(box => {
    box.addEventListener('click', () => {
      // optional: remove/add active class immediately for snappier feedback
      navBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      const targetId = box.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) return;

      // Use scrollIntoView with offset handled by CSS scroll-margin-top on target sections
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ----- Scrollspy using IntersectionObserver -----
  const detailSections = document.querySelectorAll('#sectionDetails .detail-box');

  // Intersection options: trigger when ~40% of section is visible
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0.35, 0.6] // you'll get callbacks around these intersection ratios
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        // Update nav boxes: add active when this section is in view
        navBoxes.forEach(box => {
          if (box.dataset.target === id) {
            box.classList.add('active');
          } else {
            box.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  detailSections.forEach(sec => observer.observe(sec));

  // ----- Footer Year -----
  const amYearEl = document.getElementById('am-year');
  if (amYearEl) {
    amYearEl.textContent = new Date().getFullYear();
  }




  // code in footer 

    document.getElementById('am-year').textContent = new Date().getFullYear();
