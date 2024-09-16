$(document).ready(function() {
    // Map the level data arrays directly from data.js
    const levels = {
        1: level1,
        2: level2,
        3: level3,
        4: level4,
        5: level5,
        6: level6
    };

    // Map the corresponding data tables
    const levelDataTables = {
        1: level1Data,
        2: level2Data,
        3: level3Data,
        4: level4Data,
        5: level5Data,
        6: level6Data
    };

    function resetAndHideDropdowns(startingLevel) {
        // Reset the next dropdown and hide all subsequent dropdowns
        for (let i = startingLevel + 1; i <= 6; i++) {
            $('#level' + i).html('');  // Clear the dropdown menu
            $('#level' + i + 'Btn').text('Select Level ' + i).prop('disabled', true).closest('.dropdown-group').hide();  // Hide the button and reset text
        }
    }

    function populateDropdown(level, parentIds) {
        const dropdownMenu = $('#level' + level);
        const dropdownButton = $('#level' + level + 'Btn');
        dropdownMenu.html('');  // Clear dropdown content

        // Stop further dropdown population if we've reached Level 6
        if (level > 6) {
            return;  // Do nothing if there is no more level to populate
        }

        let levelData;
        if (level === 1) {
            levelData = levels[1];  // Use level1 data directly
        } else {
            // Filter the data based on parent IDs
            levelData = levels[level].filter(item => {
                return (!parentIds.level1Id || item.level1Id === parentIds.level1Id) &&
                       (!parentIds.level2Id || item.level2Id === parentIds.level2Id) &&
                       (!parentIds.level3Id || item.level3Id === parentIds.level3Id) &&
                       (!parentIds.level4Id || item.level4Id === parentIds.level4Id) &&
                       (!parentIds.level5Id || item.level5Id === parentIds.level5Id);
            });
        }

        // Populate the dropdown with filtered data
        if (levelData.length > 0) {
            levelData.forEach(function(option) {
                // Use the dataId to retrieve the actual data from the respective data table
                const dataItem = levelDataTables[level].find(data => data.id === option.dataId);
                dropdownMenu.append('<li><a class="dropdown-item" href="#">' + dataItem.data + '</a></li>');
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

            // Find the selected option using dataId
            const selectedOption = levelData.find(option => {
                const dataItem = levelDataTables[level].find(data => data.id === option.dataId);
                return dataItem.data === selectedText;
            });

            if (selectedOption) {
                resetAndHideDropdowns(level);  // Reset the next dropdown and hide subsequent ones

                // Populate the next level with updated parent IDs
                const newParentIds = {
                    level1Id: parentIds.level1Id || selectedOption.id,
                    level2Id: level === 2 ? selectedOption.id : parentIds.level2Id,
                    level3Id: level === 3 ? selectedOption.id : parentIds.level3Id,
                    level4Id: level === 4 ? selectedOption.id : parentIds.level4Id,
                    level5Id: level === 5 ? selectedOption.id : parentIds.level5Id
                };

                // Populate the next level dropdown based on the selected item
                populateDropdown(level + 1, newParentIds);
            }
        });
    }

    // Initially hide all dropdowns except the first level
    resetAndHideDropdowns(1);  // Hide all except level 1
    $('#level1').closest('.dropdown-group').show();  // Level 1 is always visible

    // Initialize first level by populating Level 1
    populateDropdown(1, {});  // Pass empty object as Level 1 has no parent

    // Handle changes for each level
    $('#level1').on('click', 'a', function() {
        const selectedLevel1 = $(this).text();
        const selectedOption = level1.find(item => {
            const dataItem = level1Data.find(data => data.id === item.dataId);
            return dataItem.data === selectedLevel1;
        });

        if (selectedOption) {
            resetAndHideDropdowns(1);  // Reset all dropdowns below level 1
            populateDropdown(2, { level1Id: selectedOption.id });  // Populate level 2 based on selected Level 1 ID
        }
    });
});
