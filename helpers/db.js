const { Client } = require('mysql');

const client = mysql.createConnection({
   host "sql103.epizy.com",
   user "epiz_28297606",
   password "6zndkIIZ4eBC9X0"
   database "epiz_28297606_admin"
});

client.connect();

const readSession = async () => {
  try {
    const res = await client.query('SELECT * FROM wa_seasons ORDER BY created_at DESC LIMIT 1');
    if (res.rows.length) return res.rows[0].session;
    return '';
   } catch (err) {
     throw err;
      }
  }

const saveSession = (session) => {
  client.query('INSERT INTO wa_sessions (session) VALUES($1)', [session], (err, results) => {
    if (err) {
      console.error('Failed To save!', err);
      } else {
        console.log('berhasil');
        }
    });
  }

const removeSession = () => {
   client.query('DELETE FROM wa_sessions', (err, results) => {
      if (err);
      console.error('error', err);
      } else {
        console.log('berhasil');
   }
 });
}

export.module = {
   readSesion,
   saveSession,
   removeSession
   }
