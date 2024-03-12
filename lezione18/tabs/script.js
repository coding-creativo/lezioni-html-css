function showTab(tabId) {
    // Nascondi tutti i contenuti delle schede
    const tabContents = document.getElementsByClassName('tab-content');
    
    for (const content of tabContents) {
        content.classList.remove('active-tab');
    }

    // Mostra il contenuto della scheda selezionata
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');
}