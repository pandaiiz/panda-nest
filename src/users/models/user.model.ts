import { Post } from '../../posts/models/post.model';
import { Role } from '@prisma/client';

export class User {
  id?: string;
  account?: string;

  firstname?: string;

  lastname?: string;

  role: Role;

  posts?: [Post] | null;

  password: string;

  permissions?: string;

  name?: string;

  avatar?: string;

  email?: string;

  job?: string;

  jobName?: string;

  organization?: string;

  organizationName?: string;

  location?: string;

  locationName?: string;

  introduction?: string;

  personalWebsite?: string;
  verified?: boolean;
  phoneNumber?: string;
  accountId?: string;
  registrationTime?: string;
}
