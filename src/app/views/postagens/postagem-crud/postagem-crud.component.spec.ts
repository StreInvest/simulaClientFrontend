import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemCrudComponent } from './postagem-crud.component';

describe('PostagemCrudComponent', () => {
  let component: PostagemCrudComponent;
  let fixture: ComponentFixture<PostagemCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
