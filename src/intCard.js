const intCard = (int) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${int.empFirstName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${int.role}</h6>
    <p class="card-text">ID: ${int.empID}</p>
    <p class="card-text">Email: ${int.empEmail}</p>
    <p class="card-text">GitHub Username: ${int.github}</p>
    
  </div>
</div>
  `;
};

// for(let i = 0; i < teamArray.length; i++) {
//     if
// }

module.exports = intCard;
