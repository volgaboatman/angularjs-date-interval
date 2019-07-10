import { ComponentFixture, TestBed } from 'angularjs-testbed';
import { DateIntervalComponent } from './date-interval.component';

describe('DateIntervalComponent', () => {
  let component: DateIntervalComponent;
  let fixture: ComponentFixture<DateIntervalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateIntervalComponent],
      providers: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateIntervalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
