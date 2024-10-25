// The code inside the Effect does not use any props or state, so your 
// dependency array is [] (empty). This tells React to only run this code
// when the component “mounts”, i.e. appears on the screen for the first time.

// React will call your cleanup function each time 
// before the Effect runs again, and one final time when 
// the component unmounts (gets removed). 

useEffect(() => {
    const connection = createConnection();
   connection.connect();
// функція cleanup
// вона крч над шоб ми не проібались:???
    return () => {
      connection.disconnect();
    };
  }, []);
/////////////////////////////////////////////////////////////

// це невірно воно два раза запустить коннектіон
//  а запустить воно його два раза через стрік мод реакста який дивиться
// щоб ми не забули відключити ту штуку яку ми тіпа включаємо нахой
import { useEffect } from 'react';
import { createConnection } from './chat.js';

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}
export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting...');
    },
    disconnect() {
      console.log('❌ Disconnected.');
    }
  };
}