import { registerComponent } from 'meteor/vulcan:core';
import React from 'react';
import { FormattedMessage } from 'meteor/vulcan:i18n';

const Footer = () => (
  <div className="footer">
    <a href="http://vulcanjs.org" target="_blank">
      <FormattedMessage id="app.powered_by" />
    </a>
  </div>
);

Footer.displayName = 'Footer';

registerComponent({ name: 'Footer', component: Footer });
