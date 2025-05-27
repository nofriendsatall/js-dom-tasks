export default () => {
  // BEGIN
    const handleTabSwitch = (event) => {
      const clickedTab = event.currentTarget;
      
      const navContainer = clickedTab.closest('.nav');
      const targetContent = document.querySelector(clickedTab.dataset.bsTarget);
      const tabContentContainer = targetContent?.closest('.tab-content');
  
      if (navContainer === null || tabContentContainer === null) 
        return;

      navContainer.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      
      tabContentContainer.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });

      clickedTab.classList.add('active');
      targetContent?.classList.add('active');
    };
  
    document.querySelectorAll('[data-bs-toggle="tab"], [data-bs-toggle="pill"]').forEach(tab => {
        tab.addEventListener('click', handleTabSwitch);
    });
    
  // END
};
