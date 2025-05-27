export default () => {
  // BEGIN
  let alertCounter = 1; 

  const generateButton = document.getElementById('alert-generator');
  const alertsContainer = document.querySelector('.alerts');

  generateButton.onclick = (() => {
    const newAlert = document.createElement('div');
    newAlert.className = 'alert alert-primary';
    newAlert.textContent = `Alert ${alertCounter}`;
    
    alertsContainer.prepend(newAlert);
    
    alertCounter++; 
  });
  // END
};