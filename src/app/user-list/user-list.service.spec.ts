import { WebStorageService } from './../services/web-storage.service';
import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list.service';

describe('User List Service', () => {
  let service: UserListService;

  beforeEach(() => {
    service = new UserListService();
  });

  it('should return a User List with 16 users', (done: DoneFn) => {
   service.getAll().then((response)=>{
    expect(response.length).toBe(16);
    done();
   })
  },// this sets timeout to 2 seconds
   2000);
});
