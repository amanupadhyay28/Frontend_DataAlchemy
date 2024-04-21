import PostgreSql from '../../assets/PostGres.png';
import MongoDbIcon from '../../assets/Mongo.png';
import sqlIcon from '../../assets/Sql.png';

import firebase from '../../assets/firebase.png';
import neo4j from '../../assets/neo5j.png';
import cassandra from '../../assets/cassandra.png';
import couchbase from '../../assets/couchbase.png';
import oracle from '../../assets/oracle.png';
import sqlServer from '../../assets/microsoftSql.png';
const databaseData = [
    {
      id: 1,
      name: "PostgreSQL",
      icon: PostgreSql,
      isConnected: false,
    },
    {
      id: 2,
      name: "MongoDB",
      icon: MongoDbIcon,

      isConnected: true,
    },
    {
      id: 3,
      name: "MySQL",
      icon: sqlIcon,
      isConnected: false,
    },
    
    {
      id: 5,
      name: "Microsoft SQL Server",
      icon: sqlServer,
      isConnected: false,
    },
    {
      id: 6,
      name: "Oracle",
      icon: oracle,
      isConnected: false,
    },
    {
      id: 7,
      name: "Cassandra",
      icon: cassandra,
      isConnected: true,
    },
    {
      id: 8,
      name: "Firebase",
      icon: firebase,
      isConnected: false,
    },
   
    {
      id: 10,
      name: "Couchbase",
      icon: couchbase,
      isConnected: true,
    },
    // Add more database objects here with their respective icons
  ];
  export default databaseData;