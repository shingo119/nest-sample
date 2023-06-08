import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: '名前は必須です。' })
  @MaxLength(20, { message: '名前は20文字以内で入力してください。' })
  name: string;

  @IsNotEmpty({ message: 'メールアドレスは必須です。' })
  @MaxLength(255, {
    message: 'メールアドレスは255文字以内で入力してください。',
  })
  email: string;
}
