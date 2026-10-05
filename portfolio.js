(() => {
  'use strict';
  const translations = [];
  // Keep the original text nodes so switching languages preserves links and emphasis.
  function translate(selector, english, attribute) {
    const elements = [...document.querySelectorAll(selector)];
    elements.forEach((element, index) => {
      const en = Array.isArray(english) ? english[index] : english;
      if (en === undefined) return;
      if (attribute) {
        translations.push({ element, attribute, ru: element.getAttribute(attribute), en });
        return;
      }
      const node = [...element.childNodes].find((child) => child.nodeType === Node.TEXT_NODE && child.textContent.trim());
      if (node) {
        const original = node.textContent;
        translations.push({ node, ru: original, en: original.match(/^\s*/)[0] + en + original.match(/\s*$/)[0] });
      }
    });
  }
  const creative = location.pathname.includes('/creative/');
  const home = document.body.classList.contains('home-page');
  const design = document.body.classList.contains('design-page');
  translate('title', home ? (creative ? 'Design portfolio — Kirill Petukhov' : 'Development & design portfolio — Kirill Petukhov') : design ? 'Video thumbnail design — Kirill Petukhov' : 'Web development references — Kirill Petukhov');
  translate('meta[name="description"]', home ? (creative ? 'Visual concepts by Kirill Petukhov: video thumbnails and the TEAM KKLE project.' : 'Kirill Petukhov’s portfolio: web development, video thumbnail design and content experience.') : design ? 'Video thumbnail concepts tailored to a story, audience and channel, from the idea to the final visual.' : 'Third-party references for project scope: online retail, food delivery and a medical service. These websites are not Kirill Petukhov’s work.', 'content');
  translate('.brand strong', 'Portfolio');
  translate('.brand', home ? 'Back to top' : 'Home', 'aria-label');
  translate('.site-header nav', 'Main navigation', 'aria-label');
  translate('.site-header nav a', creative ? ['Home', 'Design', 'Dota 2 team', 'Contact'] : ['Home', 'Websites', 'Design', 'Dota 2 team', 'Contact']);
  translate('.header-contact', 'Get in touch');
  translate('.footer-label', document.body.classList.contains('sites-page') ? 'Have a website in mind? Let’s talk.' : 'Have a project in mind? Let’s talk.');
  translate('.footer-channel', ['Email', 'Telegram']);
  translate('.footer-bottom > span', ['© 2026 Kirill Petukhov', 'All rights reserved']);
  translate('.back-to-top', 'Back to top', 'aria-label');

  if (home) {
    translate('.hero-kicker', creative ? 'Thumbnails & esports design' : 'Web development & visual design');
    translate('#hero-title', creative ? 'My design portfolio' : 'My development & design portfolio');
    translate('.hero-description', creative ? 'I create video thumbnails and visual concepts for teams. I want each idea to be instantly clear and memorable.' : 'I build websites and create video thumbnails. I enjoy projects that bring together code, visuals and an understanding of what catches people’s attention.');
    translate('.hero-actions .button-primary', 'Explore my work');
    translate('.hero-actions .button-text', creative ? 'Video thumbnails' : 'Website references');
    translate('.work-section .eyebrow', 'Selected work');
    translate('#work-title', creative ? 'Thumbnails & esports' : 'Websites & design');
    translate('.work-section .section-heading > p', creative ? 'Nine thumbnail concepts for different stories and a visual identity concept for a Dota 2 team. Each explores an approach that can be developed around a specific brief.' : 'The third-party websites illustrate different project scopes. The thumbnails and TEAM KKLE are visual concepts that show my approach.');
    translate('.work-card-info > div > span', creative ? ['01 / Video thumbnails', '02 / Esports'] : ['01 / Website references', '02 / Video thumbnails', '03 / Esports']);
    translate('.work-card-info h3', creative ? ['Video thumbnails', 'TEAM KKLE'] : ['Websites built around your needs', 'Video thumbnails', 'TEAM KKLE']);
    translate('.work-card-info p', creative ? ['Nine visual approaches for different stories and formats.', 'Identity, match graphics and roster presentation for a Dota 2 team.'] : ['Three third-party examples with different scopes, visual approaches and features.', 'Nine visual approaches for different stories and formats.', 'A visual identity concept for a Dota 2 team: a website, match graphics and roster presentation.']);
    translate('.work-card', creative ? ['Explore video thumbnail concepts', 'Explore the TEAM KKLE Dota 2 concept'] : ['Explore third-party website references by project scope', 'Explore video thumbnail concepts', 'Explore the TEAM KKLE Dota 2 concept'], 'aria-label');
    translate('.work-art img', creative ? ['Thumbnail concept: Night in the House'] : ['Screenshot of the third-party website Atom’s Avenue', 'Thumbnail concept: Night in the House'], 'alt');
    translate('.team-preview-bottom', 'TEAM CONCEPT · 2026');
    translate('.about-heading .eyebrow', 'The person behind the projects');
    translate('#about-title', 'About me');
    translate('.about-heading p', creative ? 'I think about what viewers notice first and what makes them want to keep watching.' : 'I care about more than how a page is built. I also think about what makes people stay.');
    translate('.about-copy strong', 'I’m 18 and in my first year at university.');
    translate('.about-copy p', creative ? [
      'I learn a lot independently: I enjoy finding a new subject, trying things out and working at it until it clicks. I’ve been interested in games, video and how digital content works since childhood.',
      'I’ve run TikTok accounts, worked as a manager for content creators and edited video clips. That taught me how to catch attention in the first few seconds, keep viewers engaged and adapt content to different platforms. I bring that experience into my thumbnails and visuals.',
      'I enjoy challenging projects and the chance to try a new idea. I sometimes use AI tools to create a visual base, while making the concept, composition and final creative decisions myself. I’m available remotely or on site, and interested in teams and creators looking for their own visual identity.'
    ] : [
      'I’m studying Python and C++ and learning a lot independently. I enjoy exploring a new topic, putting it into practice and figuring things out for myself. Computers have been part of my life since childhood: games and curiosity about how things work led me to programming, design and my own projects.',
      'I’ve run TikTok accounts, worked as a manager for content creators and edited video clips. That taught me how to catch attention in the first few seconds, keep viewers engaged and adapt content to different platforms. I bring that experience into both design and development.',
      'I enjoy learning and working patiently through difficult problems. I use AI tools where they help speed up the process, while keeping the ideas, decisions and final checks in my own hands. I can work remotely or on site. I’m open to working with larger teams, especially on projects that offer room to explore a strong idea.'
    ]);
  }

  if (design) {
    translate('.design-hero .eyebrow', 'Design / Video thumbnails');
    translate('#design-title', 'Thumbnails that catch the eye.');
    translate('.design-hero p', 'A thumbnail starts working before anyone reads the video title. I look for one clear idea: who is at the centre, what is happening and why someone would want to watch. Then I build a composition that also reads well on a phone.');
    translate('.design-hero .button-primary', 'Let’s talk thumbnails');
    translate('.design-gallery .eyebrow', 'Concepts / 09');
    translate('#gallery-title', 'Thumbnail concepts');
    translate('.design-gallery .section-heading > p', 'Nine different stories and ways to catch attention. For your video, we’ll find an idea of its own rather than repeat an existing composition.');
    translate('.thumbnail-item figcaption span', ['01 / Storytelling', '02 / Adventure', '03 / Gaming', '04 / Entertainment', '05 / Lifestyle', '06 / Gaming story', '07 / Extreme challenge', '08 / GTA 5 RP', '09 / Popular science']);
    translate('.thumbnail-item figcaption strong', ['Night in the House', 'What’s Underground?', 'Higher FPS?', 'First Day on the Job', 'A Day at the Shelter', 'The Final Round', 'Hold On and It’s Yours!', 'From Zero to Car Tycoon', 'Who Creates Your Dreams?']);
    translate('.thumbnail-item img', ['Night in the House: a woman by a red door and neighbours in the windows', 'What’s Underground: three explorers opening a hatch in a forest', 'Gaming thumbnail with a presenter, an FPS counter and a character', 'A comedy scene about a first day at work and a burst pipe', 'A presenter playing with puppies at an animal shelter', 'An illustrated gaming thumbnail: a mage facing a knight', 'Contestants with a rope and a red supercar above a stormy sea', 'A character with car keys between an old car and a luxury dealership', 'A fictional presenter with a night-time city growing out of his head'], 'alt');
    translate('.thumbnail-item summary', 'Idea and process');
    translate('.thumbnail-item details p', [
      'The aim was to suggest tension straight away: what is happening in this house? I chose warm windows against a red door and placed the people so the main character draws the eye first. I used image generation for the visual, and adjusted the headline and overall composition for a small thumbnail.',
      'This needed a simple curiosity hook: the characters have found something the viewer can’t see yet. I built the scene around the hatch and the light below it, leaving the question in the headline. The image base was generated; I shaped the presentation and readability around the story.',
      'The goal was to show a settings test without making the cover look like a menu screenshot. I focused on the presenter’s reaction, with an FPS counter and a short headline beside him. I used a generated visual base and arranged the elements to make the idea clear on a phone.',
      'I wanted to show a comic mishap without a lengthy explanation. A person and a burst pipe take centre stage, while the background reaction helps tell the story. I used image generation for the visual and made sure the action and text didn’t compete for attention.',
      'For this story, a warm feeling mattered more than a loud headline. I put the person in the centre and kept enough surrounding detail to make the setting clear. I used a generated image base, then chose a calmer composition without unnecessary text.',
      'This concept centres on a tense gaming moment. I used two opposing characters, contrasting colours and a large headline to make the conflict clear. The image was generated; my decisions focused on the scene’s presentation and the arrangement of elements for a thumbnail.',
      'The aim is to show the challenge and the prize immediately: contestants hold a rope while a car hangs above the water. The concept draws on extreme entertainment shows, with a strong facial reaction, a tense scene and a short headline. AI generation was used to create a new story and fictional faces from visual references, without copying a specific thumbnail.',
      'The aim is to show a beginner’s journey to owning a car dealership in GTA 5 RP. An old car and luxury vehicles create a clear contrast, while the keys connect the character to the outcome. The thumbnail was AI-generated using gaming references, with a new face, story and headline. This is a fictional video concept, not a gameplay screenshot.',
      'The aim is to spark curiosity about dreams through one unusual image. A city of stairways growing out of a head represents a world built by the imagination. A large portrait and a short question keep the focus clear. The image and lettering were AI-generated using science-video references, with a new face and an original scene.'
    ]);
    translate('.experience-inner .eyebrow', 'How I work');
    translate('#experience-title', 'Behind each image:');
    translate('#experience-title span', 'experience across disciplines.');
    translate('.experience-copy p', [creative ? 'I started with design and video editing. I see a thumbnail as part of the video: what the viewer notices first matters, as does whether the video delivers on that expectation.' : 'I started with design and video editing, then moved into web development. That helps me look at the whole project: how it looks, what catches the eye first and how easy it is to use.', 'I use AI tools where they help me explore options faster and refine details. I make the decisions about the idea, composition and final quality myself, based on the brief rather than a ready-made template.']);
    translate('.experience-copy a', 'Tell me about your project');
  }

  if (document.body.classList.contains('sites-page')) {
    translate('.portfolio-title .eyebrow', 'References / Project scope');
    translate('.portfolio-title h1', 'A website built around your needs');
    translate('.section-lead', 'From a striking storefront to a service with several user journeys. These websites belong to other companies and illustrate possible project scopes. They are not my completed projects or ready-made templates.');
    translate('.title-note', 'A website tailored to your brief', 'aria-label');
    translate('.title-note > span', 'A tailored approach');
    translate('.title-note p', 'We’ll choose the structure, visual style and features around your product, starting with the journeys your customers need and adding what matters to them.');
    translate('.title-note a', 'Let’s talk websites');
    translate('.site-reference-card', ['Open Atom’s Avenue in a new tab', 'Open Dark Side in a new tab', 'Open Gemotest in a new tab'], 'aria-label');
    translate('.reference-shot img', ['Screenshot of the Atom’s Avenue homepage', 'Screenshot of the Dark Side website for Nizhny Novgorod', 'Screenshot of Gemotest’s health check programmes'], 'alt');
    translate('.reference-level', ['01 / Reference · Smaller scope', '02 / Reference · Medium scope', '03 / Reference · Larger scope']);
    translate('.reference-info h2', ['Atom’s Avenue', 'Dark Side', 'Gemotest']);
    translate('.reference-info p', ['A storefront with a bold product presentation, catalogue, search and shopping cart. A reference for showing a product range clearly and helping visitors move towards a purchase.', 'A food delivery website with a menu, offers, address selection and order tracking. A reference for a project that guides visitors from choosing an item to placing an order.', 'An example of a larger service with categories, health check programmes, search, a personal account and a cart. This scope calls for a well-planned structure and clear navigation.']);
    translate('.reference-link', 'Visit the original ↗');
    translate('.reference-outro p', 'Your business, visual style and feature list may be different. Tell me what you need, and I’ll suggest a website structure around those goals.');
    translate('.reference-outro a', 'Discuss your project ↗');
  }

  const switcher = document.createElement('div');
  switcher.className = 'portfolio-language';
  switcher.setAttribute('role', 'group');
  const buttons = ['ru', 'en'].map((lang) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.language = lang;
    button.lang = lang;
    button.textContent = lang.toUpperCase();
    button.setAttribute('aria-label', lang === 'ru' ? 'Русский' : 'English');
    button.addEventListener('click', () => setLanguage(lang));
    switcher.append(button);
    return button;
  });
  document.querySelector('.site-header').append(switcher);
  const links = [...document.querySelectorAll('a[href]')].filter((link) => {
    const href = link.getAttribute('href');
    return !/^(?:[a-z]+:|#|\/\/)/i.test(href) && new URL(href, location.href).pathname.endsWith('.html');
  });
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    translations.forEach((entry) => {
      if (entry.node) entry.node.textContent = entry[lang];
      else entry.element.setAttribute(entry.attribute, entry[lang]);
    });
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    switcher.setAttribute('aria-label', lang === 'en' ? 'Language' : 'Язык');
    try { localStorage.setItem('portfolioLanguage', lang); } catch (_) { /* URL links also preserve the choice. */ }
    links.forEach((link) => {
      const href = link.getAttribute('href');
      const url = new URL(href, location.href);
      url.searchParams.set('lang', lang);
      if (url.pathname.includes('/team-kkle/')) url.searchParams.set('from', creative ? 'creative' : 'main');
      link.setAttribute('href', href.split(/[?#]/)[0] + url.search + url.hash);
    });
    const url = new URL(location.href);
    url.searchParams.set('lang', lang);
    try { history.replaceState(null, '', url); } catch (_) { /* Some file previews disallow history changes. */ }
  }
  let saved;
  try { saved = localStorage.getItem('portfolioLanguage'); } catch (_) { /* Default to Russian without storage. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  setLanguage(['ru', 'en'].includes(requested) ? requested : saved === 'en' ? 'en' : 'ru');
})();
