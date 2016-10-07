import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { User } from './user';

@Injectable()
export class UserResolveService implements Resolve<User> {

    constructor(private service: AuthorizationService) {
    }

    public resolve(route: ActivatedRouteSnapshot): Promise<User>|Promise<boolean> {
        return this.service.getUserData()
            .toPromise()
            .then((user: User) => {
                if (user) {
                    return user;
                } else {
                    return false;
                }
            });
    }
}
