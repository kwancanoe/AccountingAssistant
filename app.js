$(document).ready(function() {
  // Data is imported from data.js

  function resetAndHideDropdowns(startingLevel) {
      // Reset the next dropdown and hide all subsequent dropdowns
      for (let i = startingLevel + 1; i <= 6; i++) {
          $('#level' + i).html('');  // Clear the dropdown menu
          $('#level' + i + 'Btn').text('Select Level ' + i).prop('disabled', true).closest('.dropdown-group').hide();  // Hide the button and reset text
      }
  }

  function populateDropdown(level, parentId) {
      const dropdownMenu = $('#level' + level);
      const dropdownButton = $('#level' + level + 'Btn');
      dropdownMenu.html('');  // Reset dropdown content

      // Handle Level 1 which has no parentId
      let levelData;
      if (level === 1) {
          levelData = data['level1'];  // Level 1 does not have parentId
      } else {
          levelData = data['level' + level].filter(item => item.parentId === parentId);
      }

      // Populate the dropdown with filtered data
      if (levelData.length > 0) {
          levelData.forEach(function(option) {
              dropdownMenu.append('<li><a class="dropdown-item" href="#">' + option.data + '</a></li>');
          });

          // Enable and show the dropdown button
          dropdownButton.prop('disabled', false).closest('.dropdown-group').show();
      } else {
          // If there is no data for this level, hide the dropdown
          dropdownButton.prop('disabled', true).closest('.dropdown-group').hide();
      }

      // Handle click events for the dropdown items
      dropdownMenu.find('a').click(function() {
          const selectedText = $(this).text();
          dropdownButton.text(selectedText);  // Update button text
          dropdownMenu.removeClass('show');  // Close the dropdown after selection

          // Populate the next level based on the selected option
          const selectedOption = levelData.find(item => item.data === selectedText);
          if (selectedOption) {
              resetAndHideDropdowns(level);  // Reset the next dropdown and hide subsequent ones
              populateDropdown(level + 1, selectedOption.id);  // Populate the next level
          }
      });
  }

  // Initially hide all dropdowns except the first level
  resetAndHideDropdowns(1);  // Hide all except level 1
  $('#level1').closest('.dropdown-group').show();  // Level 1 is always visible

  // Initialize first level
  populateDropdown(1, null);  // Level 1 doesn't need a parentId, so we pass null

  // Handle changes for each level
  $('#level1').on('click', 'a', function() {
      var selected = $(this).text();
      if (selected) {
          resetAndHideDropdowns(1);  // Reset all dropdowns below level 1
          populateDropdown(2, 1);  // Populate level 2 based on selected ID
      }
  });
});
