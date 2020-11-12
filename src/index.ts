import {app} from './server/server'
import {AddressInfo} from 'net'

console.log('Lunch backend app');

const server = app.listen(8099, '0.0.0.0', () => {
  const {port, address} = server.address() as AddressInfo;
  console.log('Server listening on:','http://' + address + ':'+port);
});
