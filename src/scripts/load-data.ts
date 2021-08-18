import {ClientStatus, IClient} from '../models/clients';

async function loadClient() {
  // Load client data here.
  const clientActive: IClient = {
    name: 'Activity works',
    id: '',
    secret: '',
    status: ClientStatus.active,
  };

  const clientInactive: IClient = {
    name: 'Inactivity here',
    id: '',
    secret: '',
    status: ClientStatus.inactive,
  };

  const clientDisabled: IClient = {
    name: 'Disabled',
    id: '',
    secret: '',
    status: ClientStatus.disabled,
  };
}

async function loadCountries() {
  // Load countries here.
}

async function loadUsers() {
  // Load users here.
}

async function loadData(): Promise<boolean> {
  return false;
}

loadData()
  .then((result: boolean) => {
    if (result) {
      console.log('Successfully completed');
    } else {
      console.error('Something bad happened. Data did not load.');
    }
  })
  .catch(err => {
    console.error(err);
  });
