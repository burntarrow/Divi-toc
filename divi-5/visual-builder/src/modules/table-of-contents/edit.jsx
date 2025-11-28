import React from 'react';

const Edit = ({ attrs = {} }) => {
  const headingLevels = attrs.headingLevels ?? [];
  const includePageTitle = Boolean(attrs.includePageTitle);
  const nested = attrs.nested !== false;

  return (
    <div className="divi-toc-builder" aria-label="Table of contents">
      <strong>Divi TOC</strong>
      <p>This is the TOC module placeholder in the Visual Builder.</p>
      <ul>
        <li>
          Include page title: <strong>{includePageTitle ? 'Yes' : 'No'}</strong>
        </li>
        <li>
          Heading levels: <strong>{headingLevels.join(', ') || 'None selected'}</strong>
        </li>
        <li>
          Structure: <strong>{nested ? 'Nested' : 'Flat'}</strong>
        </li>
      </ul>
    </div>
  );
};

export default Edit;
