export class SignInRequestDto{
    password: string = '';
    userName: string = '';
}
export class SignUpRequestDto extends SignInRequestDto {
    email: string = '';
    firstName: string = '';
    lastName: string = '';
}
