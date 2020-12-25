import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBaby,
  faCrutch,
  faBuilding,
  faSchool,
  faEdit,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab, faBaby, faCrutch, faBuilding, faSchool, faEdit, faEdit, faBullhorn, faMapMarkerAlt, faPhone, faPaperPlane);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
