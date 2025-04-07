document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var age = document.getElementById('age').value.trim();
    var errorDiv = document.getElementById('error');
  
    if (!name || !email || !age) {
      errorDiv.textContent = 'Please fill out all fields.';
      return ;
    }
    const formData = { name, email, age };
    localStorage.setItem('formData', JSON.stringify(formData));
  
    window.location.href = 'Form.html';
  });
  