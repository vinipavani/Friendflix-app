import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FriendflixHomePage } from './friendflix-home.page';

describe('FriendflixHomePage', () => {
  let component: FriendflixHomePage;
  let fixture: ComponentFixture<FriendflixHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendflixHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FriendflixHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
