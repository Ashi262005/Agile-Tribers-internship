const studentInput = document.getElementById('studentInput');
const addBtn = document.getElementById('addBtn');
const studentList = document.getElementById('studentList');
const studentCount = document.getElementById('studentCount');
const clearAllBtn = document.getElementById('clearAllBtn');
const searchInput = document.getElementById('searchInput');

let count = 0;

const addStudent = () => {
  const name = studentInput.value.trim();
  if (!name) {
    alert('Please enter a valid name.');
    return;
  }

  const li = document.createElement('li');
  li.setAttribute('draggable', 'true');
  li.innerHTML = `
    <span class="student-name">${name}</span>
    <span>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </span>
  `;

  studentList.appendChild(li);
  studentInput.value = '';
  updateCount(1);
};


const updateCount = (delta) => {
  count += delta;
  studentCount.textContent = `Total Students: ${count}`;
};


clearAllBtn.addEventListener('click', () => {
  studentList.innerHTML = '';
  count = 0;
  updateCount(0);
});


studentList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (e.target.classList.contains('delete')) {
    li.remove();
    updateCount(-1);
  } else if (e.target.classList.contains('edit')) {
    const nameSpan = li.querySelector('.student-name');
    const newName = prompt('Edit name:', nameSpan.textContent);
    if (newName && newName.trim()) {
      nameSpan.textContent = newName.trim();
    }
  }
});


searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  [...studentList.children].forEach(li => {
    const name = li.querySelector('.student-name').textContent.toLowerCase();
    li.style.display = name.includes(query) ? '' : 'none';
  });
});


let dragSrc = null;

studentList.addEventListener('dragstart', (e) => {
  dragSrc = e.target;
  e.target.classList.add('dragging');
});

studentList.addEventListener('dragend', (e) => {
  e.target.classList.remove('dragging');
});

studentList.addEventListener('dragover', (e) => {
  e.preventDefault();
  const draggingOver = [...studentList.children].find(li => {
    const rect = li.getBoundingClientRect();
    return e.clientY < rect.top + rect.height / 2;
  });
  if (draggingOver && dragSrc !== draggingOver) {
    studentList.insertBefore(dragSrc, draggingOver);
  } else {
    studentList.appendChild(dragSrc);
  }
});
addBtn.addEventListener('click', addStudent);
