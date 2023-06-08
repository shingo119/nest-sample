import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    type: 'smallint',
    comment: 'ID',
  })
  readonly id: number;

  @Column('varchar', { comment: '名前' })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'メールアドレス',
  })
  email: string;

  @CreateDateColumn({ comment: '登録日' })
  readonly created_at?: Timestamp;

  @UpdateDateColumn({ comment: '最終更新日' })
  readonly updated_at?: Timestamp;
}
