const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(event) {
    // Hide all tab panels
    tabPanels.forEach((tabPanel) => (tabPanel.hidden = true));
    // mark all tabs as unselected
    tabButtons.forEach((tabButton) =>
        tabButton.setAttribute('aria-selected', false)
    );
    // mark the clicked  tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it
    // Method 1
    const { id } = event.currentTarget;
    // const tab = document.querySelector(`[aria-labelledby=${id}]`);
    // tab.hidden = false;

    const tabPanelArr = [...tabPanels];
    const tabby = tabPanelArr.find(
        (panel) => panel.getAttribute('aria-labelledby') === id
    );
    tabby.hidden = false;
}

tabButtons.forEach((button) =>
    button.addEventListener('click', handleTabClick)
);
