  function myFunction() {
    const x = document.getElementById('nav-links');
    const y = document.getElementById('open-outline');
    const z = document.getElementById('close-outline');

    if (x.style.display == 'flex') {
      x.style.display = 'none';
      y.style.display = 'block';
      z.style.display = 'none';


    } else {
      x.style.display = 'flex';
      y.style.display = 'none';
      z.style.display = 'block';

    }

  }
