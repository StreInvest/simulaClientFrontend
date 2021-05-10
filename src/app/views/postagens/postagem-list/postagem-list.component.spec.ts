import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostagemListComponent } from './postagem-list.component';

describe('PostagemListComponent', () => {
  let component: PostagemListComponent;
  let fixture: ComponentFixture<PostagemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostagemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
