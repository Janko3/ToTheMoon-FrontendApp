import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from 'src/app/model/group';
import { GroupService } from 'src/app/service/group/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit{
  groups: Group[] = [];
  createGroupForm: FormGroup;
  updateGroupFrom: FormGroup;
  @Input() groupId!: number;
  @Input()group!: Group;
  isEditing!: boolean;
  newGroup!: Group;
  editingId!: number;
  
  constructor(private groupService: GroupService,private formBuilder: FormBuilder) {
    this.createGroupForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.updateGroupFrom = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.getGroups();
    this.updateGroupFrom = this.formBuilder.group({
      name: [this.group.name],
      description: [this.group.description]
    })
    
    this.isEditing = false;
    this.newGroup = {...this.group}
  }

  getGroups(): void {
    this.groupService.getGroups().subscribe(
      groups => {
        this.groups = groups;
      },
      error => {
        console.log('An error occurred while geting groups:', error);
      }
    );
  }

  createGroup(): void {
    const name = this.createGroupForm.get('name')?.value;
    const description = this.createGroupForm.get('description')?.value;
    this.groupService.createGroup(name, description).subscribe(
      group => {
        console.log('Group created:', group);
        this.getGroups(); 
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
}
