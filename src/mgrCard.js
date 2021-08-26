const mgrCard = (mgr) => {
  return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${mgr.mgrName}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${mgr.role}</h6>
    <p class="card-text">ID: ${mgr.mgrID}</p>
    <p class="card-text">Email: ${mgr.mgrEmail}</p>
    <p class="card-text">Office Number: ${mgr.mgrOfficeNum}</p>
    
  </div>
</div>
  
 `;
};

module.exports = mgrCard;
