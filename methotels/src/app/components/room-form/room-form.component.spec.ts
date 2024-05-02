import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomAddComponent } from './room-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Room } from '../../models/room.model';

describe('RoomAddComponent', () => {
  let component: RoomAddComponent;
  let fixture: ComponentFixture<RoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomAddComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.roomForm.valid).toBeFalsy();
  });

  it('id field validity', () => {
    let id = component.roomForm.controls['id'];
    expect(id.valid).toBeFalsy();
    id.setValue('');
    expect(id.hasError('required')).toBeTruthy();
  });
});
