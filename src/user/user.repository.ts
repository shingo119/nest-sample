import { EntityRepository } from "typeorm";


@EntityRepository(User)
export class UserRepository extends Repository<User> {