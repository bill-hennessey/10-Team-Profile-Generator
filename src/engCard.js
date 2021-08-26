const engCard = (eng) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${eng.empFirstName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${eng.role}</h6>
    <p class="card-text">ID: ${eng.empID}</p>
    <p class="card-text">Email: ${eng.empEmail}</p>
    <p class="card-text">GitHub Username: ${eng.github}</p>
    
  </div>
</div>
  `;
};

// for(let i = 0; i < teamArray.length; i++) {
//     if
// }

module.exports = engCard;
