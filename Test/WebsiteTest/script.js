function fadeOutAside() {
    var aside = document.getElementById('aside');
    aside.classList.add('fade-out');
    setTimeout(function() {
      aside.style.display = 'none'; // Hide the aside after animation
      document.getElementById('b').style.display = 'block'; // Show the 'Show' button
    }, 500); // Duration of fade-out animation in milliseconds
  }
  
  function fadeInAside() {
    var aside = document.getElementById('aside');
    aside.style.display = 'block'; // Show the aside
    aside.classList.remove('fade-out'); // Remove the fade-out class
    document.getElementById('b').style.display = 'none'; // Hide the 'Show' button
  }

  