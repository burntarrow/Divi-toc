const settingsContent = {
  includePageTitle: {
    type: 'switch',
    label: 'Include page title',
    description: 'Add the current page or post title as the first TOC item.',
    default: false,
  },
  headingLevels: {
    type: 'multiple_checkboxes',
    label: 'Heading levels',
    description: 'Select which headings to include in the table of contents.',
    options: {
      h1: 'H1',
      h2: 'H2',
      h3: 'H3',
      h4: 'H4',
      h5: 'H5',
      h6: 'H6',
    },
    default: ['h2', 'h3', 'h4', 'h5'],
  },
  nested: {
    type: 'switch',
    label: 'Nested structure',
    description: 'Display headings in a nested hierarchy instead of a flat list.',
    default: true,
  },
};

export default settingsContent;
