// configService.js
export const configService = {
    baseURL: 'http://localhost:8080/dieta/api.php',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer YOUR_API_TOKEN'
    }
  };
  
  export function createRequest() {
    const xhr = new XMLHttpRequest();
    xhr.timeout = configService.timeout;
    //xhr.setRequestHeader('Content-Type', configService.headers['Content-Type']);
    //xhr.setRequestHeader('Authorization', configService.headers['Authorization']);
    return xhr;
  }
  