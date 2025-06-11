document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  const certsModal = document.getElementById("certs-modal");
  const viewCertsLink = document.getElementById("view-certs-link");
  const modalCloseBtn = document.getElementById("modal-close");
  const stickyHeader = document.getElementById("sticky-header");
  const mainHeader = document.getElementById("main-header");
  const contentArea = document.querySelector(".content-area");

  // --- Dark Mode Toggle ---
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // --- Certification Modal ---
  const openModal = () => certsModal.classList.add("active");
  const closeModal = () => certsModal.classList.remove("active");

  viewCertsLink.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
  modalCloseBtn.addEventListener("click", closeModal);
  certsModal.addEventListener("click", (e) => {
    if (e.target === certsModal) {
      closeModal();
    }
  });

  // --- Smooth Scrolling ---
  document
    .querySelectorAll(".sidebar nav a:not(#view-certs-link)")
    .forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const targetPosition =
            targetElement.offsetTop - stickyHeader.offsetHeight;
          contentArea.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

  // --- Intersection Observer for Sticky Header ---
  const stickyObserver = new IntersectionObserver(
    ([entry]) => {
      stickyHeader.classList.toggle("visible", !entry.isIntersecting);
    },
    { root: contentArea, threshold: [0] }
  );

  if (mainHeader) {
    stickyObserver.observe(mainHeader);
  }

  // --- Intersection Observer for Fade-in Animation ---
  const fadeInSections = document.querySelectorAll(".fade-in-section");
  const fadeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: contentArea, threshold: 0.1 }
  );

  fadeInSections.forEach((section) => fadeObserver.observe(section));

  // --- Show Recent GitHub Push ---
  const githubUsername = "itsmohitkr";
  const githubPushContainer = document.getElementById("github-recent-push");

  if (githubPushContainer) {
    fetch(`https://api.github.com/users/${githubUsername}/events/public`)
      .then((res) => res.json())
      .then((events) => {
        const pushEvent = events.find((e) => e.type === "PushEvent");
        if (pushEvent) {
          const repoName = pushEvent.repo.name;
          const commitMsg = pushEvent.payload.commits[0]?.message || "No message";
          const commitUrl = `https://github.com/${repoName}/commit/${pushEvent.payload.commits[0]?.sha}`;
          githubPushContainer.innerHTML = `
            <div class="recent-github-push">
              <strong>Recent GitHub Push:</strong>
              <a href="https://github.com/${repoName}" target="_blank">${repoName}</a><br>
              <a href="${commitUrl}" target="_blank">${commitMsg}</a>
              <span style="color:#888; font-size:0.9em;"> (${new Date(pushEvent.created_at).toLocaleString()})</span>
            </div>
          `;
        } else {
          githubPushContainer.textContent = "No recent push events found.";
        }
      })
      .catch(() => {
        githubPushContainer.textContent = "Unable to fetch recent push.";
      });
  }

  // --- Certification image enlarge logic ---
  const certImages = document.querySelectorAll('.cert-img');
  const enlargedModal = document.getElementById('enlarged-img-modal');
  const enlargedImg = document.getElementById('enlarged-img');
  const enlargedClose = document.getElementById('enlarged-img-close');

  certImages.forEach(img => {
    img.addEventListener('click', () => {
      enlargedImg.src = img.src;
      enlargedImg.alt = img.alt;
      enlargedModal.style.display = 'flex';
    });
  });

  enlargedClose.addEventListener('click', () => {
    enlargedModal.style.display = 'none';
    enlargedImg.src = '';
  });

  enlargedModal.addEventListener('click', (e) => {
    if (e.target === enlargedModal) {
      enlargedModal.style.display = 'none';
      enlargedImg.src = '';
    }
  });
});
