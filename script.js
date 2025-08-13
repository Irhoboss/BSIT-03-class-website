// Basic interactivity
document.addEventListener('DOMContentLoaded', () => {
  // simple active nav highlighting based on pathname
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if (
      a.getAttribute('href') === window.location.pathname.split('/').pop() ||
      (a.getAttribute('href') === 'index.html' && window.location.pathname.endsWith('/'))
    ) {
      a.classList.add('active');
    }
  });

  // click roster items
  document.querySelectorAll('.roster-list li').forEach(li => {
    li.addEventListener('click', () => {
      alert(`${li.textContent.trim()} — contact info is still on going wait for further update.`);
    });
  });

  // simple log
  console.log('BSIT 1203 site loaded');

  // Hamburger menu toggle (mobile only)
  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');

  if (hamburger && sidebar) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  // Start updating date
  updateDate();
});

// Function to update date
function updateDate() {
  const dateElement = document.getElementById('currentDate');
  const now = new Date();

  // Format options for the date
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  // Display the formatted date
  if (dateElement) {
    dateElement.textContent = now.toLocaleDateString('en-US', options);
  }

  // Update to next day at midnight
  const msUntilMidnight =
    (24 * 60 * 60 * 1000) -
    (now.getHours() * 60 * 60 * 1000 +
     now.getMinutes() * 60 * 1000 +
     now.getSeconds() * 1000 +
     now.getMilliseconds());

  setTimeout(updateDate, msUntilMidnight);
}
