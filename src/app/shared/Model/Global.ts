
export class Global {
  public static BaseUri = 'https://localhost:44393/api/';

  public static getToken(): string {
      const currentUser = localStorage.getItem('isRemember');
      if (currentUser === 'true') {
          return localStorage.getItem('token').toString();
      } else {
        return sessionStorage.getItem('token').toString();
      }
  }

  public static getUser(): string {
    const currentUser = localStorage.getItem('isRemember');
    if (currentUser === 'true') {
        return localStorage.getItem('userid').toString();
    } else {
      return sessionStorage.getItem('userid').toString();
    }
}
}





