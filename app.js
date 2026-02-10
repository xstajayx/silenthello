(function () {
  const accordion = document.querySelector('[data-accordion]');

  if (accordion) {
    const triggers = accordion.querySelectorAll('.accordion-trigger');

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const panelId = trigger.getAttribute('aria-controls');
        const panel = panelId ? document.getElementById(panelId) : null;

        if (!panel) {
          return;
        }

        trigger.setAttribute('aria-expanded', String(!isExpanded));
        panel.hidden = isExpanded;
      });

      trigger.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key !== 'ArrowDown' && key !== 'ArrowUp') {
          return;
        }

        event.preventDefault();
        const triggerArray = Array.from(triggers);
        const currentIndex = triggerArray.indexOf(trigger);
        const nextIndex =
          key === 'ArrowDown'
            ? (currentIndex + 1) % triggerArray.length
            : (currentIndex - 1 + triggerArray.length) % triggerArray.length;

        triggerArray[nextIndex].focus();
      });
    });
  }

  const samePageAnchors = document.querySelectorAll('a[href^="#"]');
  samePageAnchors.forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
