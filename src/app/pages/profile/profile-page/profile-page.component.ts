import { group } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/model/group';
import { Post } from 'src/app/model/post';
import User from 'src/app/model/user';
import { GroupService } from 'src/app/service/group/group.service';
import { LocalStorageService } from 'src/app/service/local-storage/local-storage.service';
import { PostService } from 'src/app/service/post/post.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  user!: User;
  posts!: Post[];
  userId!: number;
  groups: Group[] = [];
  isEditing!: boolean;
  createGroupForm: FormGroup;
  updateGroupFrom: FormGroup;
  editingId!: number;
  @Input() groupId!: number;
  @Input()group!: Group;

  constructor(
    private userService: UserService,
    private postService: PostService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private groupService: GroupService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { this.createGroupForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });
  this.updateGroupFrom = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required]
  });}

  ngOnInit() {
    this.getGroupsByUser();
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'));
    });
    this.user = JSON.parse(this.localStorageService.getItem('user'));
    this.postService.findAllPostsByUser(this.userId).subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }
  getGroupsByUser(){
    this.groupService.getUserGroups().subscribe((group) => (this.groups = group))
  }
  createGroup(): void {
    const name = this.createGroupForm.get('name')?.value;
    const description = this.createGroupForm.get('description')?.value;
    this.groupService.createGroup(name, description).subscribe(
      group => {
        console.log('Group created:', group);
        this.getGroupsByUser(); 
      },
      error => {
        console.log('An error occurred while creating the group:', error);
      }
    );
  }
  delete(id:number): void{
    
    this.groupService.deleteGroup(id).subscribe((deletedGroup: Group) =>{
      window.location.reload();
    },
   )
}
saveUpdate(){
  const name = this.updateGroupFrom.get('name')?.value;
  const description = this.updateGroupFrom.get('description')?.value;
  this.groupService.updateGroup({...this.group,name: name,description: description},this.editingId).subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
      
    }
  });
  this.isEditing =false;
  window.location.reload();

}
update(id:number): void{
  this.isEditing = true;
  this.editingId = id;
}
goToEdit(){
  this.router.navigate(["users/edit"])
}
}
