interface IUserAuthenticator {
  authenticate(username: string, password: string): boolean;
}
