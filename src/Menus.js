import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import HomeIcon from 'material-ui-icons/Home';
import AssignmentIcon from 'material-ui-icons/Assignment';
import FlagIcon from 'material-ui-icons/Flag';
import AccountIcon from 'material-ui-icons/SupervisorAccount';
import KeyIcon from 'material-ui-icons/VpnKey';
import HelpIcon from 'material-ui-icons/Help';
import ChartIcon from 'material-ui-icons/InsertChart';
import SettingIcon from 'material-ui-icons/Settings';

export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FlagIcon />
      </ListItemIcon>
      <ListItemText primary="Partidos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountIcon />
      </ListItemIcon>
      <ListItemText primary="Candidatos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Escaños" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <KeyIcon />
      </ListItemIcon>
      <ListItemText primary="Generar claves" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Preguntas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ChartIcon />
      </ListItemIcon>
      <ListItemText primary="Estadisticas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingIcon />
      </ListItemIcon>
      <ListItemText primary="Configuraciones" />
    </ListItem>
  </div>
);
