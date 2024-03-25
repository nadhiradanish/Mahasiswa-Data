let isDarkTheme = localStorage.getItem('isDarkTheme');

if (isDarkTheme === null) {
  isDarkTheme = 'false';
}

if (isDarkTheme === 'true') {
  document.body.classList.add('dark-theme');
}

$('[name="theme"]').on('change', function() {
  let isDarkTheme = $(this).val() === 'dark-theme';

  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('isDarkTheme', 'true');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('isDarkTheme', 'false');
  }
});
function toggleTheme() {
    if ($('[name="theme"]').is(':checked')) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('isDarkTheme', 'true');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('isDarkTheme', 'false');
    }
  }
  
