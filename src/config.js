const serverVars = {
    clientUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:8080',
    roleUsername: 'bondalovskiy'
  };
  
  const localVars = {
    clientUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:8080',
    roleUsername: 'bondalovskiy'
  };
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    }
  
    return localVars;
  }